const styleMap = {
  critical: 'bg-sev-critical text-white',
  warning: 'bg-sev-warning text-[#412402]',
  info: 'bg-sev-info text-white',
  ok: 'bg-sev-ok text-[#173404]',
}

export default function SeverityBadge({ severity, children }) {
  const cls = styleMap[severity] ?? styleMap.info
  return (
    <span className={`text-[11px] font-medium px-2 py-0.5 rounded ${cls}`}>{children}</span>
  )
}
