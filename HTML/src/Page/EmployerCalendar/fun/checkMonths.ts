import {ICheckMonthsResult} from '../types/ICheckMonthsResult'
import {IRange} from '../types/IRange'

export const checkMonths = (range: IRange, year: number, month: number): ICheckMonthsResult => {
  const result: ICheckMonthsResult = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]
  if (new Date(year, month + 1, 0) < range.start || new Date(year, month, 1) > range.end) throw Error('Poza zakresem')
  const start = range.start.getFullYear() == year ? range.start.getMonth() : 0
  const end = range.end.getFullYear() == year ? range.end.getMonth() : 11

  for (let i = 0; i < 12; i++) result[i] = i >= start && i <= end
  return result
}
