/** True when the Journey media upload admin UI should render. */
export function isJourneyUploadRoute(): boolean {
  const path = window.location.pathname.replace(/\/$/, '') || '/'
  if (path === '/admin/upload') return true

  const params = new URLSearchParams(window.location.search)
  if (params.get('admin') === 'upload') return true

  const hash = window.location.hash.replace(/^#\/?/, '')
  return hash === 'admin/upload' || hash === 'upload'
}

/** Works on static hosts without SPA rewrites configured. */
export const JOURNEY_UPLOAD_HREF = '/?admin=upload'

/** Pretty URL when SPA rewrites are configured (Render _redirects). */
export const JOURNEY_UPLOAD_PATH = '/admin/upload'
