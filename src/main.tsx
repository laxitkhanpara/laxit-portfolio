import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { JourneyUploadPage } from './pages/JourneyUpload.tsx'

const isUploadPage =
  window.location.pathname.replace(/\/$/, '') === '/admin/upload'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {isUploadPage ? <JourneyUploadPage /> : <App />}
  </StrictMode>,
)
