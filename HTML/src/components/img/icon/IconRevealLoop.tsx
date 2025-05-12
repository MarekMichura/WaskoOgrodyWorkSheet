'use client'

import {useLottie} from 'lottie-react'
import {useEffect, useState} from 'react'

import {useScrollIntersecting} from '@/utils/hooks/useScrollRef'
import {randomNumber} from '@/utils/oneLine/randNumber'

import {type IIconRevealLoop} from './_type/IIconRevealLoop'
import s from './css.module.scss'

function IconRevealLoop({loop, reveal}: IIconRevealLoop) {
  const [init, setInit] = useState(true)
  const [ref, intersecting] = useScrollIntersecting<HTMLDivElement>()

  function complete() {
    setInit(false)
    loopFun()
  }

  const lottieReveal = useLottie({
    animationData: reveal,
    loop: false,
    autoplay: false,
    onComplete: complete,
    className: s.svgColors,
  })

  function loopFun() {
    setTimeout(() => {
      lottieLoop.goToAndPlay(0, true)
    }, randomNumber(3000, 5000))
  }

  const lottieLoop = useLottie({
    animationData: loop,
    loop: false,
    autoplay: false,
    onComplete: loopFun,
    className: s.svgColors,
  })

  useEffect(() => {
    if (!intersecting || !lottieReveal) return

    const remove = setTimeout(() => lottieReveal.play(), 500)
    return () => clearTimeout(remove)
  }, [intersecting, lottieReveal])

  return (
    <>
      <div ref={ref} style={{display: init ? 'block' : 'none'}}>
        {lottieReveal.View}
      </div>
      <div style={{display: init ? 'none' : 'block'}}>{lottieLoop.View}</div>
    </>
  )
}

export default IconRevealLoop
