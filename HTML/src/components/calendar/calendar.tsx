import Button from '/button/button'
import ArrowIcon from '/svg/Arrow'

import {calendarInputProps} from './_calendarProps'
import styles from './calendar.module.scss'

const {content, top, topNav, topTitle, topBtn, monthsCon, monthBtm: btn, data} = styles
export function CalendarInput(props: calendarInputProps) {
  const {year: y, month: m, title, disablePrevYear, disableNextYear, disableMonth: dMonth, p, setDate} = props

  return (
    <div className={content}>
      <div className={top}>
        <h1 className={topTitle}>{title ?? '\u00A0'}</h1>
        <div className={topNav}>
          <Button className={topBtn} disabled={disablePrevYear} onClick={() => setDate(y - 1, 0)}>
            <ArrowIcon style={{transform: 'rotate(180deg)'}} />
          </Button>
          <div> {y} </div>
          <Button className={topBtn} disabled={disableNextYear} onClick={() => setDate(y + 1, 11)}>
            <ArrowIcon />
          </Button>
        </div>
      </div>
      <div className={monthsCon}>
        <Button className={btn} data-sel={0 === m} disabled={dMonth[0]} onClick={() => setDate(y, 0)} text="Sty" />
        <Button className={btn} data-sel={1 === m} disabled={dMonth[1]} onClick={() => setDate(y, 1)} text="Lut" />
        <Button className={btn} data-sel={2 === m} disabled={dMonth[2]} onClick={() => setDate(y, 2)} text="Mar" />
        <Button className={btn} data-sel={3 === m} disabled={dMonth[3]} onClick={() => setDate(y, 3)} text="Kwi" />
        <Button className={btn} data-sel={4 === m} disabled={dMonth[4]} onClick={() => setDate(y, 4)} text="Maj" />
        <Button className={btn} data-sel={5 === m} disabled={dMonth[5]} onClick={() => setDate(y, 5)} text="Cze" />
        <Button className={btn} data-sel={6 === m} disabled={dMonth[6]} onClick={() => setDate(y, 6)} text="Lip" />
        <Button className={btn} data-sel={7 === m} disabled={dMonth[7]} onClick={() => setDate(y, 7)} text="Sie" />
        <Button className={btn} data-sel={8 === m} disabled={dMonth[8]} onClick={() => setDate(y, 8)} text="Wrz" />
        <Button className={btn} data-sel={9 === m} disabled={dMonth[9]} onClick={() => setDate(y, 9)} text="Paź" />
        <Button className={btn} data-sel={10 === m} disabled={dMonth[10]} onClick={() => setDate(y, 10)} text="Lis" />
        <Button className={btn} data-sel={11 === m} disabled={dMonth[11]} onClick={() => setDate(y, 11)} text="Gru" />
      </div>
      <section className={data}>
        <div>PN</div>
        <div>WT</div>
        <div>SR</div>
        <div>CZ</div>
        <div>PT</div>
        <div>SO</div>
        <div>NI</div>
        <Button {...p[0]} />
        <Button {...p[1]} />
        <Button {...p[2]} />
        <Button {...p[3]} />
        <Button {...p[4]} />
        <Button {...p[5]} />
        <Button {...p[6]} />
        <Button {...p[7]} />
        <Button {...p[8]} />
        <Button {...p[9]} />
        <Button {...p[10]} />
        <Button {...p[11]} />
        <Button {...p[12]} />
        <Button {...p[13]} />
        <Button {...p[14]} />
        <Button {...p[15]} />
        <Button {...p[16]} />
        <Button {...p[17]} />
        <Button {...p[18]} />
        <Button {...p[19]} />
        <Button {...p[20]} />
        <Button {...p[21]} />
        <Button {...p[22]} />
        <Button {...p[23]} />
        <Button {...p[24]} />
        <Button {...p[25]} />
        <Button {...p[26]} />
        <Button {...p[27]} />
        <Button {...p[28]} />
        <Button {...p[29]} />
        <Button {...p[30]} />
        <Button {...p[31]} />
        <Button {...p[32]} />
        <Button {...p[33]} />
        <Button {...p[34]} />
        <Button {...p[35]} />
        <Button {...p[36]} />
        <Button {...p[37]} />
        <Button {...p[38]} />
        <Button {...p[39]} />
        <Button {...p[40]} />
        <Button {...p[41]} />
      </section>
    </div>
  )
}
