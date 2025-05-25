import gsap from 'gsap'
import {ScrollSmoother} from 'gsap/ScrollSmoother'
import {useCallback, useEffect, useRef} from 'react'

import {useSelector, useStore} from '@/components/redux'

import s from './css.module.scss'

function HomeBackBlur() {
  const ref = useRef(null)
  const blur = useSelector((context) => context.blur.length > 0)
  const store = useStore()

  const click = useCallback(() => {
    const funcs = store.getState().blur

    funcs.forEach((fun) => fun())
  }, [store])

  useEffect(() => {
    const anim = gsap.to(ref.current, {opacity: blur ? 0.8 : 0, pointerEvents: blur ? 'all' : 'none'})
    const smoother = ScrollSmoother.get()
    if (smoother) smoother?.paused(blur)
    else document.body.style.overflow = blur ? 'hidden' : 'auto'

    return () => {
      anim.kill()
    }
  }, [blur])

  return <div onClick={click} ref={ref} className={s.blur} />
}

export default HomeBackBlur
