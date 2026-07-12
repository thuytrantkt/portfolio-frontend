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

## GitHub

Repo: `portfolio-frontend` · Deploy: Vercel (repo root = this folder)
