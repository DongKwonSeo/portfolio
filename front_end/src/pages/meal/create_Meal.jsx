import React from "react";
import { useState } from "react";
import axios from "axios";
import Container from "../main/container/container";
import styles from "./create_Meal.module.css";

const CreateMeal = (props) => {
  // const [state, setState] = useState({});

  const [mealDesc, setMealDesc] = useState("");
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
    clearAll();
  };
  // meal_type onchange taget.value 가지고오기

  return (
    <>
      <h1>식단 등록</h1>
      <Container>
        <div className={styles.wrap}>
          <img src="../imgs/logo2.png" alt="" width="40%" />
          <div className={styles.meals}>
            <div>
              <h2>음식 종류</h2>
              <form action="" className={styles.form}>
                <input
                  type="text"
                  // maxlength="10"
                  placeholder="오늘 먹은 음식을 등록해주세요"
                  value={mealDesc}
                  onChange={(e) => {
                    // 예: 현재 화면에는, "베리베리스트로베리!" 라고 되어 있고, 이 때 ! 를 눌렀을 경우
                    const word = e.target.value;
                    // e.target.value = word = "베리베리스트로베리!!";
                    // 이 때, 지금 이 주석이 있는 줄에서이 mealDesc의 값은.. : "베리베리스트로베리!"

                    // if (word.length > 10) {
                    //   // word.length: 11
                    //   // 10보다 크면: 더 안써진다-> 베리베리스트로베리짱-> 느낌표!를 누름-> 그래도 베리베리스트로베리짱 이렇게만 나와야 함-> 즉, 아무것도안 해줌 약오르지?ㅋㅋ
                    // } else {
                    //   // setMealDesc(e.target.value);
                    //   //10보다 작으면: 그냥 써진다-> 그냥 입력된다
                    //   setMealDesc(word);
                    // }
                    if (word.length <= 10) {
                      setMealDesc(word);
                    }
                    //워드 값이 이하면 워드값을 설정한다
                    // -> word의 길이(.length)가 10 이하면
                    // mealDesc라는 state의 값을 setMealDesc()로 값을 넣는다
                    // (10보다 크면, 걍 생 깜)
                  }}
                  // 예: 현재 화면에는, "베리베리스트로베리!" 라고 되어 있고, 이 때 ! 를 눌렀을 경우
                  // e.target.value = "베리베리스트로베리!!";
                  // 이 때, mealDesc의 값은.. 아직.. "베리베리스트로베리!";
                  // setMealDesc(e.target.value);
                  // 이제, 비로소.. mealDesc의 값은.. "베리베리스트로베리!!" 가 되었다!
                  // -- -- --
                  // value={state.mealDesc || ""}
                  // onChange={(e) =>
                  //   setState({ ...state, mealDesc: e.target.value })
                  // }
                  // 글자 입력을 max  10 글자 설정
                  // 글자 :mealDesc
                  // 입력을: onChange  e.target.value
                  // max  10 글자: ??? 'abcd'.length
                  // 10보다 크면: 더 안써진다-> 베리베리스트로베리짱-> 느낌표!를 누름-> 그래도 베리베리스트로베리짱 이렇게만 나와야 함-> 즉, 아무것도안 해줌 약오르지?ㅋㅋ
                  //10보다 작으면: 그냥 써진다-> 그냥 입력된다
                  // 설정:setMealDesc
                />
              </form>
            </div>
            <div className={styles.meal}>
              <h2>분류</h2>
              {/* <button>아침</button>
              <button>점심</button>
              <button>저녁</button> */}
              <input
                type="radio"
                name="default"
                id="default_Option1"
                value="아침"
                checked
                readOnly
              />
              <label htmlFor="default_Option1">아침</label>
              <input
                type="radio"
                name="default"
                id="default_Option2"
                value="점심"
                readOnly
              />
              <label htmlFor="default_Option2">점심</label>

              <input
                type="radio"
                name="default"
                id="default_Option3"
                value="저녁"
                readOnly
              />
              <label htmlFor="default_Option3">저녁</label>
            </div>
            <div>
              <h2>칼로리</h2>
              <form action="" className={styles.form}>
                <input
                  // type="number"
                  type="text"
                  placeholder="칼로리를 입력해주세요 ex.125kcal"
                  value={calorie}
                  onChange={(e) => setCalorie(e.target.value)}
                  // 전처리: ...;;
                  // 검증: validation
                  // const v = e.target.value;
                  // const n = Number(v);
                  // const isNumber = v == n;
                  // console.log({ v, n, isNumber });
                  // setCalorie(isNumber ? n : calorie); // 삼항연산자
                  //input값을 가지고와서
                  // n  변수를 만들고 number(input 값을 전달해준다)
                  //  innumber는 값이 숫자이다
                  // Number = 숫자가 아니면 false 이고 숫자면 true 이다
                  //문자열을 숫자로 바꾼다 nan  (숫자면 숫자 아니면 nan 나온다 )
                  // setcalorie 설정해준다
                  // -- --
                  // const isNumber = isNaN(Number(v)) == false;
                  // setCalorie(isNumber ? v : calorie);

                  // (e) => setCalorie(e.currentTarget.value)
                  // validation
                  // 값을 받아서 이거 숫자아니면 ㄲ져!
                  // 숫자면.. ㅇㅋ!
                  // -- --
                  // e.current.value
                  //사용자가 뭘 입력하면, -> onChange: 썼다 ㅇㅋ
                  // 그걸 받아다가, ->e.current.value
                  // 바꾸고 싶다 ->setCalorie

                  // 전송 버튼, : save
                  // 누르면,:onClick
                  //  지금 음식 종류가, mealDesc
                  // 출력 된다 . console.log
                  // 칼로리도, calorie
                  // 출력 console.log
                  // -------------
                  // 칼로리 숫자만 입력 !!
                  //  type:number   변경 한다 ?
                  // 숫자만 쓰기 가능?  html 숫자만 가능하게 한다 ?
                />
              </form>
            </div>
            <div className={styles.save}>
              <button onClick={save}>저장</button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CreateMeal;
