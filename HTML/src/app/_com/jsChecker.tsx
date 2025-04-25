'use client'

import {useEffect} from 'react'

import clientSetCookie from '@/utils/cookie/clientSetCookie'
import {ECookies} from '@/utils/type/ECookies'

function JsCheckerCookie() {
  useEffect(() => {
    const expires = new Date()
    expires.setMinutes(expires.getMinutes() + 10)
    clientSetCookie(ECookies.js, 'true', expires)
  }, [])

  return null
}

export default JsCheckerCookie
