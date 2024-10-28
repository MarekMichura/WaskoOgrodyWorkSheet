import {Fragment} from 'react/jsx-runtime'

import {IResponseCalendarDayOff, IResponseCalendarWorkHours} from '/QueryFn/calendar/ICalendarResponse'

import * as CSS from './css'

export interface IEmployerCalendarInfo {
  data: {
    daysOff: IResponseCalendarDayOff[]
    workingHours: IResponseCalendarWorkHours[]
    time: string
  } | null
}

const WorkHours = ({data}: {data: IResponseCalendarWorkHours[]}) => {
  if (data.length == 0) return <Fragment />
  console.log(data)
  return (
    <div>
      <h3>Przepracowałeś</h3>
      {data.map((work, i) => (
        <div key={i}>
          {work.start.slice(0, 5)}-{work.end.slice(0, 5)} {work.where}
        </div>
      ))}
    </div>
  )
}

const DayOff = ({data}: {data: IResponseCalendarDayOff[]}) => {
  if (data.length == 0) return <Fragment />

  return (
    <div>
      <h3>Wolne z powodu</h3>
      {data.map((off, i) => (
        <div key={i}>
          <div key={i}>{off.reason}</div>
        </div>
      ))}
    </div>
  )
}

export const EmployerCalendarInfo = (props: IEmployerCalendarInfo) => {
  if (props == undefined || props.data == undefined) return <Fragment />

  return (
    <CSS.SelectedInfo>
      <DayOff data={props.data.daysOff} />
      <WorkHours data={props.data.workingHours} />
    </CSS.SelectedInfo>
  )
}
