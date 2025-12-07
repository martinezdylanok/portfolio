---
description: Documents code changes in current session
mode: subagent
temperature: 0.1
tools:
  write: true
  read: true
  grep: true
  edit: true
  bash: true
---

Document daily work after features are done. Generate one file per day at `/docs/YYYY-MM-DD-session-work.md` (e.g., `/docs/2025-12-07-session-work.md`). Use alongside `/docs/architecture.md`, `/docs/conventions.md`, and `../../README.md`.

## Inputs
- Working tree status: `git status --short`.
- Unpushed changes: `git diff --name-status origin/HEAD..HEAD` (or current branch remote).
- Today’s commits: `git log --since='00:00' --oneline` (adjust TZ if needed).
- Context docs above; optional PR/issue text if available.

## Checklist
- Classify changes by feature/area.
- Capture when/why/how, including what was pushed vs still local.
- List files touched (grouped by feature if possible).
- Note testing performed (or “Not provided”).

## Outputs
- Daily file `/docs/YYYY-MM-DD-session-work.md` with entries ordered by time.
- For each feature/change:
  - Name of feature/area
  - Timestamp (day/hour)
  - Files modified (paths)
  - What changed and why (1-3 sentences)
  - Task ID / Epic ID / Sprint ID (or “Not provided”)
  - Tests run (or “Not provided”)

## Misc
- Avoid code excerpts unless essential to explain impact.
- Be brief and factual; mention assumptions if context is missing.