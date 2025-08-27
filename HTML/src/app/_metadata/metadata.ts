import {type Metadata} from 'next'

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
