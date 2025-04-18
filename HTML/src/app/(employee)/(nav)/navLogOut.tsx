'use client'

import {FormEvent} from 'react'

import FormBtn from '@/components/form/button/formBtn'
import BellIcon from '@/components/icon/svg/bell'
import {useMutationLogOut} from '@/utils/query/logOutMutate'
import {URL_MAP} from '@/utils/type/api/apiUrl.client'
import {ERoute} from '@/utils/type/common/ERoute'

import s from '../cssEmployee.module.scss'

function NavLogOut() {
  const logout = useMutationLogOut()

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    logout.mutate()
  }

  return (
    <form action={URL_MAP.LOG_OUT} onSubmit={submit}>
      <FormBtn type="submit" href={ERoute.getWorkingHours} className={s.sidebarLink}>
        <BellIcon />
        <span className={s.sidebarLinkContent}>Wyloguj się</span>
      </FormBtn>
    </form>
  )
}

export default NavLogOut
