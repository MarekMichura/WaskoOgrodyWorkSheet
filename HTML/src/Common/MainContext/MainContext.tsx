import {useEffect, useReducer} from 'react'
import {BrowserRouter} from 'react-router-dom'
import {ThemeProvider} from 'styled-components'
import MainReducer from './mainReducer'
import {defState} from './type/IState'
import {themeSwitch} from './theme/themeSwitch'
import {MainAction} from './global/ACTION'
import {NotificationComponents} from './notification'
import Context from './type/Context'
import GlobalStyle, * as CSS from './css'
import MyRoutes from './route/ConRoute'

const loadingDiv = document.querySelector('#loading_container') as HTMLDivElement

function MainContext() {
  const [state, dispatch] = useReducer(MainReducer, defState)
  const {title, loading, theme, notifications} = state
  let timeOut: NodeJS.Timeout | undefined = undefined

  useEffect(() => {
    document.title = title
  }, [title])

  useEffect(() => {
    const open = loading.length > 0
    loadingDiv.dataset['open'] = `${open}`
    clearTimeout(timeOut)

    if (open) {
      loadingDiv.dataset['stop'] = `${open}`
    } else {
      timeOut = setTimeout(() => {
        loadingDiv.dataset['stop'] = `${open}`
      }, 1000)
    }
  }, [loading])

  useEffect(() => {
    dispatch({action: MainAction.INIT, dispatch})
  }, [])

  return (
    <Context.Provider value={{dispatch, state: state}}>
      <BrowserRouter>
        <ThemeProvider theme={themeSwitch[theme]}>
          <GlobalStyle />
          <MyRoutes />
          <CSS.Notifications>
            {notifications.map(({uID, text, type, life}) => {
              const Notification = NotificationComponents[type]
              return <Notification key={uID} text={text} life={life} uID={uID} />
            })}
          </CSS.Notifications>
        </ThemeProvider>
      </BrowserRouter>
    </Context.Provider>
  )
}

export default MainContext
