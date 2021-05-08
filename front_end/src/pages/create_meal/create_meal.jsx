import React from "react";
import { useState } from "react";
import axios from "axios";
import Button from "../../components/common/button";
import Postinput from "../../components/common/post_input";
import Checkbox from "../../components/common/checkbox";
import "../../scss/layout.scss";
import "../../scss/create_meals.scss";

const CreateMeal = (props) => {
  const [mealDesc, setMealDesc] = useState([""]);
  const [calorie, setCalorie] = useState("");
  const [meal_type, setmeal_type] = useState("");

  const clearAll = () => {
    setCalorie("");
    setMealDesc("");
  };

  const save = async (e) => {
    e.preventDefault();

    await axios
      .post("http://localhost:3601/api/meals", {
        mealDesc: mealDesc,
        calorie: calorie,
        meal_type: meal_type,
        user_id: "6043c0fb032f6022cda5c18a",
      })
      .then((response) => {
        console.log(response.data);
        // response
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(save);
    clearAll();
  };
  // meal_type onchange taget.value 가지고오기
  //    "meal_type":"점심",
  // "calorie":6000,
  // "meal_desc":["감자","옥수수"],
  // "user_id": "6043c0fb032f6022cda5c18a"

  const meal_Change = (e) => {
    setMealDesc(e.target.value);
  };
  const cal_Change = (e) => {
    setCalorie(e.target.value);
  };

  const radioChange_1 = (e) => {
    setmeal_type(e.target.value);
  };
  const radioChange_2 = (e) => {
    setmeal_type(e.target.value);
  };
  const radioChange_3 = (e) => {
    setmeal_type(e.target.value);
  };

  // const claorie_change = (e) => {
  //   setworkout_calorie(e.target.value);
  // };

  return (
    <section className="section_padding">
      <div className="container">
        <h1 className="post__padding">식단 등록</h1>
        <div className="post__meals">
          <img src="../imgs/logo2.png" alt="" width="40%" />
          <div className="form_padding">
            <>
              <Postinput
                title={"음식종류"}
                onchange={meal_Change}
                placeholder={"오늘 먹은 음식을 등록해주세요"}
              />
            </>
            <div className="check_box">
              <Checkbox type={"아침"} onchange={radioChange_1} />
              <Checkbox type={"점심"} onchange={radioChange_2} />
              <Checkbox type={"저녁"} onchange={radioChange_3} />
            </div>
            <>
              <Postinput
                onchange={cal_Change}
                title={"칼로리"}
                placeholder={"칼로리를 입력 해주세요"}
              />
            </>
            <Button handleClick={save}>저장</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateMeal;
