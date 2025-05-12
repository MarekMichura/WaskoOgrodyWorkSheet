'use client'

import {useLottie} from 'lottie-react'
import {useEffect, useState} from 'react'

import {type IIconMorphBackToBack} from './_type/IIconMorphBackToBack'
import s from './css.module.scss'

function IconMorphBackToBack({morph, status}: IIconMorphBackToBack) {
  const [state, setState] = useState<boolean>(false)
  const [animate, setAnimate] = useState<boolean>(false)

  function complete() {
    setAnimate(false)
  }

  function load() {
    if (status) {
      lottie.goToAndStop(lottie.getDuration(true)!, true)
    }
  }

  const animationData = morph
  const lottie = useLottie({
    animationData,
    onComplete: complete,
    onLoad: load,
    loop: false,
    autoplay: false,
    className: s.svgColors,
  })

  useEffect(() => {
    if (state === status || animate) {
      return
    } else if (status) {
      setAnimate(true)
      setState(true)

      lottie.playSegments([0, lottie.getDuration(true)!], true)
    } else {
      setAnimate(true)
      setState(false)

      lottie.playSegments([lottie.getDuration(true)!, 0], true)
    }
  }, [animate, lottie, status, state])

  return lottie.View
}

export default IconMorphBackToBack
