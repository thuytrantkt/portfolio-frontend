# Frontend Features

Parent rollup: [../docs/FEATURES.md](../docs/FEATURES.md) · Guide index: [../docs/learning/](../docs/learning/)

**Status:** `Todo` | `In progress` | `Blocked` | `In review` | `Done`  
**Rule:** One `In progress` at a time. Not `Done` until validation passes.

| ID    | Title                          | Owner | Status | Validation                                  | Guide                                                    |
| ----- | ------------------------------ | ----- | ------ | ------------------------------------------- | -------------------------------------------------------- |
| FE-01 | Next.js App Router foundations | You   | Done   | `npm run dev` serves home page with layout  | [01-nextjs](../docs/learning/01-nextjs-foundations.md)   |
| FE-02 | UI components (shadcn/ui)      | Agent | Done   | Components render in Storybook or demo page | [01b-shadcn](../docs/learning/01b-shadcn-ui.md)          |
| FE-03 | Pages + section composition    | You   | Todo   | `/`, `/about`, `/projects`, `/resume`, `/contact` render with Nav/Footer | [02-pages](../docs/learning/02-pages-and-composition.md) |
| FE-04 | RTK Query store + apiSlice     | You   | Todo   | Hooks fetch mock then live data             | [03-rtk-query](../docs/learning/03-rtk-query.md)         |

## Cross-repo links

- FE-04 + BE-04 → INT-01 (integration)
- FE-04 depends on FE-01, FE-03
