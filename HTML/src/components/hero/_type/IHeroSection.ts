import type {IGetPublicBase64Result} from '../../img/placeHolder/_type/IGetPublicBase64Result'
import type {IChildren} from '@/utils/type/IChildren'

export interface IHeroSection extends IChildren {
  placeHolder?: IGetPublicBase64Result & {alt: string}
  video?: {
    src: string
    type: string
  }[]
}
