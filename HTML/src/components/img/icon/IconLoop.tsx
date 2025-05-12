import {useLottie} from 'lottie-react'

import {type IIconLoop} from './_type/IIconLoop'
import s from './css.module.scss'

function IconLoop({loop}: IIconLoop) {
  const animationData = loop
  const lottie = useLottie({
    animationData,
    loop: true,
    autoplay: true,
    className: s.svgColors,
  })

  return lottie.View
}

export default IconLoop
