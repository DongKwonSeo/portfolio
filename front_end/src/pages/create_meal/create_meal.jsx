import { useState } from "react";
import axios from "axios";
import Button from "../../components/common/button";
import Postinput from "../../components/common/post_input";
import Radio from "../../components/common/radio";
import "../../scss/style.scss";

const CreateMeal = (props) => {
  const [mealDesc, SetmealDesc] = useState([]);
  const [calorie, Setcalorie] = useState("");
  const [mealType, SetmealType] = useState("");
  const [img, SetImage] = useState("../imgs/noimg.png");
  const [files, Setfiles] = useState(null);
  const save = async (e) => {
    try {
      e.preventDefault();
      const config = { header: { "content-type": "multipart/form-data" } };
      const infor = {
        meal_desc: mealDesc,
        calorie: calorie,
        meal_type: mealType,
        user_id: "6043c0fb032f6022cda5c18a",
        file: files,
      };
      const { data } = await axios.post(
        "http://localhost:3601/api/meals",
        infor,
        config
      );
      clearAll();
    } catch (error) {
      console.log(error);
    }
  };
  const clearAll = () => {
    Setcalorie("");
    SetmealDesc("");
    SetmealType("");
  };

  const mealDescOnChange = (e) => {
    SetmealDesc(e.target.value);
  };
  const cal_Change = (e) => {
    Setcalorie(e.target.value);
  };

  const radioChange_1 = (e) => {
    SetmealType(e.target.value);
  };
  const radioChange_2 = (e) => {
    SetmealType(e.target.value);
  };
  const radioChange_3 = (e) => {
    SetmealType(e.target.value);
  };

  const onfileClick = () => {
    const imgtag = document.getElementById("test");
    imgtag.click();
  };

  const onChangeFileReader = (e) => {
    if (!e.target.files[0]) {
      const file = null;
      Setfiles(file);
      SetImage("../imgs/noimg.png");
      return;
    }
    const file = e.target.files[0];
    Setfiles(file);
    const Image = URL.createObjectURL(file);
    SetImage(Image);
  };

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
                onchange={mealDescOnChange}
                placeholder={"오늘 먹은 음식을 등록해주세요"}
              />
              <div className="post__meals__checkBox">
                <h2 className="post__title">식사시간</h2>
                <Radio
                  id="box1"
                  type={"아침"}
                  value={mealType}
                  name={"mealTime"}
                  onchange={radioChange_1}
                />
                <Radio
                  id="box2"
                  type={"점심"}
                  value={mealType}
                  name={"mealTime"}
                  onchange={radioChange_2}
                />
                <Radio
                  id="box3"
                  type={"저녁"}
                  value={mealType}
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
