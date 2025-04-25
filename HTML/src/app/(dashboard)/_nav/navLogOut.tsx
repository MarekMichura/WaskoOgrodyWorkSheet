'use client'

import {type FormEvent} from 'react'

import FormBtn from '@/components/form/btn/formBtn'
import BellIcon from '@/components/image/svg/bell'
import {useTranslations} from '@/utils/locale/_help/useTranslations'
import {useMutateLogOut} from '@/utils/query/auth/mutateLogOut'
import {EApiUrl} from '@/utils/type/EApiUrl'

import s from '../css.module.scss'

function NavLogOut() {
  const logout = useMutateLogOut()
  const t = useTranslations('nav')

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    logout.mutate()
  }

  return (
    <form action={EApiUrl.LOG_OUT} onSubmit={submit} method="POST">
      <FormBtn type="submit" className={s.sidebarLink}>
        <BellIcon />
        <span className={s.sidebarLinkContent}>{t('logout')}</span>
      </FormBtn>
    </form>
  )
}

export default NavLogOut
