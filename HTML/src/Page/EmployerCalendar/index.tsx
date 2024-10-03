import {startTransition, useContext, useEffect, useMemo} from 'react'
import {useNavigate, useParams} from 'react-router-dom'

import {links, route} from '/global/ROUTE'
import Context from '/MContext'

import * as CSS from './css'

type MonthRange = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11
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

function EmployerCalendar() {
  const params = useParams()
  const navigation = useNavigate()
  const {state} = useContext(Context)
  const {month, year: y} = params
  const year = Number(y)

  const {profil} = state
  if (profil == undefined) return

  useEffect(() => {
    if (month == undefined) {
      const now = new Date()
      startTransition(() => navigation(links[route.Show_calendar] + `/${Month[now.getMonth() as MonthRange]}`))
    } else if (year == undefined) {
      const now = new Date()
      startTransition(() => {
        navigation(links[route.Show_calendar] + `/${month}/${now.getFullYear()}`)
      })
    }
  }, [])

  const data = useMemo(() => {
    const months = Month as unknown as string[]
    if (month == undefined || year == undefined) return 'undefined'
    if (!months.includes(month)) return 'Not a month'

    const date = new Date(year, months.indexOf(month) + 1, 0)
    if (date < state.profil!.workStartDate) return 'Not working'
  }, [month, year])

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
      <CSS.Row>{data}</CSS.Row>
      <CSS.Row></CSS.Row>
      <CSS.Row></CSS.Row>
      <CSS.Row></CSS.Row>
      <CSS.Row></CSS.Row>
      <CSS.Row></CSS.Row>
    </CSS.Container>
  )
}

export default EmployerCalendar
