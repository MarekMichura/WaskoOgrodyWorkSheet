'use client'

import Link from 'next/link'
import {createElement, useCallback, useMemo, useState} from 'react'

import {generateUID} from '@/utils/guid/generateUID'
import {removeUID} from '@/utils/guid/removeUID'

import s from './cssFormBtn.module.scss'
import {IFormBtn, IFormBtnRipple} from './IFormBtnProps'

const RIPPLE_LIFE_TIME = 1000
function FormBtn({children, onClick, className, ...props}: IFormBtn) {
  const [ripples, setRipples] = useState<IFormBtnRipple[]>([])
  const style = useMemo(() => (className ? `${className} ${s.btn}` : s.btn), [className])
  const click = useCallback(
    (e: React.MouseEvent<any>) => {
      if (onClick) onClick(e)
      const key = generateUID()
      const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
      const ripple: IFormBtnRipple = {posX: `${e.clientX - rect.left}px`, posY: `${e.clientY - rect.top}px`, key}

      requestAnimationFrame(() => {
        setRipples((prev) => [...prev, ripple])
        setTimeout(() => setRipples((prev) => removeUID(prev, key)), RIPPLE_LIFE_TIME)
      })
    },
    [onClick]
  )

  const content = useMemo(
    () => (
      <>
        {children}
        {ripples.map(({key, posX, posY}) => (
          <span key={key} className={s.ripple} style={{'--top': posY, '--left': posX}} />
        ))}
      </>
    ),
    [children, ripples]
  )

  return createElement(props.type === 'Link' ? Link : 'button', {...props, onClick: click, className: style} as any, content)
}

export default FormBtn
