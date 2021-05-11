import React from "react";
import { useState } from "react";
import axios from "axios";
import Button from "../../components/common/button";
import Postinput from "../../components/common/post_input";
import CheckBox from "../../components/common/check_box";
import "../../scss/layout.scss";
import "../../scss/create_meals.scss";

const CreateMeal = (props) => {
  const [mealDesc, setMealDesc] = useState([]);
  const [calorie, setCalorie] = useState("");
  const [meal_type, setmeal_type] = useState("");
  const [inputdata, setinputdata] = useState("");
  const [img, setImage] = useState("../imgs/noimg.png");

  const save = async (e) => {
    e.preventDefault();

    await axios
      .post("http://localhost:3601/api/meals", {
        meal_desc: mealDesc,
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
  const clearAll = () => {
    setCalorie("");
    setMealDesc("");
  };
  // meal_type onchange taget.value 가지고오기
  //    "meal_type":"점심",
  // "calorie":6000,
  // "meal_desc":["감자","옥수수"],
  // "user_id": "6043c0fb032f6022cda5c18a"

  // const add = () => {
  //   setMealDesc(mealDesc.concat(inputdata));
  // };
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

  const inputdata_change = (e) => {
    setinputdata(e.target.value);
  };

  const onChangeFileReader = (e) => {
    const formData = new FormData();

    // console.log(e.target.files[0]);
    // formData.append(e.target.files[0]);
    const reader = new FileReader();

    console.log("event log1", e);
    reader.onload = (e) => {
      // const mealImageElem = document.querySelector(".post__meals__img");
      // console.log(e.currentTarget.reseult);
      // mealImageElem.src = e.target.files[0].currentTarget.reseult;
      // console.log("event log2", e);
    };
    const imageUrl = reader.readAsDataURL(e.target.files[0]);
    console.log(reader, "imageUrl", imageUrl);
  };

  return (
    <section className="section_padding">
      <div className="container">
        <div className="post__meals">
          <img className="post__meals__img" src={img} alt="no_img" />
          <div className="form_padding">
            <label htmlFor="test">
              파일 업로드
              <input id="test" type="file" onChange={onChangeFileReader} />
            </label>

            <Postinput
              title={"음식종류"}
              value={inputdata}
              onchange={inputdata_change}
              placeholder={"오늘 먹은 음식을 등록해주세요"}
            />
            <div className="">
              <h2 className="post__title">식사시간</h2>
              <CheckBox
                id="box1"
                type={"아침"}
                value={meal_type}
                name={"mealTime"}
                onchange={radioChange_1}
              />
              <CheckBox
                id="box2"
                type={"점심"}
                value={meal_type}
                name={"mealTime"}
                onchange={radioChange_2}
              />
              <CheckBox
                id="box3"
                type={"저녁"}
                value={meal_type}
                name={"mealTime"}
                onchange={radioChange_3}
              />
            </div>

            <Postinput
              onchange={cal_Change}
              title={"칼로리"}
              value={calorie}
              placeholder={"칼로리를 입력 해주세요"}
            />

            <Button handleClick={save}>저장</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateMeal;
