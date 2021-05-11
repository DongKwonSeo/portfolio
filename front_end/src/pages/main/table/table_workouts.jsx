import React, { useState, useEffect } from "react";
import TableWorkoutItem from "./table_workouts_item";
import ModalWorkout from "../../../components/layout/modals/workout/modal_workout";
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
  const [isopen, setisopen] = useState(false);
  const [modalWorkoutState, setModalWorkoutState] = useState({
    create: null,
    workout_type: null,
    hour: null,
    workout_calorie: null,
  });
  const [workout, setWorkout] = useState([
    {
      _id: "1",
      create: "02.12",
      workout_type: "조깅",
      hour: "2",
      workout_calorie: "120kcal",
    },
  ]);

  useEffect(() => {
    axios
      .get("http://localhost:3601/api/workout") //
      .then((result) => {
        console.log({ result });
        console.log({ data: result.data.data });
        const workout = result.data.data;
        for (let i = 0; i < workout.length; i++) {
          const item = workout[i];
          // item.id = i;
          console.log(item);
          item.create = getMD(item.create);
          item.workout_calorie = item.workout_calorie + "kal";
          item.hour = item.hour + "h";
        }

        setWorkout(workout);
      });
  }, []);

  function getMD(create) {
    const d = new Date(create);
    const md = d.getMonth() + 1 + "." + d.getDate(); // 데이터 객체 에서 월 , 일 만 가지고 와서 문자열로 만들어 준다
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
            <TableWorkoutItem
              key={work._id} //
              work={work}
              setWorkout={setWorkout}
              isopen={isopen}
              setisopen={setisopen}
              setModalWorkoutState={setModalWorkoutState}
            />
          ))}
        </tbody>
      </table>
      {/* modal */}

      <>
        {isopen ? (
          <ModalWorkout
            create={modalWorkoutState.create}
            workout_type={modalWorkoutState.workout_type}
            hour={modalWorkoutState.hour}
            workout_calorie={modalWorkoutState.workout_calorie}
          />
        ) : null}
      </>
    </>
  );
};

export default Workout;
