'use client'

import {useTranslations} from 'next-intl'
import {parseAsInteger, useQueryStates} from 'nuqs'
import {type ComponentProps, useCallback, useEffect, useMemo, useState} from 'react'

import {type ICalcDaysResult} from '@/components/calendar/_type/ICalcDaysResult'
import Calendar from '@/components/calendar/calendar'
import {keyDate, keyDateObjUndef} from '@/utils/func/keyDate'
import {useWorkHours} from '@/utils/query/workHours/useWorkHours'

import DayInfo from './_com/dayInfo'
import s from './css.module.scss'

function GetWorkHoursPage() {
  const t = useTranslations('calendar')
  const now = new Date()
  const [calendarState, setCalendarState] = useState<ICalcDaysResult[]>([])
  const [{[t('year')]: yearState, [t('month')]: monthState, [t('day')]: dayState}, setDate] = useQueryStates({
    [t('year')]: parseAsInteger.withDefault(now.getFullYear()),
    [t('month')]: parseAsInteger.withDefault(now.getMonth()),
    [t('day')]: parseAsInteger.withDefault(now.getDate()),
  })

  useEffect(() => {
    const date = new Date(yearState, monthState, dayState)
    const isValid = date.getFullYear() === yearState && date.getMonth() === monthState && date.getDate() === dayState
    if (isValid) return

    const now = new Date()
    setDate({
      [t('year')]: now.getFullYear(),
      [t('month')]: now.getMonth(),
      [t('day')]: now.getDate(),
    })
  }, [yearState, monthState, dayState, setDate, t])

  // prettier-ignore
  const changeMonth = useCallback((month: number) => {
    setDate((p) => ({
      ...p,
      [t('month')]: month,
    }))
  }, [setDate, t])

  // prettier-ignore
  const changeYear = useCallback((year: number) => {
    setDate((p) => ({
      ...p,
      [t('year')]: year,
    }))
  }, [setDate, t])

  // prettier-ignore
  const dayClick = useCallback((year: number, month: number, day: number) => {
    setDate({
      [t('year')]: year,
      [t('month')]: month,
      [t('day')]: day,
    })
  }, [setDate, t])

  const updateCalendar = useCallback((calendar: ICalcDaysResult[]) => {
    setCalendarState(calendar)
  }, [])

  const {workHours} = useWorkHours(keyDateObjUndef(calendarState.at(0)), keyDateObjUndef(calendarState.at(-1)))

  const calendarData = useMemo(() => {
    const result: Record<`${number}-${number}-${number}`, ComponentProps<'button'>> = {}
    calendarState.forEach(({day, month, year}) => {
      const key = keyDate(year, month, day)
      const dayData = workHours?.[key] ?? {dayOff: [], workingHours: []}
      result[`${year}-${month}-${day}`] = {
        ['data-outside']: month !== monthState,
        ['data-current']: month === monthState && year === yearState && day === dayState,
        ['data-day-off']: dayData.dayOff.filter((a) => a.off === true).length > 0,
        ['data-work']: dayData.workingHours.length > 0,
        className: s.calendar,
      }
    })

    return result
  }, [calendarState, dayState, monthState, workHours, yearState])

  const dayData = useMemo(() => {
    const key = keyDate(yearState, monthState, dayState)
    const dayData = workHours?.[key] ?? {dayOff: [], workingHours: []}

    return dayData
  }, [dayState, monthState, workHours, yearState])

  return (
    <div className={s.con}>
      <Calendar
        month={monthState}
        year={yearState}
        changeMonth={changeMonth}
        changeYear={changeYear}
        dayClick={dayClick}
        updateCalendar={updateCalendar}
        data={calendarData}
      />

      <DayInfo data={dayData} />
    </div>
  )
}

export default GetWorkHoursPage
