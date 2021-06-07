import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "@fortawesome/fontawesome-free/js/all.js";
import "./scss/style.scss";
// import rootReducer from "./store";
import { Provider } from "react-redux";
// import ReduxThunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
// import { createStore, applyMiddleware } from "redux";

// import { composeWithDevTools } from "redux-devtools-extension";
// import { createStore, applyMiddleware } from "redux";
// import { Provider } from "react-redux";
import { CookiesProvider } from "react-cookie";
// import ReduxThunk from "redux-thunk";
// import rootReducer from "./store";

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(ReduxThunk))
// );
import store from "../src/modules/index";

ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
      <Provider store={store}>
        <App></App>
      </Provider>
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
