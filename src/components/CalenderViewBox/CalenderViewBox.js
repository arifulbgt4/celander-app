import React, { useState } from "react";
import DateRow from "../DateRow";
import "./CalenderViewBox.scss";

export default ({ currentMonth, weekViwe, currentWeek }) => {
  let toDay = new Date().getDate();
  let toMonth = new Date().getMonth() + 1;
  let toYear = new Date().getFullYear();
  const [select, setSelect] = useState(
    toDay.toString() + toMonth.toString() + toYear.toString()
  );
  let weeks = [];
  let done = false;
  let date = currentMonth
    .clone()
    .startOf("month")
    .add("w" - 1)
    .day("Sunday");
  let count = 0;
  let monthindex = date.month();
  if (!weekViwe) {
    while (!done) {
      weeks.push(
        <DateRow
          key={date}
          date={date.clone()}
          currentMonth={currentMonth}
          select={select}
          onDateClick={setSelect}
        />
      );
      date.add(1, "w");
      done = count++ > 2 && monthindex !== date.month();
      monthindex = date.month();
    }
  } else {
    weeks.push(
      <DateRow
        key={currentWeek}
        date={currentWeek.clone()}
        currentMonth={currentMonth}
        select={select}
        onDateClick={setSelect}
        view={weekViwe}
      />
    );
  }
  return <div className="calendar-box">{weeks}</div>;
};
