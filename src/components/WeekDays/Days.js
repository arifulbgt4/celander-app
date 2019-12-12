import React from "react";
import * as dateFns from "date-fns";

export default ({ id, startDate, dateFormat }) => {
  return (
    <div className="col col-center">
      {dateFns.format(dateFns.addDays(startDate, id), dateFormat)}
    </div>
  );
};
