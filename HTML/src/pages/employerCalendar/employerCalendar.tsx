import {Navigate, useParams} from 'react-router-dom'

import {ERoutes} from '/route/eRoutes'
import {link} from '/route/link'

import EmployerCalendar from './calendar'
import {months} from './type/_months'

function EmployerCalendarPage() {
  const {year, month} = useParams()
  const monthID = Object.entries(months).find(([, val]) => val === month)
  const yearNr = Number(year)

  if (isNaN(yearNr) || monthID === undefined) {
    const now = new Date()
    const path = `${link[ERoutes.showCalendar]}/${now.getFullYear()}/${months[now.getMonth()]}`
    return <Navigate to={path} />
  }

  return <EmployerCalendar month={Number(monthID[0])} monthName={month!} year={yearNr} />
}

export default EmployerCalendarPage
