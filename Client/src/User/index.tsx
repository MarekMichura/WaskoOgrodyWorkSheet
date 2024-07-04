import { useEffect, useState } from "react";
import './css.css';

function monthToName(month: number) {
  switch (month) {
    case 0: return "Styczeń";
    case 1: return "Luty";
    case 2: return "Marzec";
    case 3: return "Kwiecień";
    case 4: return "Maj";
    case 5: return "Czerwiec";
    case 6: return "Lipiec";
    case 7: return "Sierpień";
    case 8: return "Wrzesień";
    case 9: return "Październik";
    case 10: return "Listopad";
    case 11: return "Grudzień";
    default: return "error";
  }
}

type day = number;

interface week {
  mon: day;
  tue: day;
  wed: day;
  thu: day;
  fri: day;
  sat: day;
  sun: day;
};

type month = week[];

function User() {
  const [date, setData] = useState({ year: 1990, month: 11 });
  const [month, setMonth] = useState<month>();

  useEffect(() => {
    const dateCurrent = new Date();

    setData({
      year: dateCurrent.getFullYear(),
      month: dateCurrent.getMonth(),
    });
  }, []);

  useEffect(() => {
    const current = new Date();
    const dateFirst = new Date(date.year, date.month, 1);
    const dateLast = new Date(date.year, date.month, 0);
    const dateLastDay = new Date();
    dateLastDay.setDate(dateLast.getDate() + (7 - dateLast.getDay()));
    current.setDate(dateFirst.getDate() - dateFirst.getDay() + 1);
    let month: month = [];

    function getThenIncrease() {
      const res = current.getDate();
      current.setDate(current.getDate() + 1);
      return res;
    }

    for (let i = 0; i < dateLast.getDate(); i += 7) {
      month.push({
        mon: getThenIncrease(),
        tue: getThenIncrease(),
        wed: getThenIncrease(),
        thu: getThenIncrease(),
        fri: getThenIncrease(),
        sat: getThenIncrease(),
        sun: getThenIncrease(),
      });

    }
    setMonth(month)
  }, [date])

  function next() {
    let month = date.month + 1;
    let year = date.year;

    if (month >= 12) {
      month = 0;
      year++;
    }

    setData({ month, year });
  }
  function previous() {
    let month = date.month - 1;
    let year = date.year;

    if (month < 0) {
      month = 11;
      year--;
    }

    setData({ month, year });
  }

  return <div id="calendar">
    <div className="header">
      <h1>{monthToName(date.month)} {date.year}</h1>
      <div className="right" onClick={next}></div>
      <div className="left" onClick={previous}></div>
    </div>
    <div className="month new">
      <div className="week">
        <div className="day other"><div className="day-number">PN</div></div>
        <div className="day other"><div className="day-number">WT</div></div>
        <div className="day other"><div className="day-number">ŚR</div></div>
        <div className="day other"><div className="day-number">CZ</div></div>
        <div className="day other"><div className="day-number">PT</div></div>
        <div className="day other"><div className="day-number">SO</div></div>
        <div className="day other"><div className="day-number">N</div></div>
      </div>
      {
        month?.map((week, key) => {
          return <div className="week" key={key}>
            <div className="day other"><div className="day-number">{week.mon}</div></div>
            <div className="day other"><div className="day-number">{week.tue}</div></div>
            <div className="day other"><div className="day-number">{week.wed}</div></div>
            <div className="day other"><div className="day-number">{week.thu}</div></div>
            <div className="day other"><div className="day-number">{week.fri}</div></div>
            <div className="day other"><div className="day-number">{week.sat}</div></div>
            <div className="day other"><div className="day-number">{week.sun}</div></div>
          </div>
        })
      }
      <div className="week">

      </div>
    </div>
  </div>
}

export default User;