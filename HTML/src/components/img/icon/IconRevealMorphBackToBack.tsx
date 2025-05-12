'use client'

import {useLottie} from 'lottie-react'
import {useEffect, useState} from 'react'

import {type IIconRevealMorphBackToBack} from './_type/IIconRevealMorphBackToBack'
import s from './css.module.scss'

function IconRevealMorphBackToBack({morph, reveal, status}: IIconRevealMorphBackToBack) {
  const [init, setInit] = useState(true)
  const [state, setState] = useState<boolean>(false)
  const [animate, setAnimate] = useState<boolean>(false)

  function complete() {
    setInit(false)
    setAnimate(false)
  }

  const animationData = init ? reveal : morph
  const lottie = useLottie({
    animationData,
    onComplete: complete,
    loop: false,
    autoplay: false,
    className: s.svgColors,
  })

  useEffect(() => {
    if (init) {
      lottie.play()
    }
  }, [init, lottie])

  useEffect(() => {
    if (init || state === status || animate) return

    if (status) {
      setAnimate(true)
      setState(true)

      lottie.playSegments([0, lottie.getDuration(true)!], true)
    } else {
      setAnimate(true)
      setState(false)

      lottie.playSegments([lottie.getDuration(true)!, 0], true)
    }
  }, [animate, init, lottie, status, state])

  return lottie.View
}

export default IconRevealMorphBackToBack
