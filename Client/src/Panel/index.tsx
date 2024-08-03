import { useEffect, useState } from "react"
import { numberToMonth } from "./numbersToNames";
import * as CSS from "./style"
import { Route, Routes, useNavigate, useNavigation } from "react-router-dom";
import Edytor from "./edytor";

interface response {
  daysOff: string[],
  workDays: string[]
}
const now = new Date(Date.now());
const monthFirstDay = new Date(now.getFullYear(), now.getMonth(), 1);
const monthLastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0);

function add0(n: number) {
  return (n < 10 ? '0' : '') + n;
}

function Panel() {
  const nav = useNavigate();

  const [date, setDate] = useState({ month: now.getMonth(), year: now.getFullYear() })
  const [work, setWork] = useState<Date[]>([]);
  const [day, setDay] = useState({
    first: new Date(now.getFullYear(), now.getMonth(), -monthFirstDay.getDay() + 2),
    last: new Date(now.getFullYear(), now.getMonth() + 1, 7 - monthLastDay.getDay())
  })

  useEffect(() => {
    const monthFirstDay = new Date(date.year, date.month, 1);
    const monthLastDay = new Date(date.year, date.month + 1, 0);

    const firstDay = new Date(date.year, date.month, -monthFirstDay.getDay() + 2);
    const lastDay = new Date(date.year, date.month + 1, 7 - monthLastDay.getDay());
    setDay({ first: firstDay, last: lastDay });

    const firstDayStr = firstDay.getFullYear() + '-' + add0(firstDay.getMonth() + 1) + '-' + add0(firstDay.getDate())
    const lastDayStr = lastDay.getFullYear() + '-' + add0(lastDay.getMonth() + 1) + '-' + add0(lastDay.getDate())

    fetch("/GetPanel", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ start: firstDayStr, end: lastDayStr })
    })
      .then((response) => response.json())
      .then((data: response) => {
        const work = data.workDays
          .map(a => new Date(a))
          .map(a => new Date(a.getFullYear(), a.getMonth() + 1, a.getDate()))

        setWork(work);
      })
      .catch(() => {
      })
  }, [date])

  function next() {
    let month = date.month + 1;
    let year = date.year;

    if (month >= 12) {
      month = 0;
      year++;
    }

    setDate({ month, year });
  }
  function previous() {
    let month = date.month - 1;
    let year = date.year;

    if (month < 0) {
      month = 11;
      year--;
    }

    setDate({ month, year });
  }
  function navDate(date: Date) {
    nav(date.getFullYear() + "-" + add0(date.getMonth()) + "-" + add0(date.getDate()));
  }

  return <>
    <CSS.Calendar>
      <CSS.Header>
        <CSS.left onClick={previous} />
        {numberToMonth(date.month)} {date.year}
        <CSS.right onClick={next} />
      </CSS.Header>
      <CSS.Content>
        <div>PN</div>
        <div>WT</div>
        <div>ŚR</div>
        <div>CZ</div>
        <div>PT</div>
        <div>SO</div>
        <div>N</div>
        {[...Array(35)].map((num, key) => {
          const date = new Date(day.first.getFullYear(), day.first.getMonth(), day.first.getDate() + key);
          let style = { borderBottom: "", cursor: "pointer" }

          if (work.find(a => a.getFullYear() === date.getFullYear() && a.getMonth() === date.getMonth() && a.getDate() === date.getDate()))
            style.borderBottom = "1px dotted green"
          else if (date.getTime() <= now.getTime())
            style.borderBottom = "1px dotted red"
          return <div key={key} style={style} onClick={() => navDate(date)}>
            {date.getDate()}
          </div>
        })}
      </CSS.Content>
    </CSS.Calendar>
    <Routes>
      <Route path=":Date" element={<Edytor />} />
    </Routes>
  </>
}

export default Panel