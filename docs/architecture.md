# Architecture Overview

## Stack
- Frontend: React + TypeScript (Vite), Tailwind CSS, design tokens (Swiss Grid + Brutalism), Vitest.
- Backend: Node.js + Express + TypeScript, PostgreSQL.
- Tooling: ESLint, Prettier (with Tailwind ordering), Docker/Docker Compose, GitHub Actions.

## Structure
- Monorepo root with `packages/client` (frontend) and `packages/server` (backend); shared infra under `docker/` and root configs (`tsconfig.json`, `eslint.config.js`).
- Conceptual layers:
  - SHARED → reusable utilities/components (no business logic).
  - FEATURES → isolated feature modules importing only SHARED.
  - APP → wiring/composition; imports SHARED + FEATURES.
- Key frontend folders (`packages/client/src`):
  - `app/`: entry (`main.tsx`, `App.tsx`), global styles (`index.css`), routing/pages.
  - `components/`: shared UI blocks (e.g., header, footer).
  - `features/`: domain slices (`about-me`, `projects`, `contact-form`, etc.).
  - `utils/`: hooks, theme context/provider.
- Key backend folders (`packages/server/src`):
  - `app/`: server bootstrap and data loading.
  - `config/`: database config/interfaces.
  - `controllers/` and `routes/`: feature endpoints (projects).

## Runtime & Data
- Client served by Vite; uses theme tokens via `data-theme`/`data-palette` with localStorage persistence.
- Server exposes project data APIs backed by PostgreSQL; database seeded via `docker/database/` migrations/seeds.
- Docker Compose orchestrates client, server, database, and nginx for prod; see `docker-compose.yml` and `docker-compose.prod.yml`.

## Build, Test, Dev
- Dev: `npm run dev` (runs client + server in watch mode).
- Build: `npm run build` (both client and server).
- Lint: `npm run lint`.
- Tests: `npm run test` or `vitest run <path>` for focused runs.

## Key UX & Design System Notes
- Semantic color tokens defined in `packages/client/src/app/index.css`; Tailwind maps tokens in `packages/client/tailwind.config.js`.
- Brutalist defaults: sharp radii (`rounded-sm`), chunky borders, mechanical transitions (`duration-mechanical`, `ease-brutalist`), grid-first layouts.

## Conventions (See `docs/conventions.md`)
- BEM class names, ARIA-first accessibility, absolute imports from workspace root, strict TypeScript, co-location per component.

## Cross-Cutting Concerns
- Accessibility: prefer `aria-labelledby`, avoid IDs for styling.
- Dependency flow enforced by folder boundaries; avoid FEATURE→FEATURE imports.

