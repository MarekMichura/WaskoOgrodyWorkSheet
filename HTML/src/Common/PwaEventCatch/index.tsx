import {useQueryClient} from '@tanstack/react-query'
import {Fragment, useEffect} from 'react'

import {BeforeInstallPromptEvent} from './IType'

export const PwaControl = () => {
  const client = useQueryClient()

  useEffect(() => {
    const setPwaEvent = (event: BeforeInstallPromptEvent) => {
      client.setQueryData(['PWA'], event)
    }

    window.addEventListener('beforeinstallprompt', setPwaEvent)
    return () => window.removeEventListener('beforeinstallprompt', setPwaEvent)
  }, [client])

  return <Fragment />
}
