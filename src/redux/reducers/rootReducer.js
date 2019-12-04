import { combineReducers } from "redux";
import events from "./events";

const rootReducer = combineReducers({
  event: events
});

export default rootReducer;
