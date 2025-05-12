// eslint-disable-next-line no-restricted-imports
import {getTranslations as getIntlTranslations} from 'next-intl/server'

import {type ILocalizationSecondKeys, type ILocalizationKeys} from '../locales/en'

import type en from '../locales/en'

export async function getTranslations<T extends ILocalizationKeys>(localization: T) {
  const _translations = await getIntlTranslations(localization as string)

  return <K extends ILocalizationSecondKeys<T>>(key: K) => {
    return typeof key === 'number' //
      ? (_translations(key.toString()) as (typeof en)[T][K])
      : (_translations(key as string) as (typeof en)[T][K])
  }
}
