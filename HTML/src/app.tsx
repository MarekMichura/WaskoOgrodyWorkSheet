import {ErrorBoundary} from 'react-error-boundary'
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

  const loading = notification.isPending || profil.isPending || theme.isPending
  if (theme.isError || notification.isError) {
    const Error = endPoints[IAdditionalRoute.Error].lazy
    return <Error />
  }

  return (
    <ErrorBoundary FallbackComponent={endPoints[IAdditionalRoute.Error].lazy}>
      <ThemeProvider theme={IThemeSwitch[theme.data]}>
        <GlobalStyle />
        <SuspendWrapper
          forceOpen={loading}
          openDefault={true}
          text={loading ? 'Próba przywrócenia sesji' : 'Ładowanie strony'}>
          <MyRoute />
        </SuspendWrapper>
        <Notifications />
      </ThemeProvider>
    </ErrorBoundary>
  )
}
