import {useMemo, useState} from 'react'
import {useNavigate} from 'react-router-dom'

import Button from '/button/button'
import {CalendarInput} from '/calendar/calendar'
import {useEmployerCalendar} from '/query/employerCalendar/useEmployerCalendar'
import {useProfile} from '/query/profile/useProfile'
import {ERoutes} from '/route/eRoutes'
import {link} from '/route/link'

import styles from './employer.calendar.module.scss'
import {calcDates} from './fun/calcDates'
import {calcDayData} from './fun/calcDay'
import {calcDisable} from './fun/calcDisable'
import {getDate} from './fun/getDate'
import {nowParams} from './fun/now'
import {calendarState} from './type/_calendarState'
import {employerCalendarProps} from './type/_employerCalendarProps'
import {months} from './type/_months'

const {con, btn, content, selectedInfo, selectedDate, selectedData, selectedTitle, selectedElement, selectedBtn} =
  styles
function EmployerCalendar(props: employerCalendarProps) {
  const navigation = useNavigate()

  const [selected, setSelected] = useState<calendarState>(nowParams())
  const dates = useMemo(() => calcDates(props), [props])

  const {prev, next} = dates
  const {data: startWork} = useProfile(['data'], (p) => p!.workStartDate)
  const {data: prevD} = useEmployerCalendar(prev, ['data'])
  const {data: currD} = useEmployerCalendar(props, ['data'])
  const {data: nextD} = useEmployerCalendar(next, ['data'])
  const {data} = useEmployerCalendar({year: selected?.year, month: selected?.month}, ['data'], getDate(selected))

  const {disableMonth, disableYear} = useMemo(() => calcDisable(props, startWork!), [startWork, props])
  const days = useMemo(
    () => calcDayData(selected, setSelected, dates, props, prevD, currD, nextD, startWork!),
    [currD, dates, nextD, prevD, props, selected, startWork]
  )

  function setDate(year: number, month: number) {
    navigation(`${link[ERoutes.showCalendar]}/${year}/${months[month]}`)
  }

  return (
    <section className={con}>
      <div className={content}>
        <div className={selectedInfo}>
          <h1 className={selectedDate}>
            {selected ? `${selected.day}\u00A0${months[selected.month]}` : 'Nie wybrano'}
          </h1>
          <div className={selectedData}>
            {data && data.dayOff.length > 0 && (
              <div>
                <h3 className={selectedTitle}>Wolne z powodu</h3>
                <ul className={selectedElement}>
                  {data.dayOff.map(({reason}, i) => (
                    <li key={i}>{reason}</li>
                  ))}
                </ul>
              </div>
            )}
            {data && data.workingHours.length > 0 && (
              <div>
                <h3 className={selectedTitle}>Przepracowano</h3>
                <ul className={selectedElement}>
                  {data.workingHours.map(({workStart, workEnd, location}, i) => (
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
          year={props.year}
          month={props.month}
          disablePrevYear={disableYear}
          disableNextYear={false}
          disableMonth={disableMonth}
          p={days.map((a) => ({...a, className: btn}))}
          setDate={setDate}
        />
      </div>
    </section>
  )
}

export default EmployerCalendar
