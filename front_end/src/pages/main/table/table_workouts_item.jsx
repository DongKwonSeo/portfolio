import React from "react";
// import ModalWorkout from "../../../modals/workout/modal_workout";

const WorkoutsItem = ({
  work, //
  setModal,
  isopen,
  setisopen,
  setmodalState,
}) => {
  const modal = () => {
    // setisopen(!isopen);
    // setmodalState({
    //   type: "workout",
    //   _id: work._id,
    // });
  };
  return (
    <tr onClick={modal}>
      <td>{work.create}</td>
      <td>{work.workout_type}</td>
      <td>{work.hour}</td>
      <td>{work.workout_calorie}</td>
    </tr>
  );
};

export default WorkoutsItem;

// 리스트에 값을 만들어서 map을 해서 값을 전달해준다
