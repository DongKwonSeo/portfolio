// import React, { useEffect, useState } from "react";
import React, { useState } from "react";
import axios from "axios";
import "../../scss/layout.scss";
import "../../scss/create_workOut.scss";
import Button from "../../components/common/button";
import Postinput from "../../components/common/post_input";

const CreateWorkOut = (props) => {
  const [workout_type, setworkout_type] = useState("");
  const [hour, sethour] = useState("");
  const [workout_calorie, setworkout_calorie] = useState("");

  const save = async (e) => {
    e.preventDefault();

    // axios 서버에 보낸다!
    await axios
      .post("http://localhost:3601/api/workout", {
        // meal_type,
        // calorie,
        // meal_desc,
        // user_id,

        // workout_type: "수영..",
        // hour: 5,
        // workout_calorie: 120,
        // user_id: "6043c0fb032f6022cda5c18a",

        workout_type: workout_type,
        hour: hour,
        workout_calorie: workout_calorie,
        user_id: "6043c0fb032f6022cda5c18a",
      })
      .then((response) => {
        console.log(response.data);
        // response
      })
      .catch((error) => {
        console.log(error);
      });

    // form reset!
    clearAll();
  };

  const clearAll = () => {
    sethour("");
    setworkout_type("");
    setworkout_calorie("");
  };

  const type_change = (e) => {
    setworkout_type(e.target.value);
  };
  const time_change = (e) => {
    sethour(e.target.value);
  };
  const claorie_change = (e) => {
    setworkout_calorie(e.target.value);
  };
  return (
    <section className="create_workOut">
      <div className="create_workOut__container">
        <div className="create_workOut__wrap">
          <div className="create_workOut__from">
            <Postinput
              title={"운동종류"}
              value={workout_type}
              onchange={type_change}
              placeholder={"운동을 입력해주세요"}
            />
            <Postinput
              title={"운동 소요시간"}
              value={hour}
              onchange={time_change}
              placeholder={"소요시간을 입력해주세요"}
            />
            <Postinput
              title={"소모 칼로리"}
              value={workout_calorie}
              onchange={claorie_change}
              placeholder={"소모 칼로리를 입력해주세요 ex)kcal"}
            />
            <div className="create_workOut__button">
              <Button handleClick={save}>SAVE</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateWorkOut;
