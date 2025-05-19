import {defineRouting} from 'next-intl/routing'

import {ECookies} from '@/utils/enums/ECookies'

import en from './translations/en_US'
import pl from './translations/pl_PL'

const projects: Record<keyof typeof en.project, {'pl-PL'?: string; 'en-US'?: string}> = {
  Grzegorzecka: {'pl-PL': pl.project.Grzegorzecka.path, 'en-US': en.project.Grzegorzecka.path},
  May3: {'pl-PL': pl.project.May3.path, 'en-US': en.project.May3.path},
  Pychowicka1: {'pl-PL': pl.project.Pychowicka1.path, 'en-US': en.project.Pychowicka1.path},
  Wizjonerow: {'pl-PL': pl.project.Wizjonerow.path, 'en-US': en.project.Wizjonerow.path},
}

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
    ...projects,
  },
})

export type ILocale = (typeof routing.locales)[number]
export type IPaths = keyof typeof routing.pathnames
