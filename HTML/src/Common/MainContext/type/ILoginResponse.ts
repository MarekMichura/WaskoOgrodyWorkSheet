import {IProfil} from './IProfil'

interface ILoginResponseSuccess {
  authenticated: true
  profil: IProfil
}

interface ILoginResponseFail {
  authenticated: false
  profil: undefined
}

export type ILoginResponse = ILoginResponseSuccess | ILoginResponseFail
