// import React, { useEffect, useState } from "react";
import React, { useState } from "react";
import axios from "axios";
import Button from "../../components/common/button";
import Postinput from "../../components/common/post_input";
import "../../scss/style.scss";

const CreateWorkOut = (props) => {
  const [workoutType, SetworkoutType] = useState("");
  const [hour, Sethour] = useState("");
  const [workoutCalorie, SetworkoutCalorie] = useState("");

  const save = async (e) => {
    e.preventDefault();
    try {
      const infor = {
        workoutType: workoutType,
        hour: hour,
        workoutCalorie: workoutCalorie,
        user_id: "6043c0fb032f6022cda5c18a",
      };
      await axios.post("http://localhost:3601/api/workout", infor);
    } catch (error) {
      console.log(error);
    }

    // form reset!
    clearAll();
  };

  const clearAll = () => {
    Sethour("");
    SetworkoutType("");
    SetworkoutCalorie("");
  };

  const typeOnchange = (e) => {
    SetworkoutType(e.target.value);
  };
  const timeOnchange = (e) => {
    Sethour(e.target.value);
  };
  const claorieOnchange = (e) => {
    SetworkoutCalorie(e.target.value);
  };
  return (
    <section className="create_workOut">
      <div className="create_workOut__container">
        <div className="create_workOut__wrap">
          <div className="create_workOut__from">
            <Postinput
              title={"운동종류"}
              value={workoutType}
              onchange={typeOnchange}
              placeholder={"운동을 입력해주세요"}
            />
            <Postinput
              title={"운동 소요시간"}
              value={hour}
              onchange={timeOnchange}
              placeholder={"소요시간을 입력해주세요"}
            />
            <Postinput
              title={"소모 칼로리"}
              value={workoutCalorie}
              onchange={claorieOnchange}
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
