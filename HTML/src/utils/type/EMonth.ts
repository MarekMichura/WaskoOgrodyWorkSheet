import {type ILocale} from '@/utils/locale/locales'

export const EMonthEN = [
  'JANUARY', //
  'FEBRUARY',
  'MARCH',
  'APRIL',
  'MAY',
  'JUNE',
  'JULY',
  'AUGUST',
  'SEPTEMBER',
  'OCTOBER',
  'NOVEMBER',
  'DECEMBER',
] as const

export const EMonthPL = [
  'STYCZEŃ',
  'LUTY',
  'MARZEC',
  'KWIECIEŃ',
  'MAJ',
  'CZERWIEC',
  'LIPIEC',
  'SIERPIEŃ',
  'WRZESIEŃ',
  'PAŹDZIERNIK',
  'LISTOPAD',
  'GRUDZIEŃ',
] as const

export const EMonth: Record<ILocale, Readonly<string[]>> = {
  en: EMonthEN,
  pl: EMonthPL,
}

export type EDayKey = keyof typeof EMonthEN
export type EDayValue = (typeof EMonthEN)[EDayKey] | (typeof EMonthPL)[EDayKey]
