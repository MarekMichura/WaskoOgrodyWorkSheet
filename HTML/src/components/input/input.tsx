'use client'

import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import {
  type ChangeEvent,
  type FocusEvent,
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'

import {clsx} from '@/utils/func/clsx'

import {type IInputProps} from './_type/IInput'
import s from './css.module.scss'

const Input = forwardRef<HTMLInputElement, IInputProps>(({label, error, icon, ...p}, ref) => {
  const [{empty, focus}, setState] = useState({focus: false, empty: p.value && p.value.toString().length > 0})

  const bottom1Ref = useRef(null)
  const bottom2Ref = useRef(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const labelRef = useRef(null)
  const errorRef = useRef(null)

  useImperativeHandle(ref, () => inputRef.current!)

  useGSAP(() => {
    if (!bottom1Ref.current || !bottom2Ref.current) return

    const open = focus || error
    gsap.to([bottom1Ref.current, bottom2Ref.current], {
      width: open ? '50%' : '0',
      backgroundColor: error ? '#fb2c36' : '#00c05a',
      ease: 'bounce.out',
    })
  }, [focus, error])

  useGSAP(() => {
    if (!labelRef.current) return
    if (empty && !focus) {
      gsap.to(labelRef.current, {
        autoAlpha: 1,
        left: '50%',
        top: '50%',
        x: icon?.position === undefined ? '0' : icon.position === 'left' ? '1.75rem' : '-1.75rem',
        xPercent: -50,
        yPercent: -50,
        fontSize: '1.5rem',
        ease: 'bounce.out',
      })
      return
    }
    gsap.to(labelRef.current, {
      autoAlpha: 1,
      left: '0.25rem',
      top: '0%',
      x: icon?.position === 'left' ? '3rem' : '0',

      xPercent: 0,
      yPercent: 0,
      fontSize: '1rem',
      ease: 'bounce.out',
    })
  }, [empty, focus])

  useGSAP(() => {
    if (!inputRef.current) return
    if (error) {
      gsap.to(inputRef.current, {paddingBottom: '1rem'})
      return
    }
    gsap.to(inputRef.current, {paddingBottom: '0.25rem'})
  }, [error])

  useEffect(() => {
    setState((prev) => ({...prev, empty: (p.value?.toString().length ?? 0) === 0}))
  }, [p.value])

  //prettier-ignore
  const onFocus = useCallback((e: FocusEvent<HTMLInputElement>) => {
    p.onFocus?.(e)

    setState((p => ({ ...p, focus: true })))
  }, [p])

  //prettier-ignore
  const onBlur = useCallback((e: FocusEvent<HTMLInputElement>) => {
    p.onBlur?.(e)
    
    setState((p) => ({...p, focus: false}))
  }, [p])

  //prettier-ignore
  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    p.onChange?.(e)

    setState((p) => ({...p, empty: e.target.value === ""}))
  }, [p])

  return (
    <div className={s.con}>
      {label && (
        <label htmlFor={p.name} className={s.label} ref={labelRef}>
          {label}
        </label>
      )}
      <input
        {...p}
        placeholder=" "
        className={clsx(p.className, s.input)}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChange}
        style={{
          paddingLeft: icon?.position === 'left' ? '3.25rem' : '',
          paddingRight: icon?.position === 'right' ? '3.25rem' : '',
        }}
        ref={inputRef}
      />
      {icon && (
        <div
          className={s.svg}
          style={{
            left: icon.position === 'left' ? '0.25rem' : '',
            right: icon.position === 'right' ? '0.25rem' : '',
          }}
        >
          {icon.ele}
        </div>
      )}
      {error && (
        <span className={s.error} ref={errorRef}>
          {error}
        </span>
      )}
      <div className={clsx(s.bottom)} ref={bottom1Ref} style={{left: '50%'}} />
      <div className={clsx(s.bottom)} ref={bottom2Ref} style={{right: '50%'}} />
    </div>
  )
})

Input.displayName = 'Input'
export default Input
