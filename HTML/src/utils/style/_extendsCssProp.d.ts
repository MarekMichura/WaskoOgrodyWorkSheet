import 'react'

declare module 'react' {
  interface CSSProperties {
    [key: `--${string}`]: string | number
  }

  interface HTMLAttributes {
    [key: `data-${string}`]: string | number | boolean | undefined
  }
}
