import {themeQueryData} from '../_themeQuery'

export function getDefaultTheme(): themeQueryData {
  if (!window.matchMedia) return 'dark'
  return window.matchMedia('(prefers-color-scheme: dark)')?.matches ? 'dark' : 'light'
}
