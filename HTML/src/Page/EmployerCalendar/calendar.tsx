import {useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'

import {ChangeToApiDateString} from '/Function/ChangeToApiDateString'
import {Button} from '/InputButton'
import {IMonth} from '/InputCalendar/IMonth'
import {Calendar} from '/InputCalendar/index'
import {useEmployerCalendar} from '/QueryFn/calendar/useCalendar'
import {useEmployerCalendarDayData} from '/QueryFn/calendar/useEmployerCalendarDayData'
import {links, IRoute} from '/Router/IRoute'

import {checkMonths} from './fun/checkMonths'
import {checkParam} from './fun/checkParam'
import {checkYear} from './fun/checkYear'
import {useCalendarRange} from './fun/useCalendarRange'
import {EmployerCalendarInfo} from './Info'

import * as CSS from './css'

export function EmployerCalendar() {
  const nav = useNavigate()
  const {year, month} = checkParam(useParams())
  const [selected, select] = useState<Date | null>(null)
  const range = useCalendarRange()
  const calendar = useEmployerCalendar(year, month)

  const checkedMonths = checkMonths(range, year, month)
  const checkedYears = checkYear(range, year)
  const selData = useEmployerCalendarDayData(selected)

  const move = (month: number, year: number) => nav(`${links[IRoute.showCalendar]}/${year}/${IMonth[month]}`)
  const plusYear = () => move(0, year + 1)
  const minusYear = () => move(11, year - 1)
  const setMonth = (i: number) => move(i, year)

  function status(date: Date) {
    if (calendar.data == undefined) return 'false-false-true'
    const inRange = date.getMonth() == month && (date > range.start || date < range.end)
    const off = (calendar.data?.data[ChangeToApiDateString(date)]?.daysOff.length ?? 0) > 0
    const work = (calendar.data?.data[ChangeToApiDateString(date)]?.workingHours.length ?? 0) > 0

    return `${inRange}-${off}-${work}`
  }

  function title() {
    if (calendar.isPaused) return 'Brak dostępu do internetu'
    if (calendar.status == 'pending') return 'Pobieranie danych...'
    return ''
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
          title={title()}
        />
      </CSS.Content>
    </CSS.Container>
  )
}