import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { isJourneyUploadRoute } from './lib/journeyUploadRoute.ts'
import { JourneyUploadPage } from './pages/JourneyUpload.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {isJourneyUploadRoute() ? <JourneyUploadPage /> : <App />}
  </StrictMode>,
)
