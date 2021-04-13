import React, { useState } from "react";
import ModalWorkout from "../../../modals/workout/modal_workout";

const WorkoutsItem = ({ work, setModal }) => {
  const [isopen, setisopen] = useState(false);
  return (
    <tr
      onClick={
        () => setisopen(!isopen)

        // alert(
        //   work.create + " " + work.workout_type + " " + work.workout_calorie
        // );
        // modal창을 열어주는 함수
        // setModal(

        //   // work.create + " " + work.workout_type + " " + work.workout_calorie
        // );
      }
    >
      {isopen ? (
        <ModalWorkout
          create={work.create}
          workout_type={work.workout_type}
          hour={work.hour}
          workout_calorie={work.workout_calorie}
        />
      ) : null}
      <td>{work.create}</td>
      <td>{work.workout_type}</td>
      <td>{work.hour}</td>
      <td>{work.workout_calorie}</td>
    </tr>
  );
};

export default WorkoutsItem;

// 리스트에 값을 만들어서 map을 해서 값을 전달해준다
