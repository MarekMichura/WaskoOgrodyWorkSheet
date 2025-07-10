import type {ComponentType} from 'react'

export interface ISectionElementProps {
  className?: string
  Icon: ComponentType<{status: boolean}>
  title: string
  text: string
}
