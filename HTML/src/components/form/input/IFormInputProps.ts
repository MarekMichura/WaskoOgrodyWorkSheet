import {JSX} from 'react'

export interface IFormInputProps extends React.HTMLProps<HTMLInputElement> {
  Icon?: JSX.Element
  error?: string
  label: string
  name: string
}
