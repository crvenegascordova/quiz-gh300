from pathlib import Path
import json
import re

source = Path(__file__).parent / "balotarios.md"
target = Path(__file__).parent / "src" / "data" / "questions.json"
text = source.read_text(encoding="utf-8")
category_rules = [
    ("responsible", "Uso responsable de GitHub Copilot", ("responsab", "ético", "sesgo", "bias", "riesgo", "validar", "limitación", "limitaciones")),
    ("features", "Funciones de GitHub Copilot", ("chat", "ide", "inline", "cli", "pull request", "resumen", "knowledge base", "refactor", "documentación")),
    ("architecture", "Datos y arquitectura de GitHub Copilot", ("pipeline", "flujo de datos", "servidor", "modelo", "proxy", "almacena", "entrenamiento", "contexto local")),
    ("prompting", "Ingeniería de prompts y contexto", ("prompt", "few-shot", "zero-shot", "historial", "comentario", "contexto", "restriccion", "restricción")),
    ("productivity", "Productividad del desarrollador", ("productividad", "legacy", "boilerplate", "performance", "rendimiento", "función", "código", "scraper")),
    ("privacy", "Privacidad, exclusiones y salvaguardas", ("exclus", "privacidad", "pii", "gdpr", "hipaa", "licencia", "propiedad intelectual", "duplic", "audit", "seguridad")),
]

def category_for(question):
    lowered = question.lower()
    scores = [(sum(term in lowered for term in terms), key, label) for key, label, terms in category_rules]
    _, key, label = max(scores)
    return {"id": key, "name": label}

items = []
for section in re.split(r"(?m)(?=^# Balotario \d+\s*$)", text):
    if not section.strip():
        continue
    balotario = re.search(r"^# (Balotario \d+)", section, re.M).group(1)
    for match in re.finditer(r"(?ms)^Pregunta\s+(\d+)\s*$.*?(?=^Pregunta\s+\d+\s*$|\Z)", section):
        block = match.group(0)
        number = int(match.group(1))
        answer_match = re.search(r"^Respuesta correcta:\s*(.+)$", block, re.M)
        explanation_match = re.search(r"(?ms)^Explicación\s*$\n(.*?)(?=^Fuente oficial:)", block)
        source_match = re.search(r"^Fuente oficial:\s*\[([^]]+)\]\(([^)]+)\)", block, re.M)
        if not answer_match or not explanation_match or not source_match:
            raise SystemExit(f"Bloque incompleto: {balotario}, pregunta {number}")
        content = block[:answer_match.start()]
        lines = content.splitlines()[1:]
        options = []
        option = None
        question_lines = []
        for line in lines:
            option_match = re.match(r"^([A-E])\.\s*(.*)$", line)
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
        items.append({
            "id": f"{balotario.lower().replace(' ', '-')}-{number}",
            "balotario": balotario,
            "number": number,
            "question": question,
            "options": options,
            "correctAnswer": answer_match.group(1).strip(),
            "explanation": explanation_match.group(1).strip(),
            "source": {"title": source_match.group(1), "url": source_match.group(2)},
            "category": category_for(question),
        })

if len(items) != 420:
    raise SystemExit(f"Se esperaban 420 preguntas y se encontraron {len(items)}")
target.parent.mkdir(parents=True, exist_ok=True)
target.write_text(json.dumps(items, ensure_ascii=False, indent=2), encoding="utf-8")
print(f"Generadas {len(items)} preguntas en {target}")
