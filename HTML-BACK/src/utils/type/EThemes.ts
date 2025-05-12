export const EThemes = {
  dark: 'D',
  light: 'L',
} as const

export type EThemesKey = keyof typeof EThemes
export type EThemeValues = (typeof EThemes)[EThemesKey]

export type EThemeValueTable = [EThemeValues, ...EThemeValues[]]
