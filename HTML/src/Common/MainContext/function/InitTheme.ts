import {LOCAL_STORAGE_THEME} from '../global/LOCAL_STORAGE_THEME'
import {THEME_DARK, THEME_LIGHT} from '../global/THEME'
import {IThemes} from '../types/IThemes'

function getMedia() {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches)
    return THEME_DARK
  return THEME_LIGHT
}

export function InitTheme() {
  const theme = ((): IThemes => {
    if (localStorage.getItem(LOCAL_STORAGE_THEME) == undefined)
      localStorage.setItem(LOCAL_STORAGE_THEME, getMedia())
    return localStorage.getItem(LOCAL_STORAGE_THEME) as IThemes
  })()

  return theme
}
