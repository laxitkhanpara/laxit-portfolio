/** Stable resume filename served from `public/` */
export const RESUME_FILENAME = 'Laxit_Khanpara_CV.pdf'

/** Public URL path (without cache-bust query) */
export const RESUME_PUBLIC_PATH = `/${RESUME_FILENAME}`

/** GitHub upload target for this branch */
export const RESUME_GITHUB_UPLOAD =
  'https://github.com/laxitkhanpara/laxit-portfolio/upload/cursor/bold-creative-portfolio-bd87/public'

export type AdminPage = 'hub' | 'upload' | 'resume'

function adminFromSearch(): AdminPage | null {
  const params = new URLSearchParams(window.location.search)
  const value = params.get('admin')
  if (value === '1' || value === 'hub') return 'hub'
  if (value === 'upload') return 'upload'
  if (value === 'resume') return 'resume'
  return null
}

function adminFromPath(): AdminPage | null {
  const path = window.location.pathname.replace(/\/$/, '') || '/'
  if (path === '/admin') return 'hub'
  if (path === '/admin/upload') return 'upload'
  if (path === '/admin/resume') return 'resume'
  return null
}

function adminFromHash(): AdminPage | null {
  const hash = window.location.hash.replace(/^#\/?/, '')
  if (hash === 'admin' || hash === 'admin/hub') return 'hub'
  if (hash === 'admin/upload' || hash === 'upload') return 'upload'
  if (hash === 'admin/resume' || hash === 'resume') return 'resume'
  return null
}

export function getAdminPage(): AdminPage | null {
  return adminFromSearch() ?? adminFromPath() ?? adminFromHash()
}

/** Prefer query URLs — work on Render even without SPA rewrites */
export const ADMIN_HUB_HREF = '/?admin=1'
export const JOURNEY_UPLOAD_HREF = '/?admin=upload'
export const RESUME_UPLOAD_HREF = '/?admin=resume'

/** @deprecated use getAdminPage() === 'upload' */
export function isJourneyUploadRoute(): boolean {
  return getAdminPage() === 'upload'
}
