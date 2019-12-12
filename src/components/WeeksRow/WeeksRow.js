import React from "react";
import WeekDays from "../WeekDays";

export default ({ currentMonth }) => {
  return (
    <div className="days row">
      <WeekDays currentMonth={currentMonth} />
    </div>
  );
};
