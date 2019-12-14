import React from "react";

export default ({ months, format }) => {
  const startMonth = months.clone().startOf("month");
  const endMonth = months.clone().endOf("month");
  return (
    <>
      <span>{startMonth.format(format)}</span>-
      <span>{endMonth.format(format)}</span>
    </>
  );
};
