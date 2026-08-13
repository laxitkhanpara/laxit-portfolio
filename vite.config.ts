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

function readJsonBody(req: import('http').IncomingMessage): Promise<unknown> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = []
    req.on('data', (chunk) => chunks.push(chunk))
    req.on('end', () => {
      try {
        resolve(JSON.parse(Buffer.concat(chunks).toString('utf8')))
      } catch (err) {
        reject(err)
      }
    })
    req.on('error', reject)
  })
}

function checkPin(bodyPin: string | undefined, res: import('http').ServerResponse): boolean {
  const expectedPin = process.env.VITE_UPLOAD_PIN
  if (expectedPin && bodyPin !== expectedPin) {
    res.statusCode = 401
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ error: 'Invalid PIN' }))
    return false
  }
  return true
}

/** Dev-only API: POST /api/journey-upload → writes to public/media/journey/ */
function journeyUploadApi(): Plugin {
  return {
    name: 'journey-upload-api',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.url !== '/api/journey-upload' || req.method !== 'POST') return next()

        try {
          const body = (await readJsonBody(req)) as {
            pin?: string
            files?: { name: string; data: string }[]
          }

          if (!checkPin(body.pin, res)) return

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
          res.end(JSON.stringify({ error: err instanceof Error ? err.message : 'Upload failed' }))
        }
      })
    },
  }
}

/** Dev-only API: POST /api/resume-upload → overwrites public/Laxit_Khanpara_CV.pdf */
function resumeUploadApi(): Plugin {
  return {
    name: 'resume-upload-api',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.url !== '/api/resume-upload' || req.method !== 'POST') return next()

        try {
          const body = (await readJsonBody(req)) as {
            pin?: string
            name?: string
            data?: string
          }

          if (!checkPin(body.pin, res)) return

          if (!body.data) {
            res.statusCode = 400
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ error: 'No PDF data provided' }))
            return
          }

          const filename = 'Laxit_Khanpara_CV.pdf'
          const target = path.resolve(process.cwd(), 'public', filename)
          fs.writeFileSync(target, Buffer.from(body.data, 'base64'))

          res.statusCode = 200
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ ok: true, saved: `/${filename}` }))
        } catch (err) {
          res.statusCode = 500
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ error: err instanceof Error ? err.message : 'Upload failed' }))
        }
      })
    },
  }
}

/** Copy index.html → 404.html so static hosts serve the SPA on missing paths */
function spaFallback404(): Plugin {
  return {
    name: 'spa-fallback-404',
    closeBundle() {
      const distDir = path.resolve(process.cwd(), 'dist')
      const index = path.join(distDir, 'index.html')
      const fallback = path.join(distDir, '404.html')
      if (fs.existsSync(index)) {
        fs.copyFileSync(index, fallback)
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), journeyUploadApi(), resumeUploadApi(), spaFallback404()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    allowedHosts: true,
  },
})
