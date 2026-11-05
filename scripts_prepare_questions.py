from pathlib import Path
import json
import re
import sys

BASE_DIR = Path(__file__).parent
CONTENT_CERT_DIR = BASE_DIR / "content" / "certifications"
DATA_CERT_DIR = BASE_DIR / "src" / "data" / "certifications"
DATA_CERT_DIR.mkdir(parents=True, exist_ok=True)

# Reglas de categorización por certificación
CERT_CONFIGS = {
    "gh-300": {
        "name": "GitHub Copilot GH-300",
        "source_md": CONTENT_CERT_DIR / "gh-300" / "balotarios.md",
        "target_json": DATA_CERT_DIR / "gh-300.json",
        "expected_count": 458,
        "category_rules": [
            ("responsible", "Uso responsable de GitHub Copilot", ("responsab", "ético", "sesgo", "bias", "riesgo", "validar", "limitación", "limitaciones")),
            ("features", "Funciones de GitHub Copilot", ("chat", "ide", "inline", "cli", "pull request", "resumen", "knowledge base", "refactor", "documentación")),
            ("architecture", "Datos y arquitectura de GitHub Copilot", ("pipeline", "flujo de datos", "servidor", "modelo", "proxy", "almacena", "entrenamiento", "contexto local")),
            ("prompting", "Ingeniería de prompts y contexto", ("prompt", "few-shot", "zero-shot", "historial", "comentario", "contexto", "restriccion", "restricción")),
            ("productivity", "Productividad del desarrollador", ("productividad", "legacy", "boilerplate", "performance", "rendimiento", "función", "código", "scraper")),
            ("privacy", "Privacidad, exclusiones y salvaguardas", ("exclus", "privacidad", "pii", "gdpr", "hipaa", "licencia", "propiedad intelectual", "duplic", "audit", "seguridad")),
        ],
    },
    "claude-certified-developer": {
        "name": "Claude Certified Developer",
        "source_md": CONTENT_CERT_DIR / "claude-certified-developer" / "balotarios.md",
        "target_json": DATA_CERT_DIR / "claude-certified-developer.json",
        "expected_count": 308,
        "category_rules": [
            ("accelerators_ip_contribution", "Accelerators & IP Contribution", (
                "taxonomy", "deterministic workflow", "autonomous agent over", "workflow over",
                "pipeline where each stage", "sdlc", "software development life cycle", "claude.md",
                "ci pipeline", "review pull requests", "batch api", "safe deployment", "deployment plan",
                "a/b testing", "a/b test", "roll out a new prompt", "traffic and compare", "verification step",
                "fallback provider", "incident response plan", "refactored into an agent", "deterministic logic",
                "single well-crafted api call beats", "prompt changes as code", "reusability", "reusable",
                "package", "packaging", "accelerator", "template", "versioning a public api",
                "which architecture is most appropriate", "appropriate architecture", "trade-offs of agentic systems",
                "observability requirements", "correlating request ids"
            )),
            ("claude_code_mcp_integration", "Claude Code, MCP & Integration", (
                "claude code", "sub-agent in claude code", "hooks in claude code",
                "model context protocol", "mcp", "mcp server", "mcp client", "transport",
                "stdio", "sse", "resources", "resource", "primitives can an mcp",
                "third-party mcp", "tools parameter", "sdk", "messages api", "client.messages",
                "streaming", "stream"
            )),
            ("production_evals_security", "Production Engineering, Evals & Security", (
                "eval", "evals", "evaluation", "benchmark", "accuracy", "ground truth",
                "jailbreak", "injection", "guardrail", "safety", "red team", "pii", "sensitive data",
                "threat model", "credentials given to an agent", "rate limit", "429", "529",
                "overloaded", "retry", "backoff", "resilience", "tenant", "debug production",
                "trigger an alert", "incident", "status code", "degrades gracefully", "circuit breaker",
                "human in the loop"
            )),
            ("mso_foundations", "MSO Foundations", (
                "frontier model", "smaller fast model", "smaller model", "haiku", "sonnet", "opus",
                "temperature", "top_p", "top_k", "context window", "tokens", "token cost", "output token",
                "input token", "pricing", "latency", "multimodal", "vision", "version header",
                "max_tokens", "hallucination", "extended thinking", "thinking budget", "cost profile"
            )),
            ("prompting_agents_tool_use", "Production-Grade Prompting, Agents & Tool Use", (
                "prompt", "system prompt", "system message", "xml", "few-shot", "prefill", "chain-of-thought",
                "tool", "tools", "tool_use", "tool_result", "tool_choice", "function calling",
                "orchestrator", "routing", "parallelization", "evaluator-optimizer", "computer use",
                "prompt caching", "cache_control", "ephemeral", "caching", "cache",
                "iteration cap", "agent"
            )),
        ],
    },
}

def determine_category(question_text, rules):
    lowered = question_text.lower()
    scores = [(sum(lowered.count(term) for term in terms), key, label) for key, label, terms in rules]
    scores.sort(key=lambda x: x[0], reverse=True)
    best_score, key, label = scores[0]
    if best_score == 0:
        # Default to the most general rule in the set
        return {"id": rules[-1][0], "name": rules[-1][1]}
    return {"id": key, "name": label}

def parse_certification_file(cert_id, config):
    source_path = config["source_md"]
    if not source_path.exists():
        # Fallback para gh-300 si aún existe en raíz
        if cert_id == "gh-300" and (BASE_DIR / "balotarios.md").exists():
            source_path = BASE_DIR / "balotarios.md"
        else:
            raise FileNotFoundError(f"No se encontró el archivo de balotarios para {cert_id}: {source_path}")

    text = source_path.read_text(encoding="utf-8")
    rules = config["category_rules"]
    items = []

    trans_path = config["source_md"].parent / "translations-es.json"
    translations_map = {}
    if trans_path.exists():
        try:
            translations_map = json.loads(trans_path.read_text(encoding="utf-8"))
        except Exception as e:
            print(f"[{cert_id}] Aviso al cargar traducciones: {e}")

    for section in re.split(r"(?m)(?=^# Balotario \d+\s*$)", text):
        if not section.strip():
            continue
        balotario_match = re.search(r"^# (Balotario \d+)", section, re.M)
        if not balotario_match:
            continue
        balotario = balotario_match.group(1)

        for match in re.finditer(r"(?ms)^Pregunta\s+(\d+)\s*$.*?(?=^Pregunta\s+\d+\s*$|\Z)", section):
            block = match.group(0)
            number = int(match.group(1))
            answer_match = re.search(r"^Respuesta correcta:\s*(.+)$", block, re.M)
            explanation_match = re.search(r"(?ms)^Explicación\s*$\n(.*?)(?=^Fuente oficial:)", block)
            source_match = re.search(r"^Fuente oficial:\s*\[([^]]+)\]\(([^)]+)\)", block, re.M)
            if not answer_match or not explanation_match or not source_match:
                raise SystemExit(f"[{cert_id}] Bloque incompleto: {balotario}, pregunta {number}")

            content = block[:answer_match.start()]
            lines = content.splitlines()[1:]
            options = []
            option = None
            question_lines = []
            for line in lines:
                option_match = re.match(r"^([A-Z])\.\s*(.*)$", line)
                if option_match:
                    if option:
                        options.append(option)
                    option = {"id": option_match.group(1), "text": option_match.group(2).strip()}
                elif option:
                    option["text"] += " " + line.strip()
                else:
                    question_lines.append(line.strip())
            if option:
                options.append(option)
            question = " ".join(line for line in question_lines if line and line not in {"Preguntas"})

            item_id = f"{cert_id}-{balotario.lower().replace(' ', '-')}-{number}"
            category_context = f"{question} {' '.join(o['text'] for o in options)}"
            item_data = {
                "id": item_id,
                "certification": cert_id,
                "balotario": balotario,
                "number": number,
                "question": question,
                "options": options,
                "correctAnswer": answer_match.group(1).strip(),
                "explanation": explanation_match.group(1).strip(),
                "source": {"title": source_match.group(1), "url": source_match.group(2)},
                "category": determine_category(category_context, rules),
            }
            if item_id in translations_map:
                item_data["translations"] = {
                    "es": translations_map[item_id]
                }
            items.append(item_data)

    expected = config.get("expected_count")
    if expected is not None and len(items) != expected:
        raise SystemExit(f"[{cert_id}] Se esperaban {expected} preguntas y se encontraron {len(items)}")

    target_path = config["target_json"]
    target_path.write_text(json.dumps(items, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"[{cert_id}] Generadas {len(items)} preguntas en {target_path}")

    return items

def main():
    target_certs = sys.argv[1:] if len(sys.argv) > 1 else list(CERT_CONFIGS.keys())
    for cert_id in target_certs:
        if cert_id not in CERT_CONFIGS:
            print(f"Certificación desconocida: {cert_id}. Opciones: {list(CERT_CONFIGS.keys())}")
            sys.exit(1)
        parse_certification_file(cert_id, CERT_CONFIGS[cert_id])

if __name__ == "__main__":
    main()
