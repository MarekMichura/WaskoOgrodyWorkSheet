import {IThemes} from '/global/THEME'

import {darkTheme} from './darkTheme'
import {lightTheme} from './lightTheme'

export const themeSwitch = {
  [IThemes.THEME_DARK]: darkTheme,
  [IThemes.THEME_LIGHT]: lightTheme,
}
