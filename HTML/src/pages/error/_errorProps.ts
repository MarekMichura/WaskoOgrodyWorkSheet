export interface errorProps {
  Icon?: JSX.Element
  error: Error
  resetErrorBoundary?: (...args: unknown[]) => void
  button?: {
    content: string | JSX.Element
    preRestFunction: () => void
  }
}
