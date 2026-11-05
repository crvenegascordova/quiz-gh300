"""
Script para convertir los archivos JSON de preguntas de Claude Certified Developer
(ClaudeCertifiedDeveloperTest1.json ... Test6.json) al formato estándar de balotarios Markdown (.md)
"""
import json
from pathlib import Path

def get_official_source(text):
    lowered = text.lower()
    if "computer use" in lowered:
        return ("Anthropic Docs: Computer use", "https://docs.anthropic.com/en/docs/agents-and-tools/computer-use")
    if "model context protocol" in lowered or "mcp" in lowered:
        return ("Anthropic Docs: Model Context Protocol (MCP)", "https://docs.anthropic.com/en/docs/agents-and-tools/mcp")
    if "prompt cach" in lowered or "cache_control" in lowered or "cached token" in lowered:
        return ("Anthropic Docs: Prompt caching", "https://docs.anthropic.com/en/docs/build-with-claude/prompt-caching")
    if "tool use" in lowered or "function call" in lowered or "tool_choice" in lowered or "tool_result" in lowered or "tools parameter" in lowered:
        return ("Anthropic Docs: Tool use (function calling)", "https://docs.anthropic.com/en/docs/build-with-claude/tool-use")
    if "vision" in lowered or "pdf" in lowered or "image" in lowered:
        return ("Anthropic Docs: Vision and document processing", "https://docs.anthropic.com/en/docs/build-with-claude/vision")
    if "agent" in lowered or "prompt chain" in lowered or "orchestrator" in lowered or "routing" in lowered or "evaluator" in lowered or "workflow" in lowered:
        return ("Anthropic Research: Building effective agents", "https://www.anthropic.com/research/building-effective-agents")
    if "xml" in lowered or "system prompt" in lowered or "few-shot" in lowered or "prefill" in lowered or "cot" in lowered or "chain of thought" in lowered:
        return ("Anthropic Docs: Prompt engineering best practices", "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview")
    return ("Anthropic Docs: Claude developer guide & API reference", "https://docs.anthropic.com/en/docs/welcome")

def convert():
    output_lines = []
    base_user_path = Path.home()

    for balotario_num in range(1, 7):
        candidates = [
            base_user_path / f"ClaudeCertifiedDeveloperTest{balotario_num}.json",
            Path(__file__).parent / f"ClaudeCertifiedDeveloperTest{balotario_num}.json",
            Path(__file__).parent / "content" / "raw" / f"ClaudeCertifiedDeveloperTest{balotario_num}.json",
        ]
        json_path = next((c for c in candidates if c.exists()), None)
        if not json_path:
            print(f"Aviso: No se encontró ClaudeCertifiedDeveloperTest{balotario_num}.json")
            continue

        questions = json.loads(json_path.read_text(encoding='utf-8'))
        print(f"Procesando Balotario {balotario_num}: {len(questions)} preguntas")

        output_lines.append(f"# Balotario {balotario_num}")
        output_lines.append("")
        output_lines.append(f"Cuestionario de práctica: Claude Certified Developer - Test {balotario_num}")
        output_lines.append("Preguntas en inglés con clave de respuestas")
        output_lines.append("Preguntas")
        output_lines.append("")

        for q in questions:
            q_num = q.get("number")
            q_text = q.get("question", "").strip()
            answers = q.get("answers", [])
            correct = q.get("correct_answers", [])
            explication = q.get("explication", "").strip()

            output_lines.append(f"Pregunta {q_num}")
            output_lines.append(q_text)
            for a in answers:
                output_lines.append(a.strip())
            output_lines.append("")

            if len(correct) == 1:
                ans_str = correct[0]
            elif len(correct) == 2:
                ans_str = f"{correct[0]} y {correct[1]}"
            else:
                ans_str = f"{', '.join(correct[:-1])} y {correct[-1]}"

            output_lines.append(f"Respuesta correcta: {ans_str}")
            output_lines.append("")
            output_lines.append("Explicación")
            output_lines.append(explication)
            output_lines.append("")

            source_title, source_url = get_official_source(f"{q_text} {explication}")
            output_lines.append(f"Fuente oficial: [{source_title}]({source_url})")
            output_lines.append("")

    target_path = Path(__file__).parent / "content" / "certifications" / "claude-certified-developer" / "balotarios.md"
    target_path.parent.mkdir(parents=True, exist_ok=True)
    target_path.write_text("\n".join(output_lines), encoding="utf-8")
    print(f"Balotarios Markdown generados exitosamente en: {target_path}")

if __name__ == "__main__":
    convert()
