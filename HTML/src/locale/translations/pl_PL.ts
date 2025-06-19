import {EProjects} from '@/utils/enum/EProject'

import {type ILocalization} from './en_US'

const pl: ILocalization = {
  nav: {
    mainPage: 'Strona główna',
    contact: 'Kontakt',

    architecture: 'Planowanie',
    greenLand: 'przestrzenie',
    greenMaintenance: 'Zagospodarowanie',
    greenRoof: 'Zielone dachy',
    plantings: 'Nasiewanie',
    projects: 'Realizacje',

    close: 'Zamknij',
    open: 'Otwórz',
    setLang: 'Wybierz język',
    changeTheme: 'Zmień motyw',
    links: 'Odnośniki:',
    communication: 'Kontakt:',
    address: 'Adres: ',
    follow: 'Śledź nas również:',
  },

  sections: {
    select: 'Wybierz',

    heroImg: 'Góra',
    meet: 'Poznaj nas',
    service: 'Nasze usługi',
    trusteed: 'Oni nam zaufali',
  },

  home: {
    title: 'Wawel Garden',

    icons: {
      title: 'Poznaj Nasze Mocne Strony',
      desc: 'Poznaj Nasze Mocne Strony',

      greenLandTitle: 'Zmieniamy przestrzeń w zielone doświadczenie',
      greenLandDest:
        'Zespół naszych projektantów i wykonawców to ludzie z pasją, doświadczeniem i wyczuciem stylu. Wiemy, jak połączyć zieleń z architekturą, technologią i komfortem użytkowania.',

      greenRoofTitle: 'Zielone dachy',
      greenRoofDest: `Zielony dach to coś więcej niż modny trend – to świadomy wybór estetyki, ekologii i komfortu. Tworzymy dachy, które nie tylko cieszą oko, ale realnie poprawiają jakość życia i przestrzeni wokół. Chcesz, żeby dach Twojego budynku pracował na Twoją korzyść? Z nami to możliwe. Projektujemy i wykonujemy dachy zielone – intensywne i ekstensywne – dopasowane do architektury, warunków technicznych i Twoich oczekiwań.`,

      plantingsTitle: 'Nasadzenia',
      plantingsDest:
        'Tworzymy zielone układy, które rosną razem z otoczeniem – naturalnie, harmonijnie i z efektem „wow” przez cały rok.',

      architectureTitle: 'Bruki i mała architektura',
      architectureDest:
        'Projektujemy i wykonujemy nawierzchnie oraz elementy małej architektury, które nie tylko są trwałe, ale też perfekcyjnie wpisują się w otoczenie. Od alejek i podjazdów, przez tarasy i murki oporowe, aż po designerskie donice, pergole i oświetlenie – każdy detal ma znaczenie.',

      greenMaintenanceTitle: 'Pielęgnacja zieleni',
      greenMaintenanceDest:
        'Nie działamy „z doskoku”. Tworzymy harmonogramy, monitorujemy kondycję roślin i reagujemy zanim problem się pojawi. Nasz serwis to więcej niż koszenie – to prawdziwa opieka nad krajobrazem.',

      projectsTitle: 'Projektowanie',
      projectsDest:
        'Tworzymy projekty zieleni, które łączą estetykę z praktyką. Myślimy o świetle, widokach, proporcjach, materiałach – i przede wszystkim o Tobie. Każdy projekt to indywidualna historia, opowiedziana roślinami, linią ścieżki i detalem architektonicznym.',
    },

    trusteed: {
      title: 'Zaufali nam',
      subTitle: 'Dołącz do tej listy',
    },
  },

  project: {
    [EProjects.architecture]: {link: '/Planowanie'},
    [EProjects.greenLand]: {link: '/Przestrzenie'},
    [EProjects.greenMaintenance]: {link: '/Zagospodarowanie'},
    [EProjects.greenRoof]: {link: '/Dachy'},
    [EProjects.plantings]: {link: '/Nasiewanie'},
    [EProjects.projects]: {link: '/Realizacje'},
  },

  dashboard: {
    nav: {
      work: 'Praca',
      getWorkHours: 'Pokaż godziny pracy',
      setWorkHours: 'Ustaw godziny pracy',
      dayOff: 'Poproś o dzień wolny',

      money: 'Finanse',
      askBonus: 'Poproś o bonus',
      reimburse: 'Poproś o zwrot poniesionych kosztów',

      gardener: 'Ogrodnictwo',
      chords: 'Wprowadz akordy',

      account: 'Konto',
      locale: 'Ustaw język',
      comment: 'Zamieść komentarz',
      logout: 'Wyloguj się',
    },

    profil: {
      role: 'Role użytkownika:',
      details: 'Szczegóły profilu',
      title: 'Profil użytkownika | Wawel garden',
      name: 'Imię',
      lastName: 'Nazwisko',
      date: 'Data zatrudnienia',
    },
  },

  login: {
    pageTitle: 'Zaloguj się',
    title: 'Zaloguj się',

    userName: 'Nazwa użytkownika',
    password: 'Hasło',
    send: 'Zaloguj się',

    errorLoginFail: 'Niepoprawny login lub hasło',
    errorInvalidLogin: 'Niepoprawny login',
    errorInvalidPassword: 'Niepoprawne hasło',
  },
} as const

export default pl
