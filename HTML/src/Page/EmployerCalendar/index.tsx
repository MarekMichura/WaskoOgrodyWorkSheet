import {Fragment, useEffect, useState} from 'react'
import {ErrorBoundary} from 'react-error-boundary'
import {useNavigate, useParams} from 'react-router-dom'

import {Button} from '/Button'
import {ArrowIcon} from '/Icon/Arrow'
import {useEmployerCalendar, useEmployerCalendarDayData} from '/QueryFn/calendar/useCalendar'
import {IRoute, links} from '/Router/IRoute'

import {checkMonths} from './fun/checkMonths'
import {checkParam} from './fun/checkParam'
import {checkYear} from './fun/checkYear'
import {useCalendarRange} from './fun/useCalendarRange'
import {IDay} from './types/IDay'
import {IMonth} from './types/IMonth'

import * as CSS from './css'

const EmployerCalendar = () => {
  const nav = useNavigate()
  const {year, month} = checkParam(useParams())
  const range = useCalendarRange()
  const [selected, select] = useState<Date | null>(null)
  const {data, start, isPending, isPaused, isError} = useEmployerCalendar(year, month)

  const months = checkMonths(range, year, month)
  const [prevYear, nextYear] = checkYear(range, year)
  const selData = useEmployerCalendarDayData(selected)

  const move = (month: number, year: number) => nav(`${links[IRoute.showCalendar]}/${year}/${IMonth[month]}`)
  const plusYear = () => move(0, year + 1)
  const minusYear = () => move(11, year - 1)
  const setMonth = (i: number) => move(i, year)

  console.log('update')

  return (
    <CSS.Container>
      <CSS.Content>
        <CSS.DateInformation>
          <CSS.DateSelectedDay>{selected?.getDate()}</CSS.DateSelectedDay>
          <CSS.DateSelectedMonth>
            {selected ? (IMonth as unknown as string[])[selected.getMonth()] : 'Nie wybrano'}
          </CSS.DateSelectedMonth>
          <CSS.SelectedInfo>
            {selData && (
              <Fragment>
                {selData && selData.workingHours.length > 0 && (
                  <div>
                    <h3>Przepracowałeś</h3>
                    {selData.workingHours.map((work, i) => (
                      <div key={i}>
                        {work.start.slice(0, 5)}-{work.end.slice(0, 5)} {work.where}
                      </div>
                    ))}
                  </div>
                )}
                {selData && selData.daysOff.length > 0 && (
                  <div>
                    <h3>Wolne z powodu</h3>
                    {selData.daysOff.map((off, i) => (
                      <div key={i}>{off.reason}</div>
                    ))}
                  </div>
                )}
              </Fragment>
            )}
          </CSS.SelectedInfo>
          <CSS.DateSelectedMod>
            <Button>Modyfikuj</Button>
          </CSS.DateSelectedMod>
        </CSS.DateInformation>
        <CSS.DateContent>
          <CSS.TopBar>
            <CSS.FetchStatus>
              {isPending && <div>Brak danych...</div>}
              {isPaused && <div>Brak dostępu do internetu...</div>}
              {isError && <div>Błąd podczas ostatniego pobierania...</div>}
            </CSS.FetchStatus>
            <CSS.DateYearContainer>
              <ArrowIcon cssSVG={CSS.DateYearArrow} onClick={minusYear} data-active={prevYear} data-rotate={true} />
              {year}
              <ArrowIcon cssSVG={CSS.DateYearArrow} onClick={plusYear} data-active={nextYear} />
            </CSS.DateYearContainer>
          </CSS.TopBar>
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
              const status = () => {
                if (data === undefined) return 'undefined'
                if (day > range.end || day < range.start) return 'ok'
                if (dateData === undefined) return 'notSet'
                if (dateData.daysOff.length > 0 && dateData.workingHours.length) return 'okOff'
                if (dateData.daysOff.length > 0) return 'off'
                if (dateData.workingHours.length === 0) return 'notSet'
                return 'ok'
              }

              return (
                <CSS.Date key={i} data-date={inMonth} data-status={status()} onClick={() => select(day)}>
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

const EmployerCalendarErrorHandle = () => {
  const nav = useNavigate()
  const [{error, count}, setError] = useState({count: 0, error: ''})

  const onError = (error: Error) => {
    setError((a) => ({...a, error: error.message}))
  }

  useEffect(() => {
    if (error == '') return
    const now = new Date()
    nav(`${links[IRoute.showCalendar]}/${now.getFullYear()}/${IMonth[now.getMonth()]}`)
    setError((a) => ({count: a.count + 1, error: ''}))
  }, [error, nav])

  return (
    <ErrorBoundary onError={onError} resetKeys={[count]} fallback={<h1>{error}</h1>}>
      <EmployerCalendar />
    </ErrorBoundary>
  )
}

export default EmployerCalendarErrorHandle
