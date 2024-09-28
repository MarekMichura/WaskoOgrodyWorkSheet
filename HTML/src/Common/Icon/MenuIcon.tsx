import {createElement} from 'react'
import {IIcon} from './_IIcon'

const child = <path d="M4 6H20M4 12H20M4 18H20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

function MenuIcon(p: IIcon) {
  const {SVG, ...props} = p

  props.xmlns = 'http://www.w3.org/2000/svg'
  props.viewBox = '0 0 24 24'
  props.stroke = '#000'

  if (SVG === undefined) return createElement('svg', props, child)
  return <SVG {...props}>{child}</SVG>
}

export default MenuIcon
