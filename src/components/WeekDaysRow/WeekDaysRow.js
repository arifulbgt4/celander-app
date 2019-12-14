import React from "react";
import { Row, Col } from "reactstrap";
import "./WeekDaysRow.scss";

export default ({ view, week }) => {
  const weeks = week.clone();
  return (
    <Row className="wek-days-name">
      <Col className="text-center">
        <span>{view ? weeks.format("ddd, MMM ") + weeks.date() : "Sun"} </span>
      </Col>
      <Col className="text-center">
        <span>
          {view
            ? weeks.add(1, "day").format("ddd, MMM ") + weeks.date()
            : "Mon"}
        </span>
      </Col>
      <Col className="text-center">
        <span>
          {view
            ? weeks.add(1, "day").format("ddd, MMM ") + weeks.date()
            : "Tue"}
        </span>
      </Col>
      <Col className="text-center">
        <span>
          {view
            ? weeks.add(1, "day").format("ddd, MMM ") + weeks.date()
            : "Wed"}
        </span>
      </Col>
      <Col className="text-center">
        <span>
          {view
            ? weeks.add(1, "day").format("ddd, MMM ") + weeks.date()
            : "Thu"}
        </span>
      </Col>
      <Col className="text-center">
        <span>
          {view
            ? weeks.add(1, "day").format("ddd, MMM ") + weeks.date()
            : "Fri"}
        </span>
      </Col>
      <Col className="text-center">
        <span>
          {view
            ? weeks.add(1, "day").format("ddd, MMM ") + weeks.date()
            : "Fri"}
        </span>
      </Col>
    </Row>
  );
};
