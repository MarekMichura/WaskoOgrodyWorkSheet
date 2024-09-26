

import {THEME_DARK} from '../global/THEME'
import {IAction} from './IAction'
import {IProfil} from './IProfil'
import {IThemes} from './IThemes'


export interface IState {
  dispatch: React.Dispatch<IAction>
  theme: IThemes
  profil?: IProfil
}

export const StateDefault: IState = {
  dispatch: () => {},
  theme: THEME_DARK,
  profil: undefined,
}
