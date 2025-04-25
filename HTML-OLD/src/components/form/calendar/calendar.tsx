'use client'
import {useMemo} from 'react'

import ArrowIcon from '@/components/icon/svg/arrow'
import {calcCalendarDates} from '@/utils/date/calcCalendarDates'
import {months} from '@/utils/type/common/EDate'

import FormBtn from '../button/formBtn'

import {MonthBar, DayBar} from './bars'
import s from './cssCalendar.module.scss'
import {CalendarDay} from './day'
import {IFormCalendarProps} from './IFormCalendarProps'

function FormCalendar({title, year, month, className, getData, click}: IFormCalendarProps) {
  const dates = useMemo(() => calcCalendarDates(year, month), [month, year])
  const content = useMemo(
    () => <CalendarDay days={dates} getData={getData} click={click} className={className} />, //
    [dates, getData, click, className]
  )

  return (
    <div className={s.container}>
      <div className={s.top}>
        <h1>{title ?? '\u00A0'}</h1>
        <div className={s.navigation}>
          <FormBtn type="Link" href={'#'}>
            <ArrowIcon style={{transform: 'rotate(180deg)'}} />
          </FormBtn>
          <h2>{`${year} ${months[month]}`}</h2>
          <FormBtn type="Link" href={'#'}>
            <ArrowIcon />
          </FormBtn>
        </div>
      </div>
      <div className={s.months}>
        <MonthBar length={3} />
      </div>
      <div className={s.weekIndicator} />
      <div className={s.days}>
        <DayBar length={2} />
        {content}
      </div>
    </div>
  )
}

export default FormCalendar
