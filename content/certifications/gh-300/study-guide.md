# Guía de estudio para el examen GH-300: GitHub Copilot

## Finalidad de este documento
Esta guía de estudio ayuda a comprender qué esperar en el examen oficial **Microsoft / GitHub GH-300** e incluye un resumen detallado de los temas cubiertos, ponderaciones porcentuales y vínculos a recursos oficiales adicionales.

---

## 🔗 Vínculos oficiales útiles

| Recurso | Descripción | Enlace |
| :--- | :--- | :--- |
| **Sandbox del examen** | Entorno oficial interactivo para explorar la interfaz del examen | [aka.ms/examdemo](https://aka.ms/examdemo) |
| **Puntuación e informes** | Reglas de aprobación (se requiere una puntuación de **700 o superior** para pasar) | [Microsoft Learn: Puntuación de exámenes](https://learn.microsoft.com/es-es/credentials/certifications/exam-scoring-reports) |
| **Renovación de certificación** | Expiran anualmente; se pueden renovar aprobando una evaluación gratuita en Microsoft Learn | [Renovación de certificación](https://learn.microsoft.com/es-es/credentials/certifications/renew-your-microsoft-certification) |
| **Perfil de Microsoft Learn** | Conexión para programar, renovar y certificar | [Perfil de Microsoft Learn](https://learn.microsoft.com/es-es/users) |
| **Solicitar adaptaciones** | Dispositivos de asistencia, tiempo adicional (+30 min si no está en idioma nativo) | [Solicitar adaptaciones](https://learn.microsoft.com/es-es/credentials/certifications/request-accommodations) |

---

## 🎯 Acerca del examen
* **Puntaje de aprobación:** 700 / 1000.
* **Tiempo adicional:** Si el examen no está disponible en su idioma nativo, puede solicitar 30 minutos adicionales al programar.
* **Características cubiertas:** La mayoría de las preguntas tratan sobre características de disponibilidad general (**GA**). Puede incluir preguntas sobre características en versión preliminar (**Preview**) si son de adopción y uso frecuente en flujos de desarrollo.
* **Perfil de audiencia:** Desarrolladores con experiencia práctica en el uso de GitHub Copilot para mejorar productividad, calidad y seguridad en el ciclo de vida del software. Conocimiento sólido en IA responsable, prompt engineering, planes de GitHub Copilot (Individual, Business, Enterprise) y salvaguardas de privacidad.

---

## 📊 Competencias medidas y ponderaciones oficiales

```text
┌────────────────────────────────────────────────────────────────────────┐
│ GH-300: GitHub Copilot Exam Domains                                    │
├────────────────────────────────────────────────────────────────────────┤
│ 1. Uso de las características de Copilot de GitHub        (25% – 30%)  │
│ 2. Uso responsable de GitHub Copilot                     (15% – 20%)  │
│ 3. Comprender los datos y la arquitectura de Copilot     (10% – 15%)  │
│ 4. Aplicar ingeniería rápida y creación de contexto       (10% – 15%)  │
│ 5. Mejora de la productividad del desarrollador           (10% – 15%)  │
│ 6. Configurar privacidad, exclusiones y salvaguardas     (10% – 15%)  │
└────────────────────────────────────────────────────────────────────────┘
```

---

### 1. Uso de las características de Copilot de GitHub (25–30%)

#### Uso de GitHub Copilot en el IDE
* Habilitación y configuración de Copilot en IDEs soportados (VS Code, Visual Studio, JetBrains, Neovim).
* Modos de activación: sugerencias en línea (*ghost text*), atajos (`Tab`, `Alt+]`, `Option+]`), Copilot Chat y modo agente.
* Configuración de exclusiones de contenido para archivos o repositorios específicos.

#### Uso de la CLI de GitHub Copilot
* Definición de la CLI de Copilot y beneficios para entornos terminal.
* Instalación y autenticación de la extensión `gh copilot`.
* Comandos principales: `gh copilot suggest` (generación de comandos shell/git/gh) y `gh copilot explain` (explicación técnica paso a paso).
* Uso interactivo en sesiones de terminal, generación de scripts y administración segura de archivos.

#### Funcionalidades avanzadas de Copilot
* **Agent Mode y Copilot Edits:** Flujos de trabajo multiactivo, edición simultánea entre múltiples archivos y administración de sesiones de agente.
* **MCP (Model Context Protocol):** Integración de herramientas externas, servidores MCP locales y remotos para expandir el contexto de Copilot.
* **Delegación a Sub-Agents:** Descomposición de tareas complejas en subagentes especializados para optimizar el presupuesto de tokens y la ventana de contexto.
* **Revisión de código y estándares personalizados:**
  * Uso de archivos de instrucciones personalizadas (`.github/copilot-instructions.md`).
  * Resúmenes automáticos de Pull Requests con Copilot.
  * Uso de Spaces y Spark para colaboración contextualizada.
* **Límites, comandos y reutilización:**
  * Comandos de barra diagonal (`/explain`, `/tests`, `/fix`, `/new`, `/clear`).
  * Participantes de chat (`@workspace`, `@vscode`, `@terminal`, `@github`).
  * Reutilización de archivos de prompt (`.prompt.md`) para respuestas repetibles y consistentes.
* **Gobernanza y directivas a nivel de organización:**
  * Administración de directivas para organizaciones y empresas (activación de características, sugerencias de código público).
  * Habilitación de directivas de revisión de código en Pull Requests.
  * Consumo y monitoreo de eventos en el registro de auditoría (*Audit Log*).
  * Administración de asignación de puestos y suscripciones mediante la API REST de GitHub.

---

### 2. Uso responsable de GitHub Copilot (15–20%)

#### Principios de inteligencia artificial responsable
* Principios de IA de Microsoft: Imparcialidad, Confiabilidad y Seguridad, Privacidad y Protección, Inclusión, Transparencia y Responsabilidad.
* Riesgos y limitaciones de LLMs: alucinaciones, sesgos algorítmicos, datos desactualizados y generación de vulnerabilidades conocidas (CVEs).
* Uso ético de herramientas generativas en desarrollo corporativo.
* Identificación de posibles daños y estrategias de mitigación.

#### Validación y supervisión humana (*Human in the loop*)
* Necesidad estricta de validación humana: el desarrollador sigue siendo responsable del código generado.
* Pruebas de regresión, análisis estático (SAST) y escaneo de seguridad antes de fusionar sugerencias.
* Operación responsable de GitHub Copilot en entornos productivos.

---

### 3. Comprender los datos y la arquitectura de GitHub Copilot (10–15%)

#### Control y flujo de datos
* Ciclo de vida de una solicitud: desde el editor hacia el proxy backend de GitHub y el endpoint seguro de inferencia.
* Creación de solicitudes: recolección de contexto local (pestañas abiertas, snippets vecinos, rutas de archivo).
* Filtrado de proxy y postprocesamiento: detección de toxicidad, bloqueo de contenido dañino y filtrado contra código público.
* Políticas de retención:
  * Copilot Individual vs. Copilot Business / Enterprise.
  * Garantía de no almacenamiento permanente de prompts/sugerencias para reentrenamiento en planes comerciales.

#### Ciclo de vida y limitaciones
* Diagrama del pipeline de inferencia.
* Ventana de contexto, límites de tokens y latencia de red.
* Limitaciones inherentes de los Large Language Models.

---

### 4. Aplicar ingeniería rápida y creación de contexto (10–15%)

#### Creación de avisos efectivos (*Prompt Engineering*)
* Estructura óptima de un prompt: instrucción clara, rol, contexto relevante, restricciones y formato de salida.
* Principios 4S de GitHub:
  * **Single:** Enfocado en una sola tarea.
  * **Specific:** Detallado y explícito con tipos y bibliotecas.
  * **Short:** Conciso y sin ruido innecesario.
  * **Surround:** Rodeado de archivos y contexto relevante.
* Estrategias de prompting: Zero-shot, Few-shot (aportar 1 a 3 ejemplos concretos de entrada/salida).

#### Optimización del contexto del IDE
* Cómo Copilot determina el contexto: archivos abiertos en pestañas adyacentes, comentarios explicativos antes de firmas de función, importaciones semánticas.
* Gestión del historial de conversación en Copilot Chat y cuándo limpiar el contexto (`/clear`) para evitar derivas temáticas.

---

### 5. Mejora de la productividad del desarrollador (10–15%)

#### Calidad del código y aceleración
* Generación de código idiomático y estructuras repetitivas (*boilerplate*).
* Refactorización asistida: modernización de código heredado (*legacy*), conversión entre versiones de lenguaje.
* Documentación técnica: generación de JSDoc, docstrings, diagramas Mermaid y especificaciones de API.
* Reducción del cambio de contexto (*context switching*) manteniendo al desarrollador en el IDE.

#### Apoyo a pruebas unitarias y seguridad
* Generación de suites de pruebas con frameworks modernos (Jest, Vitest, PyTest, Bun Test, xUnit).
* Identificación de casos perimetrales (*edge cases*), entradas nulas, desbordamientos y valores límite.
* Creación de aserciones robustas.
* Identificación y corrección proactiva de debilidades de seguridad (inyecciones SQL, XSS, gestión de secretos).

---

### 6. Configurar privacidad, exclusiones de contenido y medidas de seguridad (10–15%)

#### Administración de privacidad y exclusiones
* Configuración de exclusiones de contenido mediante interfaz web y repositorio (`.github/copilot-content-exclusion`).
* Comportamiento en el editor ante archivos excluidos: icono de Copilot deshabilitado y bloqueo de lectura de contexto.
* Propiedad intelectual: los clientes retienen la propiedad de su código fuente (*Customer Data*).

#### Medidas de seguridad y filtro de coincidencia pública
* Filtro de coincidencia de código público (*Public code matching filter*): detección de sugerencias de más de ~150 caracteres que coinciden con repositorios públicos de GitHub.
* Políticas de bloqueo o permisión con atribución según directiva de organización.
* Resolución de problemas (*troubleshooting*): certificados corporativos, proxies empresariales, firewall y diagnósticos en consola.
