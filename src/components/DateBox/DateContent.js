import React from "react";

export default ({ day }) => {
  return (
    <>
      <span className="number">{day}</span>
      <span className="bg">{day}</span>
    </>
  );
};
