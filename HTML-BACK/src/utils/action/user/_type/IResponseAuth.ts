import {type IResponseGetProfile} from './IResponseGetProfile'

interface IResponseAuthFail {
  authenticated: false
  profile: undefined
}

interface IResponseAuthSuccess {
  authenticated: true
  profile: IResponseGetProfile
}

export type IResponseAuth = IResponseAuthFail | IResponseAuthSuccess
