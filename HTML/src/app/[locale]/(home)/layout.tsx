import {type IChildren} from '@/utils/type/IChildren'

import ScrollSmooth from './_com/scrollSmooth/scrollSmooth'

function HomeLayout({children}: IChildren) {
  return <ScrollSmooth>{children}</ScrollSmooth>
}

export default HomeLayout
