import React, { useState } from "react";
import axios from "axios";
import Button from "../../components/common/button";
import Postinput from "../../components/common/post_input";

import "../../scss/style.scss";
import Useform from "../../components/common/useform";

const CreateWorkOut = (props) => {
  const [workoutType, SetworkoutType] = useState("");
  const [hour, Sethour] = useState("");
  const [workoutCalorie, SetworkoutCalorie] = useState("");
  const { form, handleChange, handleSubmit, error } = Useform();

  const save = async (e) => {
    e.preventDefault();
    try {
      const infor = {
        workout_type: form.workoutType,
        hour: form.hour,
        workout_calorie: form.workoutCalorie,
        user_id: "6043c0fb032f6022cda5c18a",
      };
      handleSubmit(e);
      // console.log(handleSubmit);
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

  return (
    <section className="create_workOut">
      <div className="create_workOut__wrap">
        <form className="create_workOut__from">
          <Postinput
            title={"운동종류"}
            name={"workoutType"}
            value={form.workoutType}
            onChange={handleChange}
            placeholder={"운동을 입력해주세요"}
          />

          <Postinput
            title={"운동 소요시간"}
            name={"hour"}
            value={form.hour}
            onChange={handleChange}
            placeholder={"소요시간을 입력해주세요"}
          />
          <Postinput
            title={"소모 칼로리"}
            name={"workoutCalorie"}
            value={form.workoutCalorie}
            onChange={handleChange}
            placeholder={"소모 칼로리를 입력해주세요 ex)kcal"}
          />
          <Button
            className="create_workOut__button"
            onClick={save}
            children={"SAVE"}
          />
        </form>
      </div>
    </section>
  );
};

export default CreateWorkOut;
