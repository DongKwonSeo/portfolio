import React from "react";

const TableMealsItem = ({ meal, isopen, setisopen }) => {
  const modal = () => {
    setisopen(!isopen);
  };
  return (
    <>
      <tr onClick={modal}>
        <td>{meal.create}</td>
        <td>{meal.time}</td>
        <td>{meal.meal_type}</td>
        <td>{meal.meal_desc}</td>
        <td>{meal.calorie}</td>
      </tr>
    </>
  );
};

export default TableMealsItem;
