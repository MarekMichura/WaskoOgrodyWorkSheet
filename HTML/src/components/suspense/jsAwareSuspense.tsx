'use server'

import {cookies} from 'next/headers'
import {Suspense, type SuspenseProps} from 'react'

import {ECookies} from '@/utils/type/ECookies'

async function JsAwareSuspense(props: SuspenseProps) {
  const cookieStore = await cookies()
  const js = cookieStore.get(ECookies.js)?.value

  if (js === 'true') return <Suspense {...props} />
  return props.children
}

export default JsAwareSuspense
