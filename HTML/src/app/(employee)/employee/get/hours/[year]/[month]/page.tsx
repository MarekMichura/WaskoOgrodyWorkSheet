'use client'

import FormCalendar from '@/components/form/calendar/calendar'
import {FixedLengthArray, ICalendarDate} from '@/utils/date/calcCalendarDates'
import {useEmployeeCalendar} from '@/utils/query/employeeCalendarUse'

import s from './employeeGetHours.module.scss'

interface IEmployeeGetHoursForm {
  year: number
  month: number
  dates: FixedLengthArray<ICalendarDate, 42>
}

function EmployeeGetHoursPage({year, month, dates}: IEmployeeGetHoursForm) {
  const {data} = useEmployeeCalendar(dates.at(0)!, dates.at(-1)!)

  return (
    <>
      <FormCalendar
        title="Wybierz datę"
        year={year}
        month={month}
        dates={dates}
        className={s.btn}
        getData={(day) => {
          const d = data[day.str]

          return {
            'data-outside': day.outside.toString(),
            'data-dayoff': (d?.dayOff?.length !== undefined && d.dayOff.length > 0).toString(),
          }
        }}
        click={(e) => {
          console.log(e)
        }}
      />
      {year} {month}
    </>
  )
}

export default EmployeeGetHoursPage
