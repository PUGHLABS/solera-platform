const accentMap = {
  ok: 'border-l-sev-ok',
  warning: 'border-l-sev-warning',
  critical: 'border-l-sev-critical',
  info: 'border-l-sev-info',
}

export default function KpiTile({ label, value, accent = 'ok', trend, trendAccent = 'ok' }) {
  const trendColor = {
    ok: 'text-sev-ok',
    warning: 'text-sev-warning',
    critical: 'text-sev-critical',
  }[trendAccent]
  return (
    <div className={`bg-bg-panel px-2.5 py-2 rounded border-l-[3px] ${accentMap[accent]}`}>
      <div className="text-[11px] text-text-muted">{label}</div>
      <div className="text-lg font-medium">
        {value}
        {trend && <span className={`ml-1 text-[11px] ${trendColor}`}>{trend}</span>}
      </div>
    </div>
  )
}
