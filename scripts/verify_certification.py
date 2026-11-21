#!/usr/bin/env python3
"""CLI unificada para auditoría, verificación incremental y generación de contexto para IA.

Uso:
  python3 scripts/verify_certification.py <cert-id> status [-b N] [--list]
  python3 scripts/verify_certification.py <cert-id> check-sources [-b N] [--catalog] [--refresh]
  python3 scripts/verify_certification.py <cert-id> audit [--fail-on-review]
  python3 scripts/verify_certification.py <cert-id> context <selector> [--format md|json]
  python3 scripts/verify_certification.py <cert-id> mark (--all | 3 | 3:10 | 3:10-20 ...) [--note "..."]
  python3 scripts/verify_certification.py <cert-id> flag <selector>... --note "..."
  python3 scripts/verify_certification.py <cert-id> urls

Ejemplos:
  python3 scripts/verify_certification.py gh-300 status --list
  python3 scripts/verify_certification.py claude-certified-developer context 1:9
  python3 scripts/verify_certification.py gh-300 audit
"""

from __future__ import annotations

import argparse
import json
import sys
from datetime import datetime, timezone
from pathlib import Path

# Agregar raíz del repositorio a sys.path
REPO_ROOT = Path(__file__).resolve().parent.parent
if str(REPO_ROOT) not in sys.path:
    sys.path.insert(0, str(REPO_ROOT))

from scripts.cert_audit.config import AuditConfig, load_config
from scripts.cert_audit.context_builder import build_ai_context
from scripts.cert_audit.parser import Question, parse_balotarios
from scripts.cert_audit.reporter import generate_reports
from scripts.cert_audit.rules import audit_question
from scripts.cert_audit.scraper import cache_filename, get_source_content, normalize_url
from scripts.cert_audit.state import (
    flag_for_review,
    get_review_reason,
    load_json,
    mark_verified,
    save_json,
    select_question_ids,
)


def resolve_cert_dir(cert_arg: str) -> Path:
    """Resuelve la ruta al directorio de la certificación a partir del ID o ruta relativa."""
    p = Path(cert_arg)
    if p.exists() and (p / "audit-config.json").exists():
        return p.resolve()

    # Buscar bajo content/certifications/<cert_arg>
    candidate = REPO_ROOT / "content" / "certifications" / cert_arg
    if candidate.exists() and (candidate / "audit-config.json").exists():
        return candidate.resolve()

    # Si estamos dentro de un directorio de certificación
    cwd = Path.cwd()
    if (cwd / "audit-config.json").exists():
        return cwd.resolve()

    sys.exit(f"Error: No se encontró audit-config.json para la certificación '{cert_arg}' en: {candidate}")


def cmd_status(config: AuditConfig, args: argparse.Namespace) -> None:
    questions = parse_balotarios(config.source_md_path, config.cert_id)
    state = load_json(config.state_path)
    hashes = load_json(config.hashes_path)

    if args.balotario:
        questions = {k: v for k, v in questions.items() if v.balotario == args.balotario}

    pending: dict[str, str] = {}
    for qid, q in questions.items():
        reason = get_review_reason(q, state.get(qid), hashes)
        if reason:
            pending[qid] = reason

    total = len(questions)
    verified_count = total - len(pending)
    print(f"[{config.name}] Total: {total} | Verificadas al día: {verified_count} | Pendientes: {len(pending)}")

    by_reason: dict[str, list[str]] = {}
    for qid, reason in pending.items():
        by_reason.setdefault(reason, []).append(qid)

    for reason, qids in sorted(by_reason.items()):
        print(f"  - {reason}: {len(qids)}")
        if args.list:
            for qid in qids:
                q = questions[qid]
                print(f"      [B{q.balotario}:P{q.number}] {q.id} -> {q.source_url}")


def cmd_check_sources(config: AuditConfig, args: argparse.Namespace) -> None:
    questions = parse_balotarios(config.source_md_path, config.cert_id)
    hashes = load_json(config.hashes_path)

    urls: set[str] = {
        q.source_url for q in questions.values()
        if q.source_url and (not args.balotario or q.balotario == args.balotario)
    }

    if args.catalog:
        urls |= set(config.official_sources_catalog.values())

    print(f"Consultando {len(urls)} fuentes oficiales para '{config.name}' (refresh={args.refresh})...")
    changed_count = 0

    for url in sorted(urls):
        res = get_source_content(
            url,
            cache_dir=config.cache_dir,
            scraper_cfg=config.scraper,
            refresh=args.refresh,
        )
        if res.status != "ok":
            print(f"  [ERROR] {url} -> {res.error}")
            continue

        old_hash = hashes.get(url, {}).get("hash")
        is_changed = old_hash is not None and old_hash != res.sha256
        tag = "NUEVO" if old_hash is None else ("CAMBIÓ" if is_changed else "IGUAL")
        if is_changed:
            changed_count += 1

        source_info = "(caché)" if res.from_cache else "(descargado)"
        print(f"  [{tag:6}] {source_info} {url} [{res.length} caracteres]")

        hashes[url] = {
            "hash": res.sha256,
            "length": res.length,
            "fetched_at": res.fetched_at,
        }

    save_json(config.hashes_path, hashes)
    print(f"Completado: {len(urls)} URLs procesadas, {changed_count} sufrieron cambios.")
    print("Las preguntas afectadas aparecerán automáticamente en 'status'.")


def cmd_audit(config: AuditConfig, args: argparse.Namespace) -> None:
    questions = parse_balotarios(config.source_md_path, config.cert_id)
    results = []

    print(f"Ejecutando auditoría determinista para {len(questions)} preguntas de '{config.name}'...")
    for q in questions.values():
        source = None
        if q.source_url:
            norm_url = normalize_url(q.source_url)
            cache_file = config.cache_dir / cache_filename(norm_url)
            if cache_file.exists() or getattr(args, "fetch", False):
                source = get_source_content(
                    q.source_url,
                    cache_dir=config.cache_dir,
                    scraper_cfg=config.scraper,
                    refresh=False,
                )
        res = audit_question(q, source, config)
        results.append(res)

    md_report, json_report = generate_reports(results, config)
    review_needed = [r for r in results if r.status == "review"]

    print(f"Auditoría finalizada. Hallazgos: {len(review_needed)} / {len(results)} preguntas.")
    print(f"  - Reporte Markdown: {md_report}")
    print(f"  - Reporte JSON: {json_report}")

    if args.fail_on_review and review_needed:
        sys.exit(1)


def cmd_context(config: AuditConfig, args: argparse.Namespace) -> None:
    """Genera la ficha compacta (< 400 tokens) para la IA."""
    questions = parse_balotarios(config.source_md_path, config.cert_id)
    target_ids = select_question_ids(questions, [args.selector])
    if not target_ids:
        sys.exit(f"No se encontró pregunta con el selector '{args.selector}'.")

    qid = target_ids[0]
    q = questions[qid]

    state = load_json(config.state_path)
    hashes = load_json(config.hashes_path)
    reason = get_review_reason(q, state.get(qid), hashes) or "verificación puntual"

    clean_text = ""
    if q.source_url:
        source_res = get_source_content(
            q.source_url,
            cache_dir=config.cache_dir,
            scraper_cfg=config.scraper,
            refresh=False,
        )
        clean_text = source_res.clean_text

    card = build_ai_context(q, clean_text, review_reason=reason, format_type=args.format)
    if args.format == "json":
        print(json.dumps(card, ensure_ascii=False, indent=2))
    else:
        print(card)


def cmd_mark(config: AuditConfig, args: argparse.Namespace) -> None:
    questions = parse_balotarios(config.source_md_path, config.cert_id)
    target_ids = select_question_ids(questions, args.targets, select_all=args.all)
    if not target_ids:
        sys.exit("No se seleccionó ninguna pregunta para marcar.")

    count = mark_verified(config.state_path, config.hashes_path, questions, target_ids, note=args.note)
    print(f"[{config.name}] {count} preguntas marcadas como 'verified'.")


def cmd_flag(config: AuditConfig, args: argparse.Namespace) -> None:
    questions = parse_balotarios(config.source_md_path, config.cert_id)
    target_ids = select_question_ids(questions, args.targets, select_all=False)
    if not target_ids:
        sys.exit("No se seleccionó ninguna pregunta para marcar.")

    count = flag_for_review(config.state_path, target_ids, note=args.note)
    print(f"[{config.name}] {count} preguntas marcadas como 'needs_review'.")


def cmd_urls(config: AuditConfig, _args: argparse.Namespace) -> None:
    print(f"Catálogo de fuentes oficiales para '{config.name}':")
    for topic, url in config.official_sources_catalog.items():
        print(f"  {topic:30} {url}")


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Sistema Unificado de Auditoría y Verificación de Certificaciones.",
        formatter_class=argparse.RawDescriptionHelpFormatter,
    )
    parser.add_argument("cert", help="ID de la certificación (ej: 'gh-300', 'claude-certified-developer') o ruta a su directorio.")

    subparsers = parser.add_subparsers(dest="subcommand", required=True)

    # status
    p_status = subparsers.add_parser("status", help="Muestra el estado de verificación de las preguntas.")
    p_status.add_argument("-b", "--balotario", type=int, help="Filtrar por número de balotario.")
    p_status.add_argument("--list", action="store_true", help="Listar cada pregunta pendiente individualmente.")
    p_status.set_defaults(func=cmd_status)

    # check-sources
    p_sources = subparsers.add_parser("check-sources", help="Descarga y valida las fuentes oficiales.")
    p_sources.add_argument("-b", "--balotario", type=int, help="Filtrar por balotario.")
    p_sources.add_argument("--catalog", action="store_true", help="Incluir catálogo temático.")
    p_sources.add_argument("--refresh", action="store_true", help="Forzar re-descarga ignorando la caché.")
    p_sources.set_defaults(func=cmd_check_sources)

    # audit
    p_audit = subparsers.add_parser("audit", help="Ejecuta reglas deterministas de auditoría sintáctica y léxica.")
    p_audit.add_argument("--fail-on-review", action="store_true", help="Termina con código de salida 1 si hay hallazgos.")
    p_audit.add_argument("--fetch", action="store_true", help="Intentar descargar fuentes web no presentes en la caché local.")
    p_audit.set_defaults(func=cmd_audit)

    # context
    p_context = subparsers.add_parser("context", help="Genera ficha de verificación compacta para IA (< 400 tokens).")
    p_context.add_argument("selector", help="Selector de la pregunta (ej: '1:9', '2:15').")
    p_context.add_argument("--format", choices=["md", "json"], default="md", help="Formato de salida (md o json).")
    p_context.set_defaults(func=cmd_context)

    # mark
    p_mark = subparsers.add_parser("mark", help="Marca preguntas como verificadas al día.")
    p_mark.add_argument("targets", nargs="*", help="Selectores de preguntas (ej: '3', '3:10', '3:10-20').")
    p_mark.add_argument("--all", action="store_true", help="Marcar todo el inventario.")
    p_mark.add_argument("--note", default="", help="Nota de revisión.")
    p_mark.set_defaults(func=cmd_mark)

    # flag
    p_flag = subparsers.add_parser("flag", help="Marca preguntas como pendientes de revisión.")
    p_flag.add_argument("targets", nargs="+", help="Selectores de preguntas.")
    p_flag.add_argument("--note", required=True, help="Motivo de la marca.")
    p_flag.set_defaults(func=cmd_flag)

    # urls
    p_urls = subparsers.add_parser("urls", help="Muestra el catálogo de URLs oficiales.")
    p_urls.set_defaults(func=cmd_urls)

    args = parser.parse_args()
    cert_dir = resolve_cert_dir(args.cert)
    config = load_config(cert_dir)
    args.func(config, args)


if __name__ == "__main__":
    main()
