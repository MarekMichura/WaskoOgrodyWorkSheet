import {type EImgOrientation} from '@/utils/enum/EImgOrientation'

import type {IImageProps} from '@/images/IImageProps'
import type {JSX} from 'react'

export interface IHomeCardsHeaderProps {
  title: string
  desc: string
  orientation: EImgOrientation
  Img: (p: IImageProps) => JSX.Element
}
