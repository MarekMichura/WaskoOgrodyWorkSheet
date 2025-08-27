'use client'

import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import {useCallback, useRef, useState, type ElementType} from 'react'

import {clsx} from '@/utils/func/clsx'
import {generateUID} from '@/utils/func/UID/generateUID'
import {removeUID} from '@/utils/func/UID/removeUID'

import s from './css.module.scss'
import {type IRippleProps} from './IRippleProps'

function Ripple<T extends ElementType = 'button'>({as, disabled, defClass, defColor, children, ...p}: IRippleProps<T>) {
  const componentRef = useRef<HTMLElement>(null)
  const [ripples, setRipples] = useState<{x: number; y: number; id: string}[]>([])

  // NOTE: GSAP
  const color = useRef<gsap.core.Tween>(null)
  const scale = useRef<gsap.core.Tween>(null)
  const setX = useRef<(n: number) => void>(null)
  const setY = useRef<(n: number) => void>(null)

  useGSAP(() => {
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      setX.current = gsap.quickSetter(componentRef.current!, '--posX', 'px') as (n: number) => void
      setY.current = gsap.quickSetter(componentRef.current!, '--posY', 'px') as (n: number) => void
      scale.current = gsap.fromTo(componentRef.current, {'--scale': 0}, {'--scale': 1, duration: 0.4}).pause()
      color.current = gsap.to(componentRef.current, {color: 'var(--color)'}).pause()
    })
  })

  // prettier-ignore
  useGSAP(() => {
    const rippleElements = componentRef.current?.querySelectorAll(`.${s.ripple}`)
    rippleElements?.forEach((el) => {
      const htmlEl = el as HTMLElement
      if (!htmlEl.dataset.animated) {
        gsap
          .timeline()
          .from(htmlEl, {opacity: 0, scale: 0, ease: 'linear'})
          .to(htmlEl, {opacity: 0.75, scale: 1, duration: 0.5, ease: 'linear'}, 0)
          .to(
            htmlEl,
            {
              opacity: 0,
              scale: 2,
              duration: 0.5,
              ease: 'linear',
              onComplete: () => setRipples((prev) => removeUID(prev, htmlEl.id, 'id')),
            },
            0.5
          )

        htmlEl.dataset.animated = 'true'
      }
    })
  },{dependencies: [ripples], scope: componentRef})

  const setPos = useCallback((e: MouseEvent) => {
    if (!componentRef.current) return
    const rect = componentRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    setX.current?.(x)
    setY.current?.(y)

    return {x, y}
  }, [])

  // NOTE: Events
  // prettier-ignore
  const move = useCallback((e: MouseEvent) => {
    p.onMouseMove?.(e)
    setPos(e)
  }, [p, setPos])
  // prettier-ignore
  const enter = useCallback((e: MouseEvent) => {
    p.onMouseEnter?.(e)
    setPos(e)
    scale.current?.play()
    color.current?.play()
  }, [p, setPos])
  // prettier-ignore
  const leave = useCallback((e: MouseEvent) => {
    p.onMouseLeave?.(e)
    setPos(e)
    scale.current?.reverse()
    color.current?.reverse()
  }, [p, setPos])
  // prettier-ignore
  const click = useCallback((e: MouseEvent) => {
    p.onClick?.(e)
    const {x, y} = setPos(e)!
    const id = generateUID()
    
    setRipples((prev) => [...prev, {x, y, id}])
  }, [p, setPos])

  const Component = as ?? 'button'
  return (
    <Component
      {...p}
      onMouseMove={move}
      onMouseEnter={enter}
      onMouseLeave={leave}
      onClick={click}
      className={clsx(
        s.con,
        defClass && s.def,
        defColor === 'dark' && s.defColorDark,
        defColor === 'light' && s.defColorLight,
        p.className
      )}
      disabled={disabled}
      data-disabled={disabled}
      ref={componentRef}
    >
      {children}
      {ripples.map(({x, y, id}) => (
        <span key={id} id={id} style={{top: y, left: x}} className={s.ripple} />
      ))}
    </Component>
  )
}

export default Ripple
