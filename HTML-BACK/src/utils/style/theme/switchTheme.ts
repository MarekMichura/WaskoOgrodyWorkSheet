import {EThemes, type EThemeValues} from '@/utils/type/EThemes'

export function switchTheme(theme: EThemeValues) {
  switch (theme) {
    case EThemes.dark:
      return EThemes.light
    case EThemes.light:
      return EThemes.dark
  }
}
