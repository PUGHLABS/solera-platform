# Solera platform — Claude Code notes

This is a wireframe prototype, not production code. Optimize for clarity over abstraction.

## Patterns

- Visual styling = Tailwind v4 utilities + theme tokens from `src/index.css`. No CSS-in-JS, no styled-components, no one-off `<style>` blocks.
- Reusable building blocks live in `src/components`. Before adding a new "thing," check whether `<Panel>`, `<KpiTile>`, `<SeverityBadge>`, or `<AlarmRow>` already covers the case.
- Pages are flat: one route, one file. No nested folders inside `src/pages` unless a page genuinely needs sub-views.
- Mock data lives in `src/data/*.js`. Each file exports plain JS objects. When real APIs come in, change only these files — components stay the same.

## Visual language

- Dark gray app background, slightly lighter panels, even lighter sunken sub-panels.
- Severity encoded by both color AND left-border accent (SCADA convention). Never rely on color alone.
- Numbers in tables/rows use `font-mono` for alignment. Labels use default sans.
- Font sizes: 11px for dense data rows, 12-14px for headers, 18px for KPI values.

## Pages to expand

### CommunityDetailPage
Per-site SCADA view. Components needed:
- Header strip (name, type, units/residents, manager, alarm count pills)
- KPI strip filtered to this site (occupancy, fall rate trend, ack time, adoption)
- Filtered alarm board (alarms where `site === community.name`)
- Resident risk roster (top N by risk score)
- Pilots active here (filter pilots by deployment list)
- Sensor coverage schematic (SVG floorplan grid with status dots)

### PilotDetailPage
Pilot scorecard. Components needed:
- Header (name, stage badge, day count, owner, vendor, pilot ID)
- KPI strip (primary outcome metric, adoption, spend YTD, projected ROI)
- Outcome trend chart with baseline line, goal line, today marker, dashed forecast
- Hypothesis box (one sentence) + kill criteria box (3 pre-committed thresholds)
- Communities table (site, day, baseline → now, adoption %)
- Decision log (timeline of stage changes, confounders, next gate review)

### IntegrationsPage
Vendor list with status, latency, last sync, contract terms, data quality SLA, integration-debt log. Portfolio page shows the rollup; this is the living stack audit.

### ForecastsPage
Monte Carlo outputs. Occupancy projections per community, staffing simulation distributions (p50/p85/p95), fall-rate distributions, move-in pipeline conversion fans.

## What not to do

- No state management library. Local `useState` is enough for this scope.
- No chart library yet — inline SVG is fine for wireframes and keeps the bundle small.
- No auth or routing guards. This is a portfolio piece; routes are public.
- No TypeScript migration unless explicitly requested.
