import * as actions from "./actions";

export const addEvent = (id, payload) => dispatch =>
  dispatch({
    type: actions.EVENT_ADD,
    id,
    payload
  });

export const dragEvent = (id, fromId, objId, payload) => dispatch =>
  dispatch({
    type: actions.EVENT_DRAG,
    id,
    fromId,
    objId,
    payload
  });
