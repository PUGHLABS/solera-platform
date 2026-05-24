import { NavLink, Outlet } from 'react-router-dom'

const navSections = [
  {
    title: 'Operate',
    links: [
      { to: '/portfolio', label: 'Portfolio' },
      { to: '/communities', label: 'Communities' },
    ],
  },
  {
    title: 'Build',
    links: [
      { to: '/pilots', label: 'Pilots' },
      { to: '/integrations', label: 'Integrations' },
    ],
  },
  {
    title: 'Govern',
    links: [
      { to: '/compliance', label: 'Compliance' },
      { to: '/adoption', label: 'Adoption' },
      { to: '/forecasts', label: 'Forecasts' },
    ],
  },
]

function navClass({ isActive }) {
  return [
    'block px-3 py-1.5 rounded text-sm transition-colors',
    isActive
      ? 'bg-bg-panel text-text-primary'
      : 'text-text-muted hover:text-text-primary hover:bg-bg-sunken',
  ].join(' ')
}

export default function AppShell() {
  return (
    <div className="flex h-screen bg-bg-app text-text-primary">
      <aside className="w-48 shrink-0 border-r border-border-default flex flex-col">
        <div className="px-4 py-3 border-b border-border-default">
          <div className="text-sm font-medium">Solera ops</div>
          <div className="text-[11px] text-text-muted font-mono">42 communities</div>
        </div>
        <nav className="flex-1 overflow-y-auto p-3 space-y-4">
          {navSections.map((section) => (
            <div key={section.title}>
              <div className="text-[10px] uppercase tracking-wider text-text-faint px-3 mb-1.5">
                {section.title}
              </div>
              <div className="space-y-0.5">
                {section.links.map((link) => (
                  <NavLink key={link.to} to={link.to} className={navClass}>
                    {link.label}
                  </NavLink>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </aside>
      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  )
}
