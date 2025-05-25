import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import {useRef} from 'react'

import {type IRippleElement} from './_type/IRippleElement'
import s from './css.module.scss'

function RippleElement({x, y, id, remove}: IRippleElement) {
  const ref = useRef<HTMLElement>(null)

  useGSAP(() => {
    const timeline = gsap.timeline({onComplete: () => remove(id)})
    timeline //
      .fromTo(ref.current, {scale: 0, opacity: 0}, {scale: 4, duration: 1, ease: 'power2.out'})
      .to(ref.current, {opacity: 0.4, duration: 0.4}, '<')
      .to(ref.current, {opacity: 0, duration: 0.4, delay: 0.4}, '<')
  })

  return <span ref={ref} style={{left: x, top: y}} className={s.ripple} />
}

export default RippleElement
