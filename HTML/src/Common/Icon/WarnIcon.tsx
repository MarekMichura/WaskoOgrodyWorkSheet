import React, {createElement} from 'react'
import {IIcon} from './_IIcon'

const child = (
  <>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      strokeWidth="0"
      d="M13.0618 4.4295C12.6211 3.54786 11.3635 3.54786 10.9228 4.4295L3.88996 18.5006C3.49244 19.2959 4.07057 20.2317 4.95945 20.2317H19.0252C19.914 20.2317 20.4922 19.2959 20.0947 18.5006L13.0618 4.4295ZM9.34184 3.6387C10.4339 1.45376 13.5507 1.45377 14.6428 3.63871L21.6756 17.7098C22.6608 19.6809 21.228 22 19.0252 22H4.95945C2.75657 22 1.32382 19.6809 2.30898 17.7098L9.34184 3.6387Z"
    />
    <path d="M12 8V13" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 16L12 16.5" strokeWidth="2" strokeLinecap="round" />
  </>
)

function WarnIcon(p: IIcon) {
  const {SVG, ...props} = p
  props.xmlns = 'http://www.w3.org/2000/svg'
  props.viewBox = '0 0 24 24'

  if (SVG === undefined) return createElement('svg', props, child)
  return <SVG {...props}>{child}</SVG>
}

export default WarnIcon
