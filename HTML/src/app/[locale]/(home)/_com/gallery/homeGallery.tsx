'use client'

import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import {ScrollSmoother} from 'gsap/ScrollSmoother'
import {useCallback, useRef, useState} from 'react'

import {type IChildren} from '@/utils/type/IChildren'

import s from './css.module.scss'
import {type IHomeGalleryProps} from './IHomeGalleryProps'

function HomeGallery({Img, count}: IHomeGalleryProps) {
  const [{big, id}, setBig] = useState({big: false, id: 0})

  const click = useCallback((id?: number) => {
    setBig(({big}) => ({id: id ?? 0, big: !big}))
  }, [])

  return (
    <section className={s.sec}>
      <ul className={s.hexGrid}>
        {Array.from({length: count}, (_, i) => (
          <li key={i} className={s.hex}>
            <div className={s.hexIn}>
              <button className={s.hexLink} onClick={() => click(i)}>
                <Img id={i} props={{className: s.img}} />
              </button>
            </div>
          </li>
        ))}
      </ul>

      {big && (
        <BigImg changeBig={click} key={id}>
          <Img id={id} props={{sizes: '100vw', placeholder: 'blur'}} />
        </BigImg>
      )}
    </section>
  )
}

interface IBigImgProps extends IChildren {
  changeBig: () => void
}

function BigImg({children, changeBig}: IBigImgProps) {
  const ref = useRef(null)
  useGSAP(() => {
    const smoother = ScrollSmoother.get()
    smoother?.paused(true)

    gsap.set(ref.current, {top: smoother?.scrollTop()})

    return () => {
      smoother?.paused(false)
    }
  })

  return (
    <div className={s.big} onClick={changeBig} ref={ref}>
      {children}
    </div>
  )
}

export default HomeGallery
