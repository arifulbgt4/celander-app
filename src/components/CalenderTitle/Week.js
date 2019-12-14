import React from "react";

export default ({ format, week }) => {
  const weeks = week.clone();
  return (
    <>
      <span>{weeks.format(format)}</span>-
      <span>{weeks.add(6, "day").format(format)}</span>
    </>
  );
};
