import { useState, useRef } from "react";
import axios from "axios";
import Button from "../../components/common/button";
import Postinput from "../../components/common/post_input";
import Radio from "../../components/common/radio";
import "../../scss/layout.scss";
import "../../scss/create_meals.scss";

const CreateMeal = (props) => {
  const [mealDesc, setMealDesc] = useState([]);
  const [calorie, setCalorie] = useState("");
  const [meal_type, setmeal_type] = useState("");
  const [inputdata, setinputdata] = useState("");
  const [img, setImage] = useState("../imgs/noimg.png");
  const [file, setfile] = useState(null);
  const save = async (e) => {
    e.preventDefault();
    const config = { header: { "content-type": "multipart/form-data" } };
    await axios
      .post(
        "http://localhost:3601/api/meals",
        {
          meal_desc: mealDesc,
          calorie: calorie,
          meal_type: meal_type,
          user_id: "6043c0fb032f6022cda5c18a",
          file: file,
        },
        config
      )
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
    setmeal_type("");
  };
  // meal_type onchange taget.value 가지고오기
  //    "meal_type":"점심",
  // "calorie":6000,
  // "meal_desc":["감자","옥수수"],
  // "user_id": "6043c0fb032f6022cda5c18a"

  // const add = () => {
  //   setMealDesc(mealDesc.concat(inputdata));
  // };
  const mealDesc_Change = (e) => {
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

  const inputdata_change = (e) => {
    setinputdata(e.target.value);
  };

  // const onChangeFileReader = (e) => {
  //   const formData = new FormData();

  //   // console.log(e.target.files[0]);
  //   // formData.append(e.target.files[0]);
  //   const reader = new FileReader();

  //   console.log("event log1", e);
  //   reader.onload = (e) => {
  //     // const mealImageElem = document.querySelector(".post__meals__img");
  //     // console.log(e.currentTarget.reseult);
  //     // mealImageElem.src = e.target.files[0].currentTarget.reseult;
  //     // console.log("event log2", e);
  //   };
  //   const imageUrl = reader.readAsDataURL(e.target.files[0]);
  //   console.log(reader, "imageUrl", imageUrl);
  // };

  const onChangeFileReader = (e) => {
    if (!e.target.files[0]) {
      const file = null;
      setfile(file);
      setImage("../imgs/noimg.png");
      return;
    }
    const file = e.target.files[0];
    setfile(file);
    const Image = URL.createObjectURL(file);
    setImage(Image);
  };
  const imgtag = useRef();
  const onfileClick = () => {
    imgtag.click();
  };
  // const onfileClick = () => {
  //   const imgtag = document.getElementById("test");
  //   imgtag.click();
  // };

  // 리액트 ref 이용해서 객체 선택 !
  // URL 해야 IMG 입력 값을 넣어줘야 한다

  return (
    <section className="section_padding">
      <div className="container">
        <div className="post__meals">
          <img
            onClick={onfileClick}
            className="post__meals__img"
            src={img}
            alt="no_img"
          />

          <div className="post__meals__padding">
            <div className="post__meals__wrap">
              <label htmlFor="test">
                <input
                  ref={imgtag}
                  id="test"
                  hidden
                  type="file"
                  onChange={onChangeFileReader}
                />
              </label>

              <Postinput
                title={"음식종류"}
                type={"text"}
                value={mealDesc}
                onchange={mealDesc_Change}
                placeholder={"오늘 먹은 음식을 등록해주세요"}
              />
              <div className="post__meals__checkBox">
                <h2 className="post__title">식사시간</h2>
                <Radio
                  id="box1"
                  type={"아침"}
                  value={meal_type}
                  name={"mealTime"}
                  onchange={radioChange_1}
                />
                <Radio
                  id="box2"
                  type={"점심"}
                  value={meal_type}
                  name={"mealTime"}
                  onchange={radioChange_2}
                />
                <Radio
                  id="box3"
                  type={"저녁"}
                  value={meal_type}
                  name={"mealTime"}
                  onchange={radioChange_3}
                />
              </div>

              <Postinput
                onchange={cal_Change}
                type={"text"}
                title={"칼로리"}
                value={calorie}
                placeholder={"칼로리를 입력 해주세요"}
              />

              <Button handleClick={save}>저장</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateMeal;
