import {defineRouting} from 'next-intl/routing'

import {ECookie} from '@/utils/enum/ECookies'

export const routing = defineRouting({
  locales: ['pl-PL', 'en-US'],
  defaultLocale: 'pl-PL',
  localeDetection: true,
  localeCookie: {name: ECookie.locale},
  localePrefix: 'never',
  pathnames: {
    '/': {'pl-PL': '/', 'en-US': '/main-page'},
    '/contact': {'pl-PL': '/kontakt', 'en-US': '/contact'},
    '/realizations': {'pl-PL': '/realizacje', 'en-US': '/realizations'},
    '/roof': {'pl-PL': '/zielone_dachy', 'en-US': '/green_roofs'},
  },
})

export type ILocale = (typeof routing.locales)[number]
export type IPaths = keyof typeof routing.pathnames
