import {useCallback, useState, type ComponentType, type JSX} from 'react'

import {type IChildren} from '@/utils/type/IChildren'

import s from './css.module.scss'

type IFooterIconBox = IChildren &
  ({Icon: ComponentType<{status: boolean}>; icon?: undefined} | {icon: JSX.Element; Icon?: undefined})

function FooterIconBox({children, Icon, icon}: IFooterIconBox) {
  const [state, setState] = useState(false)

  const enter = useCallback(() => {
    setState(true)
  }, [])
  const leave = useCallback(() => {
    setState(false)
  }, [])

  return (
    <div className={s.iconBox} onMouseEnter={enter} onMouseLeave={leave}>
      <div className={s.iconBoxIcon}>{icon || <Icon status={state} />}</div>
      <div className={s.iconBoxLink}>{children}</div>
    </div>
  )
}

export default FooterIconBox
