import {useRef} from 'react'

import {useSelector} from '@/components/redux'
import {ETheme} from '@/utils/enum/ETheme'

import s from '../css.module.scss'
import {useLottieBackToBackProps} from '../lottie/useLottieBackToBack'

import morph from './_data/morph.json'

function ThemeIcon() {
  const ref = useRef<HTMLDivElement>(null)
  const status = useSelector(({theme}) => theme === ETheme.dark)

  useLottieBackToBackProps({ref, data: morph, status})

  return <div ref={ref} className={s.svg} />
}

export default ThemeIcon
