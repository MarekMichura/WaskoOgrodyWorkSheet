import {useRef} from 'react'

import s from '../css.module.scss'
import {useLottieLoop} from '../lottie/useLottieLoop'

import loop from './_data/loop.json'

function LangIcon() {
  const ref = useRef(null)
  useLottieLoop({ref, data: loop})

  return <div ref={ref} className={s.svg} />
}

export default LangIcon
