# AGENTS.md - Portfolio Guidelines

## Commands

- **Build/Dev**: `npm run build` | `npm run dev`
- **Lint/Test**: `npm run lint` | `npm run test` (Vitest)
- **Single Test**: `vitest run <path/to/test>`

## Style & Standards

- **Stack**: TypeScript, React, Node/Express, PostgreSQL, Docker, Tailwind.
- **Format**: Prettier (3-space tabs, double quotes, semi, unlimited width).
- **Naming**: PascalCase components, camelCase utils, kebab-case folders (`user-profile`).
- **CSS**: BEM methodology. See `.cursor/rules/conventions.mdc`.
- **Imports**: Absolute imports from root. SHARED → FEATURES → APP dependency flow.
- **Types**: TypeScript strict mode enabled. Use explicit types, avoid `any`.
- **Error Handling**: Use try-catch blocks, TypeScript for type safety, ESLint for code quality.

## Rules & Integrity

- **Cursor Rules**: STRICTLY follow `.cursor/rules/` (`conventions.mdc`, `objectives.mdc`, `product.mdc`, `structure.mdc`, `tech-stack.mdc`).
- **.opencode Agents**: Use `documenter.md` for daily documentation, `reviewer.md` for code reviews.
- **QA**: TypeScript Strict Mode, ESLint, Vitest, ARIA attributes for a11y.
- **Principles**: SOLID, Clean Code, DRY.
