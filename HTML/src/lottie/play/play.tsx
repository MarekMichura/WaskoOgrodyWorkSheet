import {useEffect, useRef, useState} from 'react'

import s from '../css.module.scss'
import {useLottieBackToBackProps} from '../lottie/useLottieBackToBack'

import hover from './_data/morph.json'

function PlayIcon({status}: {status: boolean}) {
  const ref = useRef<HTMLDivElement>(null)
  const [state, setState] = useState(false)

  useEffect(() => {
    setState(status)
  }, [status])

  useLottieBackToBackProps({ref, data: hover, status: state})

  return <div ref={ref} className={s.svg} />
}

export default PlayIcon
