# portfolio-frontend

Next.js frontend for [kieuthuytkt.com](https://kieuthuytkt.com) — portfolio site, API-driven content, and contact form.

Part of a two-repo portfolio project. The parent workspace (`portfolio/`) holds shared docs and Cursor rules; **this folder is the Git repo root** deployed to Vercel.

|                     |                                                                                 |
| ------------------- | ------------------------------------------------------------------------------- |
| **Backend**         | `portfolio-backend` repo → Render                                               |
| **System design**   | [ARCHITECTURE.md](./ARCHITECTURE.md) · [../ARCHITECTURE.md](../ARCHITECTURE.md) |
| **Learning guides** | [docs/learning/](../docs/learning/)                                             |

## Stack

- Next.js 15+ (App Router)
- TypeScript
- Tailwind CSS + shadcn/ui
- Redux Toolkit + RTK Query

## Prerequisites

- Node.js 18+ (20+ recommended)
- Backend at `http://localhost:8000` when testing live API (optional until integration)

## Local setup

```bash
cd portfolio-frontend
npm install
cp .env.example .env.local   # then edit values
npm run dev
```

- Site: http://localhost:3000

```bash
npm run build    # production build
npm run lint     # ESLint
```

> **Note:** Application code is built incrementally via [FEATURES.md](./FEATURES.md) (start with FE-01). If `app/` or `package.json` are not present yet, follow [01-nextjs-foundations.md](../docs/learning/01-nextjs-foundations.md).

## Environment variables

Copy `.env.example` to `.env.local` (never commit `.env.local`):

| Variable              | Description                                     |
| --------------------- | ----------------------------------------------- |
| `NEXT_PUBLIC_API_URL` | Backend base URL (e.g. `http://localhost:8000`) |

## Pages & data (planned)

| Area | Description                                                                 |
| ---- | --------------------------------------------------------------------------- |
| Home | Hero, About, Projects, Experience, Skills, Contact                          |
| API  | RTK Query hooks: `getProjects`, `getExperience`, `getSkills`, `postContact` |

Mock data can stand in until the backend is live. See [ARCHITECTURE.md](./ARCHITECTURE.md) and [../ARCHITECTURE.md](../ARCHITECTURE.md) for the API contract.

## Project structure (target)

```
portfolio-frontend/
  app/
    layout.tsx          # root layout, providers
    page.tsx            # home
    globals.css
  components/
    ui/                 # shadcn/ui
    sections/           # Hero, About, Projects, etc.
    layout/             # Nav, Footer
  lib/
    store.ts            # Redux store
    api/apiSlice.ts     # RTK Query
  types/                # shared TS types matching API
```

## Tests

```bash
npx playwright test   # once E2E is set up
```

## Deploy

Hosted on **Vercel**. Set `NEXT_PUBLIC_API_URL` to the production backend URL in the Vercel dashboard.

## Development

- Feature tracker: [FEATURES.md](./FEATURES.md)
- Agent context: [AGENTS.md](./AGENTS.md)
- Worklog: [WORKLOG.md](./WORKLOG.md)
