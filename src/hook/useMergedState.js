import { useState } from "react";
import shallowPartialCompare from "../helper/shallowPartialCompare";

export default initial => {
  const [state, setState] = useState(initial);
  const setMergedState = newIncomingState =>
    setState(prevState => {
      const newState =
        typeof newIncomingState == "function"
          ? newIncomingState(prevState)
          : newIncomingState;
      return shallowPartialCompare(prevState, newState)
        ? prevState
        : { ...prevState, ...newState };
    });
  return [state, setMergedState];
};
