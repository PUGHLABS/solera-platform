import { useParams } from 'react-router-dom'
import PageStub from '../components/PageStub'

export default function CommunityDetailPage() {
  const { id } = useParams()
  return (
    <PageStub
      title={`Community: ${id}`}
      note="Header (name, type, beds, manager) → community alarm counts → KPI strip (occupancy, fall rate, ack time, adoption) → filtered alarms + resident risk roster → pilots active here + sensor coverage map. Sketch in community detail wireframe."
    />
  )
}
