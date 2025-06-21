import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import {useEffect, useRef} from 'react'

import {clsx} from '@/utils/func/clsx'

import s from './css.module.scss'
import {type INavSeparator} from './_type/INavSeparator'

function NavSeparator({text, open, className}: INavSeparator) {
  const animationRef = useRef<gsap.core.Tween | gsap.core.Timeline>(null)
  const refText = useRef(null)
  const refLine = useRef(null)

  useGSAP(() => {
    const mm = gsap
      .matchMedia()
      .add({small: '(max-width: 30rem)', motion: '(prefers-reduced-motion: no-preference)'}, (context) => {
        const {small} = context.conditions!
        const text = refText.current
        const line = refLine.current

        animationRef.current?.kill()
        if (small) {
          gsap.set(text, {opacity: 1})
          gsap.set(line, {opacity: 0})
        } else {
          animationRef.current = gsap
            .timeline()
            .fromTo(line, {opacity: 1}, {opacity: 0}, 0)
            .fromTo(text, {opacity: 0}, {opacity: 1}, 0)
        }
        return () => {
          gsap.killTweensOf(text)
          gsap.killTweensOf(line)
          gsap.set(text, {clearProps: 'all'})
          gsap.set(line, {clearProps: 'all'})
        }
      })

    return () => mm.revert()
  })

  useEffect(() => {
    if (open) {
      animationRef.current?.play()
    } else {
      animationRef.current?.reverse()
    }
  }, [open])

  return (
    <div className={clsx(s.con, className)}>
      <span className={s.text} ref={refText}>
        {text}
      </span>
      <div className={s.line} ref={refLine} />
    </div>
  )
}

NavSeparator.displayName = 'NavSeparator'
export default NavSeparator
