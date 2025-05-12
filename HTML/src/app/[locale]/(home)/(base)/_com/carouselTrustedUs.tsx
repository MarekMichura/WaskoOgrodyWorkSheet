'use client'

import {useTranslations} from 'next-intl'

import {type ICarouselCardProps} from '@/components/carousel/_type/ICarouselCardProps'
import Carousel from '@/components/carousel/carousel'
import useSection from '@/utils/hooks/useSection'
import useStickyCard from '@/utils/hooks/useStickyCard'

import s from '../css.module.scss'

const images: ICarouselCardProps[] = [
  {title: 'Nazwa firmy 1', src: 'https://picsum.photos/id/230/200/300', alt: 'Nazwa firmy 1', width: 200, height: 200},
  {title: 'Nazwa firmy 2', src: 'https://picsum.photos/id/231/200/300', alt: 'Nazwa firmy 2', width: 200, height: 200},
  {title: 'Nazwa firmy 3', src: 'https://picsum.photos/id/232/200/300', alt: 'Nazwa firmy 3', width: 200, height: 200},
  {title: 'Nazwa firmy 4', src: 'https://picsum.photos/id/233/200/300', alt: 'Nazwa firmy 4', width: 200, height: 200},
  {title: 'Nazwa firmy 5', src: 'https://picsum.photos/id/234/200/300', alt: 'Nazwa firmy 5', width: 200, height: 200},
  {title: 'Nazwa firmy 6', src: 'https://picsum.photos/id/235/200/300', alt: 'Nazwa firmy 6', width: 200, height: 200},
  {title: 'Nazwa firmy 7', src: 'https://picsum.photos/id/236/200/300', alt: 'Nazwa firmy 7', width: 200, height: 200},
  {title: 'Nazwa firmy 8', src: 'https://picsum.photos/id/237/200/300', alt: 'Nazwa firmy 8', width: 200, height: 200},
  {title: 'Nazwa firmy 9', src: 'https://picsum.photos/id/238/200/300', alt: 'Nazwa firmy 9', width: 200, height: 200},
  {
    title: 'Nazwa firmy 10',
    src: 'https://picsum.photos/id/239/200/300',
    alt: 'Nazwa firmy 10',
    width: 200,
    height: 200,
  },
  {
    title: 'Nazwa firmy 11',
    src: 'https://picsum.photos/id/240/200/300',
    alt: 'Nazwa firmy 11',
    width: 200,
    height: 200,
  },
  {
    title: 'Nazwa firmy 12',
    src: 'https://picsum.photos/id/241/200/300',
    alt: 'Nazwa firmy 12',
    width: 200,
    height: 200,
  },
  {
    title: 'Nazwa firmy 13',
    src: 'https://picsum.photos/id/242/200/300',
    alt: 'Nazwa firmy 13',
    width: 200,
    height: 200,
  },
  {
    title: 'Nazwa firmy 14',
    src: 'https://picsum.photos/id/243/200/300',
    alt: 'Nazwa firmy 14',
    width: 200,
    height: 200,
  },
  {
    title: 'Nazwa firmy 15',
    src: 'https://picsum.photos/id/244/200/300',
    alt: 'Nazwa firmy 15',
    width: 200,
    height: 200,
  },

  {
    title: 'Nazwa firmy 18',
    src: 'https://picsum.photos/id/247/200/300',
    alt: 'Nazwa firmy 18',
    width: 200,
    height: 200,
  },
  {
    title: 'Nazwa firmy 19',
    src: 'https://picsum.photos/id/248/200/300',
    alt: 'Nazwa firmy 19',
    width: 200,
    height: 200,
  },
  {
    title: 'Nazwa firmy 20',
    src: 'https://picsum.photos/id/249/200/300',
    alt: 'Nazwa firmy 20',
    width: 200,
    height: 200,
  },
  {
    title: 'Nazwa firmy 21',
    src: 'https://picsum.photos/id/250/200/300',
    alt: 'Nazwa firmy 21',
    width: 200,
    height: 200,
  },
]

function CarouselTrustedUs() {
  const [stickyRef, top] = useStickyCard()
  const sectionRef = useSection<HTMLHeadingElement>('trusteed')

  const t = useTranslations('home.trusteed')

  return (
    <>
      <span ref={sectionRef} className={s.anchor} />
      <Carousel
        className={s.card3}
        style={{top}}
        ref={stickyRef}
        cards={images}
        title={t('title')}
        subTitle={t('subTitle')}
      />
    </>
  )
}

export default CarouselTrustedUs
