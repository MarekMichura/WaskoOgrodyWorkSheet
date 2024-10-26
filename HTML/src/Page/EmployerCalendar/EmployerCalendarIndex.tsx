import {startTransition, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

import {links, IRoute} from '/Router/IRoute'

import {IMonth} from './types/IMonth'

export const EmployerCalendarIndex = () => {
  const navigate = useNavigate()

  useEffect(() => {
    console.log('now')
    const now = new Date()
    startTransition(() => navigate(`${links[IRoute.showCalendar]}\\${now.getFullYear()}\\${IMonth[now.getMonth()]}`))
  }, [navigate])

  return <>Oczekiwanie na przekierowanie...</>
}
