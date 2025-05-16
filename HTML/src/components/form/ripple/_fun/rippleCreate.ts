import {type Dispatch, type SetStateAction, type MouseEventHandler} from 'react'

import {generateUID, removeUID} from '@/utils/oneLine/generateUID'

import {type IRipple} from '../_type/IRipple'
import {RIPPLE_LIFE_TIME} from '../_type/RIPPLE_LIFE_TIME'

export function createRipple<T extends HTMLElement>(
  e: React.MouseEvent<T>,
  disabled: boolean | undefined,
  setRipple: Dispatch<SetStateAction<IRipple[]>>,
  onClick?: MouseEventHandler<T>
) {
  if (disabled) {
    e.preventDefault()
    return
  }

  if (onClick) onClick(e)
  const key = generateUID()

  let rectCon = e.currentTarget as HTMLElement
  while (rectCon && getComputedStyle(rectCon).position !== 'relative') {
    if (!rectCon.parentElement) break
    rectCon = rectCon.parentElement
  }

  const rect = rectCon.getBoundingClientRect()
  const ripple: IRipple = {left: `${e.clientX - rect.left}px`, top: `${e.clientY - rect.top}px`, key}

  requestAnimationFrame(() => {
    setRipple((prev) => [...prev, ripple])
    setTimeout(() => setRipple((prev) => removeUID(prev, key)), RIPPLE_LIFE_TIME)
  })
}
