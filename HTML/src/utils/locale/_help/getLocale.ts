// eslint-disable-next-line no-restricted-imports
import {getLocale as getIntlLocale} from 'next-intl/server'

import {type ILocale} from '../locales'

export async function getLocale(): Promise<ILocale> {
  const _locale = await getIntlLocale()

  return _locale as ILocale
}
