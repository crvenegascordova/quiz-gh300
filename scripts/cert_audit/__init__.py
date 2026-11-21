"""Paquete central de auditoría, verificación incremental y reducción de tokens para certificaciones."""

from scripts.cert_audit.config import AuditConfig, ScraperConfig, load_config
from scripts.cert_audit.context_builder import build_ai_context, extract_relevant_excerpt
from scripts.cert_audit.parser import Question, parse_balotarios
from scripts.cert_audit.reporter import generate_reports
from scripts.cert_audit.rules import QuestionAuditResult, audit_question
from scripts.cert_audit.scraper import SourceResult, clean_html, get_source_content
from scripts.cert_audit.state import (
    flag_for_review,
    get_review_reason,
    load_json,
    mark_verified,
    save_json,
    select_question_ids,
)

__all__ = [
    "AuditConfig",
    "ScraperConfig",
    "load_config",
    "Question",
    "parse_balotarios",
    "clean_html",
    "get_source_content",
    "SourceResult",
    "audit_question",
    "QuestionAuditResult",
    "get_review_reason",
    "select_question_ids",
    "mark_verified",
    "flag_for_review",
    "load_json",
    "save_json",
    "build_ai_context",
    "extract_relevant_excerpt",
    "generate_reports",
]
