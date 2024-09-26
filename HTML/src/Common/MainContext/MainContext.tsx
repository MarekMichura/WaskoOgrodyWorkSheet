import {Outlet} from 'react-router-dom'

import {ACTION_INIT} from './global/ACTIONS'
import MainReducer from './MainReducer'
import {context} from './types/IContext'
import {StateDefault} from './types/IState'
import {useEffect, useReducer} from 'react'

function MainContext() {
  const [state, dispatch] = useReducer(MainReducer, StateDefault)

  useEffect(() => {
    dispatch({action: ACTION_INIT, dispatch})
  }, [])

  return (
    <context.Provider value={{dispatch}}>
      <Outlet />
    </context.Provider>
  )
}

export default MainContext
