import {createElement} from 'react'
import IIcon from './IIcon'

function MenuIcon(p: IIcon) {
  const props = {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    stroke: '#000',
    ...p,
  }
  delete props.svg

  const child = (
    <path
      d="M4 6H20M4 12H20M4 18H20"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  )

  return p.svg === undefined ? (
    createElement('svg', props, child)
  ) : (
    <p.svg {...props}>{child}</p.svg>
  )
}

export default MenuIcon
