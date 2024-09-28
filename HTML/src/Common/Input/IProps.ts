import {IIcon} from '../Icon/_IIcon'

type IProps = React.HTMLProps<HTMLInputElement>

export interface IInput extends IProps {
  icon: (p: IIcon) => JSX.Element
  type: 'text' | 'password'
  error?: string
}

export interface IButton extends IProps {
  type: 'submit' | 'button'
}
