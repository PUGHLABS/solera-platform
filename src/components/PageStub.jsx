import Panel from './Panel'

export default function PageStub({ title, note }) {
  return (
    <div className="p-3 space-y-2">
      <h1 className="text-sm font-medium pb-2 border-b border-border-default">{title}</h1>
      <Panel title="Wireframe pending">
        <div className="text-[11px] text-text-muted leading-relaxed">{note}</div>
      </Panel>
    </div>
  )
}
