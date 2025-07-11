'use client'

import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import {ScrollSmoother} from 'gsap/ScrollSmoother'
import Image, {type StaticImageData} from 'next/image'
import {useCallback, useRef, useState} from 'react'

import s from './css.module.scss'

interface IHomeConstructionProps {
  title: string
  img: StaticImageData[]
}

function HomeConstruction({title, img}: IHomeConstructionProps) {
  const [open, setOpen] = useState(false)
  const [currImgID, setCurrImgID] = useState(0)

  const panelRef = useRef(null)
  useGSAP(() => {
    const smoother = ScrollSmoother.get()
    smoother?.paused(open)

    gsap.set(panelRef.current, {top: open ? smoother?.scrollTop() : 0})
    gsap.to(panelRef.current, {
      opacity: open ? 1 : 0,
      pointerEvents: open ? 'all' : 'none',
      backdropFilter: open ? 'blur(10px)' : 'blur(0)',
    })
  }, [open])

  const clickID = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const id = Number(e.currentTarget.dataset.id)
    setCurrImgID(id)
  }, [])
  const openPanel = useCallback(() => setOpen(true), [])
  const closePanel = useCallback(() => setOpen(false), [])

  return (
    <section className={s.sec}>
      <div className={s.titleCon}>
        <h1>{title}</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur aspernatur commodi omnis nostrum quis
          tempora, odit exercitationem eligendi, ab, voluptate nisi modi dicta? Autem fuga maxime illo est in laborum.
        </p>
      </div>

      <div className={s.statistic}>
        <div>
          <div>Statystyki biznesowe</div>
          <div>
            <div>ilość zasadzonych drzew: 120</div>
            <div>ilość zasadzonych krzewów: 50</div>
            <div>ilość zasadzonych sadzonek: 420</div>
          </div>
        </div>
        <div>
          <div>Statystki dla firm</div>
          <div>
            <div>Nie wiem jakie inne statystki dać</div>
          </div>
        </div>
      </div>

      <div className={s.imageCon}>
        <div className={s.image} onClick={openPanel}>
          <div className={s.bigImg}>
            <Image src={img[currImgID]} key={currImgID} placeholder="blur" fill alt="" />
          </div>
        </div>
        <div className={s.paginator}>
          {Array.from({length: img.length}).map((_, i) => (
            <button
              key={i}
              data-id={i}
              onClick={clickID}
              style={{opacity: i === currImgID ? 1 : 0.5}}
              className={s.btn}
            />
          ))}
        </div>
      </div>
      <div ref={panelRef} className={s.panel} onClick={closePanel}>
        <Image src={img[currImgID]} placeholder="blur" alt="" key={currImgID} />
      </div>
    </section>
  )
}

export default HomeConstruction
