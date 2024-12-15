import {Formik} from 'formik'
import {useCallback, useMemo, useState} from 'react'
import {useNavigate} from 'react-router-dom'

import Button from '/button/button'
import {CalendarInput} from '/calendar/calendar'
import {calcDates} from '/calendar/fun/calcDates'
import {months} from '/calendar/types/_months'
import {toDateOnlyStr} from '/common/dateToString'
import {useEmployerCalendar} from '/query/employerCalendar/useEmployerCalendar'
import {useProfile} from '/query/profile/useProfile'
import {ERoutes} from '/route/eRoutes'
import {link} from '/route/link'
import CalendarIcon from '/svg/Calendar'
import {TimeInput} from '/time/time'

import {timeLocation} from './_timeLocation'
import {calcDay} from './fun/calcDay'
import styles from './setHours.module.scss'
import {setHoursPageProps} from './type/setHoursPageProps'

const {con, content, top, btnCalendar, menu, menuItem, menuBG, noMargin, btn} = styles
function SetWorkingHoursPage({year, month, day, monthName}: setHoursPageProps) {
  const navigation = useNavigate()
  const [open, setState] = useState(false)
  const profil = useProfile(['data'])
  const {prev, next, disableMonths, disablePrevYear, disableNextYear, ...dates} = useMemo(
    () => calcDates(month, year, profil.data?.workStartDate),
    [month, year, profil]
  )

  const prevMonth = useEmployerCalendar(prev, ['data'])
  const nextMonth = useEmployerCalendar(next, ['data'])
  const currMonth = useEmployerCalendar({year, month}, ['data'])

  const changeDate = useCallback(
    (_year: number, _month: number) => {
      const day = year > _year || (year === _year && month >= _month) ? new Date(_year, _month + 1, 0).getDate() : 1
      const path = `${link[ERoutes.setWorkingHours]}/${_year}/${months[_month]}/${day}`
      navigation(path)
    },
    [month, year, navigation]
  )

  const changeSelected = useCallback(
    (_year: number, _month: number, _day: number) => {
      const path = `${link[ERoutes.setWorkingHours]}/${_year}/${months[_month]}/${_day}`
      navigation(path)
    },
    [navigation]
  )

  const changeOpen = useCallback(() => {
    setState((state) => !state)
  }, [])

  const initialValue = useMemo(() => {
    const result: timeLocation[] = []
    return {data: result}
  }, [])

  const btnProps = useMemo(
    () => calcDay(dates, prevMonth.data, currMonth.data, nextMonth.data, year, month, day, btn, changeSelected),
    [dates, prevMonth, currMonth, nextMonth, year, month, day, changeSelected]
  )

  return (
    <section className={con}>
      <div className={content}>
        <div className={top}>
          <div>
            <h1 className={noMargin}>Ustaw godziny pracy dla</h1>
            <h3 className={noMargin}>
              {year} {monthName} {day}
            </h3>
          </div>
          <Button className={btnCalendar} onClick={changeOpen}>
            <CalendarIcon />
            <span>Zmień{'\u00A0'}dzień</span>
          </Button>
          <div className={menu} data-open={open}>
            <div className={menuItem}>
              <CalendarInput
                year={year}
                month={month}
                setDate={changeDate}
                p={btnProps}
                disableNextYear={disablePrevYear}
                disablePrevYear={disableNextYear}
                disableMonth={disableMonths}
              />
            </div>
          </div>
        </div>

        <Formik initialValues={initialValue} onSubmit={console.log} key={toDateOnlyStr(year, month, day)}>
          {({handleSubmit, values}) => (
            <form onSubmit={handleSubmit}>
              {values.data.map((data, i) => {
                return (
                  <fieldset key={i}>
                    <legend>{data.location}</legend>
                    <TimeInput label="Godzina&nbsp;rozpoczęcia&nbsp;etapu" startHour={8} startMinute={30} name={`data.[i].start`} />
                    <TimeInput label="Godzina&nbsp;rozpoczęcia&nbsp;etapu" startHour={8} startMinute={30} name={`data.[i].end`} />
                  </fieldset>
                )
              })}
            </form>
          )}
        </Formik>
      </div>
      <div className={menuBG} data-open={open} onClick={changeOpen} />
    </section>
  )
}

export default SetWorkingHoursPage
