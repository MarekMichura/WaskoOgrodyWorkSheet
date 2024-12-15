import Button from '/button/button'
import ArrowIcon from '/svg/Arrow'

import styles from './calendar.module.scss'
import {calendarInputProps} from './types/_calendarProps'
import {months} from './types/_months'

const {content, top, topNav, topTitle, topBtn, monthsCon, monthBtm, data} = styles
export function CalendarInput(props: calendarInputProps) {
  const {year: y, month: m, title, disablePrevYear, disableNextYear, disableMonth: dMonth, p, setDate} = props

  return (
    <div className={content}>
      <div className={top}>
        <h1 className={topTitle}>{title ?? '\u00A0'}</h1>
        <div className={topNav}>
          <Button className={topBtn} disabled={disablePrevYear} onClick={() => setDate(y - 1, 11)}>
            <ArrowIcon style={{transform: 'rotate(180deg)'}} />
          </Button>
          <div> {y} </div>
          <Button className={topBtn} disabled={disableNextYear} onClick={() => setDate(y + 1, 0)}>
            <ArrowIcon />
          </Button>
        </div>
      </div>
      <div className={monthsCon}>
        {dMonth.map((dis, i) => (
          <Button
            key={i}
            className={monthBtm}
            data-sel={i === m}
            disabled={dis}
            text={months[i][0].toUpperCase() + months[i].slice(1, 3)}
            onClick={() => setDate(y, i)}
          />
        ))}
      </div>
      <section className={data}>
        <div>PN</div>
        <div>WT</div>
        <div>SR</div>
        <div>CZ</div>
        <div>PT</div>
        <div>SO</div>
        <div>NI</div>
        {p.map((props, i) => (
          <Button key={i} {...props} />
        ))}
      </section>
    </div>
  )
}
