import React from 'react'

import type IHomeLayoutContext from './_type/IContext'
import type IHomeLayoutState from './_type/IState'

export const homeLayoutStateDefault: IHomeLayoutState = {
  sections: [],
}

export const homeLayoutContextDefault: IHomeLayoutContext = [homeLayoutStateDefault, () => {}]
const homeLayoutContext = React.createContext(homeLayoutContextDefault)
export default homeLayoutContext
