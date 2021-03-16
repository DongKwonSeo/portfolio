import React from "react";
import styles from "./App.module.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Workout from "./modals/workout/workout";
// import Login from "./pages/login/login";

import Header from "./components/common/header/header";
import Main from "./pages/main/main";
import Aside from "./components/common/aside/aside";
import CreateMeal from "./pages/meal/create_Meal";
import CreateWorkOut from "./pages/workout/create_WorkOut";
// import Meal from "./modals/meal/meal";

function App() {
  return (
    <BrowserRouter>
      {/* <Login/> */}
      {/* <Workout /> */}
      {/* <Meal /> */}
      <Header />
      <div className={styles.wrap}>
        <Aside className={styles.aside} />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/meal" component={CreateMeal} />
          <Route exact path="/workout" component={CreateWorkOut} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
