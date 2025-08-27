import {type IStringify} from '@/utils/type/IStringify'

const pl = {
  header: {
    info: 'O nas',
    map: 'Mapa realizacji',
    roofs: 'Zielone dachy',
    projects: 'Zrealizowane projekty',
    contact: 'Kontakt',
  },
  footer: {
    copyright: 'Wszystkie prawa zastrzeżone',
    contact: 'Kontakt',
    follow: 'Śledź nas',
    fb: 'Facebook',
    ig: 'Instagram',
  },
  home: {
    hero: {
      title: 'Wawel Garden',
      desc: 'Zmieniamy przestrzeń w zielone doświadczenie',
    },

    tiles: {
      title: 'Nasze usługi',
      desc: 'Naszą misją jest tworzenie funkcjonalnych i ekologicznych przestrzeni zielonych, które poprawiają jakość życia i wspierają zrównoważony rozwój. WawelGarden oferuje kompleksową obsługę - od projektu, przez realizację, po utrzymanie - zawsze dostosowaną do specyfiki inwestycji i oczekiwań klienta.',
      btn: 'Dowiedz się więcej',

      landscaping: {
        title: 'Zielona Zmiana',
        subtitle: 'Zmieniamy przestrzeń w wspaniałe doświadczenie',
        desc: 'Szukasz czegoś więcej niż tylko ładnego ogrodu? My tworzymy zielone przestrzenie z charakterem.',
      },
      roof: {
        title: 'Zielone dachy',
        subtitle: 'zielona przestrzeń w sercu miasta',
        desc: 'Zielony dach to coś więcej niż modny trend - to świadomy wybór estetyki, ekologii i komfortu. Tworzymy dachy, które nie tylko cieszą oko, ale realnie poprawiają jakość życia i przestrzeni wokół.',
      },
      planting: {
        title: 'Nasadzenia',
        subtitle: 'zielona inwestycja z charakterem',
        desc: 'Rośliny to nie tylko dekoracja - to fundament każdej przemyślanej przestrzeni. Dlatego nasadzenia traktujemy jak projekt architektoniczny: z uwzględnieniem kompozycji, sezonowości, funkcji i warunków siedliskowych.',
      },
      architecture: {
        title: 'Bruki i mała architektura',
        subtitle: 'solidna podstawa stylowej przestrzeni',
        desc: 'Piękna zieleń potrzebuje równie dobrej oprawy. Dlatego tam, gdzie kończy się trawnik, zaczynamy my - z brukiem, detalem i architekturą, która nadaje przestrzeni charakter.',
      },
      maintenance: {
        title: 'Pielęgnacja zieleni',
        subtitle: 'bo każdy ogród potrzebuje opieki',
        desc: 'Nawet najlepiej zaprojektowana przestrzeń zielona wymaga troski, by zachwycać przez cały rok. Oferujemy kompleksową pielęgnację zieleni - od ogrodów prywatnych po rozległe tereny firmowe i inwestycje publiczne.',
      },
      Project: {
        title: 'Projektowanie zieleni',
        subtitle: 'od koncepcji po perfekcyjne wykonanie',
        desc: 'Dobrze zaprojektowana przestrzeń to taka, która nie tylko wygląda efektownie, ale też działa - funkcjonalnie, intuicyjnie, z myślą o codziennym użytkowaniu.',
      },
    },
    cards: {
      title: 'Przeglądaj nasze realizacje',
      desc: 'Poznaj sposoby, w jakie tworzona przez nas zieleń zmienia świat. Nasze realizacje udowadniają, że odpowiednio zaprojektowana przestrzeń potrafi inspirować, budować tożsamość miejsc i tworzyć harmonię pomiędzy nowoczesną architekturą a naturalnym pięknem przyrody.',
      cardName: 'Nazwa projektu',
      cardTitle: 'Zieleń',
      cardAddress: 'Adres',
      cardDesc: 'Opis',

      wizjonerow: {
        name: 'Osiedle Wizjonerów, etap "Pod Francuzem"',
        title: 'Zieleń, która inspiruje',
        desc: 'Dla inwestycji Mieszkaj w Mieście - Osiedle Wizjonerów, etap „Pod Francuzem”, zrealizowaliśmy kompleksowe prace, tworząc przestrzeń, w której miejski rytm spotyka się z naturalnym urokiem zieleni.',
      },
      hotel: {
        name: 'Shed Living Hotel',
        title: 'Zieleń, która buduje wizerunek',
        desc: 'Dla inwestycji Shed Living Hotel wykonaliśmy kompleksowe zagospodarowanie terenów zielonych, łącząc rozwiązania proekologiczne z nowoczesnym designem.',
      },
      maspex: {
        name: 'Maspex',
        title: 'Zieleń na dachu siedziby głównej',
        desc: 'Dla firmy Maspex zaprojektowaliśmy i wykonaliśmy użytkowy dach zielony, który stał się funkcjonalnym i estetycznym elementem siedziby głównej.',
      },
      pychowicka: {
        name: 'Pychowicka',
        title: 'Zieleń na wysokościach',
        desc: 'Dla inwestora prywatnego zrealizowaliśmy projekt, w którym nowoczesna architektura zyskała wyjątkową oprawę zieleni  zarówno w przestrzeni naziemnej, jak i na dachach.',
      },
      stawowa: {
        name: 'Stawowa Residence - etap V',
        title: '',
        desc: 'Dla inwestycji Stawowa Residence - etap V, realizowanej przez Imperial Capital, stworzyliśmy estetyczną i funkcjonalną aranżację przestrzeni, łączącą naturalne materiały i nowoczesne rozwiązania.',
      },
      glogera: {
        name: 'Ogrody Glogera - Etap A',
        title: 'Zielona przestrzeń w sercu inwestycji',
        desc: 'Dla prestiżowej firmy Henninger Investments zrealizowaliśmy projekt Ogrody Glogera, w którym nowoczesne rozwiązania spotykają się z harmonią natury. W ciągu zaledwie 1,5 miesiąca stworzyliśmy przestrzeń łączącą funkcjonalność, estetykę i trwałość.',
      },
    },
  },
  roof: {
    hero: {
      title: 'Zielone dachy',
      desc: '',
    },

    tiles: {
      title: 'Zielone dachy',
      desc: 'Zielony dach to coś więcej niż modny trend - to świadomy wybór estetyki, ekologii i komfortu. Tworzymy dachy, które nie tylko cieszą oko, ale realnie poprawiają jakość życia i przestrzeni wokół.',
    },

    cards: {
      title: 'Zielone Dachy - Ekologia i Design',
      desc: 'Zielone dachy to innowacyjne rozwiązanie łączące nowoczesną architekturę z ekologią. Powstają poprzez warstwowe układanie systemów drenażowych, substratów oraz roślin odporowych na warunki atmosferyczne. Dzięki nim przestrzeń miejska zyskuje naturalną izolację termiczną, poprawę jakości powietrza i retencję wody deszczowej. Zielone dachy wspierają bioróżnorodność, redukują efekt miejskiej wyspy ciepła i przyczyniają się do zrównoważonego rozwoju miast. Idealnie łączą estetykę z korzyściami środowiskowymi, tworząc przestrzenie przyjazne dla ludzi i przyrody.',
    },
  },
} as const

export type ILocalization = IStringify<typeof pl>
export default pl
