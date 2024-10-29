import {ITheme} from './types/ITheme'
import {LS_THEME_NAME} from './useTheme'

export function fnQuery(): Promise<ITheme> {
  return new Promise((resolve) => {
    let theme = localStorage.getItem(LS_THEME_NAME) as ITheme | undefined
    if (theme == undefined) theme = ITheme.THEME_DARK

    resolve(theme)
  })
}
