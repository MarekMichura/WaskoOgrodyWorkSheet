import { useState } from "react";
import './css.css';

type year = '2022' | '2023' | '2024' | '2025' | '2026' | '2027' | '2028' | '2029' | '2030';
type month = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12'

interface IDate {
  year: year;
  month: month;
};

function monthToName(month: month) {
  switch (month) {
    case '1': return "Styczeń";
    case '2': return "Luty";
    case '3': return "Marzec";
    case '4': return "Kwiecień";
    case '5': return "Maj";
    case '6': return "Czerwiec";
    case '7': return "Lipiec";
    case '8': return "Sierpień";
    case '9': return "Wrzesień";
    case '10': return "Październik";
    case '11': return "Listopad";
    case '12': return "Grudzień";
  }
}

function User() {
  // const [date, setData] = useState<IDate>({ year: "2024", month: "11" });

  return <div id="calendar">
    <div className="header">
      <h1>Styczeń 2024</h1>
      <div className="right"></div>
      <div className="left"></div>
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
      <div className="week">
        <div className="day other">
          <div className="day-name">Sun</div>
          <div className="day-number">26</div>
          <div className="day-events"></div>
        </div>
        <div className="day other">
          <div className="day-name">Mon</div>
          <div className="day-number">27</div>
          <div className="day-events"></div>
        </div>
        <div className="day other">
          <div className="day-name">Tue</div>
          <div className="day-number">28</div>
          <div className="day-events"></div>
        </div>
        <div className="day other">
          <div className="day-name">Wed</div>
          <div className="day-number">29</div>
          <div className="day-events"></div>
        </div>
        <div className="day other">
          <div className="day-name">Thu</div>
          <div className="day-number">30</div>
          <div className="day-events"></div>
        </div>
        <div className="day other">
          <div className="day-name">Fri</div>
          <div className="day-number">31</div>
          <div className="day-events"></div>
        </div>
        <div className="day">
          <div className="day-name">Sat</div>
          <div className="day-number">01</div>
          <div className="day-events"></div>
        </div>
      </div>
    </div>
  </div>
}

export default User;