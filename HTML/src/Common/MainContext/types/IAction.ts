import {FormikErrors} from 'formik'
import {ILoginValues} from '/Page/Login/types'
import * as ACTION from '../global/ACTIONS'
import {IProfil} from './IProfil'

export interface IActionInit {
  action: typeof ACTION.ACTION_INIT
  dispatch: React.Dispatch<IAction>
}

export interface IActionChangeTheme {
  action: typeof ACTION.ACTION_CHANGE_THEME
}

export interface IActionLogin {
  action: typeof ACTION.ACTION_LOGIN
  username: string
  password: string
  dispatch: React.Dispatch<IAction>
  setSubmitting: (isSubmitting: boolean) => void
  setErrors: (errors: FormikErrors<ILoginValues>) => void
}

export interface IActionSetProfil {
  action: typeof ACTION.ACTION_PROFIL
  profil: IProfil
}

export type IAction =
  | IActionInit
  | IActionChangeTheme
  | IActionLogin
  | IActionSetProfil
