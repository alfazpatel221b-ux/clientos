# ClientOS

ClientOS is a synthetic, AI-assisted client delivery operating system prototype for an executive workflow demonstration. It unifies opportunity, engagement readiness, delivery, capacity, reporting, finance visibility, and operational risk signals in one browser workspace.

## Run locally

Requires Node.js 18.17 or later.

```bash
npm install
npm run dev
```

Open http://localhost:3000. `npm run build` creates a production build; `npm start` serves it locally. The project can be imported into Vercel as a standard Next.js app. It requires no external service credentials.

## Functionality

- Responsive workspace navigation, portfolio overview, engagement search/filter/sort, and engagement details.
- Shared synthetic records for clients, engagements, tasks, milestones, consultants, and leads.
- Engagement creation, lead creation and stage changes, and qualified opportunity conversion into a readiness-stage engagement.
- Configurable per-engagement readiness checklist and mandatory contractual authorization gate. Delivery cannot be activated while any checklist item is incomplete; there is no bypass.
- Delivery task status updates, owner/status filters, overdue indicators, and milestone timeline.
- Consultant allocation updates with transparent capacity percentages and an over-100% flag.
- Status report drafts generated from existing engagement/task data; they are not transmitted.
- Finance visibility from synthetic values only; no invoices are issued and no finance connector is configured.
- Deterministic risk rules evaluated against current workspace state. Evidence, possible impact, recommended action, suggested owner, rule match, review status, and follow-up notes are shown.
- Browser `localStorage` persistence and a reset action in Settings.

## Architecture

- `src/lib/types.ts`: TypeScript data model.
- `src/lib/seed.ts`: deterministic fictional records.
- `src/lib/rules.ts`: readiness validation and risk analysis business rules.
- `src/app/page.tsx`: interactive App Router workspace and shared state.
- `src/app/globals.css`: responsive workspace styling.

## Data and limitations

All records are fictional demonstration data. No production database, CRM, accounting system, collaboration tool, external AI API, or authentication provider is connected. Risk analysis is deterministic rules-based analysis, not live LLM inference or a certainty-based prediction. Proposal and client-report content is template/draft material for human review. Browser-local changes remain on the current browser/device until reset or cleared.

## Checks

Run `npm run typecheck`, `npm run lint`, and `npm run build` before publishing changes.
