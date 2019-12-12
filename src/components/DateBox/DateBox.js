import React, { useState } from "react";
import { useDrop } from "react-dnd";
import EventForm from "../EventForm/";
import Events from "../Events";
import DateContent from "./DateContent";

export default ({
  isToday,
  onDateClick,
  select,
  isCurrentMont,
  events,
  dragEvent,
  number,
  date
}) => {
  let id =
    date.date().toString() +
    (date.month() + 1).toString() +
    date.year().toString();
  const [modal, setModal] = useState(false);
  const [, connectDrop] = useDrop({
    accept: "OBJ",
    drop(item) {
      dragEvent(id, item.id, item.objIndex, item.obj);
    }
  });

  const toggleModal = () => setModal(!modal);

  let eventObj = Object.values(events);

  let eventItems = [];

  eventObj.length > 0 &&
    Object.keys(events).map(obj => {
      obj = obj.toString();
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
        !isCurrentMont ? "disabled" : select === id ? "selected" : ""
      }`}
      ref={connectDrop}
      onClick={() => {
        onDateClick(id);
        toggleModal();
      }}
    >
      <EventForm id={id} modal={modal} toggle={toggleModal} date={date} />
      <DateContent day={number} />
      <Events id={id} eventItems={eventItems} />
    </div>
  );
};
