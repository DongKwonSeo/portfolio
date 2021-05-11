import React from "react";
import List from "./data_list/data_list";
import Meals from "./table/table_meals";
import Workout from "./table/table_workouts";
import "../../scss/layout.scss";
import "../../scss/common/data_list.scss";
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
