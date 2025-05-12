// eslint-disable-next-line no-restricted-imports
import {useTranslations as useIntlTranslations} from 'next-intl'

import {type ILocalizationSecondKeys, type ILocalizationKeys} from '../locales/en'

import type en from '../locales/en'

export function useTranslations<T extends ILocalizationKeys>(localization: T) {
  const _translations = useIntlTranslations(localization as string)

  return <K extends ILocalizationSecondKeys<T>>(key: K) => {
    return typeof key === 'number' //
      ? (_translations(key.toString()) as (typeof en)[T][K])
      : (_translations(key as string) as (typeof en)[T][K])
  }
}
