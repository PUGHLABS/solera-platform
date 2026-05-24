import { useParams } from 'react-router-dom'
import PageStub from '../components/PageStub'

export default function PilotDetailPage() {
  const { id } = useParams()
  return (
    <PageStub
      title={`Pilot: ${id}`}
      note="Header (name, stage badge, day count, owner, vendor) → KPI strip (outcome metric, adoption, spend, ROI) → outcome trend chart with goal line and forecast + hypothesis + kill criteria → communities table + decision log. Sketch in pilot detail wireframe."
    />
  )
}
