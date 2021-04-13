import React, { useState } from "react";
import styles from "./meals.module.css";
import MealsItem from "./meals_item";
const Meals = (props) => {
  const [meals, setMeals] = useState([
    {
      id: "1",
      hour: "2:00",
      date: "02.12",
      meal_type: "아침",
      mealDesc: ["돈까스"],
      calorie: "786",
    },
  ]);
  return (
    <>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>날짜</th>
            <th>식사시간</th>
            <th>아침/점심/저녁</th>
            <th>식단 내역</th>
            <th>칼로리</th>
          </tr>
        </thead>
        <tbody>
          {meals.map((meal) => (
            <MealsItem key={meal.id} meal={meal} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Meals;
