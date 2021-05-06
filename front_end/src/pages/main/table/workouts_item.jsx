import React from "react";

const WorkoutsItem = ({
  work, //
  isopen,
  setisopen,
  setModalWorkoutState,
}) => {
  return (
    <tr
      onClick={() => {
        setisopen(!isopen);
        setModalWorkoutState({
          create: work.create,
          workout_type: work.workout_type,
          hour: work.hour,
          workout_calorie: work.workout_calorie,
        });
      }}
    >
      <td>{work.create}</td>
      <td>{work.workout_type}</td>
      <td>{work.hour}</td>
      <td>{work.workout_calorie}</td>
    </tr>
  );
};

export default WorkoutsItem;

// 리스트에 값을 만들어서 map을 해서 값을 전달해준다
