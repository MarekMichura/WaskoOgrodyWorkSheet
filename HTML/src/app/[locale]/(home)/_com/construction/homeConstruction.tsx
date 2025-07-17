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
  const nextImg = currImgID + 1 >= img.length ? 0 : currImgID + 1

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

  const containerRef = useRef(null)
  const timerRef = useRef(null)
  const timelineRef = useRef<gsap.core.Timeline>(null)

  const imgLoadStart = useCallback(() => {
    timelineRef.current?.pause()
  }, [])
  const imgLoadComplete = useCallback(() => {
    timelineRef.current?.progress(0)
  }, [])
  useGSAP(() => {
    const timer = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top+=32 bottom',
        end: 'bottom+=32 top',
        toggleActions: 'play pause resume pause',
      },
    })
    timelineRef.current = timer
    timer.fromTo(
      timerRef.current!,
      {'--scale': '0%'},
      {
        '--scale': '100%',
        duration: 10,
        onComplete: () => {
          setCurrImgID((prev) => {
            const nev = prev + 1
            if (nev >= img.length) return 0
            return nev
          })
        },
      }
    )
  })

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
          <Image
            src={img[currImgID]}
            key={currImgID}
            placeholder="blur"
            fill
            alt=""
            onLoadStart={imgLoadStart}
            onLoadingComplete={imgLoadComplete}
          />
          <Image
            src={img[nextImg]}
            key={nextImg}
            placeholder="blur"
            fill
            alt=""
            onLoadingComplete={imgLoadComplete}
            style={{visibility: 'hidden'}}
          />
        </div>
        <div className={s.paginator} ref={containerRef}>
          {Array.from({length: img.length}).map((_, i) => (
            <button
              key={i}
              data-id={i}
              onClick={clickID}
              style={{opacity: i === currImgID ? 1 : 0.5}}
              className={s.btn}
            />
          ))}
          <div className={s.time} ref={timerRef} />
        </div>
      </div>
      <div ref={panelRef} className={s.panel} onClick={closePanel}>
        <Image src={img[currImgID]} placeholder="blur" alt="" key={currImgID} />
      </div>
    </section>
  )
}

export default HomeConstruction
