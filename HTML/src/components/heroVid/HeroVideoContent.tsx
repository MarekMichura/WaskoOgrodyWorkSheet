'use client'

import {motion, useScroll, useSpring, useTransform} from 'framer-motion'
import {useCallback, useRef, useState} from 'react'

import useWindowsSize from '@/utils/hooks/useWindowsSize'
import {type IChildren} from '@/utils/types/IChildren'

import s from './css.module.scss'

function HeroVideoContent({children}: IChildren) {
  const divRef = useRef<HTMLDivElement>(null)
  const {scrollYProgress} = useScroll({target: divRef, offset: ['start end', 'end start']})
  const [size, setSize] = useState(0)

  const roundedProgress = useTransform(scrollYProgress, (value) => Math.round(value * 100) / 100)
  const scale = useSpring(useTransform(roundedProgress, [0.5, 1], [1, 0]))
  const y = useSpring(useTransform(roundedProgress, [0.5, 1], [0, size]))

  const resizeEvent = useCallback(() => {
    setSize(window.outerHeight / 2)
  }, [])
  useWindowsSize(resizeEvent)

  return (
    <motion.div
      ref={divRef}
      className={s.container}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      style={{y, scale, opacity: scale, willChange: 'transform, opacity'}}>
      <div className={s.content}>{children}</div>
    </motion.div>
  )
}

export default HeroVideoContent
