import {defineRouting} from 'next-intl/routing'

import {ECookie} from '@/utils/enum/ECookies'
import {EProjectsLink} from '@/utils/enum/EProject'

export const routing = defineRouting({
  locales: ['pl-PL'],
  defaultLocale: 'pl-PL',
  localeCookie: {name: ECookie.locale},
  localePrefix: 'never',
  pathnames: {
    '/': {'pl-PL': '/', 'en-US': '/main-page'},
    '/contact': {'pl-PL': '/kontakt', 'en-US': '/contact'},
    '/realizations': {'pl-PL': '/realizacje', 'en-US': '/realizations'},

    [EProjectsLink.architecture]: {
      'pl-PL': '/Planowanie',
      'en-US': 'aa',
    },
    [EProjectsLink.greenLand]: {
      'pl-PL': '/Przestrzenie',
      'en-US': 'ab',
    },
    [EProjectsLink.greenMaintenance]: {
      'pl-PL': '/Zagospodarowanie',
      'en-US': 'ac',
    },
    [EProjectsLink.greenRoof]: {
      'pl-PL': '/Dachy',
      'en-US': 'ad',
    },
    [EProjectsLink.plantings]: {
      'pl-PL': '/Nasiewanie',
      'en-US': 'ae',
    },
    [EProjectsLink.projects]: {
      'pl-PL': '/Realizacje',
      'en-US': 'af',
    },

    '/login': {'pl-PL': '/ZalogujSie', 'en-US': '/Login'},
    '/profil': {'pl-PL': '/Profil', 'en-US': '/Profile'},
    '/work': {},
    '/getWorkHours': {},
    '/setWorkHours': {},
    '/dayOff': {},

    '/money': {},
    '/askBonus': {},
    '/reimburse': {},

    '/gardener': {},
    '/chords': {},

    '/account': {},
    '/locale': {},
    '/comment': {},
    '/logout': {},
  },
})

export type ILocale = (typeof routing.locales)[number]
export type IPaths = keyof typeof routing.pathnames
