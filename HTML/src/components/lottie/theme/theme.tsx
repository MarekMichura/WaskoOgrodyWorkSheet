import {useRef} from 'react'

// import {ETheme} from '@/utils/enum/ETheme'

import s from '../css.module.scss'
import {useLottieBackToBackProps} from '../lottie/useLottieBackToBack'

import morph from './_data/morph.json'

// import {useSelector} from '@/components/redux'

function ThemeIcon() {
  const ref = useRef<HTMLDivElement>(null)
  // const status = useSelector(({theme}) => theme === ETheme.dark)

  useLottieBackToBackProps({ref, data: morph, status: true})

  return <div ref={ref} className={s.svg} />
}

export default ThemeIcon
