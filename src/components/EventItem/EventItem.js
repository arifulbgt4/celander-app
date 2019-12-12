import React from "react";
import { Badge } from "reactstrap";

export default ({ forwardedref, obj }) => (
  <li ref={forwardedref} className="event-item">
    <Badge color="primary" size="sm">
      {obj}
    </Badge>
  </li>
);
