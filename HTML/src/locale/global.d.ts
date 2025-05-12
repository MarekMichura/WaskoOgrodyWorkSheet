import {type ILocale} from '@/locale/routing'
import {type ILocalization} from '@/locale/translations/en_US'

declare module 'use-intl/core' {
  interface AppConfig {
    Locale: ILocale
    Messages: ILocalization
  }
}
