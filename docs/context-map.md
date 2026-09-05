# Mapa de contexto del proyecto

## Fuente de verdad

- `balotarios.md`: 420 preguntas, respuestas, explicaciones y fuentes oficiales.
- `src/data/questions.json`: dataset consumido por la aplicación.
- `scripts_prepare_questions.py`: transforma el Markdown en datos estructurados.
- `specs/quiz-gh300.md`: requisitos funcionales y criterios de aceptación.

## Flujo de datos

`balotarios.md` → `scripts_prepare_questions.py` → `src/data/questions.json` → `src/pages/index.astro`

## Estado de la sesión

- `questions`: preguntas seleccionadas.
- `current`: índice de la pregunta visible.
- `selected`: opción elegida.
- `reviewed`: controla que la revisión ocurra antes de avanzar.
- `answers`: resultado por pregunta y categoría.

## Puntos de extensión

- Sustituir el selector aleatorio por modos de práctica, examen y preguntas falladas.
- Persistir sesiones e historial sin modificar el formato de presentación.
- Control visual del historial local (indicador direccional de flecha y accesibilidad ARIA).
- Presentación responsive del historial: tabla en escritorio y tarjetas por examen en móvil.
- Estándares de microinteracción y usabilidad en controles de formulario (`cursor: pointer` en inputs y selects).
- Añadir filtros por competencia GH-300.
- Añadir importación de nuevas fuentes conservando `source.url` y `source.title`.
- Validar el esquema del dataset durante la preparación.

## Convención de cambios

Antes de modificar la interfaz, revisar la especificación y el flujo de datos. Después de modificar el dataset, regenerar `src/data/questions.json` y ejecutar `bun run build`.
