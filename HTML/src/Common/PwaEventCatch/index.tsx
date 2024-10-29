import {useQuery, useQueryClient} from '@tanstack/react-query'
import {Fragment, useEffect, useState} from 'react'

import {BeforeInstallPromptEvent} from './IType'

export interface IPwaQuery {
  state: boolean
  click: boolean
}

export function PwaControl() {
  const [state, setState] = useState<BeforeInstallPromptEvent | null>(null)
  const client = useQueryClient()
  const pwa = useQuery({
    queryKey: ['PWA'],
    initialData: {state: false, click: false},
    notifyOnChangeProps: ['data'],
    select: (data) => data.click,
  })

  if (state && pwa.data) {
    state.prompt()
    client.setQueryData<IPwaQuery>(['PWA'], {state: false, click: false})
  }

  useEffect(() => {
    const setPwaEvent = (event: BeforeInstallPromptEvent) => {
      setState(event)
      client.setQueryData<IPwaQuery>(['PWA'], {state: true, click: false})
    }

    window.addEventListener('beforeinstallprompt', setPwaEvent)
    return () => window.removeEventListener('beforeinstallprompt', setPwaEvent)
  }, [client, setState])

  return <Fragment></Fragment>
}
