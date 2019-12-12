import React from "react";
import DateBox from "../DateBox";

export default ({ days, selectedDate, onDateClick }) => {
  return days.map((obj, i) => (
    <DateBox
      key={i}
      id={obj.id}
      day={obj.day}
      month={obj.month}
      year={obj.year}
      selectedDate={selectedDate}
      onDateClick={onDateClick}
      status={obj.status}
    />
  ));
};
