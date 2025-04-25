// eslint-disable-next-line no-restricted-imports
import {useLocale as useIntlLocale} from 'next-intl'

import {type ILocale} from '../locales'

export function useLocale(): ILocale {
  const _locale = useIntlLocale()

  return _locale as ILocale
}
