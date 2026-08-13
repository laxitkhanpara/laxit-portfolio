import { fileToBase64 } from './uploadFilename'
import { RESUME_FILENAME, RESUME_PUBLIC_PATH } from './adminRoutes'
import { isDevUploadEnabled } from './journeyUploadApi'

const RESUME_UNAVAILABLE =
  'Direct save only works with npm run dev locally. On the live site, use Download PDF, then commit it to public/ on GitHub.'

export async function uploadResumeFile(file: File, pin?: string): Promise<{ ok: true; saved: string }> {
  if (!isDevUploadEnabled()) {
    throw new Error(RESUME_UNAVAILABLE)
  }

  const res = await fetch('/api/resume-upload', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      pin: pin?.trim() || undefined,
      name: RESUME_FILENAME,
      data: await fileToBase64(file),
    }),
  })

  const text = await res.text()
  if (!text.trim()) {
    throw new Error(RESUME_UNAVAILABLE)
  }

  let data: { ok?: boolean; saved?: string; error?: string }
  try {
    data = JSON.parse(text) as { ok?: boolean; saved?: string; error?: string }
  } catch {
    throw new Error(RESUME_UNAVAILABLE)
  }

  if (!res.ok) {
    throw new Error(data.error || `Upload failed (${res.status})`)
  }

  return { ok: true, saved: data.saved ?? RESUME_PUBLIC_PATH }
}
