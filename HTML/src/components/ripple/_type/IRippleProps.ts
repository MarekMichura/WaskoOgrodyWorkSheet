import {type ElementType, type ComponentPropsWithRef} from 'react'

export type IRippleProps<T extends ElementType> = ComponentPropsWithRef<T> & {
  as?: T
  disabled?: boolean
}
