import { useCallback, useRef, useState } from 'react'
import {
  ADMIN_HUB_HREF,
  JOURNEY_UPLOAD_HREF,
  RESUME_FILENAME,
  RESUME_GITHUB_UPLOAD,
  RESUME_PUBLIC_PATH,
} from '../lib/adminRoutes'
import { isDevUploadEnabled } from '../lib/journeyUploadApi'
import { uploadResumeFile } from '../lib/resumeUploadApi'
import { downloadFile } from '../lib/uploadFilename'
import { profile } from '../content'
import '../index.css'
import './JourneyUpload.css'

function formatBytes(size: number) {
  if (size < 1024) return `${size} B`
  if (size < 1024 * 1024) return `${(size / 1024).toFixed(1)} KB`
  return `${(size / (1024 * 1024)).toFixed(2)} MB`
}

export function ResumeUploadPage() {
  const inputRef = useRef<HTMLInputElement>(null)
  const [file, setFile] = useState<File | null>(null)
  const [pin, setPin] = useState('')
  const [dragging, setDragging] = useState(false)
  const [busy, setBusy] = useState(false)
  const [status, setStatus] = useState<{ kind: 'ok' | 'error' | 'info'; text: string } | null>(null)
  const devUpload = isDevUploadEnabled()

  const pickFile = useCallback((list: FileList | File[] | null) => {
    const next = list ? Array.from(list)[0] : null
    if (!next) return
    if (next.type !== 'application/pdf' && !next.name.toLowerCase().endsWith('.pdf')) {
      setStatus({ kind: 'error', text: 'Please choose a PDF file.' })
      setFile(null)
      return
    }
    setFile(next)
    setStatus(null)
  }, [])

  const handleDownload = async () => {
    if (!file) return
    setBusy(true)
    try {
      const renamed = new File([file], RESUME_FILENAME, { type: 'application/pdf' })
      await downloadFile(renamed, RESUME_FILENAME)
      setStatus({
        kind: 'ok',
        text: `Downloaded as ${RESUME_FILENAME}. Upload it to public/ on GitHub (replace the existing file), commit, and push — Render will update the Resume button.`,
      })
    } finally {
      setBusy(false)
    }
  }

  const handleSave = async () => {
    if (!file) return
    setBusy(true)
    setStatus({ kind: 'info', text: 'Saving resume…' })
    try {
      const result = await uploadResumeFile(file, pin)
      setStatus({
        kind: 'ok',
        text: `Saved ${result.saved}. Commit and push so Render deploys the new PDF.`,
      })
    } catch (err) {
      setStatus({
        kind: 'error',
        text: err instanceof Error ? err.message : 'Upload failed',
      })
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="upload-page">
      <div className="upload-shell">
        <header className="upload-header">
          <div>
            <h1>Update resume</h1>
            <p>
              Replace <code>{RESUME_FILENAME}</code> anytime. The portfolio Resume button always points to this
              file{profile.resume.includes('?') ? ' (with a cache-bust query)' : ''}.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <a className="upload-back" href={ADMIN_HUB_HREF}>
              Admin
            </a>
            <a className="upload-back" href="/">
              ← Portfolio
            </a>
          </div>
        </header>

        <section className="upload-card">
          <h2>1 · Current resume</h2>
          <p className="upload-hint" style={{ margin: 0 }}>
            Live file:{' '}
            <a href={profile.resume} target="_blank" rel="noreferrer">
              {profile.resume}
            </a>
          </p>
        </section>

        <section className="upload-card">
          <h2>2 · Choose new PDF</h2>
          <div
            className={`upload-dropzone ${dragging ? 'is-dragging' : ''}`}
            onDragOver={(e) => {
              e.preventDefault()
              setDragging(true)
            }}
            onDragLeave={() => setDragging(false)}
            onDrop={(e) => {
              e.preventDefault()
              setDragging(false)
              pickFile(e.dataTransfer.files)
            }}
            onClick={() => inputRef.current?.click()}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                inputRef.current?.click()
              }
            }}
            role="button"
            tabIndex={0}
          >
            <input
              ref={inputRef}
              type="file"
              accept="application/pdf,.pdf"
              onChange={(e) => {
                pickFile(e.target.files)
                e.target.value = ''
              }}
            />
            <strong>Drop your resume PDF here or click to browse</strong>
            <span>Saved as {RESUME_FILENAME} · PDF only</span>
          </div>

          {file ? (
            <div className="upload-queue" style={{ marginTop: 14 }}>
              <div className="upload-queue-item" style={{ gridTemplateColumns: '1fr auto' }}>
                <div className="upload-queue-meta">
                  <strong style={{ color: 'var(--text)' }}>{file.name}</strong>
                  <span className="upload-hint" style={{ margin: 0 }}>
                    Will be published as <code>{RESUME_FILENAME}</code> · {formatBytes(file.size)}
                  </span>
                </div>
                <button type="button" className="upload-remove" onClick={() => setFile(null)} aria-label="Remove">
                  ×
                </button>
              </div>
            </div>
          ) : (
            <p className="upload-empty" style={{ marginTop: 14 }}>
              No PDF selected yet.
            </p>
          )}

          {devUpload && import.meta.env.VITE_UPLOAD_PIN ? (
            <div className="upload-field" style={{ marginTop: 14 }}>
              <label htmlFor="pin">Upload PIN</label>
              <input
                id="pin"
                type="password"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                placeholder="Required for dev upload API"
                autoComplete="off"
              />
            </div>
          ) : null}

          <div className="upload-actions">
            {devUpload ? (
              <button
                type="button"
                className="upload-btn upload-btn-primary"
                disabled={busy || !file}
                onClick={handleSave}
              >
                Save to project (dev)
              </button>
            ) : null}
            <button
              type="button"
              className={`upload-btn ${devUpload ? '' : 'upload-btn-primary'}`}
              disabled={busy || !file}
              onClick={handleDownload}
            >
              Download as {RESUME_FILENAME}
            </button>
          </div>

          {!devUpload ? (
            <p className="upload-hint" style={{ marginTop: 12 }}>
              After download, replace the file in{' '}
              <a href={RESUME_GITHUB_UPLOAD} target="_blank" rel="noreferrer">
                public/ on GitHub
              </a>{' '}
              (same name), commit to this branch, and Render will redeploy. Or ask Cursor to commit it for you.
            </p>
          ) : null}

          {status ? <div className={`upload-status ${status.kind}`}>{status.text}</div> : null}
        </section>

        <section className="upload-card">
          <h2>Also available</h2>
          <div className="upload-actions">
            <a className="upload-btn" href={JOURNEY_UPLOAD_HREF} style={{ textDecoration: 'none' }}>
              Journey photo upload
            </a>
            <a className="upload-btn" href={RESUME_PUBLIC_PATH} style={{ textDecoration: 'none' }} target="_blank" rel="noreferrer">
              Open current PDF
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
