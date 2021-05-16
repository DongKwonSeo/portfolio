import React, { useState, useEffect } from "react";
import WorkoutsItem from "./table_workouts_item";
import Modals from "../../../components/layout/modals/workout/modal_workout";
import axios from "axios";
/*
{
    "success": true,
    "data": [
        {
            "create": "2021-03-11T01:36:41.391Z",
            "_id": "6048f59c2afd81eebb2130d9",
            "workout_type": "헬스",
            "hour": 3,
            "workout_calorie": 135,
            "user": "6043c0fb032f6022cda5c18a",
            "workout_comments": [],
            "__v": 0
        },
        ...
    ]
}
*/

const Workout = (props) => {
  const [workout, setWorkout] = useState([
    {
      create: "02.12",
      workout_type: "조깅",
      hour: "2",
      workout_calorie: "120kcal",
      _id: "1",
    },
  ]);
  const [isopen, setisopen] = useState(false);
  const [modalWorkoutState, setModalWorkoutState] = useState({
    // create: "-_-?;;;",
    // workout_type: "-_-?;;;",
    // hour: "-_-?;;;",
    // workout_calorie: "-_-?;;;",
    _id: "1",
  });
  const [modal, setModal] = useState("");

  useEffect(() => {
    // 저장한걸 get http://localhost:3601/api/workout 가지고 온다
    axios.get("http://localhost:3601/api/workout").then((result) => {
      // console.log({ result });
      // console.log({ data: result.data.data });
      const workout = result.data.data;

      console.log("workout.length", workout.length);
      for (let i = 0; i < workout.length; i++) {
        const item = workout[i];
        // item.id = i;
        console.log(item);
        item.create = getMD(item.create);
        item.workout_calorie = item.workout_calorie + "kal";
      }

      setWorkout(workout);
    });
  }, []);

  function getMD(create) {
    const d = new Date(create);
    const md = d.getMonth() + 1 + "." + d.getDate();
    return md;
  }

  return (
    <>
      <table className="main_table">
        <thead>
          <tr>
            <th>날짜</th>
            <th>운동 종류</th>
            <th>운동 시간</th>
            <th>소비 칼로리</th>
          </tr>
        </thead>
        <tbody>
          {workout.map((work) => (
            <WorkoutsItem
              key={work._id} //
              work={work}
              setModal={setModal}
              isopen={isopen}
              setisopen={setisopen}
              setModalWorkoutState={setModalWorkoutState}
            />
          ))}
        </tbody>
      </table>
      {isopen ? (
        <Modals
          // create={modalWorkoutState.create}
          // workout_type={modalWorkoutState.workout_type}
          // hour={modalWorkoutState.hour}
          // workout_calorie={modalWorkoutState.workout_calorie}
          id={modalWorkoutState._id}
        />
      ) : null}

      <br />
      <p>{modal}</p>
    </>
  );
};

export default Workout;
