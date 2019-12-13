import React from "react";
import { Button, ListGroup, ListGroupItem } from "reactstrap";

export default ({
  currentMonth,
  prevMonth,
  nextMonth,
  prevWeek,
  nextWeek,
  weekViwe,
  weekView,
  monthView
}) => {
  const dateFormat = "MMMM YYYY";
  return (
    <div className="header row flex-middle">
      <div className="col col-start">
        <div
          className="icon"
          onClick={() => {
            !weekViwe ? prevMonth() : prevWeek();
          }}
        >
          chevron_left
        </div>
        <ul>
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
        </ul>
      </div>
      <div className="col col-center">
        <span>{currentMonth.format(dateFormat)}</span>
      </div>
      <div className="col col-end">
        <div
          className="icon"
          onClick={() => {
            !weekViwe ? nextMonth() : nextWeek();
          }}
        >
          chevron_right
        </div>
      </div>
    </div>
  );
};
