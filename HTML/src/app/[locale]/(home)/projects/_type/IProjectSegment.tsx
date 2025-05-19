import type {IGetPublicBase64Result} from '@/utils/plaiceholder/_type/IGetPublicBase64Result'
import type {IChildren} from '@/utils/types/IChildren'

export interface IProjectSegment extends IChildren {
  images: IGetPublicBase64Result[]
}
