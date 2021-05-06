// import React, { useEffect, useState } from "react";
import React, { useState } from "react";
import axios from "axios";
import "../../scss/layout.scss";
import Button from "../../components/common/button";

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
    console.log(type_change);
    setworkout_type(e.target.value);
  };
  const time_change = (e) => {
    sethour(e.target.value);
  };
  const claorie_change = (e) => {
    setworkout_calorie(e.target.value);
  };
  return (
    <section className="section_padding">
      <div className="container">
        <h1 className="post__padding">운동 등록</h1>
        <form className="form_padding">
          <div className="input_padding">
            <h2>운동 종류</h2>
            <input
              type="text"
              placeholder="운동을 적어 주세요!"
              value={workout_type}
              onChange={type_change}
            />
          </div>
          <div className="input_padding">
            <h2>운동 소요시간</h2>

            <input
              type="select"
              placeholder="운동 소요시간"
              value={hour}
              onChange={time_change}
            />
          </div>
          <div className="input_padding">
            <h2>소모 칼로리</h2>
            <input
              type="text"
              placeholder="소비한 칼로리를 입력해주세요"
              value={workout_calorie}
              onChange={claorie_change}
            />
          </div>
          <Button handleClick={save}>저장</Button>
          {/* <button onClick={save}>저장</button> */}
        </form>
      </div>
    </section>
  );
};

export default CreateWorkOut;
