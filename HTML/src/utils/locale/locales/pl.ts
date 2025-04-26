import {EDayPL} from '@/utils/type/EDay'
import {EMonthPL} from '@/utils/type/EMonth'
import {ERoutesPL} from '@/utils/type/ERoutes'

import {type ILocalization} from './en'

const pl: ILocalization = {
  route: ERoutesPL,
  months: EMonthPL,
  day: EDayPL,
  nav: {
    date: 'Godziny pracy',
    getWorkingHours: 'Przeglądaj godziny pracy',
    setWorkingHours: 'Zarejestruj godziny pracy',
    askDayOff: 'Zawnioskuj o dzień wolny',

    money: 'Pieniądze',
    askBonus: 'Zawnioskuj o premię',
    setPledgedMoney: 'Zwróć poniesione koszty',

    gardener: 'Ogrodnik',
    setChords: 'Wprowadź akordy',

    account: 'Konto',
    locale: 'Zmień język',
    logout: 'Wyloguj się',
    changeTheme: 'Zmień motyw',
    setComment: 'Dodaj notatkę',
  },
  toast: {
    loading: 'Ładowanie',
    error: 'Błąd',
    success: 'Sukces',
    warning: 'Ostrzezenie',
    information: 'Informacja',
  },
  login: {
    title: 'Zaloguj się',
    pageTitle: 'Strona logowania | Wawel garden',
    formLogin: 'Nazwa użytkownika',
    formPassword: 'Hasło',
    formSubmit: 'Zaloguj się',
    loading: 'Logowanie...',
    errorInvalidLogin: 'Login musi zawierać przynajmniej 5 znaków',
    errorInvalidPassword: 'Hasło musi mieć minimum 8 znaków',
    errorFormat: 'Niepoprawny format danych',
    errorAuth: 'Nieprawidłowy login lub hasło',
    errorServer: 'Wystąpił problem podczas połączenia z serwerem',
    success: 'Zalogowano się',
  },
  logout: {
    loading: 'Oczekiwanie na wylogowanie...',
    logout: 'Pomyślnie wylogowano się',
    success: 'Zakończono Twoją sesję',
    fail: 'Podczas usuwania sesji wystąpił problem',
  },
  profil: {
    role: 'Role użytkownika:',
    details: 'Szczegóły profilu',
    title: 'Profil użytkownika | Wawel garden',
    name: 'Imię',
    lastName: 'Nazwisko',
    date: 'Data rozpoczęcia zatrudnienia',
  },
  employerViewWorkingHours: {
    title: 'Godziny pracy',
    pageTitle: 'Godziny pracy | Wawel garden',
  },
} as const

export default pl
