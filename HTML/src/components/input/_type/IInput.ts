import type {ComponentProps, JSX} from 'react'

export interface IInputProps extends ComponentProps<'input'> {
  label?: string
  error?: string

  icon?: {
    ele: JSX.Element
    position: 'left' | 'right'
  }
}
