#!/usr/bin/env python3
"""Audit GH-300 questions against cached official GitHub/Microsoft sources."""

from __future__ import annotations

import argparse
import hashlib
import html
import json
import re
import sys
import urllib.request
import urllib.parse
from collections import Counter
from datetime import datetime, timezone
from pathlib import Path
from urllib.error import HTTPError, URLError


BASE_DIR = Path(__file__).resolve().parent
QUESTIONS_FILE = BASE_DIR / "balotarios.md"
CACHE_DIR = BASE_DIR / "source-cache"
REPORT_JSON = BASE_DIR / "audit-report.json"
REPORT_MARKDOWN = BASE_DIR / "audit-report.md"
CACHE_TTL_SECONDS = 7 * 24 * 60 * 60

ALLOWED_DOMAINS = (
	"docs.github.com",
	"github.com",
	"learn.microsoft.com",
	"learn.github.com",
	"code.visualstudio.com",
)

OBSOLETE_PATTERNS = (
	(re.compile(r"(?i)\bknowledge base\b"), "Knowledge Base sustituida por Copilot Spaces"),
	(re.compile(r"(?i)\bcopilot individual\b"), "Nombre de plan individual obsoleto o ambiguo"),
	(re.compile(r"(?i)\bcopilot for individuals\b"), "Nombre de plan individual obsoleto o ambiguo"),
	(re.compile(r"(?i)copilot_subscription"), "Endpoint REST obsoleto"),
	(re.compile(r"(?i)copilot\.yaml"), "Mecanismo no oficial para exclusiones"),
	(re.compile(r"(?i)privacidad diferencial"), "Afirmación no respaldada por las fuentes oficiales usadas"),
	(re.compile(r"(?i)cifrado de extremo a extremo"), "Afirmación de privacidad excesiva o no documentada"),
	(re.compile(r"(?i)sugerencias ilimitadas"), "Afirmación de plan potencialmente obsoleta"),
	(re.compile(r"(?i)modelo codex"), "Codex no describe la arquitectura actual de todos los modelos"),
)

GENERIC_PATTERNS = (
	"en el contexto de esta pregunta",
	"coincide con el requisito",
	"las demás alternativas no son válidas",
	"no satisface ese criterio",
)


def now_iso() -> str:
	return datetime.now(timezone.utc).replace(microsecond=0).isoformat()


def normalize_url(url: str) -> str:
	url = url.strip()
	parsed = urllib.parse.urlsplit(url)
	host = parsed.netloc.lower()
	if host.startswith("www."):
		host = host[4:]
	return urllib.parse.urlunsplit((parsed.scheme.lower(), host, parsed.path, parsed.query, ""))


def allowed_source(url: str) -> bool:
	host = urllib.parse.urlsplit(url).netloc.lower()
	return any(host == domain or host.endswith("." + domain) for domain in ALLOWED_DOMAINS)


def strip_html(raw_html: str) -> str:
	text = re.sub(r"(?is)<(script|style)[^>]*>.*?</\1>", " ", raw_html)
	text = re.sub(r"(?is)<!--.*?-->", " ", text)
	text = re.sub(r"(?i)<br\s*/?>|</(?:p|div|li|tr|h[1-6])>", "\n", text)
	text = re.sub(r"(?is)<[^>]+>", " ", text)
	text = html.unescape(text)
	text = re.sub(r"[ \t]+", " ", text)
	text = re.sub(r"\n{3,}", "\n\n", text)
	return re.sub(r"\n\s+", "\n", text).strip()


def fetch_source(url: str, timeout: int = 30) -> tuple[str, str]:
	request = urllib.request.Request(
		url,
		headers={
			"User-Agent": "quiz-gh300-source-audit/1.0",
			"Accept": "text/html,application/xhtml+xml",
		},
	)
	with urllib.request.urlopen(request, timeout=timeout) as response:
		charset = response.headers.get_content_charset() or "utf-8"
		raw = response.read().decode(charset, errors="replace")
		final_url = normalize_url(response.geturl())
	return raw, final_url


def cache_path_for_url(url: str) -> Path:
	digest = hashlib.sha256(url.encode("utf-8")).hexdigest()[:16]
	return CACHE_DIR / f"{digest}.json"


def load_cached_source(url: str, max_age_seconds: int) -> dict | None:
	path = cache_path_for_url(url)
	if not path.exists():
		return None
	try:
		cache = json.loads(path.read_text(encoding="utf-8"))
	except (json.JSONDecodeError, OSError):
		return None
	try:
		fetched = datetime.fromisoformat(cache["fetched_at"])
	except (KeyError, ValueError):
		return None
	age = (datetime.now(timezone.utc) - fetched).total_seconds()
	if age > max_age_seconds:
		return None
	if not cache.get("text"):
		return None
	return cache


def get_source(url: str, refresh: bool, timeout: int) -> dict:
	url = normalize_url(url)
	cache = None if refresh else load_cached_source(url, CACHE_TTL_SECONDS)
	if cache:
		cache["from_cache"] = True
		return cache

	try:
		raw_html, final_url = fetch_source(url, timeout)
		text = strip_html(raw_html)
		status = "ok"
		error = None
	except (HTTPError, URLError, TimeoutError, OSError) as exc:
		raw_html = ""
		text = ""
		final_url = url
		status = "error"
		error = str(exc)

	cache = {
		"url": url,
		"final_url": final_url,
		"fetched_at": now_iso(),
		"status": status,
		"error": error,
		"sha256": hashlib.sha256(text.encode("utf-8")).hexdigest(),
		"text": text,
		"from_cache": False,
	}
	CACHE_DIR.mkdir(parents=True, exist_ok=True)
	cache_path_for_url(url).write_text(
		json.dumps(cache, ensure_ascii=False, indent=2),
		encoding="utf-8",
	)
	return cache


def split_questions(markdown: str) -> list[dict]:
	parts = re.split(r"(?=^Pregunta \d+$)", markdown, flags=re.M)
	questions = []
	for part in parts[1:]:
		number_match = re.match(r"^Pregunta\s+(\d+)\s*$", part, re.M)
		if not number_match:
			continue
		number = int(number_match.group(1))

		answer_match = re.search(r"^Respuesta correcta:\s*(.+)$", part, re.M)
		answer = answer_match.group(1).strip() if answer_match else ""

		source_match = re.search(
			r"^Fuente oficial:\s*\[(.*?)\]\((https://[^)\s]+)\)",
			part,
			re.M,
		)
		source_title = source_match.group(1).strip() if source_match else ""
		source_url = normalize_url(source_match.group(2)) if source_match else ""

		explanation_match = re.search(
			r"^Explicaci[oó]n\s*$\n(.*?)(?=^Fuente oficial:|\Z)",
			part,
			re.M | re.S,
		)
		explanation = explanation_match.group(1).strip() if explanation_match else ""

		answer_pos = answer_match.start() if answer_match else len(part)
		option_starts = list(re.finditer(r"(?m)^([A-Z])\.\s*", part[:answer_pos]))
		options = {}
		for index, match in enumerate(option_starts):
			letter = match.group(1)
			start = match.end()
			end = option_starts[index + 1].start() if index + 1 < len(option_starts) else answer_pos
			options[letter] = re.sub(r"\s+", " ", part[start:end]).strip()

		question_match = re.search(
			r"^Pregunta\s+\d+\s*$\n(.*?)\n(?=[A-Z]\.\s)",
			part,
			re.M | re.S,
		)
		question_text = re.sub(r"\s+", " ", question_match.group(1)).strip() if question_match else ""

		questions.append({
			"number": number,
			"question": question_text,
			"options": options,
			"answer": answer,
			"explanation": explanation,
			"source_title": source_title,
			"source_url": source_url,
		})
	return questions


def answer_letters(answer: str) -> set[str]:
	letters = set(re.findall(r"\b[A-Z]\b", answer))
	letters.update(re.findall(r"(?:^|[,\s])([A-Z])(?:[,\s]|$)", answer))
	return letters


def content_keywords(text: str) -> set[str]:
	stopwords = {
		"de", "del", "la", "las", "el", "los", "una", "un", "unos", "unas",
		"y", "o", "en", "por", "para", "con", "que", "qué", "como", "cómo",
		"es", "son", "se", "su", "al", "un", "más", "qué", "qué",
		"the", "and", "or", "of", "to", "a", "in", "for", "with", "that",
	}
	words = re.findall(r"[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]{4,}", text.lower())
	return {word for word in words if word not in stopwords}


def audit_question(question: dict, source_cache: dict) -> dict:
	findings = []
	severity = "ok"
	letters = sorted(answer_letters(question["answer"]))
	option_letters = set(question["options"])
	invalid_letters = sorted(set(letters) - option_letters)
	correct_text = " ".join(question["options"].get(letter, "") for letter in letters)

	if invalid_letters:
		findings.append({
			"type": "invalid_answer_option",
			"severity": "high",
			"message": f"La clave contiene opciones inexistentes: {', '.join(invalid_letters)}",
		})

	if not option_letters:
		findings.append({
			"type": "missing_options",
			"severity": "high",
			"message": "No se pudieron extraer opciones A-Z.",
		})

	if not question["source_url"]:
		findings.append({
			"type": "missing_source",
			"severity": "high",
			"message": "La pregunta no tiene URL oficial.",
		})
	elif not allowed_source(question["source_url"]):
		findings.append({
			"type": "source_domain",
			"severity": "high",
			"message": "La fuente no pertenece a un dominio oficial permitido.",
		})

	explanation_lower = question["explanation"].lower()
	for pattern, label in OBSOLETE_PATTERNS:
		if pattern.search(question["explanation"] + "\n" + correct_text):
			findings.append({
				"type": "obsolete_or_unverified_term",
				"severity": "medium",
				"message": label,
			})

	generic_explanation = any(pattern in explanation_lower for pattern in GENERIC_PATTERNS)

	if source_cache["status"] != "ok":
		findings.append({
			"type": "source_fetch_error",
			"severity": "high",
			"message": source_cache["error"] or "No se pudo descargar la fuente.",
		})

	source_keywords = content_keywords(source_cache.get("text", ""))
	question_keywords = content_keywords(question["question"] + "\n" + correct_text)
	overlap = len(source_keywords & question_keywords)

	if findings:
		severity = max(
			(f["severity"] for f in findings),
			key=lambda level: {"low": 1, "medium": 2, "high": 3}[level],
		)

	return {
		"number": question["number"],
		"status": "review" if findings else "verified",
		"severity": severity,
		"question": question["question"],
		"answer": question["answer"],
		"source_url": question["source_url"],
		"source_from_cache": source_cache.get("from_cache", False),
		"source_sha256": source_cache.get("sha256"),
		"source_overlap": overlap if source_cache["status"] == "ok" else None,
		"generic_explanation": generic_explanation,
		"findings": findings,
	}


def render_markdown(report: dict) -> str:
	lines = [
		"# Auditoría GH-300",
		"",
		f"- Fecha: `{report['generated_at']}`",
		f"- Preguntas: {report['summary']['questions']}",
		f"- Sin hallazgos: {report['summary']['verified']}",
		f"- Requieren revisión: {report['summary']['review']}",
		f"- Hallazgos altos: {report['summary']['high']}",
		f"- Hallazgos medios: {report['summary']['medium']}",
		f"- Hallazgos bajos: {report['summary']['low']}",
		"",
	]
	for item in report["items"]:
		if item["status"] == "verified":
			continue
		lines.extend([
			f"## Pregunta {item['number']} — {item['severity'].upper()}",
			"",
			item["question"],
			"",
			f"- Clave: `{item['answer']}`",
			f"- Fuente: {item['source_url']}",
		])
		for finding in item["findings"]:
			lines.append(f"- **{finding['severity']}** `{finding['type']}`: {finding['message']}")
		lines.append("")
	return "\n".join(lines)


def parse_args() -> argparse.Namespace:
	parser = argparse.ArgumentParser(description="Audita las fuentes del balotario GH-300")
	parser.add_argument("--refresh", action="store_true", help="Ignora la caché y descarga todas las fuentes")
	parser.add_argument("--timeout", type=int, default=30, help="Timeout HTTP por fuente")
	parser.add_argument("--fail-on-review", action="store_true", help="Termina con código 1 si hay revisiones")
	return parser.parse_args()


def main() -> int:
	args = parse_args()
	CACHE_DIR.mkdir(parents=True, exist_ok=True)

	markdown = QUESTIONS_FILE.read_text(encoding="utf-8")
	questions = split_questions(markdown)
	source_cache: dict[str, dict] = {}
	items = []

	for question in questions:
		url = question["source_url"]
		if url and url not in source_cache:
			source_cache[url] = get_source(url, args.refresh, args.timeout)
		cache = source_cache.get(url, {
			"url": url,
			"final_url": url,
			"fetched_at": now_iso(),
			"status": "error" if not url else "ok",
			"error": "Falta URL de fuente.",
			"sha256": None,
			"text": "",
			"from_cache": False,
		})
		global_question = dict(question)
		global_question["number"] = len(items) + 1
		items.append(audit_question(global_question, cache))

	counts = Counter(item["severity"] for item in items)
	summary = {
		"questions": len(items),
		"verified": sum(item["status"] == "verified" for item in items),
		"review": sum(item["status"] == "review" for item in items),
		"high": sum(item["status"] == "review" and item["severity"] == "high" for item in items),
		"medium": sum(item["status"] == "review" and item["severity"] == "medium" for item in items),
		"low": sum(item["status"] == "review" and item["severity"] == "low" for item in items),
	}

	report = {
		"generated_at": now_iso(),
		"summary": summary,
		"items": items,
		"sources": {
			url: {
				key: cache[key]
				for key in ("url", "final_url", "fetched_at", "status", "error", "sha256", "from_cache")
				if key in cache
			}
			for url, cache in source_cache.items()
		},
	}
	REPORT_JSON.write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8")
	REPORT_MARKDOWN.write_text(render_markdown(report), encoding="utf-8")

	print(
		f"{len(items)} preguntas: {summary['verified']} verificadas, "
		f"{summary['review']} requieren revisión "
		f"(altas {summary['high']}, medias {summary['medium']}, bajas {summary['low']})."
	)
	print(f"Informes: {REPORT_MARKDOWN.name}, {REPORT_JSON.name}")

	return 1 if args.fail_on_review and summary["review"] else 0


if __name__ == "__main__":
	sys.exit(main())
