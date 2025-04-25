import type {EThemeValues} from '@/utils/type/EThemes'

export interface IThemeGet {
  theme: EThemeValues
  source: 'client' | 'default' | '-'
}
