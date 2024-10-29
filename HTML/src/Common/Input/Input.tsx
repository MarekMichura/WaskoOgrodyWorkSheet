import {useRef} from 'react'

import {IInput} from './IProps'

import * as CSS from './css'

export function Input({icon: Icon, error, ...p}: IInput) {
  const ref = useRef<HTMLInputElement>(null)

  const click = () => {
    ref.current?.focus()
  }

  return (
    <CSS.ContextInput onClick={click} style={{cursor: p.disabled ? 'not-allowed' : 'text'}}>
      <Icon onClick={click} cssSVG={CSS.SVG} />
      <CSS.Input {...p} ref={ref} />
      <CSS.Label>{p.placeholder}</CSS.Label>
      <CSS.Error>{error}</CSS.Error>
    </CSS.ContextInput>
  )
}
