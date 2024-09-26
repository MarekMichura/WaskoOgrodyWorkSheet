import {LOCAL_STORAGE_THEME} from '../global/LOCAL_STORAGE_THEME'
import {THEME_DARK, THEME_LIGHT} from '../global/THEME'

function InitThemeHTML() {
  const storage = localStorage.getItem(LOCAL_STORAGE_THEME)

  if (storage) document.documentElement.dataset['theme'] = storage
  else if (window.matchMedia('(prefers-color-scheme: dark)').matches)
    document.documentElement.dataset['theme'] = THEME_DARK
  else document.documentElement.dataset['theme'] = THEME_LIGHT
}

export default InitThemeHTML
