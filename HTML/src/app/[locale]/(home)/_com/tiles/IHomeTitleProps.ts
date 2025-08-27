import {type ComponentType} from 'react'

export interface IHomeTitleProps {
  title: string
  subTitle: string
  desc: string
  btn: string

  Img: ComponentType<{status: boolean}>
}
