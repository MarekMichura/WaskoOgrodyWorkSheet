import {createElement} from 'react'

import {type IIconProps} from './_type/IIconProps'

const xmlns = 'http://www.w3.org/2000/svg'
function Icon({children: path, ...svgProps}: IIconProps) {
  const viewBox = svgProps.viewBox ?? '0 -960 960 960'
  const props = {...svgProps, viewBox, xmlns, width: 120, height: 120}

  return createElement('svg', props, path)
}

export default Icon
