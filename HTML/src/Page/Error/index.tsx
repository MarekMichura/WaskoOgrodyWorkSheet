import {SadFaceIcon} from '/Icon/SadFace'

import {IErrorProps} from './IErrorProps'

import * as CSS from './css'

function Error404({error, code}: IErrorProps) {
  return (
    <CSS.Content>
      <SadFaceIcon cssSVG={CSS.SVG} />
      <CSS.Title>
        {error ?? 'Error'} {code ?? '404'}
      </CSS.Title>
    </CSS.Content>
  )
}

export default Error404
