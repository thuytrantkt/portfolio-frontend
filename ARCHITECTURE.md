# Frontend Architecture

System context: [../ARCHITECTURE.md](../ARCHITECTURE.md)

## Structure (planned)

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

## Routing (App Router)

- File-based routing under `app/`
- `layout.tsx` wraps all pages; nested layouts per section if needed
- Server Components by default; Client Components for interactivity

## State & data

- RTK Query `apiSlice` with endpoints: `getProjects`, `getExperience`, `getSkills`, `postContact`
- Base URL from `NEXT_PUBLIC_API_URL`
- Mock data fallback during early FE development (before BE is live)

## Component layers

1. **shadcn/ui** — primitives (Button, Card, Input)
2. **Presentational** — Hero, ProjectCard (agent may build)
3. **Page sections** — compose presentational + data hooks (you build)
4. **Pages** — wire sections in `app/page.tsx`

## Styling

- Tailwind CSS utility classes
- Dark mode via `next-themes` + shadcn
- Responsive: mobile-first
