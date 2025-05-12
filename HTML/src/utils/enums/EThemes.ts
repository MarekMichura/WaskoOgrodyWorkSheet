export const EThemes = {
  dark: 'd',
  light: 'l',
} as const

export type EThemesKey = keyof typeof EThemes
export type EThemeValues = (typeof EThemes)[EThemesKey]

export type EThemeValueTable = [EThemeValues, ...EThemeValues[]]
