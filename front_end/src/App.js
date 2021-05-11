import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./scss/layout.scss";
// import Workout from "./modals/workout/workout";
// import Login from "./pages/login/login";
import Header from "./components/layout/header/header";
import Main from "./pages/main/main";
import CreateMeal from "./pages/create_meal/create_meal";
import CreateWorkOut from "./pages/create_workout/create_workOut";
import Home from "./pages/home/home";
import Total from "./pages/total/total";

// import Meal from "./modals/meal/meal";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/main" component={Main} />
        <Route path="/total" component={Total} />
        <Route path="/meal" component={CreateMeal} />
        <Route path="/workout" component={CreateWorkOut} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
