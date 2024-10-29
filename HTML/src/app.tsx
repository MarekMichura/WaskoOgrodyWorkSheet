import {lazy} from 'react'
import {ErrorBoundary} from 'react-error-boundary'
import {ThemeProvider} from 'styled-components'

import {Notifications} from '/QueryFn/Notification/tsx'
import {ITheme} from '/QueryFn/Theme/types/ITheme'
import {IThemeSwitch} from '/QueryFn/Theme/types/IThemeSwitch'
import {useTheme} from '/QueryFn/Theme/useTheme'
import {endPoints, IAdditionalRoute} from '/Router/IRoute'

import {SuspendWrapper} from './Common/Suspend'
import {GlobalStyle} from './GlobalStyle'

const MyRoute = lazy(() => import('/Router/index').then((a) => ({default: a.MyRoute})))
export function App() {
  const theme = useTheme()

  return (
    <ThemeProvider theme={IThemeSwitch[theme.data ?? ITheme.THEME_LIGHT]}>
      <ErrorBoundary FallbackComponent={endPoints[IAdditionalRoute.Error].lazy}>
        <GlobalStyle />
        <SuspendWrapper text={'Ładowanie strony'}>
          <MyRoute />
        </SuspendWrapper>
        <Notifications />
      </ErrorBoundary>
    </ThemeProvider>
  )
}
