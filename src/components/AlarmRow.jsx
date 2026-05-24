const severityBorder = {
  critical: 'border-l-sev-critical',
  warning: 'border-l-sev-warning',
  info: 'border-l-sev-info',
}

const severityText = {
  critical: 'text-sev-critical',
  warning: 'text-sev-warning',
  info: 'text-sev-info',
}

export default function AlarmRow({ time, severity, type, detail, status, unacked }) {
  return (
    <div
      className={`bg-bg-sunken border-l-[4px] ${severityBorder[severity]} px-2.5 py-1.5 grid grid-cols-[56px_1fr_auto] gap-2 items-center text-[11px]`}
    >
      <span className="font-mono text-text-muted">{time}</span>
      <span>
        <span className={`font-medium ${severityText[severity]}`}>{type}</span>
        <span> · {detail}</span>
      </span>
      <span className={unacked ? `font-medium ${severityText[severity]}` : 'text-text-muted'}>
        {status}
      </span>
    </div>
  )
}
