import {useTranslations} from 'next-intl'
import {useLayoutEffect, useMemo} from 'react'

import {clsx} from '@/utils/func/clsx'

import ArrowIcon from '../icon/arrow'
import Ripple from '../ripple/ripple'

import {calcDays} from './_fun/calcDays'
import {type ICalendarProps} from './_type/ICalendarProps'
import s from './css.module.scss'

function Calendar({month, year, changeMonth, changeYear, dayClick, updateCalendar, data}: ICalendarProps) {
  const t = useTranslations('calendar')

  const {monthsNames, shortDayNames, shortMonthNames} = useMemo(() => {
    const daysNames = Array.from({length: 7}).map((_, i) => t(`days.${i}`))
    const monthsNames = Array.from({length: 12}).map((_, i) => t(`months.${i}`))

    const shortMonthNames = monthsNames.map((a) => a.slice(0, 3))
    const shortDayNames = daysNames.map((a) => a.slice(0, 2))

    return {daysNames, monthsNames, shortDayNames, shortMonthNames}
  }, [t])

  const dayData = useMemo(() => calcDays(year, month), [month, year])

  const mixedData = useMemo(() => {
    console.log('siema')
    return dayData.map(({year, month, day}) => ({year, month, day, ...data[`${year}-${month}-${day}`]}))
  }, [data, dayData])

  useLayoutEffect(() => {
    updateCalendar(dayData)
  }, [dayData, updateCalendar])

  return (
    <section className={s.section}>
      <div className={s.header}>
        <h1>Kalendarz</h1>
        <div className={s.nav}>
          <Ripple type="button" className={s.navBtn} onClick={() => changeYear(year - 1)}>
            <ArrowIcon />
          </Ripple>
          <span className={s.date}>
            {year} {monthsNames[month]}
          </span>
          <Ripple type="button" className={clsx(s.navBtn, s.rotate)} onClick={() => changeYear(year + 1)}>
            <ArrowIcon />
          </Ripple>
        </div>
      </div>
      <ul className={s.months}>
        {shortMonthNames.map((month, i) => (
          <li key={i} className={s.month}>
            <Ripple type="button" className={s.monthBtn} onClick={() => changeMonth(i)}>
              {month}
            </Ripple>
          </li>
        ))}
      </ul>
      <div className={s.separator} />
      <ul className={s.content}>
        {shortDayNames.map((month, i) => (
          <li key={i} className={s.week}>
            {month}
          </li>
        ))}
        {mixedData.map(({year, month, day, className, type, onClick, ...rest}) => (
          <li key={`${year}${month}${day}`} className={s.day}>
            <Ripple
              type={type ?? 'button'}
              className={clsx(s.dayBtn, className)}
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                onClick?.(e)
                dayClick(year, month, day)
              }}
              {...rest}
            >
              {day}
            </Ripple>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Calendar
