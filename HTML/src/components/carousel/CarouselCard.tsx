'use client'
import {motion} from 'framer-motion'
import Image from 'next/image'
import {useCallback, useState} from 'react'

import {type ICarouselCardProps} from './_type/ICarouselCardProps'
import s from './css.module.scss'

export function CarouselCard({src, title, alt, width, height}: ICarouselCardProps) {
  const [status, setStatus] = useState(false)

  const hover = useCallback(() => setStatus(true), [])
  const leave = useCallback(() => setStatus(false), [])

  return (
    <div className={s.card} onMouseEnter={hover} onMouseLeave={leave}>
      <motion.h2
        initial={{opacity: 0}}
        variants={{open: {opacity: 1}, close: {opacity: 0}}}
        animate={status ? 'open' : 'close'}
        className={s.cardTitle}>
        {title}
      </motion.h2>
      <Image className={s.cardImage} src={src} alt={alt} unoptimized width={width} height={height} />
    </div>
  )
}
