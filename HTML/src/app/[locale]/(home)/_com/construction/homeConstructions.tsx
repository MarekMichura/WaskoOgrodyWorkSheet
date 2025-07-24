import {EHomeParts} from '../../_goto/EHomeParts'

import {CONSTRUCTION_IMG} from './_data/img'
import s from './css.module.scss'
import HomeConstruction from './homeConstruction'

async function HomeConstructions() {
  return (
    <div className={s.con} id={EHomeParts.projects}>
      <HomeConstruction title="Ogrody glogera" img={CONSTRUCTION_IMG.glogera} />
      <hr />
      <HomeConstruction title="Pod francuzem" img={CONSTRUCTION_IMG.francuzem} />
      <hr />
      <HomeConstruction title="Pychowicka" img={CONSTRUCTION_IMG.pychowicka} />
      <hr />
      <HomeConstruction title="Shed Living Hotel" img={CONSTRUCTION_IMG.hotel} />
      <hr />
      <HomeConstruction title="Stawowa" img={CONSTRUCTION_IMG.stawowa} />
    </div>
  )
}

export default HomeConstructions
