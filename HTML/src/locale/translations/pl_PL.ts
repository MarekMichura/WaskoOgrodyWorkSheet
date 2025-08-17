import {type IStringify} from '@/utils/type/IStringify'

const pl = {
  home: {
    nav: {
      contact: 'Kontakt',
      info: 'O nas',
      map: 'Mapa realizacji',
      projects: 'Zrealizowane projekty',
    },

    footer: {
      copyright: 'Wszystkie prawa zastrzeżone',
      contact: 'Kontakt',
      follow: 'Śledź nas',
      fb: 'Facebook',
      ig: 'Instagram',
    },

    hero: {
      title: 'Zmieniamy przestrzeń w zielone doświadczenie',
      subtitle:
        'Naszą misją jest tworzenie funkcjonalnych i ekologicznych przestrzeni zielonych, które przyczyniają się do poprawy jakości życia oraz wspierają zrównoważony rozwój. Zapewniamy kompleksowe wsparcie na każdym etapie realizacji - począwszy od optymalizacji projektu, poprzez wykonawstwo, aż po utrzymanie i serwis gotowych rozwiązań. WawelGarden wyróżnia indywidualne podejście do każdego klienta, co pozwala nam dostosować ofertę do specyfiki inwestycji oraz oczekiwań odbiorców.',
      explore: 'Przeglądaj nasze projekty',
      contact: 'Skontaktuj się z nami',
    },

    sect: {
      btn: 'Pokaż więcej',

      Planting: {
        title: 'Nasadzenia',
        subtitle: 'zielona inwestycja z charakterem',
        text: [
          {
            type: 'p',
            text: 'Rośliny to nie tylko dekoracja - to fundament każdej przemyślanej przestrzeni. Dlatego nasadzenia traktujemy jak projekt architektoniczny: z uwzględnieniem kompozycji, sezonowości, funkcji i warunków siedliskowych.',
          },
          {
            type: 'p',
            text: 'Tworzymy zielone układy, które rosną razem z otoczeniem - naturalnie, harmonijnie i z efektem „wow” przez cały rok.',
          },
          {
            type: 'list',
            element: [
              '🌳 Drzewa i krzewy szlachetnych odmian',
              '🌿 Byliny i trawy ozdobne',
              '🌸 Rabaty, ogrody tematyczne, nasadzenia miejskie i reprezentacyjne',
              '🧠 Dobór gatunków oparty na wiedzy i doświadczeniu',
            ],
          },
          {
            type: 'p',
            text: 'Stawiamy na rośliny z renomowanych szkółek, gwarantując ich zdrowie, odpowiedni pokrój i wysoką odporność. A wszystko po to, żeby Twoja inwestycja była nie tylko piękna, ale też trwała i bezproblemowa w utrzymaniu.',
          },
          {
            type: 'p',
            text: 'Z nami każde nasadzenie to przemyślany, zielony akcent z klasą',
          },
        ],
      },
      Architecture: {
        title: 'Bruki i mała architektura',
        subtitle: 'solidna podstawa stylowej przestrzeni',
        text: [
          {
            type: 'p',
            text: 'Piękna zieleń potrzebuje równie dobrej oprawy. Dlatego tam, gdzie kończy się trawnik, zaczynamy my - z brukiem, detalem i architekturą, która nadaje przestrzeni charakter.',
          },
          {
            type: 'p',

            text: 'Projektujemy i wykonujemy nawierzchnie oraz elementy małej architektury, które nie tylko są trwałe, ale też perfekcyjnie wpisują się w otoczenie. Od alejek i podjazdów, przez tarasy i murki oporowe, aż po designerskie donice, pergole i oświetlenie - każdy detal ma znaczenie.',
          },
          {
            type: 'list',
            element: [
              '🧱 Bruki i nawierzchnie z kamienia, kostki, płyt wielkoformatowych',
              '🪑 Elementy drewniane, stalowe, betonowe - zawsze w odpowiednim stylu',
              '🌉 Łączenie funkcji użytkowych z estetyką',
              '🔧 Precyzja wykonania i trwałość na lata',
            ],
          },
          {
            type: 'p',
            text: 'Tworzymy przestrzenie, które są nie tylko funkcjonalne, ale też przyjemne w codziennym użytkowaniu. Wszystko po to, byś mógł cieszyć się spójną, nowoczesną i dopracowaną przestrzenią na każdym kroku.',
          },
          {
            type: 'p',
            text: 'Bruk i detal - bo w ogrodzie liczy się więcej niż tylko zieleń.',
          },
        ],
      },
      Maintenance: {
        title: 'Pielęgnacja zieleni',
        subtitle: 'bo każdy ogród potrzebuje opieki',
        text: [
          {
            type: 'p',
            text: 'Nawet najlepiej zaprojektowana przestrzeń zielona wymaga troski, by zachwycać przez cały rok. Oferujemy kompleksową pielęgnację zieleni - od ogrodów prywatnych po rozległe tereny firmowe i inwestycje publiczne.',
          },
          {
            type: 'p',
            text: 'Nie działamy „z doskoku”. Tworzymy harmonogramy, monitorujemy kondycję roślin i reagujemy zanim problem się pojawi. Nasz serwis to więcej niż koszenie - to prawdziwa opieka nad krajobrazem.',
          },
          {
            type: 'list',
            element: [
              '✂️ Cięcia formujące, sanitarne i techniczne drzew oraz krzewów',
              '🌿 Koszenie, nawożenie, odchwaszczanie, mulczowanie',
              '💧 Systemy nawadniania i kontrola wilgotności',
              '📅 Stałe umowy serwisowe lub jednorazowe interwencje',
            ],
          },
          {
            type: 'p',
            text: 'Działamy dyskretnie, sprawnie i z szacunkiem dla każdej rośliny - oraz Twojego czasu. Dbamy, by zieleń była nie tylko zadbana, ale też zdrowa, bezpieczna i reprezentacyjna.',
          },
          {
            type: 'p',
            text: 'Twój ogród nie musi się prosić o uwagę - z nami jest zawsze w formie.',
          },
        ],
      },
      Project: {
        title: 'Projektowanie zieleni',
        subtitle: 'od koncepcji po perfekcyjne wykonanie',
        text: [
          {
            type: 'p',
            text: 'Dobrze zaprojektowana przestrzeń to taka, która nie tylko wygląda efektownie, ale też działa - funkcjonalnie, intuicyjnie, z myślą o codziennym użytkowaniu.',
          },
          {
            type: 'p',
            text: 'Tworzymy projekty zieleni, które łączą estetykę z praktyką. Myślimy o świetle, widokach, proporcjach, materiałach - i przede wszystkim o Tobie. Każdy projekt to indywidualna historia, opowiedziana roślinami, linią ścieżki i detalem architektonicznym.',
          },
          {
            type: 'list',
            element: [
              '🖊 Koncepcje i wizualizacje 3D',
              '📐 Projekty wykonawcze i techniczne',
              '🌿 Dobór roślin, materiałów i małej architektury',
              '🧠 Zrównoważone rozwiązania, inteligentne systemy i myślenie przyszłościowe',
            ],
          },
          {
            type: 'p',
            text: 'Współpracujemy z architektami, inwestorami, deweloperami i klientami indywidualnymi - na każdym etapie. Chcesz mieć pewność, że Twoja przestrzeń będzie wyjątkowa i spójna? Zacznijmy od dobrze przemyślanego projektu.',
          },
          {
            type: 'p',
            text: 'Zaprojektujmy zieleń, która ma sens - i styl.',
          },
          {
            type: 'p',
            text: 'Projektujemy i tworzymy zieleń, która pracuje na Twój wizerunek',
          },
        ],
      },
      Roof: {
        title: 'Zielone dachy',
        subtitle: 'zielona przestrzeń w sercu miasta',
        text: [
          {
            type: 'p',
            text: 'Zielony dach to coś więcej niż modny trend - to świadomy wybór estetyki, ekologii i komfortu. Tworzymy dachy, które nie tylko cieszą oko, ale realnie poprawiają jakość życia i przestrzeni wokół.',
          },
          {
            type: 'p',
            text: '💡 Dlaczego warto?',
          },
          {
            type: 'p',
            text: 'Chcesz, żeby dach Twojego budynku pracował na Twoją korzyść? Z nami to możliwe. Projektujemy i wykonujemy dachy zielone - intensywne i ekstensywne - dopasowane do architektury, warunków technicznych i Twoich oczekiwań.',
          },
          {
            type: 'list',
            element: [
              'Redukcja hałasu i zanieczyszczeń$',
              'Naturalna termoizolacja (latem chłodzi, zimą grzeje)$',
              'Miejsce relaksu lub reprezentacyjna strefa zieleni$',
              'Dodatkowa wartość estetyczna i ekologiczna dla budynku$',
            ],
          },
          {
            type: 'p',
            text: 'Niezależnie, czy planujesz dach jako nowoczesny ogród, strefę wypoczynku, czy zieloną pokrywę dla biurowca - zadbamy o każdy szczegół: od warstw drenażowych po dobór roślin.',
          },
          {
            type: 'p',
            text: 'Zielony dach? U nas rośnie od pierwszego dnia.',
          },
        ],
      },
      Landscaping: {
        title: 'Zielona Zmiana',
        subtitle: 'Zmieniamy przestrzeń w wspaniałe doświadczenie',
        text: [
          {
            type: 'p',
            text: 'Szukasz czegoś więcej niż tylko ładnego ogrodu? My tworzymy zielone przestrzenie z charakterem.',
          },
          {
            type: 'p',
            text: 'funkcjonalne, estetyczne i perfekcyjnie dopasowane do Twoich potrzeb. Od ekskluzywnych ogrodów przy rezydencjach, przez nowoczesne dachy zielone w centrach miast, aż po kompleksowe zagospodarowanie terenów wokół firm i instytucji – działamy tam, gdzie liczy się jakość, detal i profesjonalne podejście.',
          },
          {
            type: 'p',
            text: 'Zespół naszych projektantów i wykonawców to ludzie z pasją, doświadczeniem i wyczuciem stylu. Wiemy, jak połączyć zieleń z architekturą, technologią i komfortem użytkowania.',
          },
          {
            type: 'list',
            element: ['🌿 Projektujemy', '🛠 Realizujemy', '🌱 Dbamy o każdy etap'],
          },
          {
            type: 'p',
            text: 'Z nami Twoja przestrzeń zyska nowy wymiar – zielony, harmonijny i niepowtarzalny.',
          },
        ],
      },
    },

    map: {
      pin: 'Nie daliście mi pozycji obiektów i ich opisów więc to jest puste.',
      btn: 'przejdz do budowy',
    },
  },

  calendar: {
    year: 'Rok',
    month: 'Miesiąc',
    day: 'Dzień',

    days: ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela'],
    months: [
      'Styczeń',
      'Luty',
      'Marzec',
      'Kwiecień',
      'Maj',
      'Czerwiec',
      'Lipiec',
      'Sierpień',
      'Wrzesień',
      'Październik',
      'Listopad',
      'Grudzień',
    ],
  },
} as const

export type ILocalization = IStringify<typeof pl>
export default pl
