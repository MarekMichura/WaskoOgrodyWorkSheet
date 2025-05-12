export interface IRippleHrefProps extends React.HTMLProps<HTMLAnchorElement> {
  disabled?: boolean
  [key: `data-${string}`]: string | number | boolean
}
