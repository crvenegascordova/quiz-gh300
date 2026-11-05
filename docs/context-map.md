# Mapa de contexto del proyecto

## Fuente de verdad

- `content/certifications/gh-300/balotarios.md`: 458 preguntas organizadas en 7 balotarios (Balotarios 1-6 de 70 preguntas y Balotario 7 de 38 preguntas certificadas de ghcertified), respuestas, explicaciones y fuentes oficiales.
- `content/certifications/gh-300/study-guide.md`: Guía de estudio oficial de Microsoft para GH-300.
- `content/certifications/claude-certified-developer/balotarios.md`: Balotario de 308 preguntas en 6 balotarios para la certificación Claude Certified Developer de Anthropic, categorizado en los 5 módulos oficiales de Anthropic Partners:
  1. `MSO Foundations`
  2. `Production-Grade Prompting, Agents & Tool Use`
  3. `Claude Code, MCP & Integration`
  4. `Production Engineering, Evals & Security`
  5. `Accelerators & IP Contribution`
- `content/certifications/claude-certified-developer/study-guide.md`: Guía de estudio oficial basada en los 5 módulos de Anthropic Partners Skilljar.
- `src/data/certifications/`: datasets compilados en formato JSON (`gh-300.json`, `claude-certified-developer.json`) y registro de metadatos (`index.ts`).
- `scripts_prepare_questions.py`: compila los archivos Markdown de cada certificación a sus respectivos datasets JSON.
- `specs/quiz-gh300.md`: requisitos funcionales y criterios de aceptación.

## Flujo de datos

`content/certifications/<id>/balotarios.md` → `scripts_prepare_questions.py` → `src/data/certifications/<id>.json` → `src/pages/index.astro` → `Layout.astro` → `quiz-client.ts`

## Arquitectura Multi-Certificación y Estado de la Sesión

- `CertificationSelector.astro`: Paso 0 inicial donde el usuario selecciona la certificación a practicar (GitHub Copilot GH-300 o Claude Certified Developer).
- Al seleccionar una certificación, la app inicializa el pool de preguntas, balotarios disponibles, guía de estudio e historial filtrado para esa certificación.
- `HeroSection.astro`: Dispone del botón accesible `← Cambiar certificación` para regresar al selector.
- `src/pages/api/attempts.ts`: Soporta el parámetro `?certification=<id>` y almacena la columna `certification` en SQLite para aislar historiales, preguntas falladas y métricas de cobertura entre certificaciones.
- `questions`: preguntas seleccionadas para la sesión activa.
- `current`: índice de la pregunta visible.
- `selected`: opciones elegidas.
- `reviewed`: controla que la revisión ocurra antes de avanzar.
- `answers`: resultado por pregunta y categoría.

## Puntos de extensión

- Modo de repaso de preguntas falladas: generación de cuestionario focalizado en errores anteriores guardados en base de datos (tanto por sesión individual como consolidando todas las preguntas falladas acumuladas en todos los exámenes).
- Control de inventario y cobertura: cálculo del total de preguntas del balotario, porcentaje de cobertura de preguntas practicadas y generación de cuestionarios con preguntas no vistas configurables en cantidad (disponible tanto en resultados como en el historial).
- Feedback estructurado en tres niveles (justificación del error, justificación de la respuesta correcta y referencia exacta oficial).
- Control visual del historial local (indicador direccional de flecha y accesibilidad ARIA).
- Presentación responsive del historial: tabla en escritorio y tarjetas por examen en móvil con desglose de fallos.
- Estándares de microinteracción y usabilidad en controles de formulario (`cursor: pointer` en inputs y selects).
- Añadir filtros por competencia GH-300.
- Añadir importación de nuevas fuentes conservando `source.url` y `source.title`.
- Validar el esquema del dataset durante la preparación.

## Convención de cambios

Antes de modificar la interfaz, revisar la especificación y el flujo de datos. Después de modificar el contenido de `content/certifications/<id>/balotarios.md`, regenerar los datasets ejecutando `python3 scripts_prepare_questions.py` y ejecutar `bun test && npm run lint && bun run build`.
