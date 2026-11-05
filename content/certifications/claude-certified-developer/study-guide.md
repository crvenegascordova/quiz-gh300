# Guía de estudio: Claude Certified Developer

## Finalidad de este documento
Esta guía resume las competencias clave y temas evaluados basados en los 5 módulos oficiales del programa **Claude Certified Developer Foundations** de Anthropic Partners.

## Áreas y módulos oficiales del examen

### 1. MSO Foundations (57 min)
- Fundamentos y selección de la familia de modelos Claude 3 y 3.5:
  - **Claude 3.5 Sonnet**: balance ideal de alta inteligencia, razonamiento avanzado y velocidad de respuesta.
  - **Claude 3.5 Haiku**: optimizado para máxima velocidad, alta concurrencia y bajo coste unitario.
  - **Claude 3 Opus**: diseñado para tareas de máxima complejidad intelectual y análisis de dominio profundo.
- Parámetros de inferencia:
  - `temperature`: control de aleatoriedad (cero para respuestas deterministas y reproducibles).
  - `top_p` (nucleus sampling) y `top_k`: filtrado de probabilidad de tokens.
  - `max_tokens` y `stop_sequences`: limitación y corte exacto de generación.
- Ventana de contexto de 200.000 tokens: cálculo de ratio de entrada vs. salida, presupuestos de tokens y trade-offs de latencia.
- Capacidades de visión y multimodalidad: buenas prácticas para el envío de imágenes, diagramas técnicos y documentos en base64 o URL.
- Versionado de API: uso de encabezados de versión `anthropic-version: 2023-06-01`.

### 2. Production-Grade Prompting, Agents & Tool Use (209 min)
- **Ingeniería de prompts avanzada con XML**:
  - Estructuración semántica limpia con etiquetas personalizadas (`<instructions>`, `<context>`, `<documents>`, `<examples>`, `<output_format>`).
  - Rol de los mensajes de sistema (`system` parameter) para definir personalidad, directivas inviolables y esquemas de respuesta.
  - Prefill del turno del asistente (`{"role": "assistant", "content": "{"}`): forzado infalible de JSON y eliminación de preámbulos conversacionales.
  - Few-shot prompting y Chain-of-Thought (CoT) para descomponer problemas analíticos complejos.
- **Tool Use (Function Calling)**:
  - Definición de esquemas de herramientas usando JSON Schema estricto.
  - Ciclo de vida completo: el cliente envía definiciones de `tools` -> el modelo emite `stop_reason: tool_use` con parámetros en `input` -> el cliente ejecuta de forma segura y devuelve `type: tool_result` con `content` e `is_error` si corresponde.
  - Control de selección con `tool_choice`: `auto` (decisión del modelo), `any` (forzar invocación de alguna herramienta) o `{"type": "tool", "name": "..."}` (forzar herramienta específica).
- **Prompt Caching**:
  - Marcado de prefijos estáticos (documentación, prompts largos, esquemas de herramientas) con `cache_control: {"type": "ephemeral"}`.
  - Reducción de hasta un 90% en costos de tokens de entrada y hasta un 80% en latencia.
  - TTL efímero de 5 minutos que se renueva automáticamente con cada lectura de caché.
- **Arquitectura de Agentes y Patrones de Sistemas**:
  - *Prompt Chaining*: descomposición lineal en pasos secuenciales predeterminados.
  - *Routing*: clasificación inicial que redirige la consulta a prompts especializados.
  - *Parallelization*: ejecución concurrente de sub-tareas divididas (sectioning) o agregación de votos (voting).
  - *Orchestrator-Workers*: un coordinador central descompone tareas dinámicamente y despacha trabajadores en paralelo.
  - *Evaluator-Optimizer*: bucles iterativos de generación, crítica y refinamiento continuo.
  - *Computer Use API*: control programático de interfaces gráficas de usuario.

### 3. Claude Code, MCP & Integration (142 min)
- **Claude Code**:
  - Configuración y contexto a través del archivo `CLAUDE.md` en el repositorio (guías de estilo, convenciones del proyecto, arquitectura).
  - Definición de sub-agentes en Claude Code para tareas especializadas y repetitivas.
  - Seguridad y control de ejecución: hooks en Claude Code para validar o interceptar comandos antes de ejecutarse.
- **Model Context Protocol (MCP)**:
  - Arquitectura estándar abierta cliente-servidor que desacopla los modelos de las fuentes de datos y herramientas externas.
  - Primitivas clave:
    - *Tools*: funciones ejecutables que el modelo puede solicitar que se ejecuten.
    - *Resources*: datos y contenidos contextuales leíbles por el cliente (archivos, bases de datos).
    - *Prompts*: plantillas de prompts interactivas y reutilizables expuestas por el servidor.
  - Capas de transporte:
    - `stdio`: comunicación por entrada/salida estándar para procesos y herramientas locales.
    - `SSE` (Server-Sent Events): transporte HTTP para servicios MCP remotos en la nube.
- **Integración con SDKs y Messages API**:
  - Clientes oficiales en TypeScript/JavaScript y Python (`anthropic`).
  - Streaming en tiempo real con `client.messages.stream()` y eventos delta para UX interactiva y baja latencia percibida.

### 4. Production Engineering, Evals & Security (211 min)
- **Suites de evaluación (Evals) y benchmarking**:
  - Creación de datasets de prueba rigurosos con datos de validación (ground truth).
  - Estrategias de evaluación: validaciones deterministas basadas en código vs. evaluación LLM-as-a-judge para criterios cualitativos.
  - Integración de evals continuos en pipelines de CI/CD para evitar degradaciones silenciosas ante cambios de prompts.
- **Resiliencia y gestión de tráfico**:
  - Manejo de excepciones de la API: HTTP 429 (`rate_limit_error`) y HTTP 529 (`overloaded_error`).
  - Implementación de reintentos automáticos con retroceso exponencial y variación aleatoria (exponential backoff with jitter).
  - Aislamiento de tenants mediante límites de cuota para evitar inanición de recursos (*noisy neighbor*).
- **Seguridad y Guardrails**:
  - Mitigación de inyecciones de prompts directas (jailbreaks) e indirectas (datos externos no confiables en documentos o navegación).
  - Sandboxing riguroso y principio de privilegios mínimos para credenciales entregadas a herramientas de agentes.
  - Separación explícita entre lo que se le instruye al modelo y lo que el código backend valida y aplica de forma determinista.
  - Cumplimiento de privacidad: anonimización, redacción y tokenización de Información de Identificación Personal (PII).

### 5. Accelerators & IP Contribution (155 min)
- **Empaquetado y diseño de aceleradores**:
  - Estructuración de soluciones como componentes modulares, probados y fácilmente transferibles o reutilizables entre proyectos.
  - Desacoplamiento estricto de la lógica de negocio determinista de las llamadas a modelos probabilísticos.
- **Toma de decisiones arquitectónicas**:
  - Regla de simplicidad de Anthropic: cuándo un único prompt bien estructurado o un workflow determinista supera en costo, latencia y predictibilidad a un agente autónomo de bucle abierto.
  - Pasos de verificación determinista previos a acciones irreversibles o destructivas.
- **Integración con el ciclo de vida del software (SDLC)**:
  - Tratamiento de los prompts como artefactos de código versionados en Git con revisión de código obligatoria.
  - Despliegues seguros: feature flags, lanzamientos graduales (staged rollouts) y pruebas A/B deterministas de variantes de prompts con métricas cuantificables de éxito.
- **Optimización de volumen con Batch API**:
  - Procesamiento asíncrono en lotes con descuento del 50% en tarifas de tokens y ventanas de entrega de 24 horas para cargas no interactivas.
- **Observabilidad distribuida**:
  - Correlación de IDs de solicitud (`request_id`) a través de todos los turnos y herramientas de un agente para auditoría y depuración en producción.

## Recursos oficiales recomendados
- [Documentación oficial de Anthropic](https://docs.anthropic.com/)
- [Anthropic Courses & Interactive Tutorials](https://github.com/anthropics/courses)
- [Anthropic Cookbook](https://github.com/anthropics/anthropic-cookbook)
- [Especificación abierta de Model Context Protocol (MCP)](https://modelcontextprotocol.io/)
- [Building Effective Agents - Research Anthropic](https://www.anthropic.com/research/building-effective-agents)
