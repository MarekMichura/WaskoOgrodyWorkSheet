import {type Stringify} from '../../utils/types/Stringify'

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

    meet: {
      title: 'Our Expertise',

      greenLandTitle: 'Landscaping of Green Areas',
      greenLandDest:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis vel exercitationem asperiores ducimus optio minima nostrum enim! Dolor iure accusamus libero quasi aperiam, quas harum iste deleniti maiores fugit pariatur!',

      greenRoofTitle: 'Green Roofs',
      greenRoofDest:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis vel exercitationem asperiores ducimus optio minima nostrum enim! Dolor iure accusamus libero quasi aperiam, quas harum iste deleniti maiores fugit pariatur!',

      greenMaintenanceTitle: 'Maintenance of Green Spaces',
      greenMaintenanceDest:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis vel exercitationem asperiores ducimus optio minima nostrum enim! Dolor iure accusamus libero quasi aperiam, quas harum iste deleniti maiores fugit pariatur!',
    },

    service: {
      title: 'Our Services',

      architectureTitle: 'Paving and Small Architecture',
      architectureDest:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis vel exercitationem asperiores ducimus optio minima nostrum enim! Dolor iure accusamus libero quasi aperiam, quas harum iste deleniti maiores fugit pariatur!',

      plantingsTitle: 'Plantings',
      plantingsDest:
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
} as const

export type ILocalization = Stringify<typeof en>
export type ILocalizationSecondKeys<T extends keyof typeof en> = keyof (typeof en)[T]

// export type ILocalizationSectionKeys<T extends keyof typeof en> = keyof (typeof en)[T]['sections']
export default en
