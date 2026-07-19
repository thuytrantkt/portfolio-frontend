# Frontend — Agent Context

Parent: [../AGENTS.md](../AGENTS.md) · Architecture: [ARCHITECTURE.md](./ARCHITECTURE.md)

## Stack

- Next.js 15+ (App Router), TypeScript, Tailwind CSS, shadcn/ui
- Redux Toolkit + RTK Query for API data

## Run / test

```bash
cd portfolio-frontend
npm install
npm run dev          # http://localhost:3000
npm run build
npm run lint
npx playwright test  # once E2E is set up
```

## Env vars

```bash
# .env.local (never commit)
NEXT_PUBLIC_API_URL=http://localhost:8000
```

## Conventions

- App Router: `app/` for routes, `components/` for UI
- `"use client"` only when needed (hooks, events, browser APIs)
- One RTK Query `apiSlice`; tag-based cache invalidation
- shadcn/ui for presentational components; agent may build styling-heavy UI

## Task tracking

- Features: [FEATURES.md](./FEATURES.md)
- Worklog: [WORKLOG.md](./WORKLOG.md) — update on FE branches only
- Guides: [../docs/learning/](../docs/learning/)

## Session protocol

Follow [../AGENTS.md#session-protocol](../AGENTS.md#session-protocol). **FE scope:** log-out writes [FEATURES.md](./FEATURES.md) + [WORKLOG.md](./WORKLOG.md). Validation checks: `npm run dev`, `npm run build`, `npm run lint`.

## GitHub

Repo: `portfolio-frontend` · Deploy: Vercel (repo root = this folder)

## Next.js docs (for agents)

<!-- BEGIN:nextjs-agent-rules -->
Before writing Next.js code, read the guides in `node_modules/next/dist/docs/` (use `01-app/` for App Router). This project's installed Next.js version may differ from common training data — heed deprecation notices in those docs.
<!-- END:nextjs-agent-rules -->

- Official: https://nextjs.org/docs
- Learning guides for this repo ([index](../docs/learning/)):
  - [00 — Two GitHub repos](../docs/learning/00-github-two-repos.md) (INT-03)
  - [01 — Next.js App Router foundations](../docs/learning/01-nextjs-foundations.md) (FE-01)
  - [01b — shadcn/ui setup and usage](../docs/learning/01b-shadcn-ui.md) (FE-02)
  - [02 — Pages and composition](../docs/learning/02-pages-and-composition.md) (FE-03)
  - [03 — RTK Query store and apiSlice](../docs/learning/03-rtk-query.md) (FE-04)
