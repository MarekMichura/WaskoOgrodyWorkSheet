import {useRef} from 'react'

import s from '../css.module.scss'
import {useLottieBackToBackProps} from '../lottie/useLottieBackToBack'

import morph from './_data/morph.json'

function MenuIcon({status}: {status: boolean}) {
  const ref = useRef<HTMLDivElement>(null)

  useLottieBackToBackProps({ref, data: morph, status})

  return <div ref={ref} className={s.svg} />
}

export default MenuIcon
