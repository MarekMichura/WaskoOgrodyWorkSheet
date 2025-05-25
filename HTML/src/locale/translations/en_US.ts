import {type IStringify} from '@/utils/type/IStringify'

const en = {
  nav: {
    mainPage: 'Main page',
    greenRoof: 'Green roofs',
    projects: 'Completed projects',
    contact: 'Contact',
    close: 'Close',
    open: 'Open',
    setLang: 'Select language',
    changeTheme: 'Change theme',
    links: 'Links:',
    communication: 'Contact:',
    address: 'Address:',
    follow: 'Follow us:',
  },

  sections: {
    select: 'Select',

    heroImg: 'Top',
    meet: 'Meet us',
    service: 'Our Services',
    trusteed: 'They Trusted us',
  },

  home: {
    title: 'Wawel Garden',

    icons: {
      title: 'Our Expertise',
      desc: 'Poznaj Nasze Mocne Strony',

      greenLandTitle: 'Landscaping of Green Areas',
      greenLandDest:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis vel exercitationem asperiores ducimus optio minima nostrum enim! Dolor iure accusamus libero quasi aperiam, quas harum iste deleniti maiores fugit pariatur!',

      greenRoofTitle: 'Green Roofs',
      greenRoofDest:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis vel exercitationem asperiores ducimus optio minima nostrum enim! Dolor iure accusamus libero quasi aperiam, quas harum iste deleniti maiores fugit pariatur!',

      plantingsTitle: 'Plantings',
      plantingsDest:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis vel exercitationem asperiores ducimus optio minima nostrum enim! Dolor iure accusamus libero quasi aperiam, quas harum iste deleniti maiores fugit pariatur!',

      greenMaintenanceTitle: 'Maintenance of Green Spaces',
      greenMaintenanceDest:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis vel exercitationem asperiores ducimus optio minima nostrum enim! Dolor iure accusamus libero quasi aperiam, quas harum iste deleniti maiores fugit pariatur!',

      architectureTitle: 'Paving and Small Architecture',
      architectureDest:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis vel exercitationem asperiores ducimus optio minima nostrum enim! Dolor iure accusamus libero quasi aperiam, quas harum iste deleniti maiores fugit pariatur!',

      projectsTitle: 'Design and Planning',
      projectsDest:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis vel exercitationem asperiores ducimus optio minima nostrum enim! Dolor iure accusamus libero quasi aperiam, quas harum iste deleniti maiores fugit pariatur!',
    },

    trusteed: {
      title: 'Our Partners',
      subTitle: 'Trusted by industry leaders',
    },
  },

  project: {
    May3: {
      path: 'May3',
    },
    Grzegorzecka: {
      path: 'Grzegórzecka',
    },
    Pychowicka1: {
      path: 'Pychowicka1',
    },
    Wizjonerow: {
      path: 'Wizjonerów',
    },
  },
} as const

export type ILocalization = IStringify<typeof en>
export default en
