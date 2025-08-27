'use client'

import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import {useRef} from 'react'

import s from './css.module.scss'
import {type IHomeHeroProps} from './IHomeHeroProps'

function HomeHero({Img, subTitle, title, orientation}: IHomeHeroProps) {
  const imgConRef = useRef(null)
  const imgRef = useRef(null)
  useGSAP(() => {
    const tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: imgConRef.current,
          scrub: true,
          start: '0%',
          end: 'bottom top',
        },
      })
      .to(imgRef.current, {yPercent: 50 * orientation, ease: 'linear'})

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <section className={s.con}>
      <div className={s.heroCon} ref={imgConRef}>
        <Img className={s.hero} ref={imgRef} />
      </div>
      <div className={s.content}>
        <h1>{title}</h1>
        <h2>{subTitle}</h2>
      </div>
    </section>
  )
}

export default HomeHero
