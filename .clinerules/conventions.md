# Project Conventions

These rules establish consistent conventions for CSS classes, HTML IDs, ARIA attributes, and file structure to ensure code clarity, modularity, and accessibility.

## I. HTML ID Rules

IDs are unique identifiers. Use them for linking, JS hooks, and accessibility relationships (labels, ARIA references), not for styling.

- **Uniqueness:** Every `id` must be unique per page, because duplicate IDs break `aria-*` references and make DOM querying ambiguous.
- **Case Style:** Use `kebab-case` or `camelCase` consistently, because consistency makes referencing and searching predictable.
- **Form Association:** Inputs must have an `id` that matches their `<label for>` (or React `htmlFor`), because this links the visible label to the control for a11y and click targeting.

Examples:

- **Uniqueness:** good: `<section id="projects">...` and `<section id="contact">...`; bad: two elements with `id="contact"`.
- **Case Style:** `id="contact-form"` (`kebab-case`) or `id="contactForm"` (`camelCase`).
- **Form Association (React):** `<label htmlFor="email">Email</label>` + `<input id="email" name="email" />`.

## II. ARIA Naming Rules (Accessibility)

ARIA attributes provide semantic information to assistive technologies. Prefer patterns that stay in sync with visible UI.

- **Prefer `aria-labelledby`:** Reference an existing visible element’s `id`, because the accessible name should match what users see and it stays updated when the UI text changes.
- **Use `aria-label` when needed:** Use only when there is no visible text to reference, because conflicting labels can confuse screen readers.
- **Use `aria-describedby` for extra context:** Reference longer help/instructions, because names should be short while descriptions can be detailed.
- **Native first:** Prefer semantic HTML elements before ARIA roles, because native elements provide correct keyboard behavior and accessibility by default.

Examples:

- **`aria-labelledby`:** `<h2 id="contact-title">Contact</h2>` + `<form aria-labelledby="contact-title">...`.
- **`aria-label`:** `<button aria-label="Open menu">...</button>` (icon-only button).
- **`aria-describedby`:** `<p id="password-help">Use at least 12 characters.</p>` + `<input aria-describedby="password-help" />`.
- **Native first:** prefer `<button type="button">Save</button>` over `<div role="button" tabIndex={0}>Save</div>`.

## III. CSS Class Naming Rules (BEM)

Use BEM (Block, Element, Modifier) for scalable, readable CSS class names.

- **Case standard:** Use `kebab-case` for CSS classes, because it’s the most common convention and reads well in HTML.
- **Block (`.block`):** A Block is a standalone component name, because it represents a reusable UI unit.
- **Element (`.block__element`):** An Element is a part of a Block, because it only makes sense in the context of that Block.
- **Modifier (`.block--modifier`):** A Modifier represents a state/variation, because the base Block/Element should stay stable.
- **Purpose-driven names:** Name by meaning, not appearance/location, because UI can be redesigned without forcing class renames.
- **Avoid ID selectors for styling:** Don’t style with `#id`, because it increases specificity and IDs are reserved for JS/a11y references.

Examples:

- **Block:** `.contact-form`
- **Element:** `.contact-form__field`
- **Modifier:** `.contact-form__field--error`
- **Purpose-driven:** good: `.error-message`; bad: `.red-text`, `.left-column`
- **Avoid ID selectors:** prefer `.header` over `#header`

## IV. Component and File Organization Rules (Naming Conventions)

- **Directories/Folders:** Use `kebab-case`, because it is consistent across platforms and matches CSS conventions.
- **Component Files/Classes:** Use `PascalCase`, because it matches React component naming and is easy to visually distinguish.
- **Utility/General Files:** Use `camelCase` (preferred) or `kebab-case`, because utilities are referenced frequently and should remain consistent.
- **Constants:** Use `SCREAMING_SNAKE_CASE`, because constants should be instantly recognizable.
- **Co-location:** Keep tests/styles/data next to the component they support, because it improves discoverability and reduces cross-folder coupling.

Examples:

- **Directories/Folders:** `packages/client/src/features/contact-form/`
- **Component Files/Classes:** `ContactForm.tsx`, `HeaderModeSwitcher.tsx`
- **Utility/General Files:** `formatProjectName.ts`, `scrollToTop.ts`
- **Constants:** `export const MAX_ITEMS = 10;`
- **Co-location:** `components/header/components/header-mode-switcher/__tests__/HeaderModeSwitcher.test.tsx`

## V. Common Principles

- **SOLID:** Design small, focused modules with clear responsibilities and stable interfaces, because it keeps features easier to extend and safer to refactor.
- **Clean Code:** Optimize for readability (clear naming, small functions, low nesting), because code is read far more often than it’s written.
- **OOP (when appropriate):** Use classes/encapsulation only when it improves clarity around stateful behavior, because unnecessary abstractions make React/TS code harder to follow.
- **DRY:** Avoid duplicating logic and sources of truth, because duplication causes inconsistent behavior and bugs during changes.

Examples:

- **SOLID:** prefer a `useFetchData` hook + a presentational component over a single component doing fetching, parsing, and rendering.
- **Clean Code:** prefer `getContactFormDirection()` over inline conditionals duplicated across components.
- **OOP:** a server-side `DatabaseClient` wrapper can be appropriate; avoid class-based React components unless there is a specific need.
- **DRY:** centralize formatting in `utils/formatProjectName.ts` instead of re-implementing the same logic in multiple components.
