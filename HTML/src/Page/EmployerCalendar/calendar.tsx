import {useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'

import {Button} from '/Button'
import {Calendar} from '/Calendar'
import {IMonth} from '/Calendar/IMonth'
import {ChangeToApiDateString} from '/Function/ChangeToApiDateString'
import {useEmployerCalendar, useEmployerCalendarDayData} from '/QueryFn/calendar/useCalendar'
import {links, IRoute} from '/Router/IRoute'

import {checkMonths} from './fun/checkMonths'
import {checkParam} from './fun/checkParam'
import {checkYear} from './fun/checkYear'
import {useCalendarRange} from './fun/useCalendarRange'
import {EmployerCalendarInfo} from './Info'

import * as CSS from './css'

export const EmployerCalendar = () => {
  const nav = useNavigate()
  const {year, month} = checkParam(useParams())
  const range = useCalendarRange()
  const [selected, select] = useState<Date | null>(null)
  const {data} = useEmployerCalendar(year, month)

  const checkedMonths = checkMonths(range, year, month)
  const checkedYears = checkYear(range, year)
  const selData = useEmployerCalendarDayData(selected)

  const move = (month: number, year: number) => nav(`${links[IRoute.showCalendar]}/${year}/${IMonth[month]}`)
  const plusYear = () => move(0, year + 1)
  const minusYear = () => move(11, year - 1)
  const setMonth = (i: number) => move(i, year)

  const status = (date: Date) => {
    const inRange = date.getMonth() == month && (date > range.start || date < range.end)
    const off = (data?.data[ChangeToApiDateString(date)]?.daysOff.length ?? 0) > 0
    const work = (data?.data[ChangeToApiDateString(date)]?.workingHours.length ?? 0) > 0

    return `${inRange}-${off}-${work}`
  }
  return (
    <CSS.Container>
      <CSS.Content>
        <CSS.DateInformation>
          <CSS.DateSelectedDay>{selected?.getDate()}</CSS.DateSelectedDay>
          <CSS.DateSelectedMonth>
            {selected ? (IMonth as unknown as string[])[selected.getMonth()] : 'Nie wybrano'}
          </CSS.DateSelectedMonth>
          <EmployerCalendarInfo data={selData} />
          <CSS.DateSelectedMod>
            <Button>Modyfikuj</Button>
          </CSS.DateSelectedMod>
        </CSS.DateInformation>
        <Calendar
          Element={CSS.Date}
          year={year}
          month={month}
          checkMonth={checkedMonths}
          checkYear={checkedYears}
          setMonth={setMonth}
          nextYear={plusYear}
          prevYear={minusYear}
          status={status}
          select={(a) => select(a)}
          title=""
        />
      </CSS.Content>
    </CSS.Container>
  )
}
