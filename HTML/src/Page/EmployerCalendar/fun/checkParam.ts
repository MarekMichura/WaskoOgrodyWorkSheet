import {ICalendarParams} from '../types/ICalendarParams'
import {IMonth} from '../types/IMonth'

export const checkParam = (param: ICalendarParams): {month: IMonth; year: number} => {
  const year = Number(param.year)
  const month = IMonth[param.month as unknown as IMonth] as unknown as IMonth
  if (Number.isNaN(year) || month == undefined) throw Error('Nie poprawne dane')

  return {month, year}
}
