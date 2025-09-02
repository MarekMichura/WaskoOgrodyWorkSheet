import {type IChildren} from '@/utils/type/IChildren'

import HomeFooter from './_com/footer/footer'
import HomeHeader from './_com/header/header'
import ScrollSmooth from './_com/scrollSmooth/scrollSmooth'

function HomeLayout({children}: IChildren) {
  return (
    <ScrollSmooth>
      <HomeHeader />
      {children}
      <HomeFooter />
    </ScrollSmooth>
  )
}

export default HomeLayout
