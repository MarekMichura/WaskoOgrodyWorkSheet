import {type JSX} from 'react'

import {type IImageProps} from '@/images/IImageProps'
import {type EImgOrientation} from '@/utils/enum/EImgOrientation'

export interface IHomeHeroProps {
  Img: (p: IImageProps) => JSX.Element
  title: string
  subTitle: string
  orientation: EImgOrientation
}
