# Frontend Worklog

Append-only, newest first. Update on **portfolio-frontend branches only**.

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
