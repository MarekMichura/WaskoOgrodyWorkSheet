import {IRange} from './range'

export type IDayRange = IRange<0, 7>
export const IDay: Record<IDayRange, string> = [
  'poniedziałek',
  'wtorek',
  'środa',
  'czwartek',
  'piątek',
  'sobota',
  'niedziela',
]
export const IDayNames: Record<IDayRange, string> = ['PON', 'WTO', 'ŚRO', 'CZW', 'PIĄ', 'SOB', 'NIE']
export const IDayCalc: Record<IDayRange, number> = [6, 0, 1, 2, 3, 4, 5]

export const Days = Object.values(IDay) as string[]
export const DaysName = Object.values(IDayNames) as string[]
