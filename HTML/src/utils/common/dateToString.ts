import {IDateOnly, IDateTime} from './types/_date'

export function toDateOnly(date?: Date): IDateOnly {
  if (date === undefined) return '0000-00-00'
  const year = date.getFullYear()
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const day = date.getDate().toString().padStart(2, '0')
  return `${year}-${month}-${day}`
}

export function toDateOnlyStr(_year?: number, _month?: number, _day?: number) {
  if (_year === undefined || _month === undefined || _day === undefined) return '0000-00-00'
  const year = _year.toString()
  const month = (_month + 1).toString().padStart(2, '0')
  const day = _day.toString().padStart(2, '0')
  return `${year}-${month}-${day}`
}

export function toDateTime(date?: Date): IDateTime {
  if (date === undefined) return '0000-00-00 00:00'
  const year = date.getFullYear()
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const day = date.getDate().toString().padStart(2, '0')

  const hours = date.getHours().toString().padStart(2, '0')
  const minutes = date.getMinutes().toString().padStart(2, '0')
  const second = date.getSeconds().toString().padStart(2, '0')
  return `${year}-${month}-${day} ${hours}:${minutes}:${second}`
}
