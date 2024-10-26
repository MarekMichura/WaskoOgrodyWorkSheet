import {ICheckYearResult} from '../types/ICheckYearResult'
import {IRange} from '../types/IRange'

export const checkYear = (range: IRange, year: number): ICheckYearResult => {
  if (year < range.start.getFullYear() || year > range.end.getFullYear()) throw Error('Poza zakresem data')
  return [range.start.getFullYear() <= year - 1, range.end.getFullYear() >= year + 1]
}
