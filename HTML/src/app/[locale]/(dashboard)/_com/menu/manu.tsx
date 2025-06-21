import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import {useCallback, useEffect, useRef, useState} from 'react'

import NavBtn from '../link/btn'

import {type INavMenuProps} from './_type/INavMenuProps'
import s from './css.module.scss'

function NavMenu({text, Icon, className, children, open}: INavMenuProps) {
  const [state, setState] = useState(false)

  const animationRef = useRef<gsap.core.Tween | gsap.core.Timeline>(null)
  const ref = useRef(null)

  useGSAP(() => {
    const ele = ref.current

    gsap.to(ele, {marginLeft: open ? '3.5rem' : '0'})
  }, [open])

  useGSAP(() => {
    const ele = ref.current
    animationRef.current?.kill()
    animationRef.current = gsap.timeline().fromTo(ele, {height: 0}, {height: 'auto'})

    return () => {
      animationRef.current?.kill()
    }
  })

  useEffect(() => {
    if (state) animationRef.current?.play()
    else animationRef.current?.reverse()
  }, [state])

  const click = useCallback(() => {
    setState((p) => !p)
  }, [])

  return (
    <>
      <NavBtn text={text} click={click} Icon={Icon} className={className} />
      <div ref={ref} className={s.con}>
        {children}
      </div>
    </>
  )
}

export default NavMenu
