import {type ComponentType, useCallback, useEffect, useRef, useState} from 'react'

import {type IChildren} from '@/utils/type/IChildren'

import s from './css.module.scss'

interface IHomeFooterLinkProps extends IChildren {
  Icon: ComponentType<{status: boolean}>
}

function HomeFooterLink({Icon, children}: IHomeFooterLinkProps) {
  const [status, setStatus] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout>(null)

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const onMouseEnter = useCallback(() => setStatus(true), [])
  const onMouseLeave = useCallback(() => setStatus(false), [])
  const onClick = useCallback(() => {
    setStatus(true)
    timeoutRef.current = setTimeout(() => setStatus(false), 1000)
  }, [])

  return (
    <li className={s.listItem} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={onClick}>
      <div className={s.icon}>
        <Icon status={status} />
      </div>
      <div className={s.links}>{children}</div>
    </li>
  )
}

export default HomeFooterLink
