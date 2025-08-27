import type {ComponentPropsWithRef, ElementType} from 'react'

export type IRippleProps<T extends ElementType = 'button'> = {
  as?: T
  disabled?: boolean
  defClass?: true
  defColor?: 'dark' | 'light'
} & ComponentPropsWithRef<T>
