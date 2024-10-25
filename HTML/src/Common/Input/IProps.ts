import {IIcon} from '../Icon'

type IPropsInput = React.HTMLProps<HTMLInputElement>
type IPropsButton = React.HTMLProps<HTMLButtonElement>

export interface IInput extends IPropsInput {
  icon: (p: IIcon) => JSX.Element
  type: 'text' | 'password'
  error?: string | false
}

export interface IButton extends IPropsButton {
  type?: 'button' | 'submit' | 'reset'
}
