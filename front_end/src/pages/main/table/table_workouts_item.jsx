import React from "react";

const TableWorkoutItem = ({
  work, //
  isopen,
  setisopen,
  setModalWorkoutState,
}) => {
  // --------------

  const modal = () => {
    setisopen(!isopen);
    setModalWorkoutState({
      create: work.create,
      workout_type: work.workout_type,
      hour: work.hour,
      workout_calorie: work.workout_calorie,
    });
  };
  // modal add

  return (
    <tr onClick={modal}>
      <td>{work.create}</td>
      <td>{work.workout_type}</td>
      <td>{work.hour}</td>
      <td>{work.workout_calorie}</td>
    </tr>
  );
};

export default TableWorkoutItem;
