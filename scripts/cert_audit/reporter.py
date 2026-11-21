from __future__ import annotations

import json
from collections import Counter
from datetime import datetime, timezone
from pathlib import Path

from scripts.cert_audit.config import AuditConfig
from scripts.cert_audit.rules import QuestionAuditResult


def generate_reports(
    results: list[QuestionAuditResult],
    config: AuditConfig,
) -> tuple[Path, Path]:
    """Genera audit-report.md y audit-report.json en el directorio de la certificación."""
    total = len(results)
    review_needed = [r for r in results if r.status == "review"]
    verified = [r for r in results if r.status == "verified"]

    severity_counts = Counter(r.severity for r in review_needed)

    # 1. Reporte JSON
    json_payload = {
        "cert_id": config.cert_id,
        "name": config.name,
        "generated_at": datetime.now(timezone.utc).isoformat(timespec="seconds"),
        "summary": {
            "total_questions": total,
            "verified": len(verified),
            "needs_review": len(review_needed),
            "severity_counts": dict(severity_counts),
        },
        "questions": [
            {
                "id": r.id,
                "balotario": r.balotario,
                "number": r.number,
                "status": r.status,
                "severity": r.severity,
                "question": r.question,
                "source_url": r.source_url,
                "keyword_overlap": r.keyword_overlap,
                "generic_explanation": r.generic_explanation,
                "findings": [{"type": f.type, "severity": f.severity, "message": f.message} for f in r.findings],
            }
            for r in results
        ],
    }

    config.report_json_path.write_text(
        json.dumps(json_payload, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )

    # 2. Reporte Markdown
    md_lines: list[str] = [
        f"# Informe de Auditoría Determinista: {config.name}",
        "",
        f"- **Fecha**: {json_payload['generated_at']}",
        f"- **Total de preguntas auditadas**: {total}",
        f"- **Vigentes (sin observaciones)**: {len(verified)}",
        f"- **Requieren revisión**: {len(review_needed)}",
        f"- **Severidad**: Alta ({severity_counts.get('high', 0)}), Media ({severity_counts.get('medium', 0)}), Baja ({severity_counts.get('low', 0)})",
        "",
        "---",
        "",
    ]

    if not review_needed:
        md_lines.append("## Estado General: Excelente\nNo se detectaron hallazgos automáticos en este cuestionario.\n")
    else:
        md_lines.append("## Preguntas que Requieren Atención\n")
        for r in review_needed:
            md_lines.append(f"### [B{r.balotario}:P{r.number}] {r.id}")
            md_lines.append(f"- **Severidad**: `{r.severity.upper()}`")
            md_lines.append(f"- **Enunciado**: {r.question}")
            md_lines.append(f"- **Fuente oficial**: {r.source_url or '(sin URL)'}")
            md_lines.append("- **Hallazgos detectados**:")
            for f in r.findings:
                md_lines.append(f"  - `[{f.severity.upper()}]` {f.message}")
            md_lines.append("")

    config.report_md_path.write_text("\n".join(md_lines), encoding="utf-8")

    return config.report_md_path, config.report_json_path
