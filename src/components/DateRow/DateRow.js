import React from "react";
import DateBox from "../DateBox";

export default ({ date, currentMonth,select ,onDateClick}) => {

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
        isToday={day.isToday}
        date={date}
        number={day.number}
        isCurrentMont={day.isCurrentMont}
        select={select}
        onDateClick={onDateClick}
      />
    );
    date = date.clone();
    date.add(1, "day");
  }
  return (
    <div className="row" key={days[0]}>
      {days}
    </div>
  );
};
