import {useQueryClient} from '@tanstack/react-query'
import {useEffect, useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'

import {Button} from '/Button'
import {ArrowIcon} from '/Icon/Arrow'
import {Loading} from '/Loading'
import {useEmployerCalendar} from '/QueryFn/calendar/useCalendar'
import {useProfil} from '/QueryFn/profil/useProfil'
import {IRoute, links} from '/Router/IRoute'
import {SuspendWrapper} from '/Suspend'

import {setYear, yearActive, setMonth, monthActive, handleDate} from './behavior'
import {EmployerCalendarSelectedInfo} from './SelectedInfo'
import {ICalendarParams, IParams} from './types/ICalendarParams'
import {DaysName} from './types/IDays'
import {IMonth, IMonthRange, Months, MonthsName} from './types/IMonth'
import {ISelected} from './types/ISelected'
import {CalcRange, CheckMonthYear, getDataFromFetch, getSelectedData} from './utils'

import * as CSS from './css'

export const EmployerCalendar = () => {
  const navigation = useNavigate()
  const client = useQueryClient()
  const profil = useProfil()
  const {workStartDate} = profil.data!
  const params = useParams<IParams<ICalendarParams>>()
  const [selected, setSelected] = useState<ISelected | null>(null)
  const selectedData = getSelectedData(selected, client)
  const now = new Date()

  const data = CheckMonthYear(now, profil.data!.workStartDate, params.month, params.year)
  const range = data && CalcRange(data.yearNumber, data.monthNumber)
  const calendar = useEmployerCalendar(data?.yearNumber, data?.monthNumber, range?.dates[0], range?.dates[41])

  useEffect(() => {
    if (data == null) {
      const month = IMonth[now.getMonth() as IMonthRange]
      const year = now.getFullYear()
      navigation(`${links[IRoute.showCalendar]}/${month}/${year}`)
    }
  }, [data])

  useEffect(() => {
    document.title = 'Przegląd kalendarza'
  }, [])

  return (
    <SuspendWrapper open={false} text="Kalendarz problemy">
      <CSS.Container>
        <CSS.Content>
          <CSS.DateInformation>
            <CSS.DateSelectedDay>{selected?.getDate()}</CSS.DateSelectedDay>
            <CSS.DateSelectedMonth>{selected ? Months[selected.getMonth()] : 'Nie wybrano'}</CSS.DateSelectedMonth>
            <EmployerCalendarSelectedInfo data={selectedData} />
            <CSS.DateSelectedMod>
              <Button>Modyfikuj</Button>
            </CSS.DateSelectedMod>
          </CSS.DateInformation>
          <CSS.DateContent>
            <CSS.DateYearContainer>
              {calendar.fetchStatus == 'fetching' && 'Aktualizowanie danych...'}
              {calendar.fetchStatus == 'paused' && 'Brak dostępu do internetu...'}
              <ArrowIcon
                cssSVG={CSS.DateYearArrow}
                onClick={() => data && setYear(navigation, data.yearNumber - 1, true)}
                data-active={data && yearActive(workStartDate, now, data.yearNumber - 1)}
                data-rotate={true}
              />
              {data?.yearNumber}
              <ArrowIcon
                cssSVG={CSS.DateYearArrow}
                onClick={() => data && setYear(navigation, data.yearNumber + 1, false)}
                data-active={data && yearActive(workStartDate, now, data.yearNumber + 1)}
              />
            </CSS.DateYearContainer>
            <CSS.DateMonths>
              {MonthsName.map((month, i) => (
                <CSS.DateMonth
                  key={i}
                  onClick={() => setMonth(navigation, i, data!.yearNumber)}
                  data-active={monthActive(data, workStartDate, now, i)}>
                  {month}
                </CSS.DateMonth>
              ))}
            </CSS.DateMonths>
            <CSS.Calendar>
              {DaysName.map((day, i) => (
                <div key={i}>{day}</div>
              ))}
              {range?.dates.map((date, i) => {
                const statusCheck = getDataFromFetch(date, calendar.data)
                const {isInMonth, status} = handleDate(date, range.start, range.end, statusCheck)

                return (
                  <CSS.Date key={i} data-date={isInMonth} data-status={status} onClick={() => setSelected(date)}>
                    {date.getDate()}
                  </CSS.Date>
                )
              })}
            </CSS.Calendar>
          </CSS.DateContent>
          <Loading
            open={calendar?.isPending ?? true}
            text={
              calendar.fetchStatus == 'paused'
                ? 'Brak połączenia z internetem'
                : `Pobieranie danych dla ${params.month} ${params.year}`
            }
          />
        </CSS.Content>
      </CSS.Container>
    </SuspendWrapper>
  )
}
