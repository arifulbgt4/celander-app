import React from "react";
import RowsDate from "./RowsDate";

export default ({ days, selectedDate, onDateClick }) => {
  return (
    <div className="row">
      <RowsDate
        days={days}
        selectedDate={selectedDate}
        onDateClick={onDateClick}
      />
    </div>
  );
};
