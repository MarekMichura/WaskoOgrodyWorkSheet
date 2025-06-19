export const EHeaders = {
  X_URL: 'x-path',
  X_QUERY: 'x-search',
} as const

export type EHeadersKey = keyof typeof EHeaders
export type EHeaderValues = (typeof EHeaders)[EHeadersKey]
