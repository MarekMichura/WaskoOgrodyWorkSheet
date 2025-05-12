import HomeLayoutContext from '@/utils/context/homeLayoutContext/context'
import {type IChildren} from '@/utils/types/IChildren'

import HomeFooter from './_com/footer/footer'
import HomeHeader from './_com/header/header'

function HomeLayout({children}: IChildren) {
  return (
    <HomeLayoutContext>
      <HomeHeader />
      {children}
      <HomeFooter />
    </HomeLayoutContext>
  )
}

export default HomeLayout
