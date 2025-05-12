import type {ICarouselCardProps} from './ICarouselCardProps'

export interface ICarouselProps extends React.HTMLProps<HTMLElement> {
  title: string
  subTitle: string
  className?: string

  cards: ICarouselCardProps[]
}
