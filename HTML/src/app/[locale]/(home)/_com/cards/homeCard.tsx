import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import {ScrollSmoother} from 'gsap/ScrollSmoother'
import {useTranslations} from 'next-intl'
import {useCallback, useEffect, useRef, useState} from 'react'

import Ripple from '@/components/ripple/ripple'
import ArrowIcon from '@/images/svg/arrow'
import {clsx} from '@/utils/func/clsx'
import {type IChildren} from '@/utils/type/IChildren'

import s from './css.module.scss'
import {type IHomeCardProps} from './IHomeCardProps'

function HomeCard({name, title, desc, Img, count}: IHomeCardProps) {
  const t_card = useTranslations('home.cards')
  const [{moving, img, big, timer}, setImg] = useState({img: 0, moving: false, timer: false, big: false})

  useEffect(() => {
    if (timer || big) {
      timelineRef.current?.pause()
    } else {
      timelineRef.current?.resume()
    }

    if (!moving) return
    const reset = setTimeout(() => {
      setImg((prev) => ({...prev, moving: false}))
      timelineRef.current?.progress(0)
      if (!timer) {
        timelineRef.current?.resume()
      }
    }, 1000)
    return () => {
      clearTimeout(reset)
    }
  }, [big, moving, timer])

  const containerRef = useRef(null)
  const loadingRef = useRef(null)
  const timelineRef = useRef<gsap.core.Timeline>(null)
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
    timer
      .fromTo(
        loadingRef.current!,
        {'--scale': '0%', '--opacity': 1},
        {
          '--scale': '100%',
          duration: 3,
          onComplete: () => next(),
        }
      )
      .to(loadingRef.current, {'--opacity': 0, duration: 1})
  })

  const changeTimer = useCallback(() => {
    setImg(({timer, ...prev}) => ({...prev, timer: !timer}))
  }, [])
  const changeBig = useCallback(() => {
    setImg(({big, ...prev}) => ({big: !big, ...prev}))
  }, [])
  const next = useCallback(() => {
    if (moving) return
    setImg(({moving, img, ...rest}) => {
      if (moving) return {img, moving, ...rest}
      const newImg = img + 1
      if (newImg >= count) return {img: 0, moving: true, ...rest}
      return {img: newImg, moving: true, ...rest}
    })
  }, [moving, count])

  const prev = useCallback(() => {
    if (moving) return
    setImg(({moving, img, ...rest}) => {
      if (moving) return {img, moving, ...rest}
      const newImg = img - 1
      if (newImg < 0) return {img: count - 1, moving: true, ...rest}
      return {img: newImg, moving: true, ...rest}
    })
  }, [moving, count])

  const nextImg = img + 1
  const trueNextImg = nextImg >= count ? 0 : nextImg
  const prevImg = img - 1
  const truePrevImg = prevImg < 0 ? count - 1 : prevImg

  return (
    <>
      <article className={s.card} ref={containerRef}>
        <div className={s.slider} ref={loadingRef}>
          <Img id={truePrevImg} key={truePrevImg} props={{style: {left: '-150%'}, onClick: changeBig}} />
          <Img id={img} key={img} props={{style: {left: '50%'}, priority: true, onClick: changeBig}} />
          <Img id={trueNextImg} key={trueNextImg} props={{style: {left: '150%'}, onClick: changeBig}} />
          <Ripple className={s.imgLeft} onClick={() => prev()}>
            <ArrowIcon />
          </Ripple>
          <Ripple defColor="light" className={s.imgRight} onClick={() => next()}>
            <ArrowIcon />
          </Ripple>
          <div className={s.timerBtns}>
            <Ripple className={clsx(s.timerBtn)} onClick={changeTimer}></Ripple>
          </div>
        </div>
        <div className={s.text}>
          <div className={s.sect}>
            <label className={s.label}>{t_card('cardName')}</label>
            <p>{name}</p>
          </div>
          <div className={s.sect}>
            <label className={s.label}>{t_card('cardTitle')}</label>
            <p>{title}</p>
          </div>
          <div className={s.sect}>
            <label className={s.label}>{t_card('cardAddress')}</label>
            <p>{}</p>
          </div>
          <div className={s.sect}>
            <label className={s.label}>{t_card('cardDesc')}</label>
            <p>{desc}</p>
          </div>
        </div>
      </article>
      {big && (
        <BigImg changeBig={changeBig}>
          <Img id={img} key={img} props={{sizes: '100vw', placeholder: 'blur'}} />
        </BigImg>
      )}
    </>
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

export default HomeCard
