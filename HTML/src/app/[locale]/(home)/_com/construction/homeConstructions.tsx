import {EHomeParts} from '../../_goto/EHomeParts'

import {CONSTRUCTION_IMG} from './_data/img'
import s from './css.module.scss'
import HomeConstruction from './homeConstruction'

async function HomeConstructions() {
  return (
    <div className={s.con} id={EHomeParts.projects}>
      <HomeConstruction
        title="Shed Living Hotel"
        subTitle="Zieleń, która buduje wizerunek"
        textTop="Dla inwestycji Shed Living Hotel wykonaliśmy kompleksowe zagospodarowanie terenów zielonych, łącząc rozwiązania proekologiczne z nowoczesnym designem."
        listTitle="Zakres prac obejmował:"
        listElements={[
          'nasypy ziemne wokół budynku,',
          'montaż geokrat parkingowych,',
          'montaż elementów małej architektury,',
          'projekt i wykonanie dachu zielonego nad rampą wjazdową do garażu,',
          'instalację systemu automatycznego nawadniania,',
          'nasadzenia zieleni niskiej i drzew,',
          'ściółkowanie korą sosnową oraz prace pielęgnacyjne,',
          'montaż budek dla owadów wspierających bioróżnorodność.',
        ]}
        textBottom="Powstała przestrzeń jest nie tylko estetyczna, ale także funkcjonalna i przyjazna dla środowiska, stanowiąc doskonałe uzupełnienie architektury hotelu."
        img={CONSTRUCTION_IMG.hotel}
      />
      <hr />
      <HomeConstruction
        title={`Mieszkaj w Mieście - Osiedle Wizjonerów, etap "Pod Francuzem"`}
        subTitle="Zieleń, która inspiruje"
        textTop="Dla inwestycji Mieszkaj w Mieście - Osiedle Wizjonerów, etap „Pod Francuzem”, zrealizowaliśmy kompleksowe prace, tworząc przestrzeń, w której miejski rytm spotyka się z naturalnym urokiem zieleni."
        listTitle="Zakres prac obejmował:"
        listElements={[
          'montaż systemów dachu zielonego,',
          'zasyp piaskiem i substratem intensywnym,',
          'humusowanie terenów,',
          'wykonanie prac brukarskich – ścieżek i chodników,',
          'montaż donic z betonu architektonicznego,',
          'nasadzenia drzew, krzewów, traw i bylin,',
          'instalację systemów automatycznego nawadniania,',
          'ułożenie trawy z rolki.',
        ]}
        textBottom="Efektem jest nowoczesna, zielona przestrzeń, która nie tylko podnosi komfort mieszkańców, ale także staje się wizytówką osiedla, wpisując się w ideę harmonijnego życia w mieście."
        img={CONSTRUCTION_IMG.francuzem}
      />
      <hr />
      <HomeConstruction
        title="Stawowa Residence - etap V"
        textTop="Dla inwestycji Stawowa Residence - etap V, realizowanej przez Imperial Capital, stworzyliśmy estetyczną&nbsp;i&nbsp;funkcjonalną aranżację przestrzeni, łączącą naturalne materiały i nowoczesne rozwiązania."
        listTitle="Zakres prac obejmował:"
        listElements={[
          'wykonanie nasypów ziemnych,',
          'montaż betonowych donic pod nasadzenia drzew,',
          'nasadzenia zieleni ozdobnej,',
          'montaż paneli bluszczowych,',
          'montaż ekologicznej maty kokosowej na skarpach,',
          'ułożenie trawy z rolki.',
        ]}
        textBottom="Efekt to spójna, elegancka przestrzeń, która harmonijnie współgra z architekturą osiedla, podnosząc komfort&nbsp;i&nbsp;estetykę otoczenia"
        img={CONSTRUCTION_IMG.stawowa}
      />
      <hr />
      <HomeConstruction
        title="Podedworze 13"
        subTitle="zieleń, która odżywa na dachu"
        textTop="Zrealizowaliśmy kompleksowy dach zielony, przekształcając przestrzeń w tętniącą życiem, świeżą oazę."
        listTitle="Zakres prac obejmował:"
        listElements={[
          'układanie warstw dachowych, zasypy piaskiem i intensywnym substratem,',
          'nasadzenia wielopiennych drzew, krzewów, bylin i traw,',
          'montaż nowoczesnego systemu automatycznego nawadniania,',
          'ułożenie trawy z rolki dla natychmiastowego efektu zielonej, zadbanej przestrzeni,',
          'instalację paneli bluszczowych tworzących bujną, naturalną ścianę.',
        ]}
        textBottom="Efektem jest wspólna przestrzeń na patio,  która nie tylko wspiera ekologię i poprawia jakość powietrza, lecz także staje się miejscem sprzyjającym relaksowi i estetycznym dopełnieniem architektury budynku."
        img={CONSTRUCTION_IMG.stawowa}
      />
      <hr />
      <HomeConstruction
        title="Forma otwarta / Aleja Dębowa, "
        subTitle="natura, która uspokaja i inspiruje"
        textTop="Dla inwestora przygotowaliśmy projekt zieleni, który harmonijnie współgra z istniejącymi, kilkunastometrowymi dębami, zachowując unikalny leśny klimat alei."
        listTitle="Zakres prac obejmuje:"
        listElements={[
          'nasadzenia zieleni uzupełniającej naturalny drzewostan,',
          'tworzenie łąk kwietnych,',
          'aranżację miejsc wypoczynku – hamaków, tarasów i ławek,',
          'wykonanie ścieżek z serpentynitu, którego właściwości uspokajające wspierają relaks i koncentrację.',
          'Projekt i wizualizacje zostały wykonane, a realizacja inwestycji jest obecnie w toku.',
        ]}
        textBottom="Efektem będzie przestrzeń, która sprzyja wypoczynkowi i kontaktowi z naturą, podkreślając wyjątkowy charakter alei dębowej."
        img={CONSTRUCTION_IMG.stawowa}
      />
      <hr />
      <HomeConstruction
        title="Maspex"
        subTitle="zieleń na dachu siedziby głównej"
        textTop="Dla firmy Maspex zaprojektowaliśmy i wykonaliśmy użytkowy dach zielony, który stał się funkcjonalnym i estetycznym elementem siedziby głównej."
        listTitle="Zakres prac obejmował:"
        listElements={[
          'doradztwo w zakresie wykonania dachu zielonego użytkowego,',
          'kompleksowy projekt zieleni,',
          'nasadzenia roślin oraz montaż mat rozchodnikowych.',
        ]}
        textBottom="Obecnie prowadzimy regularne prace pielęgnacyjne, aby zieleń na dachu utrzymała zdrowy i atrakcyjny wygląd przez cały rok."
        textBottom2="Efektem jest przestrzeń, która nie tylko poprawia mikroklimat budynku, lecz także podkreśla jego nowoczesny i ekologiczny charakter."
        img={CONSTRUCTION_IMG.maspex}
      />

      <hr />
      <HomeConstruction
        title="Ogrody glogera"
        subTitle="zielona przestrzeń w sercu inwestycji"
        textTop="Dla prestiżowej firmy Henninger Investments zrealizowaliśmy projekt Ogrody Glogera, w którym nowoczesne rozwiązania spotykają się z harmonią natury. W ciągu zaledwie 1,5 miesiąca stworzyliśmy przestrzeń łączącą funkcjonalność, estetykę i trwałość."
        listTitle="Zakres prac obejmował:"
        listElements={[
          'montaż systemu dachu zielonego,',
          'zasypy substratem,',
          'prace brukarskie,',
          'formowanie nasypów ziemnych,',
          'montaż elementów małej architektury,',
          'wykonanie naturalnej ścieżki typu Hansegrand.',
        ]}
        textBottom="Efektem jest zielona przestrzeń, która podnosi prestiż inwestycji i tworzy przyjazne miejsce dla użytkowników"
        img={CONSTRUCTION_IMG.glogera}
      />
      <hr />
      <HomeConstruction
        title="Pychowicka"
        subTitle="zieleń na wysokościach"
        textTop="Dla inwestora prywatnego zrealizowaliśmy projekt, w którym nowoczesna architektura zyskała wyjątkową oprawę zieleni – zarówno w przestrzeni naziemnej, jak i na dachach."
        listTitle="Zakres prac obejmował:"
        listElements={[
          'nasadzenia drzew, krzewów i traw,',
          'nasadzenia na 5. piętrze - na dachu budynku,',
          'produkcję, budowę, montaż i obsadzenie zielonych ścian.',
        ]}
        textBottom="Obecnie prowadzimy na terenie inwestycji regularne prace pielęgnacyjne, aby rośliny zachowały  swój zdrowy, estetyczny wygląd przez cały rok."
        textBottom2="Efektem jest nowoczesna przestrzeń, w której zieleń staje się integralną częścią architektury, podkreślając jej prestiż i dodając unikalnego charakteru."
        img={CONSTRUCTION_IMG.pychowicka}
      />
    </div>
  )
}

export default HomeConstructions
