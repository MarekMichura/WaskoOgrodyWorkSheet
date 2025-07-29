'use client'

import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import {ScrollSmoother} from 'gsap/ScrollSmoother'
import {useCallback, useEffect, useRef, useState} from 'react'

import {type sharpImg} from '@/components/img/sharp/sharp'
import SharpImage from '@/components/img/sharp/sharpImg'

import s from './css.module.scss'
import HomeConstructionImgScale from './homeConstructionImgScaler'

interface IHomeConstructionProps {
  title: string
  img: {
    h: number
    w: number
    img: sharpImg
  }[]
}

function HomeConstruction({title, img}: IHomeConstructionProps) {
  const [open, setOpen] = useState(false)
  const [currImgID, setCurrImgID] = useState(0)
  // const nextImg = currImgID + 1 >= img.length ? 0 : currImgID + 1

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

  useEffect(() => {
    if (!open) return
    if (!timelineRef.current?.isActive) return

    timelineRef.current?.pause()
    return () => {
      timelineRef.current?.resume()
    }
  }, [open])

  const clickID = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const id = Number(e.currentTarget.dataset.id)
    setCurrImgID(id)
    timelineRef.current?.progress(0)
  }, [])
  const openPanel = useCallback(() => setOpen(true), [])
  const closePanel = useCallback(() => setOpen(false), [])

  const holderRef = useRef(null)
  const animRef = useRef<GSAPTween>(null)

  useGSAP(() => {
    animRef.current?.kill()
    const prevX = gsap.getProperty(holderRef.current, 'xPercent') as number
    const distance = Math.abs(-currImgID * 100 - prevX)
    const duration = distance / 100

    const isActive = timelineRef.current?.isActive
    animRef.current = gsap.to(holderRef.current, {
      xPercent: -currImgID * 100,
      y: 0,
      duration,
      onStart: () => {
        timelineRef.current?.pause()
      },
      onComplete: () => {
        if (isActive) timelineRef.current?.resume()
      },
    })
  }, [currImgID])

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
          <div className={s.holder} ref={holderRef}>
            {img.map(({img, w, h}, i) => (
              <HomeConstructionImgScale
                key={i}
                sharp={img}
                w={w}
                h={h}
                className={s.img}
                conClass={s.shardCon}
                alt=""
                nr={i}
                conStyle={{pointerEvents: i === currImgID ? 'all' : 'none'}}
              />
            ))}
          </div>
        </div>
        <div className={s.paginator} ref={containerRef}>
          {img.map((_, i) => (
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
        <SharpImage
          sharp={img[currImgID].img}
          w={img[currImgID].w}
          h={img[currImgID].h}
          alt=""
          onLoadStart={imgLoadStart}
          onLoad={imgLoadComplete}
        />
      </div>
    </section>
  )
}

export default HomeConstruction
