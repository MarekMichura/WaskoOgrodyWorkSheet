import React, {useRef, useState} from 'react'

import {IButton} from './IProps'

import * as CSS from './css'

function Button({onClick, ...p}: IButton) {
  const effect = useRef<HTMLElement>(null)
  const [ripple, setRipple] = useState<NodeJS.Timeout | undefined>()

  function click(e: React.MouseEvent<HTMLInputElement>) {
    if (onClick) onClick(e)
    const current = effect.current

    if (p.disabled == true || current == undefined) return
    // if (current.style.animationPlayState == 'paused') return
    current.style.animationName = `a2`
    clearTimeout(ripple)

    setTimeout(() => {
      current.style.animationName = `${CSS.Ripple.name}`
      current.style.animationPlayState = `running`
      setRipple(
        setTimeout(() => {
          current.style.animationName = `a11`
          setRipple(undefined)
        }, 100000)
      )
    }, 0)
  }

  return (
    <CSS.ContextButton>
      <CSS.Button {...p} ref={null} onClick={click} />
      <CSS.Effect ref={effect} />
    </CSS.ContextButton>
  )
}

export default Button
