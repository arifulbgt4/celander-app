import React from "react";
import { Button, ListGroup, ListGroupItem, Row, Col } from "reactstrap";
import CalenderTitle from "../CalenderTitle";

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
    <div className="header">
      <Row>
        <Col lg={4}>
          <ListGroup>
            <ListGroupItem>
              <Button
                onClick={() => {
                  !weekViwe && weekView();
                }}
                color="primary"
              >
                Week
              </Button>
            </ListGroupItem>
            <ListGroupItem>
              <Button
                onClick={() => {
                  weekViwe && monthView();
                }}
                color="primary"
              >
                Month
              </Button>
            </ListGroupItem>
          </ListGroup>
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
    </div>
  );
};
