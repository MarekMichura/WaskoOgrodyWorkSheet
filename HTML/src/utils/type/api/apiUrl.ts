export let URL_MAP: typeof import('./apiUrl.server').URL_MAP

if (typeof window === 'undefined') {
  URL_MAP = (await import('./apiUrl.server')).URL_MAP
} else {
  URL_MAP = (await import('./apiUrl.client')).URL_MAP
}
