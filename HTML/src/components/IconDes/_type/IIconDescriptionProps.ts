import {type JSX} from 'react'

export interface IIconDescriptionProps {
  title: string
  description: string

  icon: JSX.Element
  nr: '1' | '2' | '3'
}
