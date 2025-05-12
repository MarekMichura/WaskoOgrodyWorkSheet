import {type Metadata} from 'next'

import {metadataEN} from './metadataEN'

export const metadataPL: Metadata = {
  title: 'Profesjonalne tereny zielone dla firm | Wawel Garden',
  description:
    'Projektowanie, zakładanie i pielęgnacja terenów zielonych dla firm. Tworzymy ogrody, podwórka i przestrzenie zielone w Krakowie i Limanowej.',

  keywords: [
    'ogrody firmowe',
    'zakładanie ogrodów Kraków',
    'pielęgnacja zieleni',
    'aranżacja terenów zielonych',
    'projektowanie ogrodów',
    'krzewy i drzewa dla firm',
    'Wawel Garden',
    'tereny zielone dla firm Kraków',
    'tereny zielone Limanowa',
  ],

  openGraph: {
    ...metadataEN.openGraph,
    title: 'Profesjonalne tereny zielone dla firm',
    description:
      'Specjalizujemy się w projektowaniu i pielęgnacji ogrodów oraz terenów zielonych dla firm. Tworzymy piękne, zielone przestrzenie w Krakowie i Limanowej!',
    images: [
      {
        url: 'https://wawelgarden.pl/icons/android-chrome-512x512.png',
        width: 1200,
        height: 630,
        alt: 'Projektowanie terenów zielonych',
      },
    ],
  },

  twitter: {
    ...metadataEN.twitter,
    title: 'Profesjonalne ogrody i tereny zielone | Kraków i Limanowa',
    description:
      'Projektujemy i pielęgnujemy ogrody oraz tereny zielone dla firm. Sprawdź naszą ofertę w Krakowie i Limanowej!',
  },

  robots: metadataEN.robots,
  icons: metadataEN.icons,
  referrer: metadataEN.referrer,
  other: metadataEN.other,
}
