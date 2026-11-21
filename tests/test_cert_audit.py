from __future__ import annotations

import json
import tempfile
import unittest
from pathlib import Path

from scripts.cert_audit.config import AuditConfig, ObsoletePattern, ScraperConfig, load_config
from scripts.cert_audit.context_builder import build_ai_context, extract_relevant_excerpt
from scripts.cert_audit.parser import Question, parse_balotarios
from scripts.cert_audit.rules import (
    answer_letters,
    audit_question,
    content_keywords,
    is_allowed_domain,
)
from scripts.cert_audit.scraper import SourceResult, clean_html, normalize_url
from scripts.cert_audit.state import (
    flag_for_review,
    get_review_reason,
    load_json,
    mark_verified,
    save_json,
    select_question_ids,
)


class TestConfig(unittest.TestCase):
    def test_load_config_valid(self):
        with tempfile.TemporaryDirectory() as tmpdir:
            d = Path(tmpdir)
            cfg_file = d / "audit-config.json"
            cfg_file.write_text(json.dumps({
                "cert_id": "test-cert",
                "name": "Test Certification",
                "allowed_domains": ["example.com"],
                "obsolete_patterns": [
                    {"pattern": "obsolete_term", "message": "Term is obsolete", "severity": "high"}
                ],
            }))

            cfg = load_config(d)
            self.assertEqual(cfg.cert_id, "test-cert")
            self.assertEqual(cfg.name, "Test Certification")
            self.assertEqual(cfg.allowed_domains, ["example.com"])
            self.assertEqual(len(cfg.obsolete_patterns), 1)
            self.assertEqual(cfg.obsolete_patterns[0].pattern, "obsolete_term")
            self.assertEqual(cfg.obsolete_patterns[0].severity, "high")

    def test_load_config_missing_raises(self):
        with tempfile.TemporaryDirectory() as tmpdir:
            with self.assertRaises(FileNotFoundError):
                load_config(tmpdir)


class TestParser(unittest.TestCase):
    def test_parse_sample_markdown(self):
        sample = """# Balotario 1

Pregunta 1
¿Cuál es la función principal de un MCP Server?
A. Proveer herramientas y recursos
B. Compilar código en C++
C. Almacenar cookies en el navegador
D. Reemplazar la GPU del equipo
Respuesta correcta: A
Explicación
El MCP Server provee herramientas y recursos al cliente según la especificación abierta.
Fuente oficial: [MCP Server Docs](https://modelcontextprotocol.io/docs/learn/server-concepts)

Pregunta 2
¿Cuáles opciones son correctas?
A. Opción alfa
B. Opción beta
C. Opción gamma
Respuesta correcta: A y B
Explicación
Ambas opciones alfa y beta son correctas.
Fuente oficial: [Alpha Beta Docs](https://example.com/docs)
"""
        with tempfile.TemporaryDirectory() as tmpdir:
            p = Path(tmpdir) / "balotarios.md"
            p.write_text(sample, encoding="utf-8")

            questions = parse_balotarios(p, "test-cert")
            self.assertEqual(len(questions), 2)

            q1 = questions["test-cert-balotario-1-1"]
            self.assertEqual(q1.balotario, 1)
            self.assertEqual(q1.number, 1)
            self.assertIn("MCP Server", q1.question)
            self.assertEqual(len(q1.options), 4)
            self.assertEqual(q1.answer, "A")
            self.assertEqual(q1.source_url, "https://modelcontextprotocol.io/docs/learn/server-concepts")
            self.assertTrue(len(q1.content_hash) == 64)

            q2 = questions["test-cert-balotario-1-2"]
            self.assertEqual(q2.answer, "A y B")
            self.assertEqual(len(q2.options), 3)


class TestScraper(unittest.TestCase):
    def test_normalize_url(self):
        self.assertEqual(normalize_url("https://www.Example.com/path#fragment"), "https://example.com/path")
        self.assertEqual(normalize_url("HTTP://DOCS.GITHUB.COM/en/copilot/"), "http://docs.github.com/en/copilot/")

    def test_clean_html_semantic_extraction(self):
        html_doc = """<!DOCTYPE html>
<html>
<head><title>Documentation</title></head>
<body>
<nav class="site-nav"><a href="/">Home</a><a href="/docs">Docs</a></nav>
<header class="page-header"><h1>Banner Header</h1></header>
<main id="main-content">
  <h1>Model Context Protocol</h1>
  <p>The Model Context Protocol (MCP) is an open standard for connecting AI models to tools.</p>
  <p>It supports stdio and SSE transports.</p>
</main>
<footer class="footer"><p>Copyright 2026</p></footer>
</body>
</html>"""
        clean, digest = clean_html(html_doc)
        self.assertIn("Model Context Protocol", clean)
        self.assertIn("stdio and SSE transports", clean)
        self.assertNotIn("Banner Header", clean)
        self.assertNotIn("Copyright", clean)
        self.assertNotIn("Home", clean)
        self.assertEqual(len(digest), 64)


class TestRules(unittest.TestCase):
    def setUp(self):
        self.config = AuditConfig(
            cert_id="test",
            name="Test",
            cert_dir=Path("/tmp"),
            allowed_domains=["github.com", "learn.microsoft.com"],
            obsolete_patterns=[
                ObsoletePattern(pattern=r"(?i)\bknowledge base\b", message="Knowledge Base es obsoleta", severity="medium")
            ],
            generic_patterns=["en el contexto de esta pregunta"],
        )

    def test_answer_letters(self):
        self.assertEqual(answer_letters("A"), {"A"})
        self.assertEqual(answer_letters("A y B"), {"A", "B"})
        self.assertEqual(answer_letters("A, D"), {"A", "D"})
        self.assertEqual(answer_letters("A, B y C"), {"A", "B", "C"})

    def test_allowed_domain(self):
        self.assertTrue(is_allowed_domain("https://docs.github.com/en/copilot", ["docs.github.com"]))
        self.assertTrue(is_allowed_domain("https://github.com/features", ["github.com"]))
        self.assertFalse(is_allowed_domain("https://malicious.com/phishing", ["github.com"]))

    def test_audit_question_invalid_option(self):
        q = Question(
            id="test-1-1",
            balotario=1,
            number=1,
            question="Pregunta de prueba",
            options={"A": "Opción 1", "B": "Opción 2"},
            answer="C",  # C no existe en las opciones
            explanation="Explicación normal",
            source_url="https://github.com/docs",
        )
        res = audit_question(q, None, self.config)
        self.assertEqual(res.status, "review")
        self.assertEqual(res.severity, "high")
        self.assertTrue(any(f.type == "invalid_answer_option" for f in res.findings))

    def test_audit_question_obsolete_pattern(self):
        q = Question(
            id="test-1-2",
            balotario=1,
            number=2,
            question="Uso de Knowledge Base en Copilot",
            options={"A": "Opción 1", "B": "Opción 2"},
            answer="A",
            explanation="La Knowledge Base almacena documentación",
            source_url="https://github.com/docs",
        )
        res = audit_question(q, None, self.config)
        self.assertEqual(res.status, "review")
        self.assertTrue(any(f.type == "obsolete_pattern" for f in res.findings))


class TestState(unittest.TestCase):
    def test_select_question_ids(self):
        questions = {
            f"c-balotario-{b}-{n}": Question(id=f"c-balotario-{b}-{n}", balotario=b, number=n, question="")
            for b in (1, 2)
            for n in range(1, 11)
        }
        # Selector '1' (todo balotario 1)
        self.assertEqual(len(select_question_ids(questions, ["1"])), 10)
        # Selector '2:5' (balotario 2, pregunta 5)
        self.assertEqual(select_question_ids(questions, ["2:5"]), ["c-balotario-2-5"])
        # Selector '1:3-6' (preguntas 3 a 6 del balotario 1)
        self.assertEqual(len(select_question_ids(questions, ["1:3-6"])), 4)
        # Selector '--all'
        self.assertEqual(len(select_question_ids(questions, [], select_all=True)), 20)

    def test_get_review_reason(self):
        q = Question(
            id="q1",
            balotario=1,
            number=1,
            question="Texto",
            source_url="https://docs.com",
            content_hash="hash_a",
        )
        # Sin registro
        self.assertEqual(get_review_reason(q, None, {}), "sin verificar")

        # Contenido modificado
        state_entry = {
            "status": "verified",
            "content_hash": "hash_viejo",
            "source_url": "https://docs.com",
            "source_hash": "src_hash_1",
        }
        self.assertEqual(get_review_reason(q, state_entry, {"https://docs.com": {"hash": "src_hash_1"}}), "contenido modificado")

        # Fuente web modificada
        state_entry["content_hash"] = "hash_a"
        hashes = {"https://docs.com": {"hash": "src_hash_nuevo"}}
        self.assertEqual(get_review_reason(q, state_entry, hashes), "fuente oficial modificada")

        # Todo al día
        hashes["https://docs.com"]["hash"] = "src_hash_1"
        self.assertIsNone(get_review_reason(q, state_entry, hashes))


class TestContextBuilder(unittest.TestCase):
    def test_extract_relevant_excerpt(self):
        doc = """Intro Section
This is just introductory boilerplate text that has nothing to do with API limits or token caching.

Token Limits and Parameters
Claude 3.5 Sonnet supports an expanded output limit of up to 8,192 tokens when using the anthropic-beta header.
The max_tokens parameter specifies the maximum number of tokens to generate before stopping.

Billing and Invoicing
Information on payment methods, credit cards, and monthly invoices.
"""
        query = "What is the maximum output tokens for Claude 3.5 Sonnet? 8,192 tokens max_tokens"
        excerpt = extract_relevant_excerpt(doc, query, max_words=100)
        self.assertIn("8,192 tokens", excerpt)
        self.assertIn("Token Limits and Parameters", excerpt)
        self.assertNotIn("Billing and Invoicing", excerpt)

    def test_build_ai_context_markdown(self):
        q = Question(
            id="claude-1-9",
            balotario=1,
            number=9,
            question="What is the token limit?",
            options={"A": "4096", "B": "8192"},
            answer="B",
            explanation="8192 is the new limit.",
            source_title="Claude Docs",
            source_url="https://platform.claude.com/docs",
        )
        doc = "Claude supports 8192 tokens output."
        md = build_ai_context(q, doc, review_reason="fuente modificada", format_type="md")
        self.assertIn("### PREGUNTA A VERIFICAR [ID: claude-1-9]", md)
        self.assertIn("### EXTRACTO OFICIAL RELEVANTE", md)
        self.assertIn("Claude supports 8192 tokens output.", md)


if __name__ == "__main__":
    unittest.main()
