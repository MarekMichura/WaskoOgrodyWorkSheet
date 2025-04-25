'use client'

import {useMemo} from 'react'

import ArrowIcon from '@/components/image/svg/arrow'
import {useLocale} from '@/utils/locale/_help/useLocale'
import {EMonth} from '@/utils/type/EMonth'

import FormLink from '../btn/formLink'

import {DayBar} from './_com/DayBar'
import {MonthBar} from './_com/MonthBar'
import {calcDateRestrictions} from './_fun/calcDateRestrictions'
import {calcCalendarDates} from './_fun/calcMonthDays'
import s from './css.module.scss'

interface IFormCalendarProps {
  year: number
  month: number
  title: string

  restriction?: {
    from: Date
    to: Date
  }
}

function FormCalendar({year, month, title, restriction}: IFormCalendarProps) {
  const locale = useLocale()
  const {days, rest} = useMemo(() => {
    return {
      days: calcCalendarDates(year, month),
      rest: restriction ? calcDateRestrictions(year, month, restriction.from, restriction.to) : undefined,
    }
  }, [month, restriction, year])

  return (
    <div className={s.container}>
      <div className={s.top}>
        <h1>{title ?? '\u00A0'}</h1>
        <div className={s.navigation}>
          <FormLink href={'#'} disabled={rest?.prevYear}>
            <ArrowIcon style={{transform: 'rotate(180deg)'}} />
          </FormLink>
          <h2>{`${year} ${EMonth[locale][month]}`}</h2>
          <FormLink href={'#'} disabled={rest?.nextYear}>
            <ArrowIcon />
          </FormLink>
        </div>
      </div>
      <div className={s.months}>
        <MonthBar length={3} locale={locale} disable={rest?.month} />
      </div>
      <div className={s.weekIndicator} />
      <div className={s.days}>
        <DayBar length={2} locale={locale} />
        {days.map((ele, i) => {
          return (
            <FormLink href="#" key={i} className={s.day}>
              {ele.day}
            </FormLink>
          )
        })}
      </div>
    </div>
  )
}

export default FormCalendar
