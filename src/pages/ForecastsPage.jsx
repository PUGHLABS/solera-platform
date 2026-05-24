import Panel from '../components/Panel'
import KpiTile from '../components/KpiTile'

const models = [
  { id: 'MOD-1', name: 'Occupancy 90d',   lastRun: '2h',    status: 'ok' },
  { id: 'MOD-2', name: 'Falls Q1',         lastRun: '4h',    status: 'ok' },
  { id: 'MOD-3', name: 'Revenue FY',       lastRun: 'daily', status: 'ok' },
  { id: 'MOD-4', name: 'Staffing PM',      lastRun: '1h',    status: 'ok' },
  { id: 'MOD-5', name: 'Move-in funnel',   lastRun: '12h',   status: 'warning' },
]

const recommendations = [
  {
    action: 'Add 0.5 FTE PM shift · Cedar Pines',
    sim: '-23% missed care events',
    simAccent: 'ok',
    detail: '@ p85 · cost +$38K/yr',
  },
  {
    action: 'Shift 1 FTE Aspen Grove AM → night',
    sim: '-18% night falls',
    simAccent: 'ok',
    detail: '@ p70 · cost neutral',
  },
  {
    action: 'Defer Birch Hollow tech refresh to Q4',
    sim: '+$48K Q3 cash',
    simAccent: 'ok',
    detail: '@ p60 · risk neutral',
  },
]

const statusColor = { ok: 'text-sev-ok', warning: 'text-sev-warning' }

// Inline SVG chart data — avoids any chart library dependency
function OccupancyChart() {
  return (
    <div className="bg-bg-sunken rounded p-2 h-40">
      <svg viewBox="0 0 320 130" className="w-full h-full">
        {/* grid lines */}
        <line x1="30" y1="15"  x2="310" y2="15"  stroke="#333" strokeWidth="0.5" />
        <line x1="30" y1="62"  x2="310" y2="62"  stroke="#333" strokeWidth="0.5" />
        <line x1="30" y1="110" x2="310" y2="110" stroke="#333" strokeWidth="0.5" />
        <text x="25" y="18"  fontSize="7" fill="#666" textAnchor="end" fontFamily="ui-monospace">100%</text>
        <text x="25" y="65"  fontSize="7" fill="#666" textAnchor="end" fontFamily="ui-monospace">90%</text>
        <text x="25" y="113" fontSize="7" fill="#666" textAnchor="end" fontFamily="ui-monospace">80%</text>
        {/* fan — p10/p90 outer */}
        <polygon points="142,51 199,39 255,39 310,32 310,86 255,77 199,67 142,51" fill="#97c459" fillOpacity="0.13" />
        {/* fan — p25/p75 inner */}
        <polygon points="142,51 199,46 255,48 310,44 310,72 255,67 199,63 142,51" fill="#97c459" fillOpacity="0.28" />
        {/* history line */}
        <polyline fill="none" stroke="#888" strokeWidth="1.2" strokeLinejoin="round"
          points="30,55 40,53 50,54 60,52 70,51 80,53 90,51 101,50 111,50 122,52 132,51 142,51" />
        {/* p50 forecast */}
        <polyline fill="none" stroke="#97c459" strokeWidth="1.5" strokeDasharray="3 2"
          points="142,51 199,53 255,58 310,58" />
        {/* today marker */}
        <line x1="142" y1="10" x2="142" y2="118" stroke="#555" strokeWidth="0.5" strokeDasharray="1 2" />
        <text x="144" y="14" fontSize="7" fill="#888" fontFamily="ui-monospace">today</text>
        <circle cx="142" cy="51" r="2.5" fill="#97c459" />
        {/* labels */}
        <text x="308" y="30" fontSize="7" fill="#888"    textAnchor="end" fontFamily="ui-monospace">p90 96%</text>
        <text x="308" y="56" fontSize="7" fill="#97c459" textAnchor="end" fontFamily="ui-monospace">p50 91%</text>
        <text x="308" y="89" fontSize="7" fill="#888"    textAnchor="end" fontFamily="ui-monospace">p10 85%</text>
        <text x="30"  y="125" fontSize="7" fill="#555" fontFamily="ui-monospace">wk -12</text>
        <text x="310" y="125" fontSize="7" fill="#555" textAnchor="end" fontFamily="ui-monospace">wk +12</text>
      </svg>
    </div>
  )
}

function StaffingHistogram() {
  return (
    <div className="bg-bg-sunken rounded p-2 h-[100px]">
      <svg viewBox="0 0 200 80" className="w-full h-full">
        <line x1="10" y1="65" x2="190" y2="65" stroke="#444" strokeWidth="0.5" />
        <rect x="15" y="20" width="22" height="45" fill="#97c459" opacity="0.85" rx="1" />
        <rect x="42" y="25" width="22" height="40" fill="#97c459" opacity="0.7"  rx="1" />
        <rect x="69" y="38" width="22" height="27" fill="#ef9f27" opacity="0.8"  rx="1" />
        <rect x="96" y="48" width="22" height="17" fill="#ef9f27" opacity="0.7"  rx="1" />
        <rect x="123" y="55" width="22" height="10" fill="#e24b4a" opacity="0.7" rx="1" />
        <rect x="150" y="60" width="22" height="5"  fill="#e24b4a" opacity="0.6" rx="1" />
        {['0-1','1-2','2-3','3-4','4-5','5+'].map((label, i) => (
          <text key={label} x={26 + i * 27} y="76" fontSize="7" fill="#666" textAnchor="middle" fontFamily="ui-monospace">{label}</text>
        ))}
        <text x="100" y="13" fontSize="7" fill="#888" textAnchor="middle" fontFamily="ui-monospace">Missed care events / shift · 100 runs</text>
      </svg>
    </div>
  )
}

export default function ForecastsPage() {
  return (
    <div className="p-3 space-y-1.5">
      <header className="flex items-center justify-between pb-2 border-b border-border-default">
        <div className="flex items-center gap-2">
          <span className="font-medium text-sm">Forecasts</span>
          <span className="text-[11px] text-text-muted font-mono">Monte Carlo · 8 models · last run 2h ago</span>
        </div>
        <button className="bg-bg-panel border border-border-default text-text-secondary text-[11px] px-2.5 py-1 rounded hover:text-text-primary transition-colors">
          Run now
        </button>
      </header>

      <div className="grid grid-cols-4 gap-1.5">
        <KpiTile label="90d occ p50"  value="91.8%"         accent="ok" />
        <KpiTile label="Q1 falls p50" value="142"           accent="warning" trend="±18" />
        <KpiTile label="FY revenue p50" value="$124M"       accent="ok" />
        <KpiTile label="Confidence"   value="78%"           accent="info" />
      </div>

      <div className="grid grid-cols-[1.5fr_1fr] gap-1.5">
        <Panel title="Portfolio occupancy projection" action="p10 / p50 / p90">
          <OccupancyChart />
        </Panel>

        <Panel title="Active models">
          <div className="space-y-0.5 text-[11px]">
            {models.map((m) => (
              <div key={m.id} className="grid grid-cols-[1fr_44px_20px] gap-2 items-center px-2 py-1 bg-bg-sunken rounded">
                <span>{m.name}</span>
                <span className={`font-mono text-right ${m.status === 'ok' ? 'text-text-muted' : 'text-sev-warning'}`}>{m.lastRun}</span>
                <span className={`text-right ${statusColor[m.status]}`}>●</span>
              </div>
            ))}
          </div>
        </Panel>
      </div>

      <div className="grid grid-cols-[1.4fr_1fr] gap-1.5">
        <Panel title="Recommendations">
          <div className="space-y-1.5 text-[11px]">
            {recommendations.map((r) => (
              <div key={r.action} className="px-2 py-1.5 bg-bg-sunken rounded border-l-2 border-sev-insight">
                <div className="text-text-primary">{r.action}</div>
                <div className="text-text-muted mt-0.5">
                  Sim: <span className="text-sev-ok">{r.sim}</span> {r.detail}
                </div>
              </div>
            ))}
          </div>
        </Panel>

        <Panel title="Staffing sim" action="Cedar Pines PM">
          <StaffingHistogram />
        </Panel>
      </div>
    </div>
  )
}
