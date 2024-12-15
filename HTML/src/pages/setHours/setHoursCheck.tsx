import {useParams, Navigate} from 'react-router-dom'

import {months} from '/calendar/types/_months'
import {isDateBeetween} from '/common/isDateBeetween'
import {isValidDate} from '/common/isValidDate'
import {useProfile} from '/query/profile/useProfile'
import {ERoutes} from '/route/eRoutes'
import {link} from '/route/link'

import SetWorkingHoursPage from './setHours'

function SetWorkingHoursCheck() {
  const {year, month, day} = useParams()
  const profil = useProfile(['data'])
  const now = new Date()

  const yearID = Number(year)
  const monthObj = Object.entries(months).find(([, val]) => val === month)
  const monthID = monthObj ? Number(monthObj[0]) : undefined
  const dayID = Number(day)

  if (
    isNaN(yearID) ||
    isNaN(dayID) ||
    monthID === undefined ||
    !isValidDate(yearID, monthID, dayID) ||
    !isDateBeetween(yearID, monthID, dayID, {dateBefore: profil.data!.workStartDate, dateAfter: now})
  ) {
    const year = now.getFullYear()
    const month = months[now.getMonth()]
    const day = now.getDate()

    const path = `${link[ERoutes.setWorkingHours]}/${year}/${month}/${day}`
    return <Navigate to={path} />
  }

  return <SetWorkingHoursPage monthName={month!} year={yearID} month={monthID} day={dayID} />
}

export default SetWorkingHoursCheck
