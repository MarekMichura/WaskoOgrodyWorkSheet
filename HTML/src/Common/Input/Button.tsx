import {useRef, useState} from 'react'
import * as CSS from './css'
import {IInput} from './IInput'

interface IProps extends IInput {
  type: 'submit' | 'button'
}

function Button(p: IProps) {
  const {onClick, ...props} = p
  const effect = useRef<HTMLElement>(null)
  const [ripple, setRipple] = useState<NodeJS.Timeout | undefined>()

  function Click(_e: React.MouseEvent<HTMLInputElement>) {
    if (onClick) onClick(_e)
    const current = effect.current

    if (p.disabled == true) return
    if (current == undefined) return
    if (current.style.animationPlayState == 'paused') return
    if (ripple != undefined) {
      clearTimeout(ripple)
      current.style.animationName = ''
    }

    setTimeout(() => {
      current.style.animationName = `${CSS.Ripple.getName()}`
      setRipple(
        setTimeout(() => {
          current.style.animationName = ''
          setRipple(undefined)
        }, 1000)
      )
    }, 0)
  }

  return (
    <CSS.ContextButton>
      <CSS.Input {...props} onClick={Click} />
      <CSS.Effect ref={effect} />
    </CSS.ContextButton>
  )
}

export default Button
