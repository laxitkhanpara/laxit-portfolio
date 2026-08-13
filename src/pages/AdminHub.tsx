import {
  ADMIN_HUB_HREF,
  JOURNEY_UPLOAD_HREF,
  RESUME_GITHUB_UPLOAD,
  RESUME_PUBLIC_PATH,
  RESUME_UPLOAD_HREF,
} from '../lib/adminRoutes'
import '../index.css'
import './JourneyUpload.css'

export function AdminHubPage() {
  return (
    <div className="upload-page">
      <div className="upload-shell">
        <header className="upload-header">
          <div>
            <h1>Portfolio admin</h1>
            <p>
              Update Journey photos or replace your resume PDF anytime. On the live site, download the file and
              commit it to GitHub so Render redeploys.
            </p>
          </div>
          <a className="upload-back" href="/">
            ← Back to portfolio
          </a>
        </header>

        <section className="upload-card">
          <h2>What do you want to update?</h2>
          <div className="upload-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
            <a className="upload-btn upload-btn-primary" href={RESUME_UPLOAD_HREF} style={{ textDecoration: 'none' }}>
              Update resume (PDF)
            </a>
            <a className="upload-btn" href={JOURNEY_UPLOAD_HREF} style={{ textDecoration: 'none' }}>
              Upload Journey photos
            </a>
          </div>
          <p className="upload-hint" style={{ marginTop: 14 }}>
            Bookmark this page: <code>{ADMIN_HUB_HREF}</code>
            <br />
            Current resume: <a href={RESUME_PUBLIC_PATH}>{RESUME_PUBLIC_PATH}</a>
            <br />
            GitHub public folder:{' '}
            <a href={RESUME_GITHUB_UPLOAD} target="_blank" rel="noreferrer">
              upload files here
            </a>
          </p>
        </section>
      </div>
    </div>
  )
}
