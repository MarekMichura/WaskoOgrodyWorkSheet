import {useMemo, useState} from 'react'
import {ErrorBoundary} from 'react-error-boundary'
import {Outlet, useLocation, useNavigate} from 'react-router-dom'

import Button from '/button/button'
import {useMutationLogout} from '/query/profile/logout'
import {useProfile} from '/query/profile/useProfile'
import {useMutationChangeTheme} from '/query/theme/changeTheme'
import {useTheme} from '/query/theme/useTheme'
import {error} from '/route/imports'
import {linkData} from '/route/linkData'
import LoadingSuspense from '/suspense/suspense'
import BellIcon from '/svg/Bell'
import DownloadIcon from '/svg/Download'
import FaceIcon from '/svg/Face'
import LogoIcon from '/svg/Logo'
import MenuIcon from '/svg/Menu'
import ThemeModeIcon from '/svg/ThemeMode'

import linksData from './linksData'
import styles from './main.module.scss'

interface mainPageState {
  open: boolean
  openMenu: false | 'profile' | 'notification'
}

const {container, content} = styles
const {nav, logo, logoText, navElements, navScroll, btn, disBtn, btnIcon, btnText} = styles
const {header, left, right, iconCon, iconNum, icon} = styles
const {menu, menuCon, menuBG, menuProfileLine, menuIcon, menuBtn} = styles
function MainPage() {
  const [{open, openMenu}, setState] = useState<mainPageState>({open: false, openMenu: false})
  const {mutateAsync: changeThemeAsync} = useMutationChangeTheme()
  const {mutate: logout} = useMutationLogout()
  const {data: profile} = useProfile(['data'])
  const {data: theme} = useTheme(['data'])
  const {pathname} = useLocation()
  const navigate = useNavigate()

  const {firstName, lastName, roles} = profile!
  const links = useMemo(() => linksData(profile?.permissions), [profile])
  const selected = useMemo(() => {
    const path = decodeURIComponent(pathname)
    if (path === '/') return -1
    const id = Number(Object.entries(linkData).find(([, val]) => path.includes(val))?.[0])
    if (isNaN(id)) return undefined
    return id
  }, [pathname])

  function changeTheme() {
    changeThemeAsync()
  }
  function changOpen() {
    setState((state) => ({...state, open: !state.open}))
  }
  function openMenuProfile() {
    setState((state) => ({...state, openMenu: 'profile'}))
  }
  function openMenuNotification() {
    setState((state) => ({...state, openMenu: 'notification'}))
  }
  function closeMenu() {
    setState({open: false, openMenu: false})
  }
  function navigateMain() {
    navigateTo('/')
  }
  function navigateTo(path: string) {
    navigate(path)
  }
  function logOut() {
    logout()
  }

  return (
    <div className={container} data-open={open}>
      <main className={content}>
        <LoadingSuspense>
          <ErrorBoundary FallbackComponent={error.lazy}>
            <Outlet />
          </ErrorBoundary>
        </LoadingSuspense>
      </main>
      <nav className={nav}>
        <Button className={logo} onClick={() => navigateTo('/')}>
          <LogoIcon />
          <span className={logoText}>Wasko ogrody</span>
        </Button>
        <div className={navElements}>
          <div className={navScroll}>
            <Button data-selected={selected === -1} className={`${btn} ${disBtn}`} onClick={navigateMain}>
              <div className={btnIcon}>
                <LogoIcon />
              </div>
              <span className={btnText}>Strona główna</span>
            </Button>
            {links.map(({id, com, Icon, text, path}) => (
              <Button
                key={id}
                data-selected={selected === id}
                onMouseEnter={com}
                className={btn}
                onClick={() => navigateTo(path)}>
                <div className={btnIcon}>
                  <Icon />
                </div>
                <span className={btnText}>{text}</span>
              </Button>
            ))}
          </div>
        </div>
      </nav>
      <header className={header}>
        <div className={left}>
          <MenuIcon className={icon} status={open} onClick={changOpen} />
        </div>
        <div className={right}>
          <Button className={iconCon}>
            <DownloadIcon className={icon} />
          </Button>
          <Button className={iconCon} onClick={openMenuNotification}>
            <BellIcon className={icon} />
            <span className={iconNum}>9</span>
          </Button>
          <Button className={iconCon} onClick={openMenuProfile}>
            <FaceIcon className={icon} />
          </Button>
          <Button className={iconCon} onClick={changeTheme}>
            <ThemeModeIcon className={icon} status={theme === 'dark'} />
          </Button>
        </div>
        <div className={menu} data-open={openMenu === 'profile'}>
          <section className={menuCon}>
            <div className={menuProfileLine}>
              <div className={menuIcon}>
                <FaceIcon />
              </div>
              <div>
                <div>
                  {firstName} {lastName}
                </div>
                <div>{roles?.[0]}</div>
              </div>
            </div>
            <hr />
            <Button className={menuBtn} onClick={logOut}>
              Wyloguj się
            </Button>
          </section>
        </div>
        <div className={menu} data-open={openMenu === 'notification'}>
          <div className={menuCon}>
            <div>brak notyfikacji</div>
          </div>
        </div>
        <div className={menuBG} data-open={openMenu !== false || open} onClick={closeMenu}></div>
      </header>
    </div>
  )
}

export default MainPage
