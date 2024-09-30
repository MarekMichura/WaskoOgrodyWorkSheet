import {IThemes} from '/global/THEME'

import {INotification} from './INotification'
import {IProfil} from './IProfil'

export interface IState {
  title: string
  profil?: IProfil
  theme: IThemes
  loading: string[]
  loadingStart: boolean
  notifications: INotification[]
  init: boolean
}

export const defState: IState = {
  title: 'Wasko ogrody',
  theme: IThemes.THEME_DARK,
  loading: ['Wczytywanie strony'],
  loadingStart: true,
  notifications: [],
  init: false,
}
