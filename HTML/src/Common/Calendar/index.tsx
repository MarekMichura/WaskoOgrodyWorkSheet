import {FastOmit, IStyledComponentBase} from 'styled-components/dist/types'

import {ArrowIcon} from '/Icon/Arrow'

import {IDay} from './IDay'
import {IMonth} from './IMonth'

import * as CSS from './css'

interface ICalendar extends React.HTMLProps<HTMLDivElement> {
  year: number
  month: IMonth
  title: string
  checkYear: [boolean, boolean]
  checkMonth: [
    boolean,
    boolean,
    boolean,
    boolean,
    boolean,
    boolean,
    boolean,
    boolean,
    boolean,
    boolean,
    boolean,
    boolean,
  ]
  setMonth: (month: IMonth) => void
  nextYear: () => void
  prevYear: () => void
  status: (day: Date) => string
  select: (date: Date) => void
  Element: IStyledComponentBase<
    'web',
    FastOmit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>
  >
}

export function Calendar({
  month,
  year,
  title,
  checkYear,
  checkMonth,
  prevYear,
  nextYear,
  setMonth,
  Element,
  status,
  select,
  ...props
}: ICalendar) {
  const start = new Date(year, month, 1)
  start.setDate(start.getDate() - (start.getDay() - 1 == -1 ? 6 : start.getDay() - 1))

  return (
    <CSS.Container>
      <CSS.TopBar>
        <CSS.Title>{title}</CSS.Title>
        <CSS.ArrowContainer>
          <ArrowIcon cssSVG={CSS.Arrow} onClick={prevYear} data-active={checkYear[0]} data-rotate={true} />
          {year}
          <ArrowIcon cssSVG={CSS.Arrow} onClick={nextYear} data-active={checkYear[1]} />
        </CSS.ArrowContainer>
      </CSS.TopBar>
      <CSS.MonthsContainer>
        {Array.from({length: 12}).map((_, i) => {
          const current = month == i
          return (
            <CSS.Month key={i} onClick={() => setMonth(i)} data-active={checkMonth[i]} data-current={current}>
              {(IMonth as unknown as string[])[i].slice(0, 3)}
            </CSS.Month>
          )
        })}
      </CSS.MonthsContainer>
      <CSS.Content>
        {Array.from({length: 7}).map((_, i) => (
          <div key={i}>{(IDay as unknown as string[])[i].slice(0, 2).toUpperCase()}</div>
        ))}
        {Array.from({length: 42}).map((_, i) => {
          const day = new Date(start.getFullYear(), start.getMonth(), start.getDate() + i)
          const stat = status(day)

          const click = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            select(day)
            if (props.onClick) props.onClick(event)
          }

          return (
            <Element key={i} data-status={stat} {...props} onClick={click}>
              {day.getDate()}
            </Element>
          )
        })}
      </CSS.Content>
    </CSS.Container>
  )
}
