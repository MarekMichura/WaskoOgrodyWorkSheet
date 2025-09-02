import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import {ScrollSmoother} from 'gsap/ScrollSmoother'
import {useRef} from 'react'

import s from './css.module.scss'
import {type IHomeCardBigImgProps} from './IHomeCardBigImgProps'


function HomeCardBigImg({children, close}: IHomeCardBigImgProps) {
  const ref = useRef(null)
  useGSAP(() => {
    const smoother = ScrollSmoother.get()
    smoother?.paused(true)

    gsap.set(ref.current, {top: smoother?.scrollTop()})

    return () => {
      smoother?.paused(false)
    }
  })

  return (
    <div className={s.big} onClick={close} ref={ref}>
      {children}
    </div>
  )
}

export default HomeCardBigImg
