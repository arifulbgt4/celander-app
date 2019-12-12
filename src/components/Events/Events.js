import React from "react";
import EventItemShort from "../EventItemShort";
import "./Events.scss";

export default ({ id, eventItems }) => {
  return (
    <ul className="in-clander-event">
      <EventItemShort id={id} eventItems={eventItems} />
    </ul>
  );
};
