import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "@fortawesome/fontawesome-free/js/all.js";
// import rootReducer from "./store";
// import { Provider } from "react-redux";
// import ReduxThunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
// import { createStore, applyMiddleware } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import rootReducer from "./store";
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk))
);
// console.log(store.getState());
// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(ReduxThunk))
// );
// console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App></App>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
