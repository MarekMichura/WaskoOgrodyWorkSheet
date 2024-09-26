import {LOCAL_STORAGE_THEME} from '../global/LOCAL_STORAGE_THEME'
import {THEME_DARK, THEME_LIGHT} from '../global/THEME'
import {IThemes} from '../types/IThemes'

export function ChangeTheme(theme: IThemes): IThemes {
  const setTheme = theme == THEME_DARK ? THEME_LIGHT : THEME_DARK

  document.documentElement.dataset['theme'] = setTheme
  localStorage.setItem(LOCAL_STORAGE_THEME, setTheme)
  return setTheme
}
