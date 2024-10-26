import {useState, useEffect} from 'react'

import {useProfil} from '/QueryFn/profil/useProfil'

import {IRange} from '../types/IRange'

export const useCalendarRange = (): IRange => {
  const profil = useProfil()
  const [day, setDay] = useState(new Date())
  const [range, setRange] = useState<IRange>({start: profil.data!.workStartDate, end: day})

  useEffect(() => {
    setRange({start: profil.data!.workStartDate, end: day})
    const interval = setInterval(() => {
      const now = new Date()
      if (day.getDate() != now.getDate()) setDay(now)
    }, 60_000)

    return () => clearInterval(interval)
  }, [profil.data, day])

  return range
}
