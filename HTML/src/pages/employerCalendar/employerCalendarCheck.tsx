import {Navigate, useParams} from 'react-router-dom'

import {months} from '/calendar/types/_months'
import {isDateBeetween} from '/common/isDateBeetween'
import {isValidDate} from '/common/isValidDate'
import {useProfile} from '/query/profile/useProfile'
import {ERoutes} from '/route/eRoutes'
import {link} from '/route/link'

import EmployerCalendarPage from './employerCalendar'

function EmployerCalendarCheck() {
  const {year, month, selYear, selMonth, selDay} = useParams()
  const profil = useProfile(['data'])
  const now = new Date()

  const yearID = Number(year)
  const monthObj = Object.entries(months).find(([, val]) => val === month)
  const monthID = monthObj ? Number(monthObj[0]) : undefined

  const selYearId = Number(selYear)
  const selMonthObj = Object.entries(months).find(([, val]) => val === selMonth)
  const selMonthId = selMonthObj ? Number(selMonthObj[0]) : undefined
  const selDayId = Number(selDay)

  if (
    isNaN(yearID) ||
    isNaN(selYearId) ||
    isNaN(selDayId) ||
    monthID === undefined ||
    selMonthId === undefined ||
    !isValidDate(selYearId, selMonthId, selDayId) ||
    !isDateBeetween(selYearId, selMonthId, selDayId, {dateBefore: profil.data!.workStartDate})
  ) {
    const year = now.getFullYear()
    const month = months[now.getMonth()]
    const day = now.getDate()

    const path = `${link[ERoutes.showCalendar]}/${year}/${month}/${year}/${month}/${day}`
    return <Navigate to={path} />
  }

  return (
    <EmployerCalendarPage
      profil={profil.data!}
      year={yearID}
      month={monthID}
      selYear={selYearId}
      selMonth={selMonthId}
      selDay={selDayId}
      monthName={month!}
      selMonthName={selMonth!}
    />
  )
}

export default EmployerCalendarCheck
