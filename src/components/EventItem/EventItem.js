import React from "react";

export default ({ forwardedref, title }) => {
  const eventHandel = e => {
    e.stopPropagation();
  };
  return (
    <li ref={forwardedref} onClick={e => eventHandel(e)} className="event-item">
      <span>{title}</span>
    </li>
  );
};
