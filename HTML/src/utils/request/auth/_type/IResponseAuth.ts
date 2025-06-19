import {type IResponseGetProfile} from '../../getProfil/_type/IResponseGetProfile'

interface IResponseAuthFail {
  authenticated: false
  profile: undefined
}

interface IResponseAuthSuccess {
  authenticated: true
  profile: IResponseGetProfile
}

export type IResponseAuth = IResponseAuthFail | IResponseAuthSuccess
