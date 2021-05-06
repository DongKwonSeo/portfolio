import React from "react";
import { useState } from "react";
import axios from "axios";
import Button from "../../components/common/button";
import "../../scss/layout.scss";
import "../../scss/create_meals.scss";

const CreateMeal = (props) => {
  // const [state, setState] = useState({});

  const [mealDesc, setMealDesc] = useState([""]);
  const [calorie, setCalorie] = useState("");
  const [meal_type, setmeal_type] = useState("");

  const clearAll = () => {
    setCalorie("");
    setMealDesc("");
  };

  const save = async (e) => {
    // e.preventDefault();

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
    clearAll();
    console.log(save);
  };
  // meal_type onchange taget.value 가지고오기
  //    "meal_type":"점심",
  // "calorie":6000,
  // "meal_desc":["감자","옥수수"],
  // "user_id": "6043c0fb032f6022cda5c18a"

  const mealChange = (e) => {
    setMealDesc(e.target.value);
  };

  const radioChange_1 = (e) => {
    e.preventDefault();
    setmeal_type(e.target.value);
  };
  const radioChange_2 = (e) => {
    e.preventDefault();
    setmeal_type(e.target.value);
  };
  const radioChange_3 = (e) => {
    e.preventDefault();
    setmeal_type(e.target.value);
  };

  return (
    <section className="section_padding">
      <div className="container">
        <h1 className="post__padding">식단 등록</h1>
        <div className="post__meals">
          <img src="../imgs/logo2.png" alt="" width="40%" />
          <form className="form_padding">
            <div className="input_padding">
              <h2>음식 종류</h2>
              <input
                type="text"
                // maxlength="10"
                placeholder="오늘 먹은 음식을 등록해주세요"
                value={mealDesc}
                onChange={mealChange}
              />
            </div>
            <div className="input_padding">
              <h2>분류</h2>

              <input
                type="radio"
                id="default_Option1"
                value="아침"
                onChange={radioChange_1}
                readOnly
              />
              <label htmlFor="default_Option1">아침</label>

              <input
                type="radio"
                id="default_Option2"
                value="점심"
                onChange={radioChange_2}
                readOnly
              />
              <label htmlFor="default_Option2">점심</label>

              <input
                type="radio"
                id="default_Option3"
                value="저녁"
                onChange={radioChange_3}
                readOnly
              />
              <label htmlFor="default_Option3">저녁</label>
            </div>
            <div className="input_padding">
              <h2>칼로리</h2>

              <input
                // type="number"
                type="text"
                placeholder="칼로리를 입력해주세요 ex.125kcal"
                value={calorie}
                onChange={(e) => setCalorie(e.target.value)}
              />
            </div>
            <div>
              <Button handleClick="save">저장</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CreateMeal;
