import 'styled-components'
import {IThemes} from '../global/THEME'

type HSLColor = {
  h: number
  s: number
  l: number
  default: string
}

type ColorPalette = {
  50: HSLColor
  100: HSLColor
  200: HSLColor
  300: HSLColor
  400: HSLColor
  500: HSLColor
  600: HSLColor
  700: HSLColor
  800: HSLColor
  900: HSLColor
  950: HSLColor
}

declare module 'styled-components' {
  export interface DefaultTheme {
    name: IThemes
    text: ColorPalette
    background: ColorPalette
    primary: ColorPalette & {default: string}
    secondary: ColorPalette
    accent: ColorPalette
  }
}
