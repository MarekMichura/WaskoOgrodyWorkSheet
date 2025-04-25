'use client'

import {useRouter} from 'next/navigation'
import React, {type FormEvent, useCallback} from 'react'

import {actionChangeLang} from '@/utils/action/changeLang/actionChangeLang'
import clientSetCookie from '@/utils/cookie/clientSetCookie'
import {type ILocale} from '@/utils/locale/locales'
import {ECookies} from '@/utils/type/ECookies'

import {type ISubmitButtonProps} from '../_type/ISubmitButtonProps'
import FormBtn from '../formBtn'

function ChangeLangBtn({language, ...props}: ISubmitButtonProps & {language: ILocale}) {
  const route = useRouter()
  const submit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      clientSetCookie(ECookies.locale, language)
      route.refresh()
    },
    [language, route]
  )

  return (
    <form action={actionChangeLang} onSubmit={submit}>
      <input type="hidden" name="Language" value={language} />
      <FormBtn {...props} />
    </form>
  )
}

export default ChangeLangBtn
