import React from "react";
import styles from "./main.module.css";
import List from "./list/list";
import Meals from "./table/meals";
import Workout from "./table/workout";
import Container from "./container/container";

const Main = () => {
  return (
    <Container>
      <List />
      <div className={styles.table}>
        <Meals />
        <Workout />
      </div>
    </Container>
  );
};

export default Main;
