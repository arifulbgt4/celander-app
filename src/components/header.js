import React from "react";
import * as dateFns from "date-fns";

export default ({ currentMonth, prevMonth, nextMonth }) => {
  const dateFormat = "MMMM yyyy";
  return (
    <div className="header row flex-middle">
      <div className="col col-start">
        <div className="icon" onClick={prevMonth}>
          chevron_left
        </div>
      </div>
      <div className="col col-center">
        <span>{dateFns.format(currentMonth, dateFormat)}</span>
      </div>
      <div className="col col-end" onClick={nextMonth}>
        <div className="icon">chevron_right</div>
      </div>
    </div>
  );
};
