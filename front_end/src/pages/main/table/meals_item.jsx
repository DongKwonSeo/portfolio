import React from "react";

const MealsItem = ({ meal }) => {
  return (
    <>
      <tr>
        <td>{meal.create}</td>
        <td>{meal.hour}</td>
        <td>{meal.meal_type}</td>
        <td>{meal.mealDesc}</td>
        <td>{meal.calorie}</td>
      </tr>
    </>
  );
};

export default MealsItem;
