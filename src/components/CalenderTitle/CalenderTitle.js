import React from "react";
import { Row, Col } from "reactstrap";
import Month from "./Month";
import Week from "./Week";
import "./CalenderTitle.scss";

export default ({ months, view, week, prev, next }) => {
  const format = "MMM DD";
  return (
    <div className="calender-title">
      <Row noGutters>
        <Col sm={1} className="title-btn-area">
          <button className="icon" onClick={prev}>
            chevron_left
          </button>
        </Col>
        <Col sm={10} className="text-center">
          <div className="title-date">
            {view ? (
              <Week week={week} format={format} />
            ) : (
              <Month months={months} format={format} />
            )}
          </div>
        </Col>
        <Col sm={1} className="title-btn-area">
          <button className="icon" onClick={next}>
            chevron_right
          </button>
        </Col>
      </Row>
    </div>
  );
};
