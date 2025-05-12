'use client'

import clsx from 'clsx'
import {motion} from 'framer-motion'
import {forwardRef, useCallback, useState} from 'react'

import {createRipple} from './_fun/rippleCreate'
import {type IRipple} from './_type/IRipple'
import {type IRippleBtnProps} from './_type/IRippleBtn'
import s from './css.module.scss'
import Ripple from './ripple'

const RippleBtn = forwardRef<HTMLButtonElement, IRippleBtnProps>((p, ref) => {
  const {children, onClick, className, type, ...props} = p
  const [ripples, setRipples] = useState<IRipple[]>([])

  const click = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => createRipple(e, props.disabled, setRipples, onClick),
    [onClick, props.disabled]
  )

  return (
    <button {...props} ref={ref} className={clsx(className, s.btn)} type={type ?? 'button'} onClick={click}>
      {children}
      <div className={s.rippleCon}>
        {ripples.map(({key, left, top}) => (
          <Ripple key={key} left={left} top={top} />
        ))}
      </div>
    </button>
  )
})

RippleBtn.displayName = 'RippleBtn'
export const MotionRippleBtn = motion.create(RippleBtn)
export default RippleBtn
