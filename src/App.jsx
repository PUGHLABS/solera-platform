import { Routes, Route, Navigate } from 'react-router-dom'
import AppShell from './components/AppShell'
import PortfolioPage from './pages/PortfolioPage'
import CommunityListPage from './pages/CommunityListPage'
import CommunityDetailPage from './pages/CommunityDetailPage'
import PilotsPage from './pages/PilotsPage'
import PilotDetailPage from './pages/PilotDetailPage'
import IntegrationsPage from './pages/IntegrationsPage'
import CompliancePage from './pages/CompliancePage'
import AdoptionPage from './pages/AdoptionPage'
import ForecastsPage from './pages/ForecastsPage'

export default function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route path="/" element={<Navigate to="/portfolio" replace />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/communities" element={<CommunityListPage />} />
        <Route path="/communities/:id" element={<CommunityDetailPage />} />
        <Route path="/pilots" element={<PilotsPage />} />
        <Route path="/pilots/:id" element={<PilotDetailPage />} />
        <Route path="/integrations" element={<IntegrationsPage />} />
        <Route path="/compliance" element={<CompliancePage />} />
        <Route path="/adoption" element={<AdoptionPage />} />
        <Route path="/forecasts" element={<ForecastsPage />} />
      </Route>
    </Routes>
  )
}
