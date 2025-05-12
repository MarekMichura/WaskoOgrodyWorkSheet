'use client'

import {type ICarouselCardProps} from '@/components/carousel/_type/ICarouselCardProps'
import Carousel from '@/components/carousel/carousel'

import s from '../css.module.scss'

const images: ICarouselCardProps[] = [
  {title: 'Nazwa firmy', src: 'https://picsum.photos/id/230/200/300', alt: 'Nazwa firmy', width: 200, height: 200},
  {title: 'Nazwa firmy', src: 'https://picsum.photos/id/231/200/300', alt: 'Nazwa firmy', width: 200, height: 200},
  {title: 'Nazwa firmy', src: 'https://picsum.photos/id/232/200/300', alt: 'Nazwa firmy', width: 200, height: 200},
  {title: 'Nazwa firmy', src: 'https://picsum.photos/id/233/200/300', alt: 'Nazwa firmy', width: 200, height: 200},
  {title: 'Nazwa firmy', src: 'https://picsum.photos/id/234/200/300', alt: 'Nazwa firmy', width: 200, height: 200},
  {title: 'Nazwa firmy', src: 'https://picsum.photos/id/235/200/300', alt: 'Nazwa firmy', width: 200, height: 200},
]

function CarouselTrustedUs() {
  return <Carousel className={s.card3} cards={images} title="Zaufali nam" subTitle="Dołącz do tej listy" />
}

export default CarouselTrustedUs
