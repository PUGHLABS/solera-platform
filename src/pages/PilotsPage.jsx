import { Link } from 'react-router-dom'
import { pilots } from '../data/pilots'
import Panel from '../components/Panel'

const stageColor = {
  scale: 'text-sev-ok',
  pilot: 'text-sev-warning',
  design: 'text-sev-info',
}

export default function PilotsPage() {
  return (
    <div className="p-3 space-y-2">
      <h1 className="text-sm font-medium pb-2 border-b border-border-default">Pilots</h1>
      <Panel title="Active initiatives" action={`${pilots.length} in flight`}>
        <div className="space-y-1 text-[11px]">
          {pilots.map((p) => (
            <Link
              key={p.id}
              to={`/pilots/${p.id}`}
              className="grid grid-cols-[1fr_80px_100px_60px] gap-2 px-2 py-1.5 bg-bg-sunken rounded hover:bg-bg-elevated transition-colors"
            >
              <span className="font-medium">{p.name}</span>
              <span className={stageColor[p.stage]}>{p.stage}</span>
              <span className="text-text-secondary font-mono">{p.primaryMetric}</span>
              <span className="text-text-muted font-mono text-right">d {p.daysInStage}</span>
            </Link>
          ))}
        </div>
      </Panel>
    </div>
  )
}
