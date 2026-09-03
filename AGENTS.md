# AGENTS.md

## Project snapshot

- Stack: **Astro 7** (`type: module`) with **Node adapter** (`@astrojs/node`) and **Tailwind CSS 4** via `@tailwindcss/vite`.
- Runtime requirement: **Node.js >= 22.12.0** (`package.json`) because the API uses `node:sqlite` (`DatabaseSync`).
- Main app is a single-page Astro view in `src/pages/index.astro` plus one API route in `src/pages/api/attempts.ts`.
- Source-of-truth content for questions is `balotarios.md`; generated dataset is `src/data/questions.json`.

## Essential commands

From repo root (`C:/Users/cvenegco/projects/quiz-gh300`):

```bash
npm install
npm run dev
npm test          # o: bun test (ejecuta suite unitaria en tests/)
npm run build
npm run preview
```

Also available from memory/rule files:

```bash
astro dev --background
astro dev stop
astro dev status
astro dev logs
```

Data regeneration flow (after editing `balotarios.md`):

```bash
python scripts_prepare_questions.py
# or on Windows:
py -3 scripts_prepare_questions.py
```

Observed validation expectation from docs: after regenerating questions, run `npm run build`.

## Code organization

- `src/pages/index.astro`
  - Renders entire quiz UI (setup, quiz, results, local history panel).
  - Imports `src/data/questions.json` at build time.
  - Contains client-side state machine and all interaction logic inside `<script define:vars={{ serializedQuestions }}>`.
  - Contains global Tailwind styling in `<style is:global>` with `@theme`, `@layer base`, and `@layer components`.
- `src/pages/api/attempts.ts`
  - `GET`: returns all attempts (`created_at DESC`) as JSON.
  - `POST`: validates required payload fields and inserts attempt row.
  - Initializes SQLite DB lazily and creates table if missing.
- `src/data/questions.json`
  - Generated data consumed by UI. Do not hand-edit unless absolutely necessary.
- `scripts_prepare_questions.py`
  - Converts `balotarios.md` into JSON dataset.
- `docs/context-map.md`
  - Maintains conceptual flow and extension points.
- `specs/quiz-gh300.md`
  - Functional requirements and acceptance criteria for quiz behavior.

## Runtime and persistence behavior

- SQLite file path is built from `process.cwd()`:
  - `data/quiz-history.sqlite`
- Directory is created automatically (`mkdirSync(..., { recursive: true })`) when API is first used.
- Table schema (`attempts`) includes:
  - `created_at`, `balotario`, `total_questions`, `correct_answers`, `incorrect_answers`, `score_percent`, `category_summary`.
- Frontend persists history by calling:
  - `GET /api/attempts` for listing
  - `POST /api/attempts` on quiz completion

## Observed coding/style patterns

- TypeScript strict config extends `astro/tsconfigs/strict` (`tsconfig.json`).
- Astro config uses tabs/standard formatting with trailing commas in objects (`astro.config.mjs`).
- In `index.astro`:
  - Uses concise helper (`const $ = (id) => document.getElementById(id)`).
  - State is a plain object (`questions/current/selected/reviewed/answers/selections`).
  - Heavy use of array transforms (`map/filter/every`) and inline template literals to render HTML snippets.
  - Event handlers are attached at bottom of script section.
  - UI copy is Spanish.
- Tailwind strategy:
  - `@import "tailwindcss"` directly in page-level global style.
  - Custom design tokens declared in `@theme` block.
  - Utility composition via `@apply` in component classes.

## Testing and verification approach

- Automated unit testing suite is located in `tests/evaluation.test.ts`.
- Runs via Bun or Node test runner:

```bash
bun test
# or:
npm test
```

- Primary verification commands:

```bash
bun test          # All unit tests must pass 100%
npm run build     # Production build must succeed with zero errors
```

- For data changes: regenerate with `python scripts_prepare_questions.py`, then run `bun test && npm run build`.

## Gotchas and non-obvious constraints

- **Dual runtime support**: SQLite access in `src/pages/api/attempts.ts` dynamically supports both **Bun** (`bun:sqlite`) and **Node.js >= 22.12** (`node:sqlite`).
- **Sources constraint**: Explanations, rationales, and rubric answers MUST be grounded exclusively in official documentation from **Microsoft Learn** and **GitHub Copilot**.
- `index.astro` is monolithic (markup + logic + style in one file). Keep edits surgical to avoid regressions across UI state transitions.
- Evaluator logic is decoupled into pure functions in `src/utils/evaluation.ts` to allow 100% automated test coverage.
- Question correctness logic derives correct options from `item.correctAnswer.split(/\s*(?:y|,)\s*/)`.
- Question pool limit is clamped to available items in selected balotario (`Math.min(Math.max(requestedLimit || 30, 1), pool.length)`).

## Existing rule-file guidance to retain

From `CLAUDE.md` and prior `AGENTS.md`:

- Prefer running dev server in background mode (`astro dev --background`) and manage with `astro dev stop/status/logs`.
- Astro docs reference set for routing/components/framework integrations/content/styling/i18n:
  - https://docs.astro.build/en/guides/routing/
  - https://docs.astro.build/en/basics/astro-components/
  - https://docs.astro.build/en/guides/framework-components/
  - https://docs.astro.build/en/guides/content-collections/
  - https://docs.astro.build/en/guides/styling/
  - https://docs.astro.build/en/guides/internationalization/

## Mandatory change workflow: Spec-Driven Development (SDD)

From now on, **every requirement must strictly follow Spec-Driven Development (SDD)**:

1. **Spec & Context First**: Read `specs/quiz-gh300.md` and `docs/context-map.md`. Update or create the functional specifications and acceptance criteria before implementing code.
2. **Mandatory Unit Tests**: Every requirement implies creating or updating automated unit tests in `tests/` covering positive flows, negative flows, and edge cases.
3. **Official Sources Only**: All explanations, distractors, or educational rationales must be sourced solely from **Microsoft Learn** (`learn.microsoft.com`) and **GitHub Copilot** (`docs.github.com`).
4. **Modular Implementation**: Keep business logic decoupled in `src/utils/` and maintain surgical updates in `src/pages/index.astro`. Preserve Spanish UI copy conventions.
5. **Double Verification**: Run `bun test` (or `npm test`) AND `npm run build`. No change is accepted unless all tests pass and the build succeeds.
6. **Graph Maintenance**: If using Graphify, refresh `graphify-out` artifacts after structural changes.
