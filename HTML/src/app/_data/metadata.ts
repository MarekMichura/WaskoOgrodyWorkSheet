import {type Metadata} from 'next'

export const metadata: Metadata = {
  title: 'Profesjonalne tereny zielone dla firm | Kraków i Limanowa',
  description: 'Projektowanie, zakładanie i pielęgnacja terenów zielonych dla firm. Tworzymy ogrody, podwórka i przestrzenie zielone w Krakowie i Limanowej.',

  keywords: [
    'ogrody firmowe',
    'zakładanie ogrodów Kraków',
    'pielęgnacja zieleni',
    'aranżacja terenów zielonych',
    'projektowanie ogrodów',
    'krzewy i drzewa dla firm',
    'WawelGarden',
    'tereny zielone dla firm Kraków',
    'tereny zielone Limanowa',
  ],

  robots: 'index, follow',

  openGraph: {
    title: 'Profesjonalne tereny zielone dla firm',
    description:
      'Specjalizujemy się w projektowaniu i pielęgnacji ogrodów oraz terenów zielonych dla firm. Tworzymy piękne, zielone przestrzenie w Krakowie i Limanowej!',
    url: 'https://wawelgarden.pl',
    siteName: 'WawelGarden',
    images: [
      {
        url: 'https://wawelgarden.pl/og-image.jpg', // TODO: (do uzupełnienia) - grafika podglądowa
        width: 1200,
        height: 630,
        alt: 'Projektowanie terenów zielonych',
      },
    ],
    locale: 'pl_PL',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Profesjonalne ogrody i tereny zielone | Kraków i Limanowa',
    description: 'Projektujemy i pielęgnujemy ogrody oraz tereny zielone dla firm. Sprawdź naszą ofertę w Krakowie i Limanowej!',
    images: ['https://wawelgarden.pl//twitter-image.jpg'], // TODO: Obrazek dla twittera
  },

  icons: {
    icon: '/icons/favicon.ico',
    shortcut: '/icons/shortcut-icon.png',
    apple: '/icons/apple-touch-icon.png',
  },

  referrer: 'strict-origin-when-cross-origin',

  other: {
    'business:contact_data:street_address': 'Adama Vetulaniego 5b, 31-226 Kraków; UL. ŁOSOSIŃSKA 3, 34-600 LIMANOWA',
    'business:contact_data:locality': 'Kraków, Limanowa',
    'business:contact_data:region': 'Małopolska',
    'business:contact_data:postal_code': '31-226, 34-600',
    'business:contact_data:country_name': 'Polska',
    'business:contact_data:phone_number': '+48', // TODO:
    'business:contact_data:website': 'https://wawelgarden.pl/',
  },
}
