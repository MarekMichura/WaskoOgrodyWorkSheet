import {useState, useEffect} from 'react'
import {ErrorBoundary} from 'react-error-boundary'
import {useNavigate} from 'react-router-dom'

import {IMonth} from '/InputCalendar/IMonth'
import {links, IRoute} from '/Router/IRoute'

import {EmployerCalendar} from './calendar'

function EmployerCalendarErrorHandle() {
  const nav = useNavigate()
  const [{error, count}, setError] = useState({count: 0, error: ''})

  function onError(error: Error) {
    setError((a) => ({...a, error: error.message}))
  }

  useEffect(() => {
    if (error == '') return
    const now = new Date()
    nav(`${links[IRoute.showCalendar]}/${now.getFullYear()}/${IMonth[now.getMonth()]}`)
    setError((a) => ({count: a.count + 1, error: ''}))
  }, [error, nav])

  return (
    <ErrorBoundary onError={onError} resetKeys={[count]} fallback={<h1>{error}</h1>}>
      <EmployerCalendar />
    </ErrorBoundary>
  )
}

export default EmployerCalendarErrorHandle
