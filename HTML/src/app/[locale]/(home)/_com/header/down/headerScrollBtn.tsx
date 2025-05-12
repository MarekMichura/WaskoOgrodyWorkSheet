import {useAnimation} from 'framer-motion'
import {useTranslations} from 'next-intl'
import {forwardRef, useCallback, useEffect, useRef, useState} from 'react'

import AnimatedRotateText from '@/components/animation/rotateText/animatedRotateText'
import {MotionRippleBtn} from '@/components/form/ripple/rippleBtn'

import {type IHeaderScrollBtnProps} from '../_type/IHeaderScrollBtnProps'

import s from './css.module.scss'

const HeaderScrollBtn = forwardRef<HTMLLIElement, IHeaderScrollBtnProps>((props, ref) => {
  const {click, hover, leave, text, id} = props

  const t = useTranslations('sections')
  const animate = useAnimation()

  const refAnimation = useRef<Promise<any>>(null)
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)

  useEffect(() => {
    if (clicked) return

    if (hovered) refAnimation.current = animate.start('open')
    else {
      refAnimation.current = null
      animate.start('close')
    }
  }, [animate, hovered, clicked])

  useEffect(() => {
    if (!clicked) return

    if (refAnimation.current === null) refAnimation.current = animate.start('open')
    else refAnimation.current.then(() => setClicked(false))
  }, [animate, clicked])

  const onHover = useCallback(() => {
    setHovered(true)
    hover?.(id)
  }, [hover, id])
  const onLeave = useCallback(() => {
    setHovered(false)
    leave?.()
  }, [leave])
  const onClick = useCallback(() => {
    setClicked(true)
    click?.()
  }, [click])

  return (
    <li className={s.listEle} ref={ref}>
      <MotionRippleBtn
        className={s.rippleBtn}
        onHoverEnd={onLeave}
        onHoverStart={onHover}
        onClick={onClick}
        animate={animate}>
        <AnimatedRotateText text={t(text)} />
      </MotionRippleBtn>
    </li>
  )
})

HeaderScrollBtn.displayName = 'HeaderScrollBtn'
export default HeaderScrollBtn
