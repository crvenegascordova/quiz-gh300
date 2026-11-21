from __future__ import annotations

import re
import urllib.parse
from dataclasses import dataclass, field
from typing import Literal

from scripts.cert_audit.config import AuditConfig
from scripts.cert_audit.parser import Question
from scripts.cert_audit.scraper import SourceResult


SeverityLevel = Literal["low", "medium", "high"]


@dataclass
class Finding:
    type: str
    severity: SeverityLevel
    message: str


@dataclass
class QuestionAuditResult:
    id: str
    balotario: int
    number: int
    status: Literal["verified", "review"]
    severity: Literal["ok", "low", "medium", "high"]
    question: str
    source_url: str
    findings: list[Finding] = field(default_factory=list)
    keyword_overlap: int = 0
    generic_explanation: bool = False


def answer_letters(answer: str) -> set[str]:
    """Extrae las letras de opciones referenciadas en la respuesta."""
    letters = set(re.findall(r"\b[A-Z]\b", answer))
    letters.update(re.findall(r"(?:^|[,\s])([A-Z])(?:[,\s]|$)", answer))
    return letters


def is_allowed_domain(url: str, allowed_domains: list[str]) -> bool:
    if not allowed_domains:
        return True
    host = urllib.parse.urlsplit(url).netloc.lower()
    if host.startswith("www."):
        host = host[4:]
    return any(host == domain or host.endswith("." + domain) for domain in allowed_domains)


def content_keywords(text: str) -> set[str]:
    stopwords = {
        "de", "del", "la", "las", "el", "los", "una", "un", "unos", "unas",
        "y", "o", "en", "por", "para", "con", "que", "qué", "como", "cómo",
        "es", "son", "se", "su", "al", "un", "más", "qué",
        "the", "and", "or", "of", "to", "a", "in", "for", "with", "that", "this",
        "is", "are", "was", "were", "be", "been", "being", "have", "has", "had",
    }
    words = re.findall(r"[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]{4,}", text.lower())
    return {w for w in words if w not in stopwords}


def audit_question(
    question: Question,
    source: SourceResult | None,
    config: AuditConfig,
) -> QuestionAuditResult:
    findings: list[Finding] = []
    letters = sorted(answer_letters(question.answer))
    option_letters = set(question.options.keys())
    invalid_letters = sorted(set(letters) - option_letters)
    correct_text = " ".join(question.options.get(l, "") for l in letters)

    # 1. Validación de opciones A-Z
    if not option_letters:
        findings.append(Finding(
            type="missing_options",
            severity="high",
            message="No se pudieron extraer opciones A-Z de la pregunta.",
        ))

    # 2. Clave refiere a opción inexistente
    if invalid_letters:
        findings.append(Finding(
            type="invalid_answer_option",
            severity="high",
            message=f"La clave contiene opciones inexistentes: {', '.join(invalid_letters)}",
        ))

    # 3. Validación de URL y dominios oficiales
    if not question.source_url:
        findings.append(Finding(
            type="missing_source",
            severity="high",
            message="La pregunta no cuenta con URL de fuente oficial.",
        ))
    elif not is_allowed_domain(question.source_url, config.allowed_domains):
        findings.append(Finding(
            type="source_domain",
            severity="high",
            message=f"La fuente '{question.source_url}' no pertenece a los dominios oficiales permitidos.",
        ))

    # 4. Detección de patrones obsoletos o no respaldados
    full_text = f"{question.question}\n{question.explanation}\n{correct_text}"
    for obs in config.obsolete_patterns:
        if re.search(obs.pattern, full_text):
            findings.append(Finding(
                type="obsolete_pattern",
                severity=obs.severity if obs.severity in ("low", "medium", "high") else "medium",  # type: ignore
                message=obs.message,
            ))

    # 5. Detección de explicaciones genéricas
    explanation_lower = question.explanation.lower()
    generic = any(pat.lower() in explanation_lower for pat in config.generic_patterns)

    # 6. Estado de descarga de la fuente
    if source and source.status != "ok":
        findings.append(Finding(
            type="source_fetch_error",
            severity="high",
            message=source.error or "Error al descargar la fuente oficial.",
        ))

    # 7. Coincidencia léxica
    source_words = content_keywords(source.clean_text) if source else set()
    question_words = content_keywords(f"{question.question} {correct_text}")
    overlap = len(source_words & question_words)

    # Calcular severidad máxima
    if findings:
        max_sev = max(
            (f.severity for f in findings),
            key=lambda level: {"low": 1, "medium": 2, "high": 3}[level],
        )
        status: Literal["verified", "review"] = "review"
    else:
        max_sev = "ok"
        status = "verified"

    return QuestionAuditResult(
        id=question.id,
        balotario=question.balotario,
        number=question.number,
        status=status,
        severity=max_sev,  # type: ignore
        question=question.question,
        source_url=question.source_url,
        findings=findings,
        keyword_overlap=overlap,
        generic_explanation=generic,
    )
