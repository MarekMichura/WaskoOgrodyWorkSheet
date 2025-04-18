import {DARK_THEME, ITheme, LIGHT_THEME} from '@/utils/type/common/iTheme'

export function getChangedTheme(theme: ITheme | undefined, def: ITheme | undefined): ITheme {
  switch (theme) {
    case DARK_THEME:
      return LIGHT_THEME
    case LIGHT_THEME:
      return DARK_THEME
    default:
      return def === undefined ? DARK_THEME : getChangedTheme(def, undefined)
  }
}
