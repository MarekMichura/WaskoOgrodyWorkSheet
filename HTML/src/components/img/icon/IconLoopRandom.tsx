import {useLottie} from 'lottie-react'

import {randomNumber} from '@/utils/oneLine/randNumber'

import {type IIconLoop} from './_type/IIconLoop'
import s from './css.module.scss'

function IconLoopRandom({loop}: IIconLoop) {
  const animationData = loop

  function loopFun() {
    setTimeout(() => {
      lottie.goToAndPlay(0, true)
    }, randomNumber(3000, 5000))
  }

  const lottie = useLottie({
    animationData,
    loop: false,
    autoplay: true,
    onComplete: loopFun,
    className: s.svgColors,
  })

  return lottie.View
}

export default IconLoopRandom
