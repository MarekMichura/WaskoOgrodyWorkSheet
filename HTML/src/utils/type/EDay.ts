import {type ILocale} from '@/utils/locale/locales'

export const EDayEN = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'] as const

export const EDayPL = [
  'PONIEDZIAŁEK', //
  'WTOREK',
  'ŚRODA',
  'CZWARTEK',
  'PIĄTEK',
  'SOBOTA',
  'NIEDZIELA',
] as const

export const EDay: Record<ILocale, Readonly<string[]>> = {
  en: EDayEN,
  pl: EDayPL,
}

export type EDayKey = keyof typeof EDayEN
export type EDayValue = (typeof EDayEN)[EDayKey] | (typeof EDayPL)[EDayKey]
