import React, { useState } from "react";
import * as dateFns from "date-fns";
import DateRow from "../DateRow";

export default ({ currentMonth }) => {
  const [selectedDate, onDateClick] = useState(0);

  const monthStart = dateFns.startOfMonth(currentMonth);
  const monthEnd = dateFns.endOfMonth(monthStart);
  const startDate = dateFns.startOfWeek(monthStart);
  const endDate = dateFns.endOfWeek(monthEnd);

  const rows = [];
  let days = [];
  let day = startDate;
  let formattedDate = "";
  let formattedMonth = "";
  let formattedYear = "";
  let id = "";

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = dateFns.format(day, "d");
      formattedMonth = dateFns.format(day, "M");
      formattedYear = dateFns.format(day, "yyy");
      id = formattedDate + formattedMonth + formattedYear;
      days.push({
        id: id,
        day: formattedDate,
        month: formattedMonth,
        year: formattedYear,
        status: dateFns.isSameMonth(day, monthStart)
      });
      day = dateFns.addDays(day, 1);
    }
    rows.push(
      <DateRow
        key={day}
        days={days}
        selectedDate={selectedDate}
        onDateClick={onDateClick}
      />
    );
    days = [];
  }

  return <div className="body">{rows}</div>;
};
