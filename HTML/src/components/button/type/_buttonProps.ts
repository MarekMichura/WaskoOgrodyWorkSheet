export interface buttonProps extends React.HTMLProps<HTMLButtonElement> {
  type?: 'submit' | 'reset' | 'button'
  text?: string | number | boolean | JSX.Element
  [key: `data-${string}`]: string | number | boolean
}
