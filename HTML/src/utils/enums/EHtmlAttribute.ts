export const EHtmlAttribute = {
  theme: 'data-theme',
} as const

export type EHtmlAttributeKey = keyof typeof EHtmlAttribute
export type EHtmlAttributeValues = (typeof EHtmlAttribute)[EHtmlAttributeKey]
