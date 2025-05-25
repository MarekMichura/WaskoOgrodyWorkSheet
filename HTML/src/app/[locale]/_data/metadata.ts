import {type Metadata} from 'next'

import {type ILocale} from '@/locale/routing'

export const metadata: Metadata = {
  robots: 'index, follow',

  openGraph: {
    url: 'https://wawelgarden.pl',
    siteName: 'Wawel Garden',
    images: [{url: 'https://wawelgarden.pl/icons/android-chrome-512x512.png', width: 1200, height: 630}],
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    images: ['https://wawelgarden.pl/icons/android-chrome-512x512.png'],
  },

  icons: {
    icon: [
      {url: '/icons/favicon-32x32.png', sizes: '32x32', type: 'image/png'},
      {url: '/icons/favicon-16x16.png', sizes: '16x16', type: 'image/png'},
      {url: '/icons/favicon.ico', sizes: 'any', type: 'image/x-icon'},
    ],
    apple: [{url: '/icons/apple-touch-icon.png', sizes: '180x180', type: 'image/png'}],
    other: [{rel: 'manifest', url: '/manifest.json'}],
  },

  referrer: 'strict-origin-when-cross-origin',

  other: {
    'business:contact_data:street_address': 'Adama Vetulaniego 5b, 31-226 Kraków; UL. ŁOSOSIŃSKA 3, 34-600 LIMANOWA',
    'business:contact_data:locality': 'Kraków, Limanowa',
    'business:contact_data:region': 'Małopolska',
    'business:contact_data:postal_code': '31-226, 34-600',
    'business:contact_data:country_name': 'Poland',
    'business:contact_data:phone_number': '+48509808277',
    'business:contact_data:website': 'https://wawelgarden.pl/',
  },
}

export const metadataPL: Metadata = {
  title: 'Profesjonalne tereny zielone dla firm | Wawel Garden',
  description:
    'Projektowanie, zakładanie i pielęgnacja terenów zielonych dla firm. Ogrody, dziedzińce i tereny zielone w Krakowie i Limanowej.',

  keywords: [
    'ogrody firmowe',
    'zakładanie ogrodów Kraków',
    'pielęgnacja terenów zielonych',
    'projektowanie krajobrazu',
    'projektowanie ogrodów',
    'krzewy i drzewa dla firm',
    'Wawel Garden',
    'tereny zielone dla firm Kraków',
    'przestrzenie zielone Limanowa',
  ],

  openGraph: {
    title: 'Profesjonalne tereny zielone dla firm',
    description:
      'Specjalizujemy się w projektowaniu i pielęgnacji ogrodów i terenów zielonych dla firm. Tworzymy piękne przestrzenie zielone w Krakowie i Limanowej!',
    images: [
      {url: 'https://wawelgarden.pl/icons/android-chrome-512x512.png', alt: 'Projektowanie przestrzeni zielonych'},
    ],
  },

  twitter: {
    title: 'Profesjonalne ogrody i tereny zielone | Kraków i Limanowa',
    description:
      'Projektujemy i pielęgnujemy ogrody oraz tereny zielone dla firm. Sprawdź naszą ofertę w Krakowie i Limanowej!',
  },
}

export const metadataEN: Metadata = {
  title: 'Professional Green Spaces for Companies | Wawel Garden',
  description:
    'Designing, creating, and maintaining green spaces for companies. We build gardens, courtyards, and green areas in Kraków and Limanowa.',

  keywords: [
    'corporate gardens',
    'garden installation Krakow',
    'green area maintenance',
    'landscape design',
    'garden design',
    'shrubs and trees for businesses',
    'Wawel Garden',
    'green areas for businesses Krakow',
    'green spaces Limanowa',
  ],

  openGraph: {
    title: 'Professional Green Spaces for Companies',
    description:
      'We specialize in designing and maintaining gardens and green areas for businesses. Creating beautiful, green spaces in Kraków and Limanowa!',
    images: [{url: 'https://wawelgarden.pl/icons/android-chrome-512x512.png', alt: 'Green space design'}],
  },

  twitter: {
    title: 'Profesjonalne ogrody i tereny zielone | Kraków i Limanowa',
    description:
      'Projektujemy i pielęgnujemy ogrody oraz tereny zielone dla firm. Sprawdź naszą ofertę w Krakowie i Limanowej!',
  },
}

export const metadataLang: Record<ILocale, Metadata> = {
  'en-US': metadataEN,
  'pl-PL': metadataPL,
} as const
