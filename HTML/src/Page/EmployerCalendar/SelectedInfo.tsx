import {IResponseCalendarData} from '/QueryFn/calendar/ICalendarResponse'

import {SelectedInfo} from './css'

export const EmployerCalendarSelectedInfo = ({data}: {data: IResponseCalendarData[] | undefined}) => {
  if (data == undefined || data.length == 0) return <></>
  const off = (data[0].daysOff?.length ?? 0) > 0 && (
    <div>
      {data[0].daysOff && <h3>Dzień wolny od pracy</h3>}
      {data[0].daysOff?.map((a, i) => <div key={i}>{a.reason}</div>)}
    </div>
  )
  const hour = (data[0].workingHours?.length ?? 0) > 0 && (
    <div>
      {data[0].workingHours && <h3>Przepracowałeś</h3>}
      {data[0].workingHours?.map((a, i) => (
        <div key={i}>
          {a.start.slice(0, 5)}-{a.end.slice(0, 5)} {a.where}
        </div>
      ))}
    </div>
  )

  return (
    <SelectedInfo>
      {off}
      {hour}
    </SelectedInfo>
  )
}
