import {isInPrimitiveArray} from '../type/helpTypes/_isPrimitiveArray'

export const locales = ['pl', 'en'] as const

export type ILocale = (typeof locales)[number]

export function isLocale(obj?: string): obj is ILocale {
  return isInPrimitiveArray(obj, locales)
}
