import {NavigateFunction} from 'react-router-dom'

import {IProfil} from '/Context/IProfil'
import {links, route} from '/global/ROUTE'

import {Days} from './Days'
import {Month} from './Month'
import {DayRange} from './types'

export function GenerateDateRange(
  navigation: NavigateFunction,
  set: React.Dispatch<React.SetStateAction<string[] | undefined>>,
  month?: string,
  year?: string,
  profil?: IProfil
) {
  const yearNumber = Number(year)
  const months = Month as unknown as string[]
  if (month == undefined || year == undefined) return
  if (!months.includes(month)) return

  const date = new Date(yearNumber, months.indexOf(month) + 1, 0)
  const startWork = profil!.workStartDate
  if (date.getTime() < startWork.getTime()) {
    navigation(links[route.Show_calendar])
    return
  }

  date.setDate(1)
  date.setDate(date.getDate() - Days[date.getDay() as DayRange])
  const result: string[] = Array(42)
  for (let i = 0; i < 42; i++) {
    result[i] = `${date.getDate()}`
    date.setDate(date.getDate() + 1)
  }

  set(result)
}
