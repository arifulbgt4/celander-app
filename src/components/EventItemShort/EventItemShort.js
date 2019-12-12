import React from "react";
import DragItem from "../DragItem/index";
import EventItem from "../EventItem";

export default ({ id, eventItems }) => {
  return (
    eventItems.length > 0 &&
    eventItems.map((obj, i) => {
      return (
        <DragItem id={id} obj={obj} objIndex={i} key={i}>
          <EventItem obj={obj.title} />
        </DragItem>
      );
    })
  );
};
