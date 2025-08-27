import {type IHomeCardProps} from './IHomeCardProps'
import {type IHomeCardsHeaderProps} from './IHomeCardsHeaderProps'

export interface IHomeCardsProps extends IHomeCardsHeaderProps {
  cards: IHomeCardProps[]
}
