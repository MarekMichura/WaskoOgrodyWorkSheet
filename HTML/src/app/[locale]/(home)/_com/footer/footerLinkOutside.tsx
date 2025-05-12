import {motion, useAnimation} from 'framer-motion'
import {useCallback, useEffect, useRef, useState, type JSX} from 'react'

import AnimatedRotateText from '@/components/animation/rotateText/animatedRotateText'
import {MotionRippleHref} from '@/components/form/ripple/rippleHref'

import s from './css.module.scss'

interface IFooterLinkProps {
  href: string
  text: string
  icon: JSX.Element
}

function FooterLinkOutside({href, icon, text}: IFooterLinkProps) {
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

  const click = useCallback(() => setClicked(true), [])
  const hover = useCallback(() => setHovered(true), [])
  const leave = useCallback(() => setHovered(false), [])

  return (
    <MotionRippleHref
      className={s.menIcon}
      href={href}
      onHoverEnd={leave}
      onHoverStart={hover}
      onClick={click}
      animate={animate}>
      <div className={s.iconCon}>{icon}</div>
      <AnimatedRotateText text={text} />
      <motion.span className={s.rippleBottom} variants={{open: {left: 0}, close: {left: '50%'}}} />
      <motion.span className={s.rippleBottom} variants={{open: {right: 0}, close: {right: '50%'}}} />
    </MotionRippleHref>
  )
}

export default FooterLinkOutside
