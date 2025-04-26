import {EDayEN} from '@/utils/type/EDay'
import {EMonthEN} from '@/utils/type/EMonth'
import {ERoutesEN} from '@/utils/type/ERoutes'

const en = {
  route: ERoutesEN,
  months: EMonthEN,
  day: EDayEN,
  nav: {
    date: 'Work Hours',
    getWorkingHours: 'View working hours',
    setWorkingHours: 'Record working hours',
    askDayOff: 'Request time off',

    money: 'Finance',
    askBonus: 'Request bonus',
    setPledgedMoney: 'Reimburse expenses',

    gardener: 'Gardener',
    setChords: 'Enter chords',

    account: 'Account',
    locale: 'Change language',
    logout: 'Log out',
    changeTheme: 'Change theme',
    setComment: 'Add note',
  },
  toast: {
    loading: 'Loading...',
    error: 'Error',
    success: 'Success',
    warning: 'Warning',
    information: 'Information',
  },
  login: {
    title: 'Sign in',
    pageTitle: 'Sign in | Wawel Garden',
    formLogin: 'User name',
    formPassword: 'Password',
    formSubmit: 'Login',
    loading: 'Login in...',
    errorInvalidLogin: 'Username must be at least 5 characters long',
    errorInvalidPassword: 'Password must contain at least 8 characters',
    errorFormat: 'Invalid data format',
    errorAuth: 'Invalid username or password',
    errorServer: 'An error occurred while connecting to the server',
    success: 'Logged in',
  },
  logout: {
    loading: 'Logging out...',
    logout: 'Successfully logged out',
    success: 'Your session has ended',
    fail: 'There was an issue while attempting to end the session',
  },
  profil: {
    role: 'User roles:',
    details: 'User profile details',
    title: 'User profil | Wawel garden',
    name: 'First Name',
    lastName: 'Last Name',
    date: 'Employment Start Date',
  },
  employerViewWorkingHours: {
    title: 'Working hours',
    pageTitle: 'Working hours | Wawel garden',
  },
} as const

type Stringify<T> = {[K in keyof T]: T[K] extends object ? Stringify<T[K]> : string}
export type ILocalization = Stringify<typeof en>
export type ILocalizationKeys = keyof typeof en
export type ILocalizationSecondKeys<T extends ILocalizationKeys> = keyof (typeof en)[T]
export default en
