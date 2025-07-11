import {type ILocale} from '@/locale/routing'
import {type ILocalization} from '@/locale/translations/pl_PL'

declare module 'use-intl/core' {
  interface AppConfig {
    Locale: ILocale
    Messages: ILocalization
  }
}
