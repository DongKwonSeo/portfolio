import { useRef, useState } from "react";
import axios from "axios";
import Button from "../../components/common/button";
import Postinput from "../../components/common/post_input";
import Radio from "../../components/common/radio";
import Useform from "../../components/common/useform";
import { useHistory } from "react-router-dom";
import "../../scss/style.scss";

const CreateMeal = (props) => {
  const { form, handleChange, handleSubmit, error } = Useform();
  const [mealDesc, SetmealDesc] = useState([]);
  const [calorie, Setcalorie] = useState("");
  const [mealType, SetmealType] = useState("");
  const [img, SetImage] = useState("../imgs/noimg.png");
  const [files, Setfiles] = useState(null);
  const history = useHistory();

  const save = async (e) => {
    try {
      e.preventDefault();
      const config = { header: { "content-type": "multipart/form-data" } };
      const infor = {
        meal_desc: form.mealDesc,
        calorie: form.calorie,
        meal_type: form.mealType,
        user_id: "6043c0fb032f6022cda5c18a",
        // file: files,
      };
      const { data } = await axios.post(
        "http://localhost:3601/api/meals",
        infor,
        config
      );
      console.log(infor, "정보!!!");
      // clearAll()
      history.push("/total");
      alert("성공했습니다");
    } catch (error) {
      console.log(error);
      alert("실패하였습니다");
    }
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
      <div className="post__meals">
        <img
          onClick={onfileClick}
          className="post__meals__img"
          src={img}
          alt="no_img"
        />

        <form className="post__meals__padding">
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
              name={"mealDesc"}
              value={form.mealDesc}
              onChange={handleChange}
              placeholder={"오늘 먹은 음식을 등록해주세요"}
            />
            <div className="post__meals__checkBox">
              <h2 className="post__title">식사시간</h2>
              <Radio
                id="box1"
                type={"아침"}
                name={"mealType"}
                value={form.mealType1}
                onChange={handleChange}
              />
              <Radio
                id="box2"
                type={"점심"}
                name={"mealType"}
                value={form.mealType2}
                onChange={handleChange}
              />
              <Radio
                id="box3"
                type={"저녁"}
                name={"mealType"}
                value={form.mealType3}
                onChange={handleChange}
              />
            </div>

            <Postinput
              onChange={handleChange}
              name={"calorie"}
              type={"text"}
              title={"칼로리"}
              value={form.calorie}
              placeholder={"칼로리를 입력 해주세요"}
            />
            <Button onClick={save}>저장</Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CreateMeal;
