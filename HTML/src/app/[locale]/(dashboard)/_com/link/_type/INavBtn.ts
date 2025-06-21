import type {MouseEvent, JSX} from 'react'

export interface INavBtnProps {
  click: (e: MouseEvent<HTMLButtonElement>) => void
  text: string
  Icon: JSX.Element
  className?: string
}
