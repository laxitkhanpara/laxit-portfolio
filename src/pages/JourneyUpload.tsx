import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { journey } from '../content'
import { buildContentSnippet, uploadJourneyFiles } from '../lib/journeyUploadApi'
import { downloadFile, sanitizeJourneyFilename } from '../lib/uploadFilename'
import '../index.css'
import './JourneyUpload.css'

type QueueItem = {
  id: string
  file: File
  name: string
  previewUrl: string
  isCover: boolean
}

function suggestFilename(file: File, milestoneId: string, index: number): string {
  const ext = file.name.includes('.') ? file.name.slice(file.name.lastIndexOf('.')) : '.jpg'
  const suffix = index === 0 ? 'cover' : String(index + 1)
  return sanitizeJourneyFilename(`${milestoneId}-${suffix}${ext}`)
}

export function JourneyUploadPage() {
  const inputRef = useRef<HTMLInputElement>(null)
  const [milestoneId, setMilestoneId] = useState(journey[0]?.id ?? '')
  const [pin, setPin] = useState('')
  const [queue, setQueue] = useState<QueueItem[]>([])
  const [dragging, setDragging] = useState(false)
  const [busy, setBusy] = useState(false)
  const [status, setStatus] = useState<{ kind: 'ok' | 'error' | 'info'; text: string } | null>(
    null,
  )
  const [snippet, setSnippet] = useState('')

  const milestone = useMemo(
    () => journey.find((item) => item.id === milestoneId),
    [milestoneId],
  )

  const addFiles = useCallback(
    (files: FileList | File[]) => {
      const list = Array.from(files).filter((f) => f.type.startsWith('image/'))
      if (list.length === 0) {
        setStatus({ kind: 'error', text: 'Please choose JPG, PNG, or WebP images.' })
        return
      }

      setQueue((prev) => {
        const next = [...prev]
        list.forEach((file, offset) => {
          const index = prev.length + offset
          next.push({
            id: `${Date.now()}-${index}-${file.name}`,
            file,
            name: suggestFilename(file, milestoneId, index),
            previewUrl: URL.createObjectURL(file),
            isCover: prev.length === 0 && offset === 0,
          })
        })
        return next
      })
      setStatus(null)
    },
    [milestoneId],
  )

  useEffect(() => {
    return () => {
      queue.forEach((item) => URL.revokeObjectURL(item.previewUrl))
    }
  }, [queue])

  const updateItem = (id: string, patch: Partial<Pick<QueueItem, 'name' | 'isCover'>>) => {
    setQueue((prev) =>
      prev.map((item) => {
        if (item.id !== id) {
          if (patch.isCover) return { ...item, isCover: false }
          return item
        }
        return { ...item, ...patch }
      }),
    )
  }

  const removeItem = (id: string) => {
    setQueue((prev) => {
      const target = prev.find((item) => item.id === id)
      if (target) URL.revokeObjectURL(target.previewUrl)
      return prev.filter((item) => item.id !== id)
    })
  }

  const handleDownloadAll = async () => {
    if (queue.length === 0) return
    setBusy(true)
    try {
      for (const item of queue) {
        const renamed = new File([item.file], item.name, { type: item.file.type })
        await downloadFile(renamed, item.name)
      }
      const cover = queue.find((item) => item.isCover) ?? queue[0]
      const gallery = queue.filter((item) => item.id !== cover.id)
      const paths = [
        `/media/journey/${cover.name}`,
        ...gallery.map((item) => `/media/journey/${item.name}`),
      ]
      setSnippet(
        buildContentSnippet(
          milestoneId,
          paths,
          'cover',
        ),
      )
      setStatus({
        kind: 'ok',
        text: `Downloaded ${queue.length} file(s). Add them to public/media/journey/ in your repo, then paste the content.ts snippet below.`,
      })
    } finally {
      setBusy(false)
    }
  }

  const handleUpload = async () => {
    if (queue.length === 0) return
    setBusy(true)
    setStatus({ kind: 'info', text: 'Uploading…' })

    try {
      const result = await uploadJourneyFiles(
        queue.map((item) => ({ file: item.file, name: item.name })),
        pin,
      )
      const cover = queue.find((item) => item.isCover) ?? queue[0]
      const coverPath = result.saved.find((p) => p.endsWith(cover.name))
      const otherPaths = result.saved.filter((p) => p !== coverPath)
      const ordered = coverPath ? [coverPath, ...otherPaths] : result.saved

      setSnippet(buildContentSnippet(milestoneId, ordered, 'cover'))
      setStatus({
        kind: 'ok',
        text: `Saved ${result.saved.length} file(s) to public/media/journey/. Commit and push to deploy on Render.`,
      })
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Upload failed'
      setStatus({
        kind: 'error',
        text: `${message} — use “Download files” on the live site, or run npm run dev locally for direct save.`,
      })
    } finally {
      setBusy(false)
    }
  }

  const copySnippet = async () => {
    if (!snippet) return
    await navigator.clipboard.writeText(snippet)
    setStatus({ kind: 'ok', text: 'Copied content.ts snippet to clipboard.' })
  }

  return (
    <div className="upload-page">
      <div className="upload-shell">
        <header className="upload-header">
          <div>
            <h1>Journey photo upload</h1>
            <p>
              Add images for your Journey timeline. On <strong>local dev</strong>, files save straight into{' '}
              <code>public/media/journey/</code>. On the live site, download the files and commit them to GitHub
              (or share the zip in Cursor chat).
            </p>
          </div>
          <a className="upload-back" href="/">
            ← Back to portfolio
          </a>
        </header>

        <section className="upload-card">
          <h2>1 · Choose milestone</h2>
          <div className="upload-grid">
            <div className="upload-field">
              <label htmlFor="milestone">Journey entry</label>
              <select
                id="milestone"
                value={milestoneId}
                onChange={(e) => setMilestoneId(e.target.value)}
              >
                {journey.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.title} ({item.year})
                  </option>
                ))}
              </select>
            </div>
            {import.meta.env.VITE_UPLOAD_PIN ? (
              <div className="upload-field">
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
          </div>
          {milestone ? (
            <p className="upload-hint">
              Files will be linked to <strong>{milestone.title}</strong>. Suggested names use the slug{' '}
              <code>{milestoneId}</code>.
            </p>
          ) : null}
        </section>

        <section className="upload-card">
          <h2>2 · Add photos</h2>
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
              if (e.dataTransfer.files.length > 0) addFiles(e.dataTransfer.files)
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
              accept="image/jpeg,image/png,image/webp,image/gif"
              multiple
              onChange={(e) => {
                if (e.target.files?.length) addFiles(e.target.files)
                e.target.value = ''
              }}
            />
            <strong>Drop images here or click to browse</strong>
            <span>JPG, PNG, WebP · multiple files OK</span>
          </div>

          {queue.length === 0 ? (
            <p className="upload-empty" style={{ marginTop: 14 }}>
              No photos queued yet.
            </p>
          ) : (
            <div className="upload-queue" style={{ marginTop: 14 }}>
              {queue.map((item) => (
                <div className="upload-queue-item" key={item.id}>
                  <div className="upload-thumb">
                    <img src={item.previewUrl} alt="" />
                  </div>
                  <div className="upload-queue-meta">
                    <input
                      type="text"
                      value={item.name}
                      onChange={(e) =>
                        updateItem(item.id, { name: sanitizeJourneyFilename(e.target.value) })
                      }
                      aria-label="Filename"
                    />
                    <label className="upload-cover-label">
                      <input
                        type="radio"
                        name="cover"
                        checked={item.isCover}
                        onChange={() => updateItem(item.id, { isCover: true })}
                      />
                      Use as cover image
                    </label>
                  </div>
                  <button
                    type="button"
                    className="upload-remove"
                    onClick={() => removeItem(item.id)}
                    aria-label="Remove"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}

          <div className="upload-actions">
            <button
              type="button"
              className="upload-btn upload-btn-primary"
              disabled={busy || queue.length === 0}
              onClick={handleUpload}
            >
              Save to project (dev)
            </button>
            <button
              type="button"
              className="upload-btn"
              disabled={busy || queue.length === 0}
              onClick={handleDownloadAll}
            >
              Download files
            </button>
          </div>

          {status ? <div className={`upload-status ${status.kind}`}>{status.text}</div> : null}
        </section>

        {snippet ? (
          <section className="upload-card">
            <h2>3 · Update content.ts</h2>
            <p className="upload-hint" style={{ marginBottom: 10 }}>
              Paste into the <code>{milestoneId}</code> entry in <code>src/content.ts</code>:
            </p>
            <textarea className="upload-snippet" readOnly value={snippet} rows={8} />
            <div className="upload-actions">
              <button type="button" className="upload-btn" onClick={copySnippet}>
                Copy snippet
              </button>
            </div>
          </section>
        ) : null}
      </div>
    </div>
  )
}
