# Code & Style Conventions

Use this as the single reference for assistants and reviewers.

## Naming & Structure
- Folders: kebab-case (R14). Components: PascalCase (R15). Utilities: camelCase or kebab-case (R16). Constants: SCREAMING_SNAKE_CASE (R17).
- Co-location per component (R18): tests in `__tests__/`, sub-components in `components/`, data/constants in `data/`.
- Layers: SHARED imports externals only; FEATURES import SHARED; APP imports SHARED + FEATURES (no FEATURE→FEATURE).

## Styling (BEM + Tailwind)
- BEM: `.block`, `.block__element`, `.block--modifier` (R1-R4); purpose-driven names (R5); no IDs for styling (R6).
- Tailwind order: BEM class first, then Tailwind utilities following prettier-plugin-tailwindcss ordering (layout → flex/grid → spacing → sizing → typography → backgrounds → borders → effects → filters → transitions → transforms → interactivity → svg → accessibility).
- Use semantic design tokens; never hardcode hex/palette names. Defaults favor brutalism: `rounded-sm`, `border-2/3/4`, `duration-mechanical`, `ease-brutalist`, grid-first layouts.

## Accessibility
- Prefer semantic HTML (R13). Use `aria-labelledby` first (R10), fallback to `aria-label` (R11); `aria-describedby` for help text (R12).
- IDs unique and camelCase/kebab-case; labels use `for` matching input IDs (R7-R9).
- Buttons/inputs/images must have accessible names/alt text; avoid redundant ARIA.

## JSX Attribute Order
`key` → `ref` → `id` → `data-testid` → ARIA → `className` → native attrs (`src`, `alt`, etc.) → event handlers → custom props.

## Imports
- Absolute imports from workspace root. Order: external libs → internal utilities/hooks → components → data/constants → types (type-only imports use `import type`).

## TypeScript
- Strict mode. No `any`; use `unknown` + narrowing. Explicit return types on exports. Props interfaces are `ComponentNameProps` and exported. Prefer type-only imports. Avoid assertions when possible; use guards.

## Testing & QA
- Vitest; place tests in `__tests__/` next to code, named `ComponentName.test.tsx|.ts`. Run `npm run test` or `vitest run <file>`.

## PR Expectations
- Follow `docs/pull_request_template.md`. Titles use conventional type prefix (`feat|fix|docs|style|refactor|perf|test|chore|revert`).
- Document scope, testing evidence, and linked issues/epics.

