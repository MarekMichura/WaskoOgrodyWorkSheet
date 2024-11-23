import {profileResponse} from './_profileResponse'

interface loginResponseFail {
  authenticated: false
}

interface loginResponseSuccess {
  authenticated: true
  profile: profileResponse
}

export type loginResponse = loginResponseFail | loginResponseSuccess
