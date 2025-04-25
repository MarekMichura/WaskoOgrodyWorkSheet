'use client'
import {useEffect} from 'react'

import {setCookieClient} from '@/utils/clientCookie/setCookie'
import {ECookieNames} from '@/utils/type/common/ECookiesNames'

function JsChecker() {
  useEffect(() => {
    const expires = new Date()
    expires.setMinutes(expires.getMinutes() + 30)

    setCookieClient(ECookieNames.js, 'true', expires)
  }, [])

  return null
}

export default JsChecker
