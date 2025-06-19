'use client'

import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import {type ElementType, type MouseEvent} from 'react'
import {useRef, useCallback, useState} from 'react'

import {clsx} from '@/utils/func/clsx'
import {generateUID} from '@/utils/func/UID/generateUID'
import {removeUID} from '@/utils/func/UID/removeUID'
import {type TGsapQuickSetter} from '@/utils/type/TGsap'

import {useSelector} from '../redux'

import {type IRippleData} from './_type/IRippleData'
import {type IRippleProps} from './_type/IRippleProps'
import s from './css.module.scss'
import RippleElement from './rippleElement'

function Ripple<T extends ElementType = 'button'>({as, children, disabled, ...props}: IRippleProps<T>) {
  const [ripples, setRipples] = useState<IRippleData[]>([])
  const theme = useSelector(({theme}) => theme)

  const scaleChange = useRef<gsap.core.Tween>(null)
  const colorChange = useRef<gsap.core.Tween>(null)

  const setterPosYRef = useRef<TGsapQuickSetter<number>>(null)
  const setterPosXRef = useRef<TGsapQuickSetter<number>>(null)

  const containerRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    if (disabled) return
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      setterPosXRef.current = gsap.quickSetter(containerRef.current, '--posX', 'px') as TGsapQuickSetter<number>
      setterPosYRef.current = gsap.quickSetter(containerRef.current, '--posY', 'px') as TGsapQuickSetter<number>

      scaleChange.current = gsap
        .fromTo(
          containerRef.current, //
          {'--scale': 0},
          {'--scale': 1, duration: 0.4}
        )
        .pause()
    })
    return () => mm.revert()
  }, [disabled])

  useGSAP(() => {
    if (disabled) return
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      colorChange.current?.revert()
      containerRef.current!.style.color = ''
      colorChange.current = gsap //
        .to(containerRef.current, {color: 'var(--color)', duration: 0.4})
        .pause()
    })
    return () => mm.revert()
  }, [theme, disabled])

  const removeID = useCallback((id: string) => {
    setRipples((prev) => removeUID(prev, id, 'id'))
  }, [])

  const setPos = useCallback((e: MouseEvent) => {
    if (containerRef.current === null) return
    const rect = containerRef.current.getBoundingClientRect()

    const x = `${e.clientX - rect.left}px`
    const y = `${e.clientY - rect.top}px`

    setterPosXRef.current?.(e.clientX - rect.left)
    setterPosYRef.current?.(e.clientY - rect.top)

    return {x, y}
  }, [])

  // prettier-ignore
  const click = useCallback((e: MouseEvent) => {
    props?.onClick?.(e)
    const pos = setPos(e)

    if(!pos || disabled) return 
    const {x, y} = pos
    const id = generateUID()

    setRipples((prev) => [...prev, {id, x, y}])
  }, [props, setPos, disabled])
  // prettier-ignore
  const enter = useCallback((e: MouseEvent) => {
    props?.onMouseEnter?.(e)
    setPos(e)

    scaleChange.current?.play()
    colorChange.current?.play()
  }, [props, setPos])
  // prettier-ignore
  const leave = useCallback((e: MouseEvent) => {
    props?.onMouseLeave?.(e)
    setPos(e)

    scaleChange.current?.reverse()
    colorChange.current?.reverse()
  }, [props, setPos])
  // prettier-ignore
  const move = useCallback((e: MouseEvent) => {
    props?.onMouseMove?.(e)
    setPos(e)
  }, [props, setPos])

  const Component = as ?? 'button'
  return (
    <Component
      {...props}
      onMouseMove={move}
      onMouseEnter={enter}
      onMouseLeave={leave}
      onClick={click}
      disabled={disabled}
      data-disabled={disabled}
      className={clsx(s.container, props.className)}
      ref={containerRef}
    >
      {children}
      {ripples.map((ripple) => (
        <RippleElement {...ripple} key={ripple.id} remove={removeID} />
      ))}
    </Component>
  )
}

export default Ripple
