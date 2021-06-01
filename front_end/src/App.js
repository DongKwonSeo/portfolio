import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./scss/layout.scss";
import Header from "./components/layout/header/header";
import Main from "./pages/main/main";
import CreateMeal from "./pages/create_meal/create_meal";
import CreateWorkOut from "./pages/create_workout/create_workOut";
import Home from "./pages/home/home";
import Total from "./pages/total/total";
import Login from "./pages/login/login";
import Register from "./pages/login/register";
import Auth from "./hoc/auth";
// import { store } from "../src/redux/store";
// import { Provider } from "react-redux";

// import Meal from "./modals/meal/meal";

function App() {
  return (
    // <Provider store={store}>
    <BrowserRouter>
      <Header />
      <Switch>
        {/* <div className="container"> */}
        <Route exact path="/" component={Auth(Home, null)}></Route>
        <Route path="/login" component={Auth(Login, false)}></Route>
        <Route path="/register" component={Auth(Register, false)} />
        <Route exact path="/total" component={Total} />
        <Route path="/total/detail" component={Main} />
        <Route path="/meal" component={CreateMeal} />
        <Route path="/workout" component={CreateWorkOut} />
        {/* </div> */}
      </Switch>
    </BrowserRouter>
    // </Provider>
  );
}

export default App;
