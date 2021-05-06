import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./scss/layout.scss";
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
      
      <Aside />
      <Switch>
        <Route exact={true} path="/" component={Main} />
        {/* <Route path="/" component={Aside} /> */}

        <Route path="/meal" component={CreateMeal} />
        <Route path="/workout" component={CreateWorkOut} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
