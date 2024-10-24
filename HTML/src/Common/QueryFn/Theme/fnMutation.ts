import {ITheme} from './types/ITheme'
import {LS_THEME_NAME} from './useTheme'

export const fnMutation = (theme: ITheme): Promise<ITheme> => {
  return new Promise((resolve) => {
    localStorage.setItem(LS_THEME_NAME, theme)
    resolve(theme)
  })
}
