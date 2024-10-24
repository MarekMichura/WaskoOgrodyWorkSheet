import {INotificationType} from '/QueryFn/Notification/types/INotification'

import {IProfilResult} from './IProfil'

export interface ILoginRequestData {
  Login: string
  Password: string
}

interface ILoginResponseSuccess {
  authenticated: true
  profil: IProfilResult
}

interface ILoginResponseFail {
  authenticated: false
  profil: undefined
}

export type ILoginResponse = ILoginResponseSuccess | ILoginResponseFail

export type IFnMutationResult = {
  type: INotificationType.success
  text: string
  profil: IProfilResult
}
