import {type ILocalizationSecondKeys} from '@/locale/translations/en_US'
import {type IChildren} from '@/utils/types/IChildren'

export interface HeroVideoProps extends IChildren {
  sectionName: ILocalizationSecondKeys<'sections'>
  img: {src: string; base64: string}
  video: {mp4: string; webm: string}
}
