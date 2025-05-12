'use client'

import clsx from 'clsx'
import {motion} from 'framer-motion'
import {forwardRef, useCallback, useState} from 'react'

import {Link} from '@/locale/navigation'

import {createRipple} from './_fun/rippleCreate'
import {type IRipple} from './_type/IRipple'
import {type IRippleLinkProps} from './_type/IRippleLink'
import s from './css.module.scss'
import Ripple from './ripple'

const RippleLink = forwardRef<HTMLAnchorElement, IRippleLinkProps>((p, ref) => {
  const {children, onClick, className, ...props} = p
  const [ripples, setRipples] = useState<IRipple[]>([])

  const click = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => createRipple(e, props.disabled, setRipples, onClick),
    [onClick, props.disabled]
  )

  return (
    <Link {...props} ref={ref} className={clsx(className, s.btn)} onClick={click}>
      {children}
      <div className={s.rippleCon}>
        {ripples.map(({key, left, top}) => (
          <Ripple key={key} left={left} top={top} />
        ))}
      </div>
    </Link>
  )
})

RippleLink.displayName = 'RippleLink'
export const MotionRippleLink = motion.create(RippleLink)
export default RippleLink
