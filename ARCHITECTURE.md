# Frontend Architecture

System context: [../ARCHITECTURE.md](../ARCHITECTURE.md)

## Structure (planned)

```
portfolio-frontend/
  app/
    layout.tsx          # root layout, Nav/Footer, providers
    page.tsx            # home (Hero + highlights)
    about/page.tsx
    projects/page.tsx
    resume/page.tsx     # Experience + Skills (CV-style)
    contact/page.tsx
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

## Routing (App Router)

- File-based routing under `app/` — focused routes instead of one long scroll page
- Root `layout.tsx` wraps all pages with Nav/Footer; nested layouts optional later
- Server Components by default; Client Components for interactivity

## State & data

- RTK Query `apiSlice` with endpoints: `getProjects`, `getExperience`, `getSkills`, `postContact`
- Base URL from `NEXT_PUBLIC_API_URL`
- Mock data fallback during early FE development (before BE is live)

## Component layers

1. **shadcn/ui** — primitives (Button, Card, Input)
2. **Presentational** — Hero, ProjectCard (agent may build)
3. **Page sections** — compose presentational + data hooks (you build)
4. **Pages** — each route composes the sections it needs (`/`, `/projects`, `/resume`, etc.)

## Styling

- Tailwind CSS utility classes
- Dark mode via `next-themes` + shadcn
- Responsive: mobile-first
