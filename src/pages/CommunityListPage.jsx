import { Link } from 'react-router-dom'
import { communities } from '../data/communities'
import Panel from '../components/Panel'

export default function CommunityListPage() {
  return (
    <div className="p-3 space-y-2">
      <h1 className="text-sm font-medium pb-2 border-b border-border-default">Communities</h1>
      <Panel title="All sites" action={`${communities.length} listed`}>
        <div className="space-y-1 text-[11px]">
          <div className="grid grid-cols-[1fr_150px_70px_70px] gap-2 px-2 text-text-muted">
            <span>Site</span>
            <span>Type</span>
            <span className="text-right">Occupancy</span>
            <span className="text-right">Alarms</span>
          </div>
          {communities.map((c) => (
            <Link
              key={c.id}
              to={`/communities/${c.id}`}
              className="grid grid-cols-[1fr_150px_70px_70px] gap-2 px-2 py-1.5 bg-bg-sunken rounded hover:bg-bg-elevated transition-colors"
            >
              <span className="font-medium">{c.name}</span>
              <span className="text-text-muted">{c.type}</span>
              <span className="text-text-secondary font-mono text-right">{c.occupancy}%</span>
              <span className="font-mono text-right space-x-1">
                {c.alarmCounts.critical > 0 && (
                  <span className="text-sev-critical">{c.alarmCounts.critical}c</span>
                )}
                {c.alarmCounts.warning > 0 && (
                  <span className="text-sev-warning">{c.alarmCounts.warning}w</span>
                )}
              </span>
            </Link>
          ))}
        </div>
      </Panel>
    </div>
  )
}
