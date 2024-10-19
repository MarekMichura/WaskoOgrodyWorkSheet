import {startTransition} from 'react'
import {NavigateFunction} from 'react-router-dom'

import {links, route} from '/global/ROUTE'

import {Month, months} from './Month'
import {MonthRange} from './types'

export function CheckParams(navigation: NavigateFunction, month?: string, year?: string) {
  const yearNumber = Number(year)
  const now = new Date()
  if (month == undefined || !months.includes(month)) {
    startTransition(() => navigation(links[route.Show_calendar] + `/${Month[now.getMonth() as MonthRange]}`))
  } else if (year == undefined || isNaN(yearNumber)) {
    startTransition(() => {
      navigation(links[route.Show_calendar] + `/${month}/${now.getFullYear()}`)
    })
  }
}
