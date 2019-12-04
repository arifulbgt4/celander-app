import React, { useState } from "react";
import * as dateFns from "date-fns";
import { Badge } from "reactstrap";
import DragItem from "./dragItem";
import { useDrop } from "react-dnd";
import { connect } from "react-redux";
import EventForm from "./eventForm";
import { dragEvent } from "../redux/actions/eventDispatcher";

const ListOfEvents = ({ forwardedref, obj }) => (
  <li ref={forwardedref} className="event-item">
    <Badge color="primary" size="sm">
      {obj}
    </Badge>
  </li>
);

const Dates = ({
  id,
  day,
  month,
  year,
  selectedDate,
  onDateClick,
  status,
  events,
  dragEvent
}) => {
  const [modal, setModal] = useState(false);
  const [, connectDrop] = useDrop({
    accept: "OBJ",
    drop(item, monitor) {
      dragEvent(id, item.id, item.objIndex, item.obj);
    }
  });
  let runningDay = dateFns.format(new Date(), "d");
  let runningMonth = dateFns.format(new Date(), "M");
  let runningYear = dateFns.format(new Date(), "yyyy");
  let select = 0;
  if (runningYear === year) {
    if (runningMonth === month) {
      if (runningDay === day) {
        select = day + month + year;
      }
    }
  }
  if (selectedDate !== 0) {
    select = selectedDate;
  }
  const toggleModal = () => setModal(!modal);

  let eventObj = Object.values(events);

  let eventItems = [];

  eventObj.length > 0 &&
    Object.keys(events).map(obj => {
      if (obj === id) {
        if (events[obj].length > 0) {
          for (let i = 0; i < events[obj].length; i++) {
            let title = events[obj][i];
            eventItems.push(title);
          }
          return 0;
        } else {
          return 0;
        }
      } else {
        return 0;
      }
    });
  return (
    <div
      className={`col cell ${
        !status ? "disabled" : select === id ? "selected" : ""
      }`}
      ref={connectDrop}
      onClick={() => {
        onDateClick(id);
        toggleModal();
      }}
    >
      <EventForm
        id={id}
        modal={modal}
        toggle={toggleModal}
        day={day}
        month={month}
        year={year}
      />
      <span className="number">{day}</span>
      <span className="bg">{day}</span>
      <ul className="in-clander-event">
        {eventItems.length > 0 &&
          eventItems.map((obj, i) => {
            return (
              <DragItem id={id} obj={obj} objIndex={i} key={i}>
                <ListOfEvents obj={obj.title} />
              </DragItem>
            );
          })}
      </ul>
    </div>
  );
};
const mapStateToprops = state => ({
  events: state.event.events,
  shouldUpdateList: state.event.shouldUpdateList
});

const mapDispatchToProps = {
  dragEvent
};

export default connect(mapStateToprops, mapDispatchToProps)(Dates);
