import {useContext, useEffect, useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'

import Context from '/MContext'

import {CheckParams} from './CheckParams'
import {GenerateDateRange} from './GenerateDateRange'

import * as CSS from './css'

function EmployerCalendar() {
  const {state} = useContext(Context)
  const navigation = useNavigate()
  const params = useParams()

  const [dates, setDates] = useState<undefined | string[]>()
  const {month, year} = params

  useEffect(() => CheckParams(navigation, month, year), [month, year])
  useEffect(() => GenerateDateRange(navigation, setDates, month, year, state.profil), [month, year])

  if (dates == undefined) return <></>

  return (
    <CSS.Container>
      <CSS.NavBar>
        {month} {year}
      </CSS.NavBar>
      <CSS.TopRow>
        <div>PN</div>
        <div>WT</div>
        <div>SR</div>
        <div>CZW</div>
        <div>PT</div>
        <div>SO</div>
        <div>N</div>
      </CSS.TopRow>
      {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        [...Array(6)].map((_, k) => {
          return (
            <CSS.Row key={k}>
              {
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                [...Array(7)].map((_, j) => {
                  return <div key={j}>{dates[k * 7 + j]}</div>
                })
              }
            </CSS.Row>
          )
        })
      }
    </CSS.Container>
  )
}

export default EmployerCalendar
