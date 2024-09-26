import IIcon from '@Icon/IIcon'

import * as CSS from './css'
import {IInput} from './IInput'
import {useRef} from 'react'

interface IProps extends IInput {
  icon: (p: IIcon) => JSX.Element
  type: 'text' | 'password'
  error?: string
}

function Input(p: IProps) {
  const {icon: Icon, error, ...props} = p
  const ref = useRef<HTMLInputElement>(null)

  function click() {
    ref.current?.focus()
  }

  return (
    <CSS.ContextInput
      onClick={click}
      style={{cursor: p.disabled ? 'not-allowed' : 'text'}}>
      <Icon onClick={click} svg={CSS.SVG} />
      <CSS.Input ref={ref} {...props} />
      <CSS.Label>{p.placeholder}</CSS.Label>
      <CSS.Error>{error}</CSS.Error>
    </CSS.ContextInput>
  )
}

export default Input
