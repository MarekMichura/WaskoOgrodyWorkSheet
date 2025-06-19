import {type MouseEvent, type JSX} from 'react'

import Ripple from '@/components/ripple/ripple'
import {clsx} from '@/utils/func/clsx'

import s from './css.module.scss'

interface INavBtn {
  click: (e: MouseEvent<HTMLButtonElement>) => void
  text: string
  Icon: JSX.Element
  className?: string
}

function NavBtn({text, click, Icon, className}: INavBtn) {
  return (
    <Ripple className={clsx(s.link, className)} onClick={click}>
      {Icon}
      <span className={s.text}>{text}</span>
    </Ripple>
  )
}

export default NavBtn
