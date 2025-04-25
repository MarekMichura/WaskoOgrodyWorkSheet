import {IResponseProfile} from '../profil/responseProfil'

interface IResponseAuthenticateFail {
  authenticated: false
}

interface IResponseAuthenticateSuccess {
  authenticated: true
  profile: IResponseProfile
}

export type IResponseAuthenticate = IResponseAuthenticateFail | IResponseAuthenticateSuccess
