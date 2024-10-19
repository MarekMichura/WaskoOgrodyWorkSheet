import {startTransition, useContext, useEffect, useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'

import {links, route} from '/global/ROUTE'
import ArrowIcon from '/Icon/Arrow'
import Button from '/Input/Button'
import Context from '/MContext'

import {CheckParams} from './CheckParams'
import {DateString} from './DateString'
import {GenerateDateRange} from './GenerateDateRange'
import {IResponseCalendar} from './IResponseCalendar'
import {Month, months} from './Month'
import {MonthRange} from './types'

import * as CSS from './css'

function EmployerCalendar() {
  const {state, dispatch} = useContext(Context)
  const navigation = useNavigate()
  const params = useParams()

  const [selected, setSelected] = useState<Date>(new Date())
  const [data, setData] = useState<IResponseCalendar>({})
  const {month, year} = params
  const now = new Date()

  useEffect(() => CheckParams(navigation, month, year), [month, year])
  useEffect(
    () => GenerateDateRange(navigation, setData, selected, setSelected, dispatch, month, year, state.profil),
    [month, year]
  )

  function MonthActive(check: MonthRange) {
    const startWork = state.profil!.workStartDate
    if (months.indexOf(month ?? '') === check) return 'current'
    if (Number(year) > now.getFullYear()) return 'after'
    if (Number(year) === now.getFullYear() && check > now.getMonth()) return 'after'
    if (Number(year) < startWork.getFullYear()) return 'prev'
    if (Number(year) === startWork.getFullYear() && check < startWork.getMonth()) return 'prev'
    return 'ok'
  }

  function ChangeMonth(month: MonthRange) {
    startTransition(() => navigation(links[route.Show_calendar] + `/${Month[month]}/${year}`))
  }

  if (Object.keys(data).length === 0) return <></>
  return (
    <CSS.Container>
      <CSS.Content>
        <CSS.DateInformation>
          <CSS.DateSelectedDay>{selected.getDate()}</CSS.DateSelectedDay>
          <CSS.DateSelectedMonth>{Month[selected.getMonth() as MonthRange]}</CSS.DateSelectedMonth>
          <div>
            {data[DateString(selected)]?.workingHours.map((a, k) => (
              <div key={k}>
                {a.start} {a.end} {a.where}
              </div>
            ))}
            {data[DateString(selected)]?.daysOff.map((a, k) => <div key={k}>{a.reason}</div>)}
          </div>
          <CSS.DateSelectedMod>
            <Button type="button" value={'Modyfikuj'} />
          </CSS.DateSelectedMod>
        </CSS.DateInformation>
        <CSS.DateContent>
          <CSS.DateYearContainer>
            <ArrowIcon cssSVG={CSS.DateYearArrow} data-rotate={true} />
            {year}
            <ArrowIcon cssSVG={CSS.DateYearArrow} />
          </CSS.DateYearContainer>
          <CSS.DateMonths>
            <CSS.DateMonth data-active={MonthActive(0)} onClick={() => ChangeMonth(0)}>
              Sty
            </CSS.DateMonth>
            <CSS.DateMonth data-active={MonthActive(1)} onClick={() => ChangeMonth(1)}>
              Lut
            </CSS.DateMonth>
            <CSS.DateMonth data-active={MonthActive(2)} onClick={() => ChangeMonth(2)}>
              Mar
            </CSS.DateMonth>
            <CSS.DateMonth data-active={MonthActive(3)} onClick={() => ChangeMonth(3)}>
              Kwi
            </CSS.DateMonth>
            <CSS.DateMonth data-active={MonthActive(4)} onClick={() => ChangeMonth(4)}>
              Maj
            </CSS.DateMonth>
            <CSS.DateMonth data-active={MonthActive(5)} onClick={() => ChangeMonth(5)}>
              Cze
            </CSS.DateMonth>
            <CSS.DateMonth data-active={MonthActive(6)} onClick={() => ChangeMonth(6)}>
              Lip
            </CSS.DateMonth>
            <CSS.DateMonth data-active={MonthActive(7)} onClick={() => ChangeMonth(7)}>
              Sie
            </CSS.DateMonth>
            <CSS.DateMonth data-active={MonthActive(8)} onClick={() => ChangeMonth(8)}>
              Wrz
            </CSS.DateMonth>
            <CSS.DateMonth data-active={MonthActive(9)} onClick={() => ChangeMonth(9)}>
              Paź
            </CSS.DateMonth>
            <CSS.DateMonth data-active={MonthActive(10)} onClick={() => ChangeMonth(10)}>
              Lis
            </CSS.DateMonth>
            <CSS.DateMonth data-active={MonthActive(11)} onClick={() => ChangeMonth(11)}>
              Gru
            </CSS.DateMonth>
          </CSS.DateMonths>
          <CSS.Calendar>
            <div>PON</div>
            <div>WTO</div>
            <div>ŚRO</div>
            <div>CZW</div>
            <div>PIĄ</div>
            <div>SOB</div>
            <div>NIE</div>
            {Object.entries(data)
              .sort((a, b) => {
                const aDate = Date.parse(a[0])
                const bDate = Date.parse(b[0])
                return aDate - bDate
              })
              .map(([a, b], c) => {
                const parse = new Date(Date.parse(a))
                const range = parse > now || parse < state.profil!.workStartDate
                const date = range || parse.getMonth() != months.indexOf(month ?? '')
                let status = 'notSet'
                if (b.daysOff.find((a) => a.off == true)) status = 'off'
                else if (b.workingHours.length > 0) status = 'ok'
                else if (range) status = ''

                return (
                  <CSS.Date key={c} data-date={date} data-status={status} onClick={() => setSelected(parse)}>
                    {parse.getDate()}
                  </CSS.Date>
                )
              })}
          </CSS.Calendar>
        </CSS.DateContent>
      </CSS.Content>
    </CSS.Container>
  )
}

export default EmployerCalendar
