import {useRef} from 'react'

import s from '../css.module.scss'
import {useLottieAction} from '../lottie/useLottieAction'

import hover from './_data/hover.json'

function IgIcon({status}: {status: boolean}) {
  const ref = useRef<HTMLDivElement>(null)

  useLottieAction({ref, data: hover, status})

  return <div ref={ref} className={s.svg} />
}

export default IgIcon
