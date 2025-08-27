import {type ComponentType} from 'react'

import {type IConstructionWrapper} from '@/images/construction/IConstructionWrapper'

export interface IHomeCardProps {
  name: string
  title: string
  desc: string

  Img: ComponentType<IConstructionWrapper>
  count: number
}
