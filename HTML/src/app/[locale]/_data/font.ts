import {Nunito, Playfair_Display} from 'next/font/google'

export const nunito = Nunito({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin-ext'],
})

export const playfair = Playfair_Display({
  weight: ['800'],
  style: ['normal'],
  subsets: ['latin-ext'],
})
