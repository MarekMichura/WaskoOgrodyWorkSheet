'use client'

import clsx from 'clsx'
import {motion} from 'framer-motion'
import {forwardRef, useCallback, useState} from 'react'

import {createRipple} from './_fun/rippleCreate'
import {type IRipple} from './_type/IRipple'
import {type IRippleHrefProps} from './_type/IRippleHref'
import s from './css.module.scss'
import Ripple from './ripple'

const RippleHref = forwardRef<HTMLAnchorElement, IRippleHrefProps>((p, ref) => {
  const {children, onClick, className, ...props} = p
  const [ripples, setRipples] = useState<IRipple[]>([])

  const click = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => createRipple(e, props.disabled, setRipples, onClick),
    [onClick, props.disabled]
  )

  return (
    <a {...props} ref={ref} className={clsx(className, s.btn)} onClick={click}>
      {children}
      <div className={s.rippleCon}>
        {ripples.map(({key, left, top}) => (
          <Ripple key={key} left={left} top={top} />
        ))}
      </div>
    </a>
  )
})

RippleHref.displayName = 'RippleHref'
export const MotionRippleHref = motion.create(RippleHref)
export default RippleHref
