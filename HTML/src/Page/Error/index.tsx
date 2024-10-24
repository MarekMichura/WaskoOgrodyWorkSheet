import {SadFaceIcon} from '/Icon/SadFace'

import * as CSS from './css'

export function Error404() {
  return (
    <CSS.Content>
      <SadFaceIcon cssSVG={CSS.SVG} />
      <CSS.Title>Error 404</CSS.Title>
    </CSS.Content>
  )
}
