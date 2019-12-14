import React from "react";
import { Row, Col } from "reactstrap";
import CalenderTitle from "../CalenderTitle";
import ViewTypeButton from "../ViewTypeButton";
import "./Header.scss";

export default ({
  currentMonth,
  prevMonth,
  nextMonth,
  prevWeek,
  nextWeek,
  weekViwe,
  weekView,
  monthView,
  currentWeek
}) => {
  function prev() {
    !weekViwe ? prevMonth() : prevWeek();
  }
  function next() {
    !weekViwe ? nextMonth() : nextWeek();
  }
  return (
    <Row className="header">
      <Col className="align-self-center" lg={4}>
        <ViewTypeButton
          view={weekViwe}
          weekView={weekView}
          monthView={monthView}
        />
      </Col>
      <Col lg={4}>
        <CalenderTitle
          week={currentWeek}
          view={weekViwe}
          months={currentMonth}
          prev={prev}
          next={next}
        />
      </Col>
      <Col lg={4}></Col>
    </Row>
  );
};
