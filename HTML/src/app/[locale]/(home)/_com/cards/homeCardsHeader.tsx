'use client'

import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import {useRef} from 'react'

import s from './css.module.scss'
import {type IHomeCardsHeaderProps} from './IHomeCardsHeaderProps'

function HomeCardsHeader({Img, desc, title, orientation}: IHomeCardsHeaderProps) {
  const imgRef = useRef(null)
  const imgConRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!imgRef.current || !imgConRef.current) return
    gsap
      .timeline({
        scrollTrigger: {
          trigger: imgConRef.current,
          scrub: true,
          start: 'top bottom',
          end: 'bottom top',
          invalidateOnRefresh: true,
        },
      })
      .to(imgRef.current, {yPercent: 50 * orientation, ease: 'linear'})
  }, [])

  return (
    <div className={s.title} ref={imgConRef}>
      <div className={s.img}>
        <Img ref={imgRef} sizes="40vw" placeholder="blur" />
      </div>
      <div className={s.desc}>
        <h1 className={s.descTitle}>{title}</h1>
        <p>{desc}</p>
      </div>
    </div>
  )
}

export default HomeCardsHeader
