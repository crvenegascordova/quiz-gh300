from __future__ import annotations

import re
from typing import Any

from scripts.cert_audit.parser import Question
from scripts.cert_audit.rules import answer_letters, content_keywords


def extract_relevant_excerpt(
    clean_text: str,
    query_text: str,
    max_words: int = 250,
) -> str:
    """Extrae el fragmento más relevante de la fuente oficial en base a coincidencia léxica."""
    if not clean_text:
        return "(No se dispone de texto cacheado para esta fuente oficial)"

    # Dividir el texto en bloques de párrafos separados por líneas en blanco o saltos de sección
    raw_blocks = re.split(r"\n{2,}", clean_text)
    paragraphs = [p.strip() for p in raw_blocks if len(p.strip()) > 15]
    if not paragraphs:
        paragraphs = [clean_text[:1000]]

    query_words = content_keywords(query_text)
    if not query_words:
        return paragraphs[0][:800]

    scored_paragraphs: list[tuple[float, str]] = []
    for p in paragraphs:
        p_words = content_keywords(p)
        overlap = p_words & query_words
        score = len(overlap)
        # Bonificación si contiene números o palabras clave específicas de más de 6 letras
        for w in overlap:
            if len(w) > 6:
                score += 0.5
        scored_paragraphs.append((score, p))

    scored_paragraphs.sort(key=lambda x: x[0], reverse=True)

    selected: list[str] = []
    current_words = 0
    for score, p in scored_paragraphs:
        # Si ya seleccionamos párrafos relevantes con score > 0, no agregar párrafos con 0 coincidencia
        if score <= 0 and selected:
            break
        words_in_p = len(p.split())
        if current_words + words_in_p <= max_words or not selected:
            selected.append(p)
            current_words += words_in_p
        if current_words >= max_words:
            break

    return "\n\n".join(selected)


def build_ai_context(
    question: Question,
    clean_text: str,
    review_reason: str = "revisión solicitada",
    format_type: str = "md",
) -> str | dict[str, Any]:
    """Genera una ficha de verificación ultra-compacta (< 400 tokens) para la IA."""
    letters = sorted(answer_letters(question.answer))
    correct_options_text = " ".join(question.options.get(l, "") for l in letters)
    search_context = f"{question.question} {correct_options_text} {question.explanation}"

    excerpt = extract_relevant_excerpt(clean_text, search_context, max_words=250)

    if format_type == "json":
        return {
            "id": question.id,
            "balotario": question.balotario,
            "number": question.number,
            "review_reason": review_reason,
            "question": question.question,
            "options": question.options,
            "registered_answer": question.answer,
            "explanation": question.explanation,
            "official_source": {
                "title": question.source_title,
                "url": question.source_url,
                "relevant_excerpt": excerpt,
            },
        }

    # Formato Markdown
    options_md = "\n".join(f"  {k}. {v}" for k, v in sorted(question.options.items()))
    md = f"""### PREGUNTA A VERIFICAR [ID: {question.id}]
- **Motivo de revisión**: {review_reason}
- **Enunciado**: {question.question}
- **Opciones**:
{options_md}
- **Respuesta registrada**: {question.answer}
- **Explicación actual**: {question.explanation}

### EXTRACTO OFICIAL RELEVANTE (Documentación Oficial):
> {excerpt.replace("\n", "\n> ")}

- **Fuente oficial**: [{question.source_title or 'Doc'}]({question.source_url})

### INSTRUCCIÓN PARA LA IA:
Comprueba si la respuesta registrada ({question.answer}) y su explicación se sustentan en el extracto oficial. Responde en JSON estricto:
{{"valid": true|false, "correction_needed": true|false, "suggested_answer": "{question.answer}", "notes": "..."}}
"""
    return md
