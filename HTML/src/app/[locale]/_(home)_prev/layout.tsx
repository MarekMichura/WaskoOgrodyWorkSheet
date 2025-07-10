'use client'

import {type IChildren} from '@/utils/type/IChildren'

import HomeBackBlur from './_com/backBlur/backBlur'
import HomeFooter from './_com/footer/footer'
import HomeHeader from './_com/header/header'
import ScrollSmooth from './_com/scroll/smoothScroll'

function HomeLayout({children}: IChildren) {
  return (
    <>
      <ScrollSmooth>
        {children}
        <HomeFooter />
      </ScrollSmooth>
      <HomeHeader />
      <HomeBackBlur />
    </>
  )
}

export default HomeLayout
