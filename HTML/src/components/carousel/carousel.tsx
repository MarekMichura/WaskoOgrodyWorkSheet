'use client'

import clsx from 'clsx'
import {animate, motion, useInView, useMotionValue} from 'framer-motion'
import {forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState} from 'react'

import useRefSize from '@/utils/hooks/useRefSize'

import {type ICarouselProps} from './_type/ICarouselProps'
import {CarouselCard} from './CarouselCard'
import s from './css.module.scss'

const FAST_SPEED = 100
const SLOW_SPEED = 30

const Carousel = forwardRef<HTMLElement, ICarouselProps>((p, forwardRef) => {
  const {className, title, subTitle, cards, ...props} = p

  const ref = useRef<HTMLElement>(null)
  const refCards = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, {margin: '0px', once: false})
  useImperativeHandle(forwardRef, () => ref.current as HTMLElement)

  const [mustFinish, setMustFinish] = useState(false)
  const [speed, setSpeed] = useState(FAST_SPEED)
  const [width, setWidth] = useState(0)
  // prettier-ignore
  useRefSize(refCards, useCallback((ele) => {
    console.log('resize carousel')
    setWidth(ele.clientWidth + 8)
  }, []))

  const translateX = useMotionValue(0)
  useEffect(() => {
    if (!isInView) return

    const pos = translateX.get()
    const control = mustFinish
      ? animate(translateX, [pos, width], {
          ease: 'linear',
          duration: (width - pos) / speed,
          repeatDelay: 0,
          onComplete: () => {
            setMustFinish(false)
          },
        })
      : animate(translateX, [0, width], {
          ease: 'linear',
          duration: width / speed,
          repeat: Infinity,
          repeatType: 'loop',
          repeatDelay: 0,
        })
    return () => {
      control.stop()
    }
  }, [mustFinish, speed, translateX, width, isInView])

  const slow = useCallback(() => {
    setSpeed(SLOW_SPEED)
    setMustFinish(true)
  }, [])
  const fast = useCallback(() => {
    setSpeed(FAST_SPEED)
    setMustFinish(true)
  }, [])

  return (
    <section className={clsx(s.section, className)} {...props} ref={ref}>
      <div className={s.content}>
        <h1 className={s.title}>
          {title}
          <span className={s.titleSpan}>{subTitle}</span>
        </h1>
        <motion.div className={s.cards} style={{translateX}} onMouseEnter={slow} onMouseLeave={fast}>
          <div className={s.transport} ref={refCards}>
            {cards.map((ele, i) => (
              <CarouselCard {...ele} key={i} />
            ))}
          </div>
          <div className={s.transport}>
            {cards.map((ele, i) => (
              <CarouselCard {...ele} aria-hidden key={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
})

Carousel.displayName = 'Carousel'
export default Carousel
