# Especificación: Simulador de Certificaciones Técnicas (GH-300 y Claude Certified Developer)

## Objetivo
Permitir que una persona seleccione entre múltiples certificaciones técnicas (GitHub Copilot GH-300 o Claude Certified Developer de Anthropic) y practique preguntas con retroalimentación inmediata, justificaciones técnicas oficiales, traducción instantánea, métricas de inventario y un resumen medible por competencia.

## Requisitos funcionales

- **Paso 00 (Selección de Certificación)**: La app inicia mostrando el selector de certificación donde el usuario escoge entre GitHub Copilot GH-300 o Claude Certified Developer. Cada opción cuenta con su insignia oficial representativa. Al seleccionar una, se configuran dinámicamente el pool de preguntas, tests, historial y guía de estudio correspondiente. Se dispone de la acción `← Cambiar certificación` para regresar a la selección en cualquier momento.
- **Terminología UI ("Test" en vez de "Balotario")**: En la interfaz de usuario, los grupos de preguntas se presentan de forma clara y moderna bajo el término "Test" (por ejemplo: "Test 1", "Test 2", "Todos los tests"), manteniendo la integridad del esquema subyacente de base de datos.
- **Traducción Instantánea (Bilingual Toggle)**: Para certificaciones redactadas en inglés (como Claude Certified Developer), la barra de acciones superiores ofrece el botón de traducción en vivo (`ES / EN - Traducir cuestionario` / `EN / ES - Ver en inglés`). Al alternarlo, las preguntas y opciones cambian de forma instantánea y reactiva entre el inglés original de certificación y la traducción al español, sin recargar la página ni perder el estado de la sesión.
- **Guías de Estudio Oficiales**: Cada certificación cuenta con un botón en la barra superior que abre un modal con el temario y pesos oficiales estructurados (Microsoft Learn para GH-300 y los 5 módulos de Anthropic Partners Skilljar para Claude Certified Developer).
- La sesión inicia con 30 preguntas por defecto (o el total disponible si es menor).
- La persona puede configurar entre 1 y el total de preguntas disponibles de la certificación elegida y seleccionar todos los tests o uno específico.
- Las preguntas se seleccionan aleatoriamente sin repetir dentro de una sesión.
- Se muestra una pregunta con sus opciones por pantalla.
- `Revisar respuesta` se habilita después de seleccionar una opción y muestra acierto/error, desglose del motivo de descarte para respuestas incorrectas según la documentación oficial de Microsoft/GitHub o Anthropic, explicación oficial y fuente. Al revisarse la pregunta, este botón se oculta automáticamente para dejar visible prioritariamente `Continuar`.
- `Continuar` solo se muestra y habilita después de revisar la respuesta, permitiendo avanzar a la siguiente pregunta o a la pantalla de resultados. Al avanzar a la siguiente pregunta, la interfaz realiza un desplazamiento suave (`scrollIntoView`) hacia el inicio de la tarjeta de la pregunta para una experiencia óptima en dispositivos móviles.
- Botón inferior de navegación / salida (`back-button`):
  - En la primera pregunta (`current === 0`): muestra el texto `Salir y configurar`. Si no hay selección activa ni revisión (`selected.length === 0 && !reviewed`), está habilitado y permite volver a la pantalla de configuración. Si hay opción seleccionada o está en revisión, se deshabilita y se torna gris.
  - En preguntas posteriores (`current > 0`): muestra el texto `Pregunta anterior`. Si la pregunta actual no tiene selección ni está en revisión, está habilitado y retrocede a la pregunta anterior mostrándola en **modo revisión solo lectura** (con sus respuestas previas, desglose de revisión y explicación oficial visible, sin poder alterar el puntaje ya registrado). Si hay opción seleccionada o está en revisión, se deshabilita y se torna gris.
- Botón superior de abandono (`abandon-button`): en la cabecera `quiz-topline` se ubica una acción clara `✕ Abandonar examen` con confirmación mediante modal elegante para salir y reiniciar la sesión en cualquier momento.
- Botón de historial local (`history-button`): al hacer clic en `Ver mis exámenes`, se despliega u oculta el panel de historial. Mientras esté abierto/desplegado, la flecha visible en el botón debe apuntar hacia arriba (`↑`) y su atributo de accesibilidad debe ser `aria-expanded="true"`. Al cerrarse, la flecha retorna hacia abajo (`↓`) con `aria-expanded="false"`.
- Accesibilidad y cursores de formulario: todos los elementos interactivos `input` (número de preguntas, checkboxes de opciones) y `select` (origen de tests) deben desplegar el cursor de manito interactiva (`cursor: pointer`) al posicionar el cursor sobre ellos, y cursor restringido (`cursor: not-allowed`) en estado deshabilitado.
- El resultado muestra porcentaje, aciertos, errores y desempeño por competencia técnica de la certificación activa.
- Feedback explicativo y estructurado ante errores: prohibidas respuestas vagas. La retroalimentación debe dividirse explícitamente en:
  - Justificación del error: por qué la opción seleccionada es incorrecta o en qué contexto fallaría.
  - Justificación de la respuesta correcta: fundamento técnico, arquitectura, seguridad o buenas prácticas.
  - Referencia exacta: sección, herramienta o documentación oficial de GitHub Docs, Microsoft Learn o Anthropic.
- Sistema de registro y repaso de errores:
  - En el listado de cuestionarios realizados (historial) y en el panel de resultados finales, se muestra un resumen con el número, test y enunciado de las preguntas en las que hubo error.
  - Se ofrece explícitamente la opción: "¿Deseas generar un nuevo cuestionario corto únicamente con las preguntas que fallaste para volver a practicarlas?", con acción para iniciar la práctica de esos errores específicos.
  - Además, en el panel de historial y en la configuración inicial, se consolida el banco global de todas las preguntas falladas acumuladas de todos los exámenes, ofreciendo la opción: "¿Deseas realizar un test con todas las preguntas fallidas en tus exámenes?" con cantidad configurable entre 1 y el total de errores acumulados.
- Control de inventario y métricas de cobertura acumuladas:
  - Se lleva registro de todas las preguntas de los tests (458 para GH-300 y 308 para Claude Developer, totalizando 766 preguntas) y de las preguntas únicas ya practicadas en exámenes anteriores por certificación.
  - Tanto al finalizar cada examen como en el panel de historial de exámenes realizados, se presenta una tabla de cobertura con: Total de preguntas existentes en los tests, Preguntas que ya han salido en exámenes practicados (con porcentaje de cobertura) y Preguntas que aún no han salido.
  - Se ofrece explícitamente la opción: "¿Deseas realizar un cuestionario compuesto exclusivamente por preguntas que aún no has respondido?", permitiendo al usuario configurar explícitamente el número de preguntas a practicar (con control numérico dinámico entre 1 y la cantidad disponible, sin forzar 30 por defecto).
  - En la pantalla de configuración inicial, el selector de origen permite escoger "Solo preguntas aún no vistas" o "Repasar preguntas falladas históricas", ajustando dinámicamente el límite máximo y texto de ayuda del campo de cantidad.
- La interfaz funciona en pantallas móviles y de escritorio y permite navegación mediante teclado.
- El historial de exámenes adapta su presentación en pantallas móviles: cada intento se muestra como una tarjeta legible, sin desplazamiento horizontal obligatorio, conservando fecha, test, resultado, preguntas, aciertos e incorrectas.

## Categorías y Ponderaciones Oficiales GH-300

Documentadas en [`content/certifications/gh-300/study-guide.md`](content/certifications/gh-300/study-guide.md):

- **Uso de las características de Copilot de GitHub (25–30%):** IDE, CLI interactiva (`gh copilot`), Agent Mode, Copilot Edits, Model Context Protocol (MCP), Sub-Agents, archivos de instrucciones (`.github/copilot-instructions.md`), resúmenes de PR, Spaces, Spark, eventos de registro de auditoría y API REST.
- **Uso responsable de GitHub Copilot (15–20%):** Principios de IA responsable de Microsoft, sesgos, mitigación de riesgos de LLMs, limitación de daños y supervisión humana activa (*Human-in-the-loop*).
- **Comprender los datos y la arquitectura de GitHub Copilot (10–15%):** Pipeline de inferencia, proxy seguro, filtros de toxicidad, postprocesamiento, políticas de retención y aislamiento en el Microsoft Trust Center.
- **Aplicar ingeniería rápida y creación de contexto (10–15%):** Estructura del prompt, principios 4S (Single, Specific, Short, Surround), Zero-shot, Few-shot, contexto local del IDE e historial de chat.
- **Mejora de la productividad del desarrollador (10–15%):** Generación de código idiomático, refactorización de código heredado, pruebas unitarias e integración, análisis de casos perimetrales y seguridad.
- **Configurar privacidad, exclusiones de contenido y medidas de seguridad (10–15%):** Exclusiones de contenido (`.github/copilot-content-exclusion`), filtro de coincidencia de código público (*public code matching*) y resolución de problemas de conectividad corporativa.

## Módulos Oficiales Claude Certified Developer (Anthropic Partners)

Documentados en [`content/certifications/claude-certified-developer/study-guide.md`](content/certifications/claude-certified-developer/study-guide.md):

- **MSO Foundations (57 min):** Selección de modelos de la familia Claude 3/3.5 (Sonnet, Haiku, Opus), parámetros de inferencia (`temperature`, `top_p`, `top_k`, `max_tokens`), ventana de contexto de 200k tokens, cálculo de costes/latencia y capacidades multimodales.
- **Production-Grade Prompting, Agents & Tool Use (209 min):** Ingeniería de prompts estructurados con etiquetas XML, prefill de respuestas, Tool Use (Function Calling) con JSON Schema estricto, Prompt Caching (`cache_control: {"type": "ephemeral"}`) y patrones agenticos (Chaining, Routing, Parallelization, Orchestrator-Workers, Evaluator-Optimizer).
- **Claude Code, MCP & Integration (142 min):** Configuración con `CLAUDE.md`, sub-agentes y hooks en Claude Code, arquitectura abierta del Model Context Protocol (MCP: tools, resources, prompts, transportes `stdio` y `SSE`) e integraciones con SDKs Messages API y streaming.
- **Production Engineering, Evals & Security (211 min):** Suites de evaluación (evals continuos en CI/CD), resiliencia ante errores HTTP 429 y 529 con backoff exponencial y jitter, mitigación de inyecciones de prompts y jailbreaks, sandboxing y privacidad de datos/PII.
- **Accelerators & IP Contribution (155 min):** Empaquetado y reusabilidad de aceleradores, desacoplamiento determinista vs. LLM, mejores prácticas en SDLC (prompts como código en CI), estrategias de despliegue (feature flags, pruebas A/B), optimización asíncrona con Batch API y observabilidad distribuida.

## Criterios de aceptación

- Cada sesión contiene exactamente el límite solicitado o la cantidad disponible en el test elegido.
- No se puede avanzar sin revisar una respuesta.
- Al hacer clic en 'Revisar respuesta', dicho botón se oculta de la vista (`hidden`), quedando visible el botón principal 'Continuar'.
- Al pasar a una nueva pregunta no revisada, 'Revisar respuesta' reaparece (deshabilitado hasta que se marque una opción) y 'Continuar' se oculta.
- Al pulsar 'Continuar', la pantalla se desplaza suavemente hacia el inicio del panel de la pregunta.
- En la pregunta inicial (`current === 0`), el botón inferior dice `Salir y configurar`, activo únicamente con selección vacía; al seleccionar o revisar se deshabilita en gris.
- A partir de la segunda pregunta (`current > 0`), el botón inferior cambia a `Pregunta anterior`, activo únicamente sin selección en la pregunta actual; al pulsar retrocede y muestra la pregunta previa en solo lectura de su revisión ya efectuada.
- La cabecera del examen incluye `✕ Abandonar examen` con confirmación antes de resetear la sesión.
- En certificaciones con traducción disponible, el botón superior permite alternar fluidamente entre inglés y español sin recargar la sesión ni perder selecciones.
- Al hacer clic en 'Ver mis exámenes', el panel de historial se abre y el icono del botón cambia a flecha arriba `↑` con `aria-expanded="true"`; al pulsar de nuevo se cierra y vuelve a flecha abajo `↓`.
- Al pasar el cursor sobre cualquier `input` o `select`, el puntero del ratón muestra la manito interactiva (`cursor: pointer`), con `cursor: not-allowed` en caso de inputs deshabilitados.
- En móvil, cada examen del historial se presenta en una tarjeta con sus seis datos identificados y sin requerir una tabla más ancha que la pantalla.
- Al finalizar, la suma de aciertos e incorrectas coincide con el total de preguntas.
- Las preguntas de respuesta múltiple (ej. "A y B", "A, D") se evalúan como correctas si y solo si se seleccionan exactamente todas las opciones requeridas, con total independencia del orden de selección.
- Ante una respuesta incorrecta, el sistema presenta un desglose estructurado indicando cada opción errónea seleccionada y su motivo de descarte fundamentado en fuentes oficiales de Microsoft Learn / GitHub Copilot o Anthropic.
- Cada categoría presentada incluye preguntas respondidas y un porcentaje calculado sobre su propio total.
- Ante una respuesta incorrecta, se despliegan tres secciones claramente identificadas: Justificación del error, Justificación de la respuesta correcta y Referencia exacta. Prohibido el uso de explicaciones vacías o justificaciones genéricas sin fundamento técnico.
- En el historial y en el resultado final, se lista cada pregunta fallada con su número, test y enunciado, acompañada de la opción y botón "¿Deseas generar un nuevo cuestionario corto únicamente con las preguntas que fallaste para volver a practicarlas?".
- En el panel de historial y pantalla de configuración, se ofrece la opción consolidada de realizar un test con todas las preguntas fallidas acumuladas en exámenes anteriores, con control numérico para ajustar el límite del examen.
- Al terminar un examen y al consultar el historial de exámenes realizados, se renderiza la tabla de cobertura con Total de preguntas existentes en los tests, Preguntas practicadas (con %) y Preguntas pendientes, acompañada de la opción y botón "¿Deseas realizar un cuestionario compuesto exclusivamente por preguntas que aún no has respondido?" con campo configurable para definir cuántas preguntas practicar.
- Las explicaciones enlazan a una fuente oficial incluida en el dataset.
- Toda modificación de reglas o evaluación debe estar respaldada por pruebas unitarias automatizadas (`bun test`).

## Evolución

- Mantener el dataset separado de la presentación para incorporar nuevas preguntas sin reescribir la interfaz.
- Mantener el estado de sesión aislado para añadir persistencia, historial y modos de examen posteriormente.
- Validar cambios del esquema de preguntas antes de construir la aplicación.
