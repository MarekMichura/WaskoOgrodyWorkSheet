import {useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'

import {Button} from '/Button'
import {ArrowIcon} from '/Icon/Arrow'
import {useEmployerCalendar, useEmployerCalendarDayData} from '/QueryFn/calendar/useCalendar'
import {IRoute, links} from '/Router/IRoute'

import {checkMonths} from './fun/checkMonths'
import {checkParam} from './fun/checkParam'
import {checkYear} from './fun/checkYear'
import {useCalendarRange} from './fun/useCalendarRange'
import {ICalendarParams} from './types/ICalendarParams'
import {IDay} from './types/IDay'
import {IMonth} from './types/IMonth'

import * as CSS from './css'

export const EmployerCalendarParams = () => {
  const [selected, select] = useState<Date | null>(null)
  const nav = useNavigate()
  const params = useParams() as unknown as ICalendarParams
  const range = useCalendarRange()
  const {month, year} = checkParam(params)
  const [prevYear, nextYear] = checkYear(range, year)
  const months = checkMonths(range, year, month)

  const selData = useEmployerCalendarDayData(selected)
  const {data, start, isPending, isPaused} = useEmployerCalendar(year, month)

  const move = (month: number, year: number) => nav(`${links[IRoute.showCalendar]}/${year}/${IMonth[month]}`)
  const plusYear = () => move(0, year + 1)
  const minusYear = () => move(11, year - 1)
  const setMonth = (i: number) => move(i, year)

  return (
    <CSS.Container>
      <CSS.Content>
        <CSS.DateInformation>
          <CSS.DateSelectedDay>{selected?.getDate()}</CSS.DateSelectedDay>
          <CSS.DateSelectedMonth>
            {selected ? (IMonth as unknown as string[])[selected.getMonth()] : 'Nie wybrano'}
          </CSS.DateSelectedMonth>
          <CSS.SelectedInfo>
            {selData?.workingHours && (
              <div>
                <h3>Przepracowałeś</h3>
                {selData.workingHours.map((work, i) => (
                  <div key={i}>
                    {work.start.slice(0, 5)}-{work.end.slice(0, 5)} {work.where}
                  </div>
                ))}
              </div>
            )}
            {selData?.daysOff && (
              <div>
                <h3>Przepracowałeś</h3>
                {selData.daysOff.map((off, i) => (
                  <div key={i}>{off.reason}</div>
                ))}
              </div>
            )}
          </CSS.SelectedInfo>
          <CSS.DateSelectedMod>
            <Button>Modyfikuj</Button>
          </CSS.DateSelectedMod>
        </CSS.DateInformation>
        <CSS.DateContent>
          <CSS.DateYearContainer>
            {isPending && 'Ładowanie danych...'}
            {isPaused && 'Brak dostępu do internetu...'}
            <ArrowIcon cssSVG={CSS.DateYearArrow} onClick={minusYear} data-active={prevYear} data-rotate={true} />
            {year}
            <ArrowIcon cssSVG={CSS.DateYearArrow} onClick={plusYear} data-active={nextYear} />
          </CSS.DateYearContainer>
          <CSS.DateMonths>
            {Array.from({length: 12}).map((_, i) => {
              const current = month == i
              return (
                <CSS.DateMonth key={i} onClick={() => setMonth(i)} data-active={months[i]} data-current={current}>
                  {(IMonth as unknown as string[])[i].slice(0, 3)}
                </CSS.DateMonth>
              )
            })}
          </CSS.DateMonths>
          <CSS.Calendar>
            {Array.from({length: 7}).map((_, i) => (
              <div key={i}>{(IDay as unknown as string[])[i].slice(0, 3).toUpperCase()}</div>
            ))}
            {Array.from({length: 42}).map((_, i) => {
              const day = new Date(start.getFullYear(), start.getMonth(), start.getDate() + i)
              const inMonth = day.getMonth() != month
              const strTime = `${day.getFullYear()}-${(day.getMonth() + 1).toString().padStart(2, '0')}-${day.getDate().toString().padStart(2, '0')}`

              const dateData = data?.data[strTime]
              const status =
                data == undefined
                  ? 'undefined'
                  : dateData == undefined
                    ? 'notSet'
                    : dateData.daysOff.length > 0
                      ? 'off'
                      : dateData.workingHours.length == 0
                        ? 'notSet'
                        : 'ok'

              return (
                <CSS.Date key={i} data-date={inMonth} data-status={status} onClick={() => select(day)}>
                  {day.getDate()}
                </CSS.Date>
              )
            })}
          </CSS.Calendar>
        </CSS.DateContent>
      </CSS.Content>
    </CSS.Container>
  )
}
