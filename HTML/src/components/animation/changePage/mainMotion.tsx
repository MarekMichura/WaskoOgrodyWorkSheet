'use client'

import {AnimatePresence} from 'framer-motion'
import {LayoutRouterContext} from 'next/dist/shared/lib/app-router-context.shared-runtime'
import {Fragment, useContext, useRef} from 'react'

import {usePathname} from '@/locale/navigation'
import {type IChildren} from '@/utils/types/IChildren'

const FrozenRoute = ({children}: IChildren) => {
  const context = useContext(LayoutRouterContext)
  const frozen = useRef(context).current

  return <LayoutRouterContext.Provider value={frozen}>{children}</LayoutRouterContext.Provider>
}

const PageAnimatePresence = ({children}: IChildren) => {
  const pathname = usePathname()

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Fragment key={pathname}>
        <FrozenRoute>{children}</FrozenRoute>
      </Fragment>
    </AnimatePresence>
  )
}

export default PageAnimatePresence
