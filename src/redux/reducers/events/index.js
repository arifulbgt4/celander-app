import options from "./options";
import * as actions from "../../actions/actions";

export default (state = options, action) => {
  switch (action.type) {
    case actions.EVENT_ADD:
      if (state.events[action.id] === undefined) {
        state.events[action.id] = [action.payload];
      } else {
        state.events[action.id].push(action.payload);
      }
      return {
        ...state
      };
    case actions.EVENT_DRAG:
      if (state.events[action.id] === undefined) {
        state.events[action.id] = [action.payload];
      } else {
        state.events[action.id].push(action.payload);
      }
      if (action.objId > -1) {
        state.events[action.fromId].splice(action.objId, 1);
      }
      state.shouldUpdateList = !state.shouldUpdateList;
      return {
        ...state
      };

    default:
      return state;
  }
};
