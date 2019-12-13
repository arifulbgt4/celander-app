import React from "react";
import { Badge } from "reactstrap";

export default ({ forwardedref, obj }) => {
  const eventHandel = e => {
    e.stopPropagation();
  };
  return (
    <li ref={forwardedref} className="event-item">
      <Badge onClick={e => eventHandel(e)} color="primary" size="sm">
        {obj}
      </Badge>
    </li>
  );
};
