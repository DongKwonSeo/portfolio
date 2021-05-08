import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./scss/layout.scss";
// import Workout from "./modals/workout/workout";
// import Login from "./pages/login/login";

import Header from "./components/layout/header/header";
import Main from "./pages/main/main";
import Aside from "./components/layout/aside/aside";
import CreateMeal from "./pages/create_meal/create_meal";
import CreateWorkOut from "./pages/create_workout/create_workOut";

// import Meal from "./modals/meal/meal";

function App() {
  return (
    <BrowserRouter>
      {/* <Login/> */}
      {/* <Workout /> */}
      {/* <Meal /> */}
      <Header />
      <Aside />
      <Switch>
        <Route exact={true} path="/" component={Main} />
        <Route path="/meal" component={CreateMeal} />
        <Route path="/workout" component={CreateWorkOut} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
