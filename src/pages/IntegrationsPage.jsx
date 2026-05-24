import Panel from '../components/Panel'
import KpiTile from '../components/KpiTile'
import SeverityBadge from '../components/SeverityBadge'

const vendors = [
  {
    name: 'Inspiren',
    status: 'ok',
    statusLabel: 'OK',
    latency: '2s',
    lastSync: '14:22:40',
    dataQuality: 99.1,
    contract: 'Jun 2026',
    contractOk: true,
    notes: 'Fall + ambient; flagship vendor',
    tickets: [],
  },
  {
    name: 'AllieHealth',
    status: 'ok',
    statusLabel: 'OK',
    latency: '4s',
    lastSync: '14:22:35',
    dataQuality: 97.4,
    contract: 'Dec 2026',
    contractOk: true,
    notes: 'Care plans + med records',
    tickets: [],
  },
  {
    name: 'WelcomeHome',
    status: 'warning',
    statusLabel: 'Slow',
    latency: '12m',
    lastSync: '14:10:12',
    dataQuality: 94.8,
    contract: 'Mar 2027',
    contractOk: true,
    notes: 'Move-in CRM; ticket TKT-041 open',
    tickets: ['TKT-041'],
  },
  {
    name: 'TSOLife',
    status: 'ok',
    statusLabel: 'OK',
    latency: '8s',
    lastSync: '14:22:10',
    dataQuality: 98.2,
    contract: 'Sep 2026',
    contractOk: true,
    notes: 'Resident stories + family portal',
    tickets: [],
  },
  {
    name: 'Yardi',
    status: 'critical',
    statusLabel: 'SLA breach',
    latency: '—',
    lastSync: '13:41:00',
    dataQuality: 88.4,
    contract: 'Nov 2025',
    contractOk: false,
    notes: 'Financials; contract lapsed',
    tickets: ['TKT-038', 'TKT-039'],
  },
]

const tickets = [
  { id: 'TKT-038', vendor: 'Yardi',       severity: 'critical', title: 'Contract lapsed Nov 2025 — renew or replace' },
  { id: 'TKT-039', vendor: 'Yardi',       severity: 'critical', title: 'Financial data quality below 90% threshold' },
  { id: 'TKT-041', vendor: 'WelcomeHome', severity: 'warning',  title: 'API p99 latency >10m for 3 consecutive days' },
]

const statusDot = {
  ok:       'text-sev-ok',
  warning:  'text-sev-warning',
  critical: 'text-sev-critical',
}

const statusLabel = {
  ok:       'text-sev-ok',
  warning:  'text-sev-warning',
  critical: 'text-sev-critical',
}

const qualityColor = (q) => {
  if (q >= 97) return 'text-sev-ok'
  if (q >= 92) return 'text-sev-warning'
  return 'text-sev-critical'
}

function DataQualityChart() {
  return (
    <div className="bg-bg-sunken rounded p-2 h-[100px]">
      <svg viewBox="0 0 200 80" className="w-full h-full">
        <line x1="10" y1="65" x2="190" y2="65" stroke="#333" strokeWidth="0.5" />
        <line x1="10" y1="15" x2="190" y2="15" stroke="#333" strokeWidth="0.5" strokeDasharray="2 2" />
        <text x="8" y="18" fontSize="7" fill="#666" textAnchor="end" fontFamily="ui-monospace">100%</text>
        <text x="8" y="68" fontSize="7" fill="#666" textAnchor="end" fontFamily="ui-monospace">80%</text>
        {/* portfolio avg — stable high */}
        <polyline fill="none" stroke="#97c459" strokeWidth="1.2" strokeLinejoin="round"
          points="10,20 30,19 50,21 70,20 90,22 110,21 130,20 150,23 170,20 190,19" />
        {/* WelcomeHome — slow degradation */}
        <polyline fill="none" stroke="#ef9f27" strokeWidth="1.2" strokeLinejoin="round"
          points="10,30 30,28 50,32 70,30 90,33 110,35 130,38 150,40 170,45 190,48" />
        {/* Yardi — accelerating degradation */}
        <polyline fill="none" stroke="#e24b4a" strokeWidth="1.2" strokeLinejoin="round"
          points="10,25 30,26 50,28 70,30 90,35 110,40 130,45 150,50 170,54 190,58" />
        <text x="10"  y="76" fontSize="7" fill="#555" fontFamily="ui-monospace">d -30</text>
        <text x="190" y="76" fontSize="7" fill="#555" textAnchor="end" fontFamily="ui-monospace">today</text>
      </svg>
    </div>
  )
}

export default function IntegrationsPage() {
  return (
    <div className="p-3 space-y-1.5">
      <header className="flex items-center justify-between pb-2 border-b border-border-default">
        <div className="flex items-center gap-2">
          <span className="font-medium text-sm">Integrations</span>
          <span className="text-[11px] text-text-muted font-mono">5 vendors · 2 issues · checked 14:23</span>
        </div>
        <div className="flex gap-1.5">
          <SeverityBadge severity="critical">SLA breach 1</SeverityBadge>
          <SeverityBadge severity="warning">Degraded 1</SeverityBadge>
        </div>
      </header>

      <div className="grid grid-cols-4 gap-1.5">
        <KpiTile label="Connected"    value="5"     accent="ok" />
        <KpiTile label="SLA breach"   value="1"     accent="critical" />
        <KpiTile label="Data quality" value="96.2%" accent="ok" />
        <KpiTile label="Open tickets" value="3"     accent="warning" />
      </div>

      <Panel title="Vendor registry">
        <div className="space-y-0.5 text-[11px]">
          <div className="grid grid-cols-[14px_110px_72px_54px_74px_80px_68px_1fr] gap-2 px-1.5 pb-1 text-text-muted">
            <span />
            <span>Vendor</span>
            <span>Status</span>
            <span>Latency</span>
            <span>Last sync</span>
            <span>Data quality</span>
            <span>Contract</span>
            <span>Notes</span>
          </div>
          {vendors.map((v) => (
            <div
              key={v.name}
              className={`grid grid-cols-[14px_110px_72px_54px_74px_80px_68px_1fr] gap-2 items-center px-1.5 py-1.5 bg-bg-sunken rounded ${
                v.status === 'critical' ? 'border-l-2 border-sev-critical' :
                v.status === 'warning'  ? 'border-l-2 border-sev-warning'  : ''
              }`}
            >
              <span className={statusDot[v.status]}>●</span>
              <span className="font-medium">{v.name}</span>
              <span className={statusLabel[v.status]}>{v.statusLabel}</span>
              <span className={`font-mono ${v.status !== 'ok' ? statusLabel[v.status] : 'text-text-muted'}`}>{v.latency}</span>
              <span className={`font-mono ${v.status !== 'ok' ? statusLabel[v.status] : 'text-text-muted'}`}>{v.lastSync}</span>
              <span className={`font-mono ${qualityColor(v.dataQuality)}`}>{v.dataQuality}%</span>
              <span className={v.contractOk ? 'text-text-muted' : 'text-sev-warning'}>{v.contract}{!v.contractOk && ' !'}</span>
              <span className={v.status !== 'ok' ? statusLabel[v.status] : 'text-text-muted'}>{v.notes}</span>
            </div>
          ))}
        </div>
      </Panel>

      <div className="grid grid-cols-[1.2fr_1fr] gap-1.5">
        <Panel title="Integration debt log">
          <div className="space-y-1 text-[11px]">
            {tickets.map((t) => (
              <div
                key={t.id}
                className={`grid grid-cols-[60px_90px_1fr_60px] gap-2 items-center px-2 py-1.5 bg-bg-sunken rounded border-l-2 ${
                  t.severity === 'critical' ? 'border-sev-critical' : 'border-sev-warning'
                }`}
              >
                <span className="font-mono text-text-muted">{t.id}</span>
                <span className={t.severity === 'critical' ? 'text-sev-critical font-medium' : 'text-sev-warning font-medium'}>{t.vendor}</span>
                <span className="text-text-secondary">{t.title}</span>
                <span className={`text-right capitalize ${t.severity === 'critical' ? 'text-sev-critical' : 'text-sev-warning'}`}>{t.severity}</span>
              </div>
            ))}
          </div>
        </Panel>

        <Panel title="Data quality trend · 30d">
          <DataQualityChart />
          <div className="flex gap-3 text-[11px] text-text-muted mt-1.5">
            <span><span className="text-sev-ok">●</span> Portfolio avg</span>
            <span><span className="text-sev-warning">●</span> WelcomeHome</span>
            <span><span className="text-sev-critical">●</span> Yardi</span>
          </div>
        </Panel>
      </div>
    </div>
  )
}
