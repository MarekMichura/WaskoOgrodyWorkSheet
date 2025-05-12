import {motion, useAnimation} from 'framer-motion'
import {useTranslations} from 'next-intl'
import {useCallback, useEffect, useRef, useState} from 'react'

import AnimatedRotateText from '@/components/animation/rotateText/animatedRotateText'
import {MotionRippleLink} from '@/components/form/ripple/rippleLink'

import {type IHeaderUpLinkProps} from '../_type/IHeaderUpLinkProps'

import s from './css.module.scss'

function HeaderUpLink({href, text, onClick}: IHeaderUpLinkProps) {
  const t = useTranslations('nav')
  const animate = useAnimation()

  const refAnimation = useRef<Promise<any>>(null)
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)

  useEffect(() => {
    if (clicked) return
    if (hovered) {
      refAnimation.current = animate.start('open')
    } else {
      refAnimation.current = null
      animate.start('close')
    }
  }, [animate, hovered, clicked])

  useEffect(() => {
    if (!clicked) return

    if (refAnimation.current === null) refAnimation.current = animate.start('open')
    else refAnimation.current.then(() => setClicked(false))
  }, [animate, clicked])

  const click = useCallback(() => {
    setClicked(true)
    onClick?.()
  }, [onClick])
  const hover = useCallback(() => setHovered(true), [])
  const leave = useCallback(() => setHovered(false), [])

  return (
    <li className={s.listEle}>
      <MotionRippleLink
        className={s.rippleLink}
        href={href}
        onHoverEnd={leave}
        onHoverStart={hover}
        onClick={click}
        animate={animate}>
        <AnimatedRotateText text={t(text)} />
        <motion.span className={s.rippleBottom} variants={{open: {left: 0}, close: {left: '50%'}}} />
        <motion.span className={s.rippleBottom} variants={{open: {right: 0}, close: {right: '50%'}}} />
      </MotionRippleLink>
    </li>
  )
}

export default HeaderUpLink
