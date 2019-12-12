import React, { useState } from "react";
import * as dateFns from "date-fns";
import { useDrop } from "react-dnd";
import EventForm from '../EventForm/';
import Events from "../Events";
import DateContent from "./DateContent";

export default ({
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
    drop(item) {
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
      <DateContent day={day} />
      <Events id={id} eventItems={eventItems} />
    </div>
  );
};
