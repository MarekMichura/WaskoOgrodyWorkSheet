import {type ComponentType} from 'react'

import {type IConstructionWrapper} from '@/images/construction/IConstructionWrapper'

export interface IHomeGalleryProps {
  Img: ComponentType<IConstructionWrapper>
  count: number
}
