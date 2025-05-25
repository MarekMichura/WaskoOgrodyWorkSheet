import {ETheme} from '@/utils/enum/ETheme'

export function getNextTheme(theme?: ETheme) {
  switch (theme) {
    case ETheme.dark:
      return ETheme.light
    case ETheme.light:
    default:
      return ETheme.dark
  }
}
