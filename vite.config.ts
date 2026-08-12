import fs from 'node:fs'
import path from 'node:path'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

function sanitizeFilename(name: string): string {
  const trimmed = name.trim().toLowerCase()
  const dot = trimmed.lastIndexOf('.')
  const base = dot > 0 ? trimmed.slice(0, dot) : trimmed
  const ext = dot > 0 ? trimmed.slice(dot).replace(/[^a-z0-9.]/g, '') : '.jpg'
  const safeBase = base
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80)
  return `${safeBase || 'journey-photo'}${ext.startsWith('.') ? ext : `.${ext}`}`
}

/** Dev-only API: POST /api/journey-upload → writes to public/media/journey/ */
function journeyUploadApi(): Plugin {
  return {
    name: 'journey-upload-api',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url !== '/api/journey-upload') return next()
        if (req.method !== 'POST') return next()

        const chunks: Buffer[] = []
        req.on('data', (chunk) => chunks.push(chunk))
        req.on('end', () => {
          try {
            const body = JSON.parse(Buffer.concat(chunks).toString('utf8')) as {
              pin?: string
              files?: { name: string; data: string }[]
            }

            const expectedPin = process.env.VITE_UPLOAD_PIN
            if (expectedPin && body.pin !== expectedPin) {
              res.statusCode = 401
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify({ error: 'Invalid PIN' }))
              return
            }

            const files = body.files ?? []
            if (files.length === 0) {
              res.statusCode = 400
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify({ error: 'No files provided' }))
              return
            }

            const dir = path.resolve(process.cwd(), 'public/media/journey')
            fs.mkdirSync(dir, { recursive: true })

            const saved: string[] = []
            for (const file of files) {
              const safeName = sanitizeFilename(file.name)
              const buf = Buffer.from(file.data, 'base64')
              fs.writeFileSync(path.join(dir, safeName), buf)
              saved.push(`/media/journey/${safeName}`)
            }

            res.statusCode = 200
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ ok: true, saved }))
          } catch (err) {
            res.statusCode = 500
            res.setHeader('Content-Type', 'application/json')
            res.end(
              JSON.stringify({ error: err instanceof Error ? err.message : 'Upload failed' }),
            )
          }
        })
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), journeyUploadApi()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    allowedHosts: true,
  },
})
