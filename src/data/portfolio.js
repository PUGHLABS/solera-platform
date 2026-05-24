export const portfolio = {
  totalCommunities: 42,
  alarmCounts: { critical: 2, warning: 5, info: 8 },
  kpis: {
    occupancy: 92.4,
    revpor: 6847,
    pipeline: 128,
    adoption: 71,
  },
  mapPins: [
    { x: 30, y: 25, status: 'ok' },
    { x: 55, y: 40, status: 'ok' },
    { x: 80, y: 20, status: 'warning' },
    { x: 100, y: 55, status: 'ok' },
    { x: 120, y: 35, status: 'critical' },
    { x: 145, y: 50, status: 'ok' },
    { x: 170, y: 30, status: 'ok' },
    { x: 40, y: 65, status: 'warning' },
    { x: 90, y: 75, status: 'ok' },
    { x: 155, y: 70, status: 'ok' },
  ],
  insights: [
    {
      label: 'Anomaly',
      text: 'Aspen Grove fall rate +40% WoW, correlates to night shift change',
    },
    {
      label: 'Forecast',
      text: 'Cedar Pines staffing gap likely Thu PM (Monte Carlo p85)',
    },
  ],
}
