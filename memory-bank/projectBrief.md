# Project Brief — Portfolio

## The foundation of the project

This is a production-oriented, full-stack portfolio built as a TypeScript monorepo:

- `packages/client`: React + Vite frontend, styled with Tailwind and animated with Framer Motion.
- `packages/server`: Node.js + Express API server.
- PostgreSQL database powering portfolio project content (migrations/seeds under `docker/database/`).
- Dockerized dev/prod environments (Postgres + API + client/Nginx) designed for real deployment and iteration.

The project is intentionally structured like a “real product” (CI, linting, tests, strict TypeScript, containerization) rather than a static portfolio site.

## High-level overview (what we’re building)

A portfolio website with a storytelling twist: instead of merely listing projects, the site aims to guide visitors through a narrative of growth, decisions, and outcomes—mixing minimalist structure (Swiss grid-inspired layout) with more complex interactive behavior.

The frontend is a multi-page SPA with routes for:

- Home (About + featured projects)
- Projects list + detailed project pages
- About
- Contact

Project data is fetched dynamically from the backend (`/api/projects`), which reads from Postgres and returns structured project details for rendering.

## Core requirements and goals

- Storytelling-first portfolio experience: present projects as a narrative (overview → timeline → results), not just thumbnails and links.
- Data-driven content: project pages come from a database source of truth (not hardcoded frontend data).
- Performance and UX polish: fast load times, smooth animations, responsive layout.
- Accessibility-first: strong baseline a11y patterns (ARIA labels where appropriate, usable UI across devices).
- Theme support: consistent light/dark mode across the entire UI.
- Planned contact submission feature: the contact form UX exists now, with the intention to implement real submission (API endpoint + validation + delivery mechanism such as email service / DB persistence) as a next step.
- Maintainable production setup: Docker workflows, clear client/server separation, ESLint + Prettier conventions, and Vitest coverage.

## One-line example statement

Building a full-stack React portfolio web app with a storytelling-first project showcase, backed by an Express/Postgres API, featuring dark/light mode, accessibility-first UI, and planned contact-form submissions.
