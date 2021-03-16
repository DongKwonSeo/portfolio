import React from "react";
import styles from "./App.module.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/common/header/header";
import Main from "./pages/main/main";
import Aside from "./components/common/aside/aside";
import CreateMeal from "./pages/meal/create_Meal";
import CreateWorkOut from "./pages/workout/create_WorkOut";

function App() {
  return (
    <BrowserRouter>
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
