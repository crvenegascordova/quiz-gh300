from __future__ import annotations

import hashlib
import re
from dataclasses import dataclass, field
from pathlib import Path


SOURCE_RE = re.compile(r"^Fuente oficial:\s*\[(.*?)\]\((.*?)\)\s*$", re.M)
BALOTARIO_RE = re.compile(r"^#\s+(?:Balotario|Test)\s+(\d+)", re.M)
PREGUNTA_RE = re.compile(r"^Pregunta\s+(\d+)\s*$", re.M)
RESPUESTA_RE = re.compile(r"^Respuesta correcta:\s*(.+)$", re.M)
EXPLICACION_RE = re.compile(r"^Explicaci[oó]n\s*$\n(.*?)(?=^Fuente oficial:|\Z)", re.M | re.S)


def normalize_text(text: str) -> str:
    """Normaliza texto colapsando múltiples espacios en blanco y eliminando bordes."""
    return re.sub(r"\s+", " ", text).strip()


def sha256(text: str) -> str:
    return hashlib.sha256(text.encode("utf-8")).hexdigest()


@dataclass
class Question:
    id: str
    balotario: int
    number: int
    question: str
    options: dict[str, str] = field(default_factory=dict)
    answer: str = ""
    explanation: str = ""
    source_title: str = ""
    source_url: str = ""
    content_hash: str = ""


def parse_balotarios(md_path: Path | str, cert_id: str) -> dict[str, Question]:
    """Parsea el archivo balotarios.md y retorna un diccionario {question_id: Question}.
    
    El content_hash se calcula sobre todas las líneas del bloque excepto la línea de 'Fuente oficial',
    asegurando compatibilidad total con el estado de verificación incremental.
    """
    path = Path(md_path).resolve()
    if not path.exists():
        raise FileNotFoundError(f"Archivo de preguntas no encontrado: {path}")

    content = path.read_text(encoding="utf-8")
    lines = content.splitlines()

    # Identificar bloques de preguntas respetando secciones de Balotario/Test
    current_balotario: int | None = None
    question_blocks: list[dict] = []
    current_block: dict | None = None

    for line in lines:
        bal_match = re.match(r"^#\s+(?:Balotario|Test)\s+(\d+)", line)
        if bal_match:
            if current_block is not None:
                question_blocks.append(current_block)
            current_balotario = int(bal_match.group(1))
            current_block = None
            continue

        q_match = re.match(r"^Pregunta\s+(\d+)$", line)
        if q_match and current_balotario is not None:
            if current_block is not None:
                question_blocks.append(current_block)
            current_block = {
                "balotario": current_balotario,
                "number": int(q_match.group(1)),
                "lines": [],
            }
            continue

        if current_block is not None:
            current_block["lines"].append(line)

    if current_block is not None:
        question_blocks.append(current_block)

    questions: dict[str, Question] = {}

    for block in question_blocks:
        bal = block["balotario"]
        num = block["number"]
        raw_lines = block["lines"]
        block_text = "\n".join(raw_lines)

        qid = f"{cert_id}-balotario-{bal}-{num}"

        # Extraer Fuente oficial y filtrar las líneas para content_hash
        source_title = ""
        source_url = ""
        body_lines: list[str] = []

        for ln in raw_lines:
            src_m = re.match(r"^Fuente oficial:\s*\[(.*?)\]\((.*?)\)\s*$", ln.strip())
            if src_m:
                source_title = src_m.group(1).strip()
                source_url = src_m.group(2).strip()
            else:
                body_lines.append(ln)

        # Hash del cuerpo de la pregunta (compatible con verification-state.json)
        content_hash = sha256(normalize_text(" ".join(body_lines)))

        # Extraer Respuesta correcta
        resp_m = RESPUESTA_RE.search(block_text)
        answer = resp_m.group(1).strip() if resp_m else ""

        # Extraer Explicación
        exp_m = EXPLICACION_RE.search(block_text)
        explanation = exp_m.group(1).strip() if exp_m else ""

        # Delimitar opciones antes de la respuesta correcta
        answer_pos = resp_m.start() if resp_m else len(block_text)
        options_region = block_text[:answer_pos]

        # Extraer Enunciado de la pregunta (entre inicio y la primera opción A-Z)
        q_text_m = re.search(r"^(.*?)(?=\n[A-Z]\.\s|\Z)", options_region, re.S)
        question_text = normalize_text(q_text_m.group(1)) if q_text_m else ""

        # Extraer opciones A, B, C, D...
        option_matches = list(re.finditer(r"(?m)^([A-Z])\.\s*", options_region))
        options: dict[str, str] = {}
        for idx, match in enumerate(option_matches):
            letter = match.group(1)
            start_pos = match.end()
            end_pos = option_matches[idx + 1].start() if idx + 1 < len(option_matches) else len(options_region)
            options[letter] = normalize_text(options_region[start_pos:end_pos])

        questions[qid] = Question(
            id=qid,
            balotario=bal,
            number=num,
            question=question_text,
            options=options,
            answer=answer,
            explanation=explanation,
            source_title=source_title,
            source_url=source_url,
            content_hash=content_hash,
        )

    return questions
