export const EHeaders = {
  ACCEPT_LANGUAGE: 'Accept-Language',
  SYSTEM_THEME_SET: 'Accept-CH',
  SYSTEM_THEME_GET: 'sec-ch-prefers-color-scheme',
  X_URL: 'x-path',
  X_QUERY: 'x-search',
} as const

export type EHeadersKey = keyof typeof EHeaders
export type EHeaderValues = (typeof EHeaders)[EHeadersKey]
