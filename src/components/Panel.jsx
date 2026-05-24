export default function Panel({ title, icon, action, children, className = '' }) {
  return (
    <div className={`bg-bg-panel rounded p-2.5 ${className}`}>
      {(title || action) && (
        <div className="flex items-center justify-between mb-2">
          <div className="text-xs font-medium text-text-secondary flex items-center gap-1.5">
            {icon}
            {title}
          </div>
          {action && <div className="text-[11px] text-text-muted">{action}</div>}
        </div>
      )}
      {children}
    </div>
  )
}
