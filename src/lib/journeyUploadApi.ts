import { fileToBase64 } from './uploadFilename'

export type UploadPayloadFile = {
  name: string
  data: string
}

export type UploadResult = {
  ok: true
  saved: string[]
}

export async function uploadJourneyFiles(
  files: { file: File; name: string }[],
  pin?: string,
): Promise<UploadResult> {
  const payload = {
    pin: pin?.trim() || undefined,
    files: await Promise.all(
      files.map(async ({ file, name }) => ({
        name,
        data: await fileToBase64(file),
      })),
    ),
  }

  const res = await fetch('/api/journey-upload', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  const data = (await res.json()) as UploadResult | { error?: string }

  if (!res.ok) {
    throw new Error('error' in data && data.error ? data.error : `Upload failed (${res.status})`)
  }

  return data as UploadResult
}

export function buildContentSnippet(
  milestoneId: string,
  paths: string[],
  role: 'cover' | 'gallery',
): string {
  if (paths.length === 0) return ''

  const lines = paths.map((p) => `'${p}'`)

  if (role === 'cover') {
    const [cover, ...rest] = paths
    let snippet = `// ${milestoneId}: set cover image\nimage: '${cover}',`
    if (rest.length > 0) {
      snippet += `\nimages: [\n  ${rest.map((p) => `'${p}',`).join('\n  ')}\n],`
    }
    return snippet
  }

  return `// ${milestoneId}: add to images array\n${lines.map((l) => l + ',').join('\n')}`
}
