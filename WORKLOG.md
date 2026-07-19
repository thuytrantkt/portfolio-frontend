# Frontend Worklog

Append-only, newest first. Update on **portfolio-frontend branches only**.

---

## 2026-07-19 — Session 5: FE-03 planning — route-based pages

**Feature IDs:** FE-03 (planning/docs only)  
**Summary:** Decided to use **multi-route pages** instead of a single long scroll page (inspired by [resume-style portfolio](https://portfoliov3-puce.vercel.app/resume)). Updated [02-pages-and-composition.md](../docs/learning/02-pages-and-composition.md) with route map (`/`, `/about`, `/projects`, `/resume`, `/contact`), Nav/Footer in root layout, and section composition per route. Updated `FEATURES.md` validation and `ARCHITECTURE.md` routing section.

**Verified this log-out:**

- `GET /` → 200 (dev server running)
- `GET /about` → 200
- `GET /demo` → 200 (FE-02 still healthy)
- `GET /projects`, `/resume`, `/contact` → **404** (routes not implemented yet)
- No `components/layout/` (Nav/Footer not created yet)
- FE-03 validation **not met** — remains `Todo`

**Unverified:**

- Production `/demo` 404 (unchanged from Session 4)

**Current state:** FE-01 and FE-02 **Done**. FE-03 **Todo** — docs ready; implementation not started.

**Next steps:** FE-03 — follow updated [02-pages-and-composition.md](../docs/learning/02-pages-and-composition.md): build Nav/Footer, section components, and route pages.

**Blockers:** None.

---

## 2026-07-19 — Session 4: FE-02 shadcn/ui + dev-only demo

**Feature IDs:** FE-02  
**Summary:** Initialized shadcn/ui (base-nova, Tailwind v4). Added primitives: button, card, badge, input, textarea, label, separator, skeleton. Set up `next-themes` + `ThemeProvider`. Created `/demo` showcase page. Blocked `/demo` in production via `middleware.ts`. Added [01b-shadcn-ui.md](../docs/learning/01b-shadcn-ui.md) guide; linked from `FEATURES.md` and `AGENTS.md`.

**Verified this log-out:**

- `npm run dev` — `GET /` and `GET /demo` return 200
- `npm run build` — passes
- `npm run lint` — passes
- Git clean on `main`, in sync with `origin/main` (`938f658`)

**Unverified:**

- Production runtime 404 for `/demo` (middleware logic reviewed; `next start` not run in this environment)

**Current state:** FE-01 and FE-02 **Done**. shadcn primitives ready for FE-03.

**Next steps:** FE-03 — assemble portfolio sections ([02-pages-and-composition.md](../docs/learning/02-pages-and-composition.md)).

**Blockers:** None.

---

## 2026-07-19 — Session 3: FE-01 Next.js App Router foundations

**Feature IDs:** FE-01  
**Summary:** Scaffolded Next.js app via temp-folder merge (avoided `create-next-app` conflict with existing docs). Customized `app/layout.tsx` and `app/page.tsx`; added optional `app/about/page.tsx`. Extended `AGENTS.md` with Next.js agent-rules block and frontend learning guide links.

**Verified this log-out:**

- `npm run dev` running — `GET /` and `GET /about` return 200
- Home page HTML includes root `<html>`/`<body>` and title "Thuy Tran — Portfolio"
- Git clean on `main`, in sync with `origin/main` (`ea98b37`, `a54bf3c`)

**Current state:** FE-01 **Done**. Next.js 16 App Router dev server works locally.

**Next steps:** FE-02 (shadcn/ui components — agent), then FE-03 ([02-pages-and-composition.md](../docs/learning/02-pages-and-composition.md)).

**Blockers:** None.

---

## 2026-07-12 — Session 2: README + pushed to GitHub (INT-03)

**Feature IDs:** INT-03  
**Summary:** Added `README.md`. Fixed `origin` remote URL and pushed to `github.com/thuytrantkt/portfolio-frontend`.

**Current state:** Repo on GitHub. FE-01 not started.

**Next steps:** FE-01 ([01-nextjs-foundations.md](../docs/learning/01-nextjs-foundations.md)).

**Blockers:** None.

---

## 2026-07-12 — Session 1: Folder renamed to portfolio-frontend

**Feature IDs:** —  
**Summary:** Repo folder renamed from `frontend/` to `portfolio-frontend/` to match GitHub repo name. Harnessing paths updated.

**Current state:** Ready to start FE-01 (Next.js foundations).

**Next steps:** Follow [docs/learning/01-nextjs-foundations.md](../docs/learning/01-nextjs-foundations.md).

**Blockers:** None.
