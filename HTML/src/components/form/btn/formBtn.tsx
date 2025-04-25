'use client'

import {useMemo, useState} from 'react'

import {createRipple} from './_fun/rippleCreate'
import {type IFormBtnProps} from './_type/IFormBtnProps'
import {type IRipple} from './_type/IRippleProps'
import s from './css.module.scss'

function FormBtn({className, onClick, children, ...props}: IFormBtnProps) {
  const [ripples, setRipples] = useState<IRipple[]>([])
  const click = useMemo(() => createRipple(setRipples, onClick), [onClick])
  const style = useMemo(() => (className ? `${className} ${s.btn}` : s.btn), [className])

  return (
    <button className={style} onClick={click} {...props}>
      {children}
      {ripples.map(({key, posX, posY}) => (
        <span key={key} className={s.ripple} style={{'--top': posY, '--left': posX}} />
      ))}
    </button>
  )
}

export default FormBtn
