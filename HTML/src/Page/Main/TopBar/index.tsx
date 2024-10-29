import {useQuery, useQueryClient} from '@tanstack/react-query'
import {useState} from 'react'

import {BellIcon} from '/Icon/BellIcon'
import {DownloadIcon} from '/Icon/Download'
import {FaceIcon} from '/Icon/FaceIcon'
import {MenuIcon} from '/Icon/MenuIcon'
import {ThemeModeIcon} from '/Icon/ThemeModeIcon'
import {IPwaQuery} from '/PwaCatch/index'
import {useLogOut} from '/QueryFn/profil/useLogOut'
import {useProfil} from '/QueryFn/profil/useProfil'
import {ITheme} from '/QueryFn/Theme/types/ITheme'
import {useTheme} from '/QueryFn/Theme/useTheme'

import * as CSS from './css'

enum IMenu {
  none,
  profil,
  notification,
}

interface IProps {
  openMenu: boolean
  changeOpenMenu: () => void
}

function TopBar({openMenu, changeOpenMenu}: IProps) {
  const client = useQueryClient()
  const {data} = useQuery<IPwaQuery>({queryKey: ['PWA']})
  const [menu, setMenu] = useState<IMenu>(IMenu.none)
  const logOut = useLogOut()
  const profil = useProfil()
  const theme = useTheme()
  const {firstName, lastName, userName, roles} = profil.data!

  const install = () => {
    client.setQueryData(['PWA'], {...data, click: true})
  }

  return (
    <CSS.Container>
      <CSS.Left>
        <MenuIcon cssSVG={CSS.Icon} status={openMenu} onClick={changeOpenMenu} />
        <CSS.Title>{document.title}</CSS.Title>
      </CSS.Left>
      <CSS.Right>
        {data!.state && (
          <CSS.IconCon onClick={install}>
            <DownloadIcon cssSVG={CSS.Icon} />
          </CSS.IconCon>
        )}
        <CSS.IconCon onClick={() => setMenu(IMenu.notification)}>
          <BellIcon cssSVG={CSS.Icon} />
          <CSS.BelNum data-value={10}>+</CSS.BelNum>
        </CSS.IconCon>
        <CSS.IconCon>
          <ThemeModeIcon cssSVG={CSS.Icon} status={theme.data == ITheme.THEME_DARK} onClick={theme.changeTheme} />
        </CSS.IconCon>
        <CSS.MenuCon onClick={() => setMenu(IMenu.profil)}>
          {userName}
          <FaceIcon cssSVG={CSS.Icon} />
        </CSS.MenuCon>
      </CSS.Right>
      <CSS.Menu data-open={menu == IMenu.profil}>
        <CSS.MenuItem>
          <CSS.UserFlex>
            <div>
              <FaceIcon cssSVG={CSS.BigIcon} />
            </div>
            <CSS.UserRightFlex>
              <div>
                {firstName} {lastName}
              </div>
              <div>{roles?.[0]}</div>
            </CSS.UserRightFlex>
          </CSS.UserFlex>
          <hr />
          <CSS.MenuOption onClick={() => logOut.mutate()}>Wyloguj się</CSS.MenuOption>
        </CSS.MenuItem>
      </CSS.Menu>
      <CSS.Menu data-open={menu == IMenu.notification}>
        <CSS.MenuItem>
          <CSS.MenuOption>Nie masz żadnych nowych powiadomień</CSS.MenuOption>
        </CSS.MenuItem>
      </CSS.Menu>
      <CSS.MenuBehind onClick={() => setMenu(IMenu.none)} data-open={menu != IMenu.none} />
    </CSS.Container>
  )
}

export default TopBar
