import { portfolio } from '../data/portfolio'
import { alarms } from '../data/alarms'
import { pilots } from '../data/pilots'
import { integrations } from '../data/integrations'
import Panel from '../components/Panel'
import KpiTile from '../components/KpiTile'
import SeverityBadge from '../components/SeverityBadge'
import AlarmRow from '../components/AlarmRow'

const statusDotColor = {
  ok: 'text-sev-ok',
  warning: 'text-sev-warning',
  critical: 'text-sev-critical',
}

const pinFill = {
  ok: '#97c459',
  warning: '#ef9f27',
  critical: '#e24b4a',
}

export default function PortfolioPage() {
  return (
    <div className="p-3 space-y-1.5">
      <header className="flex items-center justify-between pb-2 border-b border-border-default">
        <div className="flex items-center gap-2">
          <span className="text-sev-ok">●</span>
          <span className="font-medium text-sm">Solera ops command</span>
          <span className="text-[11px] text-text-muted font-mono">
            {portfolio.totalCommunities} communities · live
          </span>
        </div>
        <div className="flex gap-1.5">
          <SeverityBadge severity="critical">Critical {portfolio.alarmCounts.critical}</SeverityBadge>
          <SeverityBadge severity="warning">Warning {portfolio.alarmCounts.warning}</SeverityBadge>
          <SeverityBadge severity="info">Info {portfolio.alarmCounts.info}</SeverityBadge>
        </div>
      </header>

      <div className="grid grid-cols-4 gap-1.5">
        <KpiTile label="Occupancy" value={`${portfolio.kpis.occupancy}%`} accent="ok" />
        <KpiTile label="RevPOR" value={`$${portfolio.kpis.revpor.toLocaleString()}`} accent="ok" />
        <KpiTile label="Pipeline" value={portfolio.kpis.pipeline} accent="warning" />
        <KpiTile label="Adoption" value={`${portfolio.kpis.adoption}%`} accent="info" />
      </div>

      <div className="grid grid-cols-[1.5fr_1fr] gap-1.5">
        <Panel title="Live alarm board" action="14:23:08">
          <div className="space-y-0.5">
            {alarms.map((a) => (
              <AlarmRow key={a.id} {...a} />
            ))}
          </div>
        </Panel>

        <div className="flex flex-col gap-1.5">
          <Panel title="Integration health">
            <div className="space-y-1 text-[11px] font-mono">
              {integrations.map((i) => (
                <div key={i.name} className="flex justify-between">
                  <span>
                    <span className={statusDotColor[i.status]}>●</span> {i.name}
                  </span>
                  <span className={i.status === 'ok' ? 'text-text-muted' : statusDotColor[i.status]}>
                    {i.latency}
                  </span>
                </div>
              ))}
            </div>
          </Panel>

          <Panel title="AI insights" className="flex-1">
            <div className="space-y-1.5 text-[11px]">
              {portfolio.insights.map((insight) => (
                <div
                  key={insight.label}
                  className="bg-bg-sunken px-2 py-1.5 rounded border-l-2 border-sev-insight"
                >
                  <span className="font-medium text-sev-insight">{insight.label}:</span>{' '}
                  <span className="text-text-secondary">{insight.text}</span>
                </div>
              ))}
            </div>
          </Panel>
        </div>
      </div>

      <div className="grid grid-cols-[1.5fr_1fr] gap-1.5">
        <Panel title="Pilot tracker">
          <div className="space-y-1 text-[11px]">
            {pilots.map((p) => (
              <PilotTrackerRow key={p.id} pilot={p} />
            ))}
          </div>
        </Panel>

        <Panel title="Portfolio" action="42 sites">
          <div className="bg-bg-sunken rounded h-[88px] overflow-hidden">
            <svg viewBox="0 0 200 90" className="w-full h-full">
              {portfolio.mapPins.map((p, i) => (
                <circle
                  key={i}
                  cx={p.x}
                  cy={p.y}
                  r={p.status === 'critical' ? 4 : 3}
                  fill={pinFill[p.status]}
                />
              ))}
            </svg>
          </div>
          <div className="text-[11px] text-text-muted mt-1 text-center">
            {portfolio.alarmCounts.critical} critical · {portfolio.alarmCounts.warning} warn
          </div>
        </Panel>
      </div>
    </div>
  )
}

const stageColor = {
  scale: 'text-sev-ok',
  pilot: 'text-sev-warning',
  design: 'text-sev-info',
}

function PilotTrackerRow({ pilot }) {
  const blocks = '▰'.repeat(pilot.progress) + '▱'.repeat(5 - pilot.progress)
  const metricCls = pilot.primaryAccent === 'ok' ? 'text-sev-ok' : 'text-text-muted'
  return (
    <div className="grid grid-cols-[1fr_90px_80px_50px] gap-2 items-center px-2 py-1 bg-bg-sunken rounded">
      <span>{pilot.name}</span>
      <span className={stageColor[pilot.stage]}>
        {blocks} {pilot.stage}
      </span>
      <span className={`${metricCls} font-mono`}>{pilot.primaryMetric}</span>
      <span className="text-text-muted font-mono">d {pilot.daysInStage}</span>
    </div>
  )
}
