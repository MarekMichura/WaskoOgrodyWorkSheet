import {IRange} from './range'

export type IMonthRange = IRange<0, 12>
export const IMonth: Record<IMonthRange, string> = [
  'styczeń',
  'luty',
  'marzec',
  'kwiecień',
  'maj',
  'czerwiec',
  'lipiec',
  'sierpień',
  'wrzesień',
  'październik',
  'listopad',
  'grudzień',
]
export const IMonthNames: Record<IMonthRange, string> = [
  'Sty',
  'Lut',
  'Mar',
  'Kwi',
  'Maj',
  'Cze',
  'Lip',
  'Sie',
  'Wrz',
  'Paź',
  'Lis',
  'Gru',
]

export const Months = Object.values(IMonth) as string[]
export const MonthsName = Object.values(IMonthNames) as string[]
