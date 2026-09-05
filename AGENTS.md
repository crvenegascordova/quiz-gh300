# AGENTS.md

## Project overview

- `quiz-gh300` is an Astro 7 server-rendered practice application for the GitHub Copilot GH-300 certification.
- The project uses Astro with the Node adapter in standalone mode, Tailwind CSS 4 through `@tailwindcss/vite`, and TypeScript strict configuration.
- The application UI and educational content are in Spanish. Preserve Spanish UI text, test descriptions, and documentation when adding user-facing content.
- The repository contains 420 questions. The source of truth is `balotarios.md`; the generated dataset is `src/data/questions.json`.
- The working persistence implementation is local SQLite at `data/quiz-history.sqlite`.

## Requirements and essential commands

Use Node.js `>=22.12.0` for the application because the API uses the native `node:sqlite` module. Bun is also supported and is required by the test script.

Run commands from the repository root:

```bash
npm install
npm run dev
npm test
npm run lint
npm run build
npm run preview
```

- `npm run dev` starts Astro's development server. When using the project workflow for a persistent background server, use `astro dev --background`; manage it with `astro dev status`, `astro dev logs`, and `astro dev stop`.
- `npm test` runs `bun test`; running `bun test` directly is equivalent. Bun must be installed even when dependencies were installed with npm.
- `npm run lint` runs `eslint .`.
- `npm run build` runs the production Astro build through `node node_modules/astro/bin/astro.mjs build`.
- `npm run preview` serves the production build locally.
- `bun install` is also documented as an alternative dependency installation command.

After changing code, run the most targeted test first, then at minimum:

```bash
bun test && npm run lint && npm run build
```

After changing `balotarios.md`, regenerate the dataset before testing:

```bash
python scripts_prepare_questions.py
# Windows alternative:
py -3 scripts_prepare_questions.py
bun test && npm run lint && npm run build
```

The generator validates that exactly 420 questions were parsed and writes `src/data/questions.json` with UTF-8 JSON. Do not hand-edit the generated JSON unless there is no alternative.

## Repository structure

```text
balotarios.md                  # Source Markdown for questions, explanations, and sources
scripts_prepare_questions.py   # Generates src/data/questions.json
package.json                   # Scripts, runtime requirement, and dependencies
astro.config.mjs               # SSR output, Node adapter, and Tailwind Vite plugin
specs/quiz-gh300.md            # Functional requirements and acceptance criteria
docs/context-map.md            # Data flow, session state, and extension points
tests/evaluation.test.ts       # Bun unit tests for pure evaluation logic
data/                          # Runtime local SQLite data; quiz history is stored here
src/
  components/                  # Astro presentation components
  data/questions.json           # Generated question dataset consumed by the page
  pages/index.astro            # Page composition and dataset loading
  pages/api/attempts.ts        # GET/POST attempts API backed by local SQLite
  scripts/quiz-client.ts       # Browser-side quiz state machine and event handling
  styles/global.css            # Global Tailwind import, tokens, and component styles
  types/question.ts            # Shared question and attempt interfaces
  utils/evaluation.ts           # Pure, DOM-free quiz evaluation utilities
```

The page is composed from `Layout.astro`, `HeroSection.astro`, `HistoryPanel.astro`, `SetupPanel.astro`, `QuizPanel.astro`, `ResultsPanel.astro`, and `AbandonDialog.astro`. `src/pages/index.astro` imports the generated questions, derives the available balotarios, and passes them into the layout and setup components.

The browser script serializes the questions into a JSON script element in `Layout.astro`, parses them on startup, and initializes `initQuiz`. It owns session state (`questions`, `current`, `selected`, `reviewed`, `answers`, and `selections`) and calls `/api/attempts` to load and save history.

## Application behavior and data flow

The content pipeline is:

```text
balotarios.md -> scripts_prepare_questions.py -> src/data/questions.json -> src/pages/index.astro -> Layout.astro -> quiz-client.ts
```

The generator:

- Splits Markdown into `# Balotario N` sections and `Pregunta N` blocks.
- Parses options `A` through `E`, the correct answer, explanation, and official source link.
- Assigns one of six categories using keyword scoring: `responsible`, `features`, `architecture`, `prompting`, `productivity`, and `privacy`.
- Requires every question to have a correct answer, explanation, and source, and aborts unless there are exactly 420 items.

The quiz defaults to 30 questions, filters by balotario or uses all questions, shuffles the selected pool, and clamps the requested count to the range `1..pool.length`. A question cannot advance until its answer is reviewed. Previously reviewed questions render as read-only, and results show total score plus per-category performance.

`src/pages/api/attempts.ts` lazily creates `data/quiz-history.sqlite` and the `attempts` table. It dynamically loads `bun:sqlite` under Bun or `node:sqlite` under Node while exposing the same minimal database interface. `GET /api/attempts` returns rows ordered by `created_at DESC`; `POST /api/attempts` validates required fields and stores category summaries as JSON.

## Code conventions and implementation patterns

- TypeScript is strict via `astro/tsconfigs/strict`.
- Existing source files use tabs for indentation. Match the indentation and surrounding quote/style conventions of the file being edited.
- Keep business rules in `src/utils/evaluation.ts` when they need unit tests. Those functions are pure, DOM-free, and should not mutate input arrays; for example, `recordQuestionAnswer` copies the answers array before updating it.
- `src/scripts/quiz-client.ts` contains DOM integration, rendering, state transitions, fetch calls, and event registration. Keep DOM-specific behavior there rather than adding it to pure utilities.
- `src/pages/index.astro` should remain a thin composition layer. Add or adjust visual sections in the appropriate component under `src/components/`.
- Shared data shapes belong in `src/types/question.ts`. The `Question` shape includes `id`, `balotario`, `number`, `question`, `options`, `correctAnswer`, `explanation`, `source`, and `category`.
- Global styling is in `src/styles/global.css`. Tailwind is imported with `@import "tailwindcss"`; custom colors are declared in `@theme`, and reusable styles are composed in `@layer base` and `@layer components`.
- The UI uses Tailwind utility classes, responsive breakpoints, and a `.hidden` class for state-driven panels and buttons. Preserve the existing mobile layout and keyboard-accessible native controls.
- Keep user-facing copy in Spanish and preserve the existing terminology: `Revisar respuesta`, `Continuar`, `Salir y configurar`, `Pregunta anterior`, and `Abandonar examen`.
- Existing tests and many source JSDoc descriptions are Spanish and use intent-revealing names such as `debe marcar...`. Follow that convention for new tests and public utility documentation.

## Evaluation rules

`parseCorrectAnswers` accepts a single option or Spanish/comma-separated combinations such as `A`, `A y B`, `A, D`, and `A, B y C`. `evaluateAnswer` trims values, removes duplicate selections, and requires an exact set match independent of selection order. Partial answers and extra distractors are incorrect.

The utility module also owns:

- Completion checks (`isQuestionCompleted`).
- Answer recording (`recordQuestionAnswer`).
- Visibility and enabled state for `Revisar respuesta` and `Continuar` (`computeQuizActions`).
- Bottom navigation state (`computeBackButtonState`).
- Detection of read-only reviewed questions (`isQuestionReadOnly`).
- History arrow and `aria-expanded` state (`computeHistoryToggleState`).
- Incorrect-option rationales and structured review breakdowns (`buildIncorrectRationale`, `buildReviewBreakdown`).

## Testing approach

`tests/evaluation.test.ts` uses `bun:test` and covers every export from `src/utils/evaluation.ts`. Tests are grouped by behavior, including completion, single/multiple-answer parsing and evaluation, incorrect rationales, review breakdowns, action buttons, previous-question read-only behavior, and history accessibility state.

When changing evaluation or navigation behavior, add tests for positive, negative, and edge cases. In particular, retain coverage for exact multiple-answer matching, reversed selection order, partial selection, over-selection, empty input, reviewed/unreviewed button states, and read-only history navigation.

## Specifications and change workflow

Before changing quiz behavior, read and update both `specs/quiz-gh300.md` and `docs/context-map.md`. The specification defines acceptance criteria for question selection, review-before-advance behavior, navigation, abandonment, history toggling, accessibility, scoring, and official-source links.

Educational explanations, distractor rationales, and new question content must be grounded only in official Microsoft Learn (`learn.microsoft.com`) and GitHub Copilot/GitHub Docs (`docs.github.com`) sources. Preserve each dataset item's `source.title` and `source.url`.

After structural changes, refresh `graphify-out` artifacts if Graphify is being used; existing generated analysis is stored there and is ignored by ESLint.

## Persistence and deployment gotchas

- The API uses local SQLite. The database directory is created on first API use, and `data/` is runtime data rather than source content.
- `README.md` documents deployment using a locally built `dist`, `deploy.tar.gz`, Bun, `systemd`, and local SQLite. Verify the deployment environment before changing deployment code or documentation.
- Do not commit local database files, `.env` files, or deployment archives. Check the current ignore/status configuration before staging generated output.
- Avoid injecting unescaped arbitrary content into the client-generated HTML templates in `quiz-client.ts`; question content and API history are inserted into `innerHTML` in the current implementation, so preserve trusted-data assumptions or address escaping as a focused security change.

## Existing project guidance

`CLAUDE.md` confirms that the development server should be started with `astro dev --background` and lists the Astro documentation guides used for routing, components, framework integrations, content collections, styling, and internationalization. No `.cursor` rules, `.cursorrules`, or `.github/copilot-instructions.md` file was found.
