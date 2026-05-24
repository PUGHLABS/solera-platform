# Solera ops platform — wireframe prototype

A working-prototype scaffold of a senior living operations command center, built as a portfolio artifact for the Director of AI-Enabled Operations interview.

## What's here

- **Information architecture** — three lanes (Operate, Build, Govern) matching the IA diagram
- **Portfolio page** (fully implemented) — the SCADA-style command center
- **Communities list** + **Pilots list** (fully implemented) — drill-down entry points
- **Stub pages** for the detail views and the Govern lane — each renders the header + a placeholder so the router is fully wired

## Stack

- Vite + React 19 + React Router 7
- Tailwind CSS v4 (via `@tailwindcss/vite`)
- Mock data in `src/data/*.js`

## Quickstart

```
npm install
npm run dev
```

Lands on `/portfolio` at http://localhost:5173.

## Build and deploy

```
npm run build
```

Output goes to `dist/`. Vercel auto-detects Vite — connect the repo and accept defaults.

## Project structure

```
src/
├── App.jsx                  router table
├── main.jsx                 entry
├── index.css                tailwind + theme tokens
├── components/              reusable building blocks
│   ├── AppShell.jsx         sidebar nav + content outlet
│   ├── Panel.jsx            the standard panel wrapper
│   ├── KpiTile.jsx          KPI strip tiles
│   ├── SeverityBadge.jsx
│   ├── AlarmRow.jsx         SCADA alarm row
│   └── PageStub.jsx         placeholder for stub pages
├── data/                    mock data — swap for real APIs later
│   ├── portfolio.js
│   ├── alarms.js
│   ├── pilots.js
│   ├── integrations.js
│   └── communities.js
└── pages/
    ├── PortfolioPage.jsx        implemented
    ├── CommunityListPage.jsx    implemented
    ├── CommunityDetailPage.jsx  stub
    ├── PilotsPage.jsx           implemented
    ├── PilotDetailPage.jsx      stub
    ├── IntegrationsPage.jsx     stub
    ├── CompliancePage.jsx       stub
    ├── AdoptionPage.jsx         stub
    └── ForecastsPage.jsx        stub
```

## Theme tokens

All colors live in `src/index.css` under the Tailwind v4 `@theme` block. Edit one place to re-theme.

| Token | Purpose |
| --- | --- |
| `--color-bg-app` | Page background |
| `--color-bg-panel` | Standard panel surface |
| `--color-bg-sunken` | Sub-panels, alarm rows |
| `--color-sev-critical` | Red — unacked critical alarms |
| `--color-sev-warning` | Amber — warnings |
| `--color-sev-info` | Blue — informational |
| `--color-sev-ok` | Green — healthy |
| `--color-sev-insight` | Purple — AI / anomaly callouts |

Used in Tailwind as `bg-sev-critical`, `text-sev-warning`, `border-l-sev-ok`, etc.

## Next steps

1. Fill in stub pages from wireframes — `CLAUDE.md` has the per-page guidance.
2. Replace mock data with real API calls (each file in `src/data/` is the seam).
3. Wire the AppShell to dynamic alarm counts so the badge totals stay live.
