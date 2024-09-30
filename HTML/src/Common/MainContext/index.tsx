import {useEffect, useReducer, useState} from 'react'
import {BrowserRouter} from 'react-router-dom'
import {ThemeProvider} from 'styled-components'

import {MainAction} from '/global/MAIN_ACTION'
import Context from '/MContext'

import MainReducer from './mainReducer'
import ErrorNotification from './notification/error'
import InfoNotification from './notification/info'
import SuccessNotification from './notification/success'
import WarnNotification from './notification/warn'
import MyRoutes from './route/ConRoute'
import {themeSwitch} from './theme/themeSwitch'
import {INotificationType} from './type/INotification'
import {defState} from './type/IState'

import GlobalStyle, * as CSS from './css'

function MainContext() {
  const [state, dispatch] = useReducer(MainReducer, defState)
  const {title, loading, theme, notifications, loadingStart} = state
  const [disableAnimation, setDisableAnimation] = useState(false)

  useEffect(() => {
    document.title = title
  }, [title])

  useEffect(() => {
    if (loadingStart) {
      setDisableAnimation(true)
      return
    }

    const timeout = setTimeout(() => {
      setDisableAnimation(false)
    }, 1000)

    return () => {
      clearTimeout(timeout)
    }
  }, [loadingStart])

  useEffect(() => {
    dispatch({action: MainAction.INIT, dispatch})
  }, [])

  return (
    <Context.Provider value={{dispatch, state: state}}>
      <BrowserRouter>
        <ThemeProvider theme={themeSwitch[theme]}>
          <GlobalStyle />
          <MyRoutes />
          <CSS.LoadingContainer $start={loadingStart}>
            <CSS.LoadingContent $start={loadingStart}>
              <CSS.LoadingMelon $start={disableAnimation} />
              <CSS.LoadingTitleContainer>
                {loading.map((a, k) => (
                  <CSS.LoadingTitle key={k}>{a}</CSS.LoadingTitle>
                ))}
              </CSS.LoadingTitleContainer>
            </CSS.LoadingContent>
          </CSS.LoadingContainer>
          <CSS.Notifications>
            {notifications.map(({uID, text, type, life}) => {
              switch (type) {
                case INotificationType.error:
                  return <ErrorNotification key={uID} text={text} life={life} uID={uID} />
                case INotificationType.info:
                  return <InfoNotification key={uID} text={text} life={life} uID={uID} />
                case INotificationType.success:
                  return <SuccessNotification key={uID} text={text} life={life} uID={uID} />
                case INotificationType.warning:
                  return <WarnNotification key={uID} text={text} life={life} uID={uID} />
              }
            })}
          </CSS.Notifications>
        </ThemeProvider>
      </BrowserRouter>
    </Context.Provider>
  )
}

export default MainContext
