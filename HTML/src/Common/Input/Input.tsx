import {useRef} from 'react'
import * as CSS from './css'
import {IInput} from './IProps'

function Input({icon: Icon, error, ...p}: IInput) {
  const ref = useRef<HTMLInputElement>(null)

  function click() {
    ref.current?.focus()
  }

  return (
    <CSS.ContextInput onClick={click} style={{cursor: p.disabled ? 'not-allowed' : 'text'}}>
      <Icon onClick={click} SVG={CSS.SVG} />
      <CSS.Input {...p} ref={ref} />
      <CSS.Label>{p.placeholder}</CSS.Label>
      <CSS.Error>{error}</CSS.Error>
    </CSS.ContextInput>
  )
}

export default Input
