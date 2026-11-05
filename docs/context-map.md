# Mapa de Contexto del Proyecto (Context Map)

Este documento describe la arquitectura técnica, las fuentes de verdad, el flujo de datos, el modelo de estado, la API de persistencia y los puntos de extensión de la plataforma **Simulador de Certificaciones Técnicas (GH-300 y Claude Certified Developer)**.

---

## 1. Fuentes de Verdad

El contenido pedagógico y las especificaciones del sistema se organizan en las siguientes fuentes de verdad:

### 1.1 Contenido de Certificaciones (`content/certifications/`)
- **GitHub Copilot GH-300**:
  - `content/certifications/gh-300/balotarios.md`: 458 preguntas organizadas en 7 tests (Tests 1-6 de 70 preguntas y Test 7 de 38 preguntas certificadas), con opciones A-E, respuestas correctas individuales o múltiples ("A y B", "A, D"), explicaciones y fuentes oficiales de Microsoft Learn / GitHub Docs.
  - `content/certifications/gh-300/study-guide.md`: Guía oficial de competencias de Microsoft Learn con ponderaciones oficiales (25-30% características Copilot, 15-20% IA responsable, 10-15% arquitectura, 10-15% prompt engineering, 10-15% productividad, 10-15% privacidad).
- **Anthropic Claude Certified Developer**:
  - `content/certifications/claude-certified-developer/balotarios.md`: 308 preguntas técnicas en inglés organizadas en 6 tests, cubriendo los 5 módulos oficiales de Anthropic Partners:
    1. `MSO Foundations` (57 min)
    2. `Production-Grade Prompting, Agents & Tool Use` (209 min)
    3. `Claude Code, MCP & Integration` (142 min)
    4. `Production Engineering, Evals & Security` (211 min)
    5. `Accelerators & IP Contribution` (155 min)
  - `content/certifications/claude-certified-developer/study-guide.md`: Guía técnica oficial desglosada por módulo, conceptos clave y tiempos de estudio según el programa oficial de Anthropic Skilljar.
  - `content/certifications/claude-certified-developer/translations-es.json`: Diccionario de traducciones al español de las 308 preguntas, opciones y explicaciones, permitiendo alternancia bilingüe en tiempo real sin latencia ni llamadas externas en tiempo de ejecución.

### 1.2 Datasets Compilados (`src/data/certifications/`)
- `scripts_prepare_questions.py`: Parser y compilador Python que lee los archivos Markdown, valida unicidad, fuentes y campos obligatorios, e integra las traducciones para emitir:
  - `src/data/certifications/gh-300.json` (458 preguntas compiladas).
  - `src/data/certifications/claude-certified-developer.json` (308 preguntas compiladas con bloque `translations.es`).
  - `src/data/certifications/index.ts`: Registro maestro de metadatos de las certificaciones (`CERTIFICATIONS`), que expone títulos, insignias SVG/PNG, módulos, paleta temática y estado de soporte lingüístico.

### 1.3 Especificaciones y Reglas de Negocio
- `specs/quiz-gh300.md`: Requisitos funcionales, criterios de aceptación, diseño de navegación y heurísticas de corrección estricta.
- `AGENTS.md`: Directrices del repositorio, comandos esenciales y convenciones de código.

---

## 2. Flujo de Datos y Pipeline de Contenido

```text
content/certifications/<id>/balotarios.md (+ translations-es.json)
                  │
                  ▼ (scripts_prepare_questions.py)
src/data/certifications/<id>.json
                  │
                  ▼ (Importación tipada en Astro SSR)
          src/pages/index.astro
                  │
                  ▼ (Inyección como payload JSON seguro)
          src/components/Layout.astro
                  │
                  ▼ (Inicialización en el navegador)
          src/scripts/quiz-client.ts ◄──► /api/attempts (SQLite)
```

---

## 3. Arquitectura Multi-Certificación y Componentes UI

La aplicación implementa una arquitectura híbrida de **Astro 5 Islands** con renderizado SSR ligero y una máquina de estados reactiva en el cliente:

1. **Paso 00 - Selección de Certificación (`CertificationSelector.astro`)**:
   - Tarjetas interactivas con insignia oficial, proveedor, cantidad de preguntas y badges de módulos oficiales.
   - Permite al usuario conmutar entre certificaciones aislando datos de sesión, filtros y guías.
2. **Cabecera Dinámica (`HeroSection.astro`)**:
   - Botón `← Cambiar certificación` para regresar al Paso 00.
   - Botón `Ver mis exámenes` con indicador direccional `↑ / ↓` y accesibilidad `aria-expanded`.
   - Botón modal de `Guía oficial de estudio` contextual a la certificación seleccionada.
   - Botón de `Traducción instantánea` (`ES / EN - Traducir cuestionario` / `EN / ES - Ver en inglés`) exclusivo para certificaciones en inglés.
3. **Diálogos Modales**:
   - `StudyGuideDialog.astro`: Guía de estudio GH-300 (Microsoft Learn).
   - `ClaudeStudyGuideDialog.astro`: Guía de estudio Claude Developer (Anthropic).
   - `AbandonDialog.astro`: Confirmación accesible para cancelar y reiniciar el examen en curso.
4. **Configuración de Sesión (`SetupPanel.astro`)**:
   - Selector de origen: "Todos los tests", "Solo preguntas aún no vistas", "Repasar preguntas falladas históricas" o tests individuales ("Test 1", "Test 2", ...).
   - Control de límite de preguntas con validación dinámica de rango `1..pool.length`.
5. **Simulador de Examen (`QuizPanel.astro`)**:
   - Progreso visual en barra continua y contador textual.
   - Tarjeta de pregunta con opciones accesibles mediante teclado y puntero `cursor: pointer`.
   - Acciones dinámicas coordinadas por `computeQuizActions`: botón `Revisar respuesta` (se oculta tras evaluar) y botón `Continuar →` (con desplazamiento suave `scrollIntoView`).
   - Botón inferior conmutador (`back-button`): `Salir y configurar` en la pregunta 1 y `Pregunta anterior` (modo revisión solo lectura) en preguntas subsecuentes.
   - Retroalimentación estructurada: `✓ Respuesta correcta` o `✕ Respuesta incorrecta` acompañada del desglose de error, fundamento pedagógico y enlace a la documentación oficial.
6. **Métricas y Resultados (`ResultsPanel.astro` & `HistoryPanel.astro`)**:
   - Porcentaje global de aciertos, desglose por categoría técnica.
   - Tabla de control de inventario de preguntas (vistas vs. pendientes).
   - Repaso directo de preguntas falladas en la sesión o acumuladas en el historial.

---

## 4. Estado de la Sesión en el Cliente (`quiz-client.ts`)

El script del cliente opera una máquina de estados determinista sin dependencias externas:

```typescript
interface QuizState {
  questions: Question[];                                           // Preguntas filtradas y aleatorizadas de la sesión
  current: number;                                                 // Índice de la pregunta activa (0..length-1)
  selected: string[];                                              // Opciones marcadas por el usuario (ej: ["A", "B"])
  reviewed: boolean;                                               // Flag que bloquea avance hasta evaluar la respuesta
  answers: Array<{ correct: boolean; category: string } | undefined>; // Historial de respuestas evaluadas por pregunta
  selections: string[][];                                          // Arreglo histórico de opciones seleccionadas
}
```

Variables globales de contexto:
- `activeCert: CertificationMeta | null`: Certificación seleccionada en el selector inicial.
- `allQuestions: Question[]`: Catálogo completo de preguntas de la certificación activa.
- `isTranslated: boolean`: Estado reactivo del toggle de traducción inglés/español.

---

## 5. Capa de Evaluación Pura (`src/utils/evaluation.ts`)

Funciones puras, 100% desacopladas del DOM y con cobertura exhaustiva de pruebas unitarias (`tests/evaluation.test.ts` con Bun):

- **`parseCorrectAnswers(correctAnswer: string): string[]`**: Normaliza cadenas con conectores como `"A y B"`, `"A, D"`, `"A, B y C"`, `"A and B"`.
- **`evaluateAnswer(selected: string[], correctAnswer: string): QuestionEvaluation`**: Evalúa coincidencia exacta entre selecciones y respuestas esperadas sin importar el orden; rechaza selecciones parciales o sobreselecciones. Retorna `{ isCorrect, expected, selected }`.
- **`recordQuestionAnswer(answers, index, evaluation, categoryId)`**: Inmuta y actualiza el arreglo de respuestas con `{ correct: evaluation.isCorrect, category: categoryId }`.
- **`computeQuizActions(reviewed: boolean, selectedCount: number): QuizActionState`**: Calcula visibilidad y estado `disabled` de los botones de revisión y avance.
- **`computeBackButtonState(current: number, selectedCount: number, reviewed: boolean): BackButtonState`**: Controla el botón inferior (`Salir y configurar` vs. `Pregunta anterior`).
- **`isQuestionReadOnly(answers, index): boolean`**: Determina si una pregunta previa debe mostrarse en modo lectura inmutable.
- **`computeCoverageMetrics(totalQuestions, attempts): CoverageMetrics`**: Calcula cobertura total de inventario, deduplicando IDs de preguntas vistas en múltiples exámenes.
- **`extractFailedQuestions(questions, answers): Question[]`**: Extrae las preguntas erradas de una sesión activa.
- **`extractAllHistoricalFailedQuestions(allQuestions, attempts): Question[]`**: Consolida y deduplica el banco histórico de errores de una certificación.

---

## 6. Persistencia Local y API REST (`src/pages/api/attempts.ts`)

- **Base de datos**: SQLite local embebida en `data/quiz-history.sqlite`.
- **Compatibilidad dual de runtime**: Detección transparente de `bun:sqlite` (en Bun) o `node:sqlite` nativo (en Node.js 22.12+).
- **Esquema de tabla `attempts`**:
  - `id` (INTEGER PRIMARY KEY AUTOINCREMENT)
  - `certification` (TEXT DEFAULT 'gh-300')
  - `balotario` (TEXT)
  - `total_questions` (INTEGER)
  - `correct_answers` (INTEGER)
  - `incorrect_answers` (INTEGER)
  - `score_percent` (INTEGER)
  - `category_summary` (TEXT / JSON)
  - `failed_questions` (TEXT / JSON)
  - `question_ids` (TEXT / JSON)
  - `created_at` (DATETIME DEFAULT CURRENT_TIMESTAMP)
- **Endpoints**:
  - `GET /api/attempts?certification=<id>`: Obtiene el historial de intentos ordenados de forma descendente, filtrando por la certificación solicitada.
  - `POST /api/attempts`: Valida el payload recibido y almacena el resultado del examen.

---

## 7. Despliegue y CI/CD

- **CI/CD Automatizado (`.github/workflows/deploy.yml`)**:
  - Trigger en push a `main`.
  - Ejecuta `bun install`, `bun test`, `bun run build`.
  - Empaqueta el bundle ligero `deploy.tar.gz` (`dist/` + `package.json`).
  - Despliega vía SCP y SSH a la máquina virtual de Google Cloud.
- **Servidor de Producción (Google Cloud Always Free)**:
  - VM `e2-micro` en `us-central1-a` (IP externa `136.116.255.241`).
  - SWAP de 2 GB configurado para garantizar estabilidad con 1 GB RAM.
  - Servicio `systemd` (`quiz.service`) ejecutando Bun en el puerto web estándar 80.

---

## 8. Convención de Cambios y Trabajo Futuro

1. Toda regla de negocio debe implementarse primero como función pura en `src/utils/evaluation.ts` con sus pruebas unitarias en `tests/evaluation.test.ts`.
2. Toda modificación a las preguntas debe hacerse en `content/certifications/<id>/balotarios.md` y compilarse con `python3 scripts_prepare_questions.py`.
3. Antes de confirmar cambios, verificar la suite completa:
   ```bash
   bun test && bun run lint && bun run build
   ```
