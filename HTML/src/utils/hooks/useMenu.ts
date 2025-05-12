import {useCallback, useEffect, useState} from 'react'

interface IUseMenu {
  disable?: boolean
  disableScrollOnOpen?: boolean
}

export enum EMenuState {
  open = 'open',
  close = 'close',
  disable = 'disable',
  init = 'init',
}

export default function useMenu(props: IUseMenu): [EMenuState, () => void, () => void, () => void] {
  const {disable, disableScrollOnOpen} = props
  const [status, setStatus] = useState<EMenuState>(EMenuState.init)

  useEffect(() => {
    if (!disable) return
    setStatus(EMenuState.disable)
    return () => {
      setStatus(EMenuState.init)
    }
  }, [disable])

  useEffect(() => {
    if (!disableScrollOnOpen || status !== EMenuState.open) return

    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [disableScrollOnOpen, status])

  // prettier-ignore
  const tryChangeStatus = useCallback((changeTo?: EMenuState) => {
    if (disable) return
    if (changeTo) {
      setStatus(changeTo)
    } else if (status === EMenuState.open) {
      setStatus(EMenuState.close)
    } else {
      setStatus(EMenuState.open)
    }
  },[disable, status])

  const open = useCallback(() => tryChangeStatus(EMenuState.open), [tryChangeStatus])
  const close = useCallback(() => tryChangeStatus(EMenuState.close), [tryChangeStatus])
  const change = useCallback(() => tryChangeStatus(), [tryChangeStatus])

  return [status, change, close, open]
}
