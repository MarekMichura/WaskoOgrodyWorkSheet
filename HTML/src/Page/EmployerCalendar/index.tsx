import {startTransition, useContext, useMemo} from 'react'
import {useNavigate, useParams} from 'react-router-dom'

import {links, route} from '/global/ROUTE'
import Context from '/MContext'

import {DayRange, MonthRange} from './types'

import * as CSS from './css'

const Month: Record<MonthRange, string> = [
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

const Days: Record<DayRange, number> = [6, 0, 1, 2, 3, 4, 5]

function EmployerCalendar() {
  const params = useParams()
  const navigation = useNavigate()
  const {state} = useContext(Context)

  const {profil} = state
  const {month, year: y} = params
  const year = Number(y)

  const now = new Date()
  if (month == undefined) {
    startTransition(() => navigation(links[route.Show_calendar] + `/${Month[now.getMonth() as MonthRange]}`))
  } else if (y == undefined || isNaN(year)) {
    startTransition(() => {
      navigation(links[route.Show_calendar] + `/${month}/${now.getFullYear()}`)
    })
  }

  const dates = useMemo(() => {
    const months = Month as unknown as string[]
    if (month == undefined || year == undefined) return
    if (!months.includes(month)) return

    const date = new Date(year, months.indexOf(month) + 1, 0)
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
    return result
  }, [month, year])

  if (dates == undefined) return <></>

  return (
    <CSS.Container>
      <CSS.NavBar>
        {month} {year}
      </CSS.NavBar>
      <CSS.TopRow>
        <div>PN</div>
        <div>WT</div>
        <div>SR</div>
        <div>CZW</div>
        <div>PT</div>
        <div>SO</div>
        <div>N</div>
      </CSS.TopRow>
      {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        [...Array(6)].map((_, k) => {
          return (
            <CSS.Row key={k}>
              {
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                [...Array(7)].map((_, j) => {
                  return <div key={j}>{dates[k * 7 + j]}</div>
                })
              }
            </CSS.Row>
          )
        })
      }
    </CSS.Container>
  )
}

export default EmployerCalendar
