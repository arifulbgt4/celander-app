import React from "react";
import DateBox from "../DateBox";
import { Row } from "reactstrap";
import "./DateRow.scss";

export default ({ date, currentMonth, select, onDateClick, view }) => {
  let days = [];
  for (let i = 0; i < 7; i++) {
    let day = {
      name: date.format("dd").substring(0, 1),
      number: date.date(),
      isCurrentMont: date.month() === currentMonth.month(),
      isToday: date.isSame(new Date(), "day")
    };
    days.push(
      <DateBox
        key={day.number}
        date={date}
        number={day.number}
        isCurrentMont={day.isCurrentMont}
        select={select}
        onDateClick={onDateClick}
        months={currentMonth}
        view={view}
        isToday={day.isToday}
      />
    );
    date = date.clone();
    date.add(1, "day");
  }
  return (
    <Row key={days[0]} className="date-row">
      {days}
    </Row>
  );
};
