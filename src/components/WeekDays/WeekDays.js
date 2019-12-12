import React from "react";
import * as dateFns from "date-fns";
import Days from "./Days";

export default ({ currentMonth }) => {
  const dateFormat = "ddd";
  const days = [];
  let startDate = dateFns.startOfWeek(currentMonth);

  for (let i = 0; i < 7; i++) {
    days.push(
      <Days key={i} id={i} startDate={startDate} dateFormat={dateFormat} />
    );
  }
  return days;
};
