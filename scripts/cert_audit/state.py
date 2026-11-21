from __future__ import annotations

import json
import re
from datetime import date
from pathlib import Path

from scripts.cert_audit.parser import Question


def load_json(path: Path) -> dict:
    if not path.exists():
        return {}
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except Exception:
        return {}


def save_json(path: Path, data: dict) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(data, ensure_ascii=False, indent=2, sort_keys=True) + "\n", encoding="utf-8")


def get_review_reason(
    question: Question,
    state_entry: dict | None,
    source_hashes: dict,
) -> str | None:
    """Retorna el motivo por el cual una pregunta requiere revisión, o None si está al día."""
    if not state_entry:
        return "sin verificar"
    if state_entry.get("status") != "verified":
        return f"status={state_entry.get('status')}"
    if state_entry.get("content_hash") != question.content_hash:
        return "contenido modificado"
    if state_entry.get("source_url") != question.source_url:
        return "fuente cambiada de URL"

    cur_hash = source_hashes.get(question.source_url, {}).get("hash")
    st_hash = state_entry.get("source_hash")
    if cur_hash and st_hash and cur_hash != st_hash:
        return "fuente oficial modificada"

    return None


def select_question_ids(
    questions: dict[str, Question],
    specs: list[str],
    select_all: bool = False,
) -> list[str]:
    """Selecciona IDs de preguntas mediante expresiones: 'all', '3', '3:10', '3:10-20'."""
    if select_all:
        return list(questions.keys())

    selected: list[str] = []
    for s in specs:
        if s.lower() == "all" or s.lower() == "--all":
            return list(questions.keys())

        m = re.fullmatch(r"(\d+)(?::(\d+)(?:-(\d+))?)?", s.strip())
        if not m:
            raise ValueError(f"Selector de pregunta inválido: '{s}'. Formatos válidos: '3', '3:10', '3:10-20'.")

        bal = int(m.group(1))
        start_q = int(m.group(2)) if m.group(2) is not None else None
        end_q = int(m.group(3)) if m.group(3) is not None else start_q

        for qid, q in questions.items():
            if q.balotario != bal:
                continue
            if start_q is None:
                selected.append(qid)
            elif start_q <= q.number <= (end_q or start_q):
                selected.append(qid)

    return selected


def mark_verified(
    state_path: Path,
    hashes_path: Path,
    questions: dict[str, Question],
    target_ids: list[str],
    note: str = "",
) -> int:
    state = load_json(state_path)
    hashes = load_json(hashes_path)
    today_str = date.today().isoformat()

    for qid in target_ids:
        q = questions[qid]
        src_hash = hashes.get(q.source_url, {}).get("hash", "")
        state[qid] = {
            "last_verified_at": today_str,
            "source_url": q.source_url,
            "source_hash": src_hash,
            "content_hash": q.content_hash,
            "status": "verified",
            "review_notes": note or state.get(qid, {}).get("review_notes", ""),
        }

    save_json(state_path, state)
    return len(target_ids)


def flag_for_review(
    state_path: Path,
    target_ids: list[str],
    note: str,
) -> int:
    state = load_json(state_path)
    for qid in target_ids:
        entry = state.get(qid, {})
        entry.update({
            "status": "needs_review",
            "review_notes": note,
            "last_verified_at": entry.get("last_verified_at", ""),
        })
        state[qid] = entry

    save_json(state_path, state)
    return len(target_ids)
