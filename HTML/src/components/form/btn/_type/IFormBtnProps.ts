export interface IFormBtnProps extends React.HTMLProps<HTMLButtonElement> {
  type: 'submit' | 'reset' | 'button'
  [key: `data-${string}`]: string | number | boolean
}
