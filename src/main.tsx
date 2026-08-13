import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { getAdminPage } from './lib/adminRoutes.ts'
import { AdminHubPage } from './pages/AdminHub.tsx'
import { JourneyUploadPage } from './pages/JourneyUpload.tsx'
import { ResumeUploadPage } from './pages/ResumeUpload.tsx'

const adminPage = getAdminPage()
const root =
  adminPage === 'hub' ? (
    <AdminHubPage />
  ) : adminPage === 'upload' ? (
    <JourneyUploadPage />
  ) : adminPage === 'resume' ? (
    <ResumeUploadPage />
  ) : (
    <App />
  )

createRoot(document.getElementById('root')!).render(<StrictMode>{root}</StrictMode>)
