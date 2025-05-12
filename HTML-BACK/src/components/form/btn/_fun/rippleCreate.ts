import {type Dispatch, type SetStateAction, type MouseEventHandler} from 'react'

import {generateUID} from '@/utils/uid/generateUID'
import {removeUID} from '@/utils/uid/removeUID'

import {type IRipple, RIPPLE_LIFE_TIME} from '../_type/IRippleProps'

export function createRipple<T extends HTMLElement>(setRipple: Dispatch<SetStateAction<IRipple[]>>, onClick?: MouseEventHandler<T>) {
  return function (e: React.MouseEvent<T>) {
    if (onClick) onClick(e)
    const key = generateUID()
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
    const ripple: IRipple = {posX: `${e.clientX - rect.left}px`, posY: `${e.clientY - rect.top}px`, key}

    requestAnimationFrame(() => {
      setRipple((prev) => [...prev, ripple])
      setTimeout(() => setRipple((prev) => removeUID(prev, key)), RIPPLE_LIFE_TIME)
    })
  }
}
