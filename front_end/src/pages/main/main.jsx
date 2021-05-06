import React from "react";
import List from "./list/list";
import Meals from "./table/meals";
import Workout from "./table/workout";
import "../../scss/layout.scss";
const Main = () => {
  return (
    <section className="section">
      <div className="container">
        <List />
        <div className="table">
          <Workout />
          <Meals />
        </div>
      </div>
    </section>
  );
};

export default Main;
