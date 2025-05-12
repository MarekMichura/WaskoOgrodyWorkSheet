import {defineRouting} from 'next-intl/routing'

import {ECookies} from '@/utils/enums/ECookies'

export const routing = defineRouting({
  locales: ['en-US', 'pl-PL'],
  defaultLocale: 'pl-PL',
  localeCookie: {name: ECookies.locale},
  localePrefix: 'never',
  pathnames: {
    '/': {'pl-PL': '/', 'en-US': '/main-page'},
    '/greenRoofs': {'pl-PL': '/zielone-dachy', 'en-US': '/green-roofs'},
    '/projects': {'pl-PL': '/ukończone-projekty', 'en-US': '/completed-projects'},
    '/contact': {'pl-PL': '/kontakt', 'en-US': '/contact'},
  },
})

export type ILocale = (typeof routing.locales)[number]
export type IPaths = keyof typeof routing.pathnames
