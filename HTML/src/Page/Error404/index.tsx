import SadFaceIcon from '/Icon/SadFace'

import * as CSS from './css'

function Error404() {
  return (
    <CSS.Content>
      <SadFaceIcon cssSVG={CSS.SVG} />
      <CSS.Title>Error 404</CSS.Title>
    </CSS.Content>
  )
}

export default Error404
