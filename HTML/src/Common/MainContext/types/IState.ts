import {IAction} from './IAction'
import {IProfil} from './IProfil'
import {IThemes} from './IThemes'
import {THEME_DARK} from '../global/THEME'

export interface IState {
  dispatch: React.Dispatch<IAction>
  theme: IThemes
  profil?: IProfil
}

export const StateDefault: IState = {
  dispatch: (value: IAction) => {},
  theme: THEME_DARK,
  profil: undefined,
}
