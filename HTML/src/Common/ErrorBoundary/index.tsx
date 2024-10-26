import React, {startTransition} from 'react'

import {endPoints, IAdditionalRoute} from '/Router/IRoute'

interface IErrorBoundary {
  children: React.ReactNode
  Component?: () => JSX.Element
  nav?: {
    navigate: string
    navigateFn: (to: string) => void
  }
}

export class ErrorBoundary extends React.Component<IErrorBoundary> {
  state = {hasError: false, error: ''}

  static getDerivedStateFromError() {
    return {hasError: true}
  }

  shouldComponentUpdate(nextProps: Readonly<IErrorBoundary>, nextState: {hasError: boolean}): boolean {
    if (nextState.hasError && nextProps.nav) {
      startTransition(() => nextProps.nav?.navigateFn(nextProps.nav.navigate))
      setTimeout(() => {})
    }
    return false
  }

  componentDidCatch(error: unknown, errorInfo: unknown) {
    console.dir(error)
    this.setState({...this.state, error: errorInfo})
  }

  render() {
    if (this.state.hasError) {
      const Component = this.props.Component
      if (Component) return <Component />
      const Error = endPoints[IAdditionalRoute.Error]
      return (
        <h1>
          <Error code="" error={this.state.error} />
        </h1>
      )
    }

    return this.props.children
  }
}
