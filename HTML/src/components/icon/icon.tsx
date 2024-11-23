import {createElement} from 'react'

import {iconProps} from './_iconProps'

const xmlns = 'http://www.w3.org/2000/svg'
function Icon({children: path, ...svgProps}: iconProps) {
  const viewBox = svgProps.viewBox ?? '0 -960 960 960'
  const props = {...svgProps, viewBox, xmlns}

  return createElement('svg', props, path)
}

export default Icon
