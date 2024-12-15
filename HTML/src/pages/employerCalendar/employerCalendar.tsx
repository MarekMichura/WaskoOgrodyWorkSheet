import {useCallback, useMemo} from 'react'
import {useNavigate} from 'react-router-dom'

import Button from '/button/button'
import {CalendarInput} from '/calendar/calendar'
import {calcDates} from '/calendar/fun/calcDates'
import {months} from '/calendar/types/_months'
import {toDateOnlyStr} from '/common/dateToString'
import {useEmployerCalendar} from '/query/employerCalendar/useEmployerCalendar'
import {ERoutes} from '/route/eRoutes'
import {link} from '/route/link'

import styles from './employer.calendar.module.scss'
import {calcDay} from './fun/calcDay'
import {employerCalendarProps} from './type/employerCalendarProps'

const {con, btn, content, selectedInfo, selectedDate, selectedData, selectedTitle, selectedElement, selectedBtn} = styles
function EmployerCalendarPage({year, month, selYear, selMonth, selDay, monthName, selMonthName, profil}: employerCalendarProps) {
  const navigation = useNavigate()
  const {prev, next, disableMonths, disablePrevYear, ...dates} = useMemo(() => calcDates(month, year, profil.workStartDate), [month, year, profil])

  const prevMonth = useEmployerCalendar(prev, ['data'])
  const nextMonth = useEmployerCalendar(next, ['data'])
  const currMonth = useEmployerCalendar({year, month}, ['data'])
  const seleMonth = useEmployerCalendar({year: selYear, month: selMonth}, ['data'])

  const changeDate = useCallback(
    (year: number, month: number) => {
      const path = `${link[ERoutes.showCalendar]}/${year}/${months[month]}/${selYear}/${selMonthName}/${selDay}`
      navigation(path)
    },
    [navigation, selDay, selMonthName, selYear]
  )

  const changeSelected = useCallback(
    (_year: number, _month: number, _day: number) => {
      const path = `${link[ERoutes.showCalendar]}/${year}/${monthName}/${_year}/${months[_month]}/${_day}`
      navigation(path)
    },
    [year, monthName, navigation]
  )

  const btnProps = useMemo(
    () => calcDay(dates, prevMonth.data, currMonth.data, nextMonth.data, selYear, selMonth, selDay, btn, changeSelected),
    [dates, prevMonth, currMonth, nextMonth, selYear, selMonth, selDay, changeSelected]
  )

  const {dayOff, workingHours} = useMemo(() => {
    const dayStr = toDateOnlyStr(selYear, selMonth, selDay)
    return seleMonth.data?.data[dayStr] ?? {dayOff: [], workingHours: []}
  }, [seleMonth, selYear, selMonth, selDay])

  return (
    <section className={con}>
      <div className={content}>
        <div className={selectedInfo}>
          <h1 className={selectedDate}>{`${selYear}\u00A0${selMonthName}`}</h1>
          <div className={selectedData}>
            {dayOff.length > 0 && (
              <div>
                <h3 className={selectedTitle}>Wolne z powodu</h3>
                <ul className={selectedElement}>
                  {dayOff.map(({reason}, i) => (
                    <li key={i}>{reason}</li>
                  ))}
                </ul>
              </div>
            )}
            {workingHours.length > 0 && (
              <div>
                <h3 className={selectedTitle}>Przepracowano</h3>
                <ul className={selectedElement}>
                  {workingHours.map(({workStart, workEnd, location}, i) => (
                    <li key={i}>
                      <span>
                        od:{'\u00A0'}
                        {workStart.slice(0, -3)}
                        {'\u00A0'}do:{'\u00A0'}
                        {workEnd.slice(0, -3)}
                      </span>
                      <span> {location}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <Button className={selectedBtn}>Modyfikuj</Button>
        </div>
        <CalendarInput
          year={year}
          month={month}
          disablePrevYear={disablePrevYear}
          disableNextYear={false}
          disableMonth={disableMonths}
          p={btnProps}
          setDate={changeDate}
        />
      </div>
    </section>
  )
}

export default EmployerCalendarPage
