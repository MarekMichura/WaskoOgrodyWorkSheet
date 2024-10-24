import {darkTheme} from '../theme/themeDark'
import {lightTheme} from '../theme/themeLight'

import {ITheme} from './ITheme'

export const IThemeSwitch = {
  [ITheme.THEME_DARK]: darkTheme,
  [ITheme.THEME_LIGHT]: lightTheme,
}
