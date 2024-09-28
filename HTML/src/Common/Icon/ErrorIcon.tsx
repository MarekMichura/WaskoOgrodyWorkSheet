import React, {createElement} from 'react'
import {IIcon} from './_IIcon'

const child = (
  <path d="M11.383 13.644A1.03 1.03 0 0 1 9.928 15.1L6 11.172 2.072 15.1a1.03 1.03 0 1 1-1.455-1.456l3.928-3.928L.617 5.79a1.03 1.03 0 1 1 1.455-1.456L6 8.261l3.928-3.928a1.03 1.03 0 0 1 1.455 1.456L7.455 9.716z" />
)

function ErrorIcon(p: IIcon) {
  const {SVG, ...props} = p
  props.xmlns = 'http://www.w3.org/2000/svg'
  props.viewBox = '-3.5 0 19 19'

  if (SVG === undefined) return createElement('svg', props, child)
  return <SVG {...props}>{child}</SVG>
}

export default ErrorIcon
