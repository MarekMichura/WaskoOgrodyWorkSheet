import {ITheme, LIGHT_THEME, DARK_THEME} from '@/utils/type/common/iTheme'

export const isValidTheme = (value?: ITheme): value is ITheme => value === LIGHT_THEME || value === DARK_THEME
