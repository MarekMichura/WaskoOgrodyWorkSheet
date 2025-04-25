'use client'

import Link from 'next/link'
import {useMemo, useState} from 'react'

import {createRipple} from './_fun/rippleCreate'
import {type IFormLinkProps} from './_type/IFormLink'
import {type IRipple} from './_type/IRippleProps'
import s from './css.module.scss'

function FormLink({className, onClick, children, ...props}: IFormLinkProps) {
  const [ripples, setRipples] = useState<IRipple[]>([])
  const click = useMemo(() => createRipple(setRipples, onClick), [onClick])
  const style = useMemo(() => (className ? `${className} ${s.btn}` : s.btn), [className])

  return (
    <Link {...props} className={style} onClick={props.disabled ? () => {} : click}>
      {children}
      {ripples.map(({key, posX, posY}) => (
        <span key={key} className={s.ripple} style={{'--top': posY, '--left': posX}} />
      ))}
    </Link>
  )
}

export default FormLink
