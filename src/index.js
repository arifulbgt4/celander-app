import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import App from "./App/App";
import store from "./redux";
import "./index.scss";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <DndProvider backend={HTML5Backend}>
    <Provider store={store}>
      <App />
    </Provider>
  </DndProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
