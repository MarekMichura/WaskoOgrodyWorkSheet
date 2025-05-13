import {motion, useAnimation} from 'framer-motion'
import {useCallback, useEffect, useRef, useState, type JSX} from 'react'

import AnimatedRotateText from '@/components/animation/rotateText/animatedRotateText'
import {MotionRippleHref} from '@/components/form/ripple/rippleHref'

import s from './css.module.scss'

interface IFooterLinkMultipleToImageProps {
  data: {
    href: string
    text: string
  }[]
  icon: JSX.Element
}

type IAnimationRef = Promise<any> | null

function FooterLinkMultiple({icon, data}: IFooterLinkMultipleToImageProps) {
  const animate = useAnimation()

  const refAnimation = useRef<IAnimationRef[]>([])
  const [hovered, setHovered] = useState<boolean[]>([])
  const [clicked, setClicked] = useState<boolean[]>([])

  useEffect(() => {
    hovered.forEach((isHovered, i) => {
      const isClicked = clicked[i]
      if (isClicked) return

      if (isHovered) {
        refAnimation.current[i] = animate.start(`open${i}`)
      } else {
        refAnimation.current[i] = null
        animate.start(`close${i}`)
      }
    })
  }, [hovered, clicked, animate])

  useEffect(() => {
    clicked.forEach((isClicked, i) => {
      if (!isClicked) return

      if (!refAnimation.current[i]) {
        refAnimation.current[i] = animate.start(`open${i}`)
      } else {
        refAnimation.current[i]?.then(() => {
          setClicked((prev) => {
            const next = [...prev]
            next[i] = false
            return next
          })
        })
      }
    })
  }, [animate, clicked])

  const click = useCallback(
    (i: number) => () =>
      setClicked((prev) => {
        const next = [...prev]
        next[i] = true
        return next
      }),
    []
  )
  const hover = useCallback(
    (i: number) => () =>
      setHovered((prev) => {
        const next = [...prev]
        next[i] = true
        return next
      }),
    []
  )
  const leave = useCallback(
    (i: number) => () =>
      setHovered((prev) => {
        const next = [...prev]
        next[i] = false
        return next
      }),
    []
  )

  return (
    <div className={s.menIcon}>
      <div className={s.iconCon}>{icon}</div>
      <div className={s.menIconMultipleLink}>
        {data.map(({href, text}, i) => (
          <MotionRippleHref
            key={i}
            href={href}
            onHoverEnd={leave(i)}
            onHoverStart={hover(i)}
            onClick={click(i)}
            animate={animate}>
            <AnimatedRotateText text={text} open={`open${i}`} close={`close${i}`} />
            <motion.span
              className={s.rippleBottom}
              variants={{
                [`open${i}`]: {left: 0},
                [`close${i}`]: {left: '50%'},
              }}
            />
            <motion.span
              className={s.rippleBottom}
              variants={{
                [`open${i}`]: {right: 0},
                [`close${i}`]: {right: '50%'},
              }}
            />
          </MotionRippleHref>
        ))}
      </div>
    </div>
  )
}

export default FooterLinkMultiple
