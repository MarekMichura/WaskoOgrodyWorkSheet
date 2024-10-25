import {ThemeProvider} from 'styled-components'

import {Notifications} from '/QueryFn/Notification/tsx'
import {useNotification} from '/QueryFn/Notification/useNotification'
import {useProfil} from '/QueryFn/profil/useProfil'
import {IThemeSwitch} from '/QueryFn/Theme/types/IThemeSwitch'
import {useTheme} from '/QueryFn/Theme/useTheme'
import {endPoints, IAdditionalRoute} from '/Router/IRoute'
import {SuspendWrapper} from '/Suspend'

import {MyRoute} from './Common/Router'
import {GlobalStyle} from './GlobalStyle'

export const App = () => {
  const notification = useNotification()
  const profil = useProfil()
  const theme = useTheme()

  if (notification.isPending || profil.isPending || theme.isPending) return <></>
  if (!theme.isSuccess || !notification.isSuccess) {
    const Error = endPoints[IAdditionalRoute.Error]
    return <Error />
  }

  return (
    <ThemeProvider theme={IThemeSwitch[theme.data]}>
      <GlobalStyle />
      <SuspendWrapper open={false} text="Wczytywanie danych">
        <MyRoute />
      </SuspendWrapper>
      <Notifications />
    </ThemeProvider>
  )
}
