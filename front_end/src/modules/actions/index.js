import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk(
  "user/login",
  async (userInfo, thunkAPI) => {
    const { data } = await axios.post(
      "http://localhost:3601/api/users/login",
      userInfo,
      { withCredentials: true }
    );
    alert(`${data.user.name}님이 로그인 하였습니다.`);
    return data;
  }
);

export const logout = createAsyncThunk(
  "user/logout", //
  async (removeCookie, thunkAPI) => {
    const { data } = await axios.get(
      "http://localhost:3601/api/users/logout", //
      { withCredentials: true }
    );
    // 쿠키 삭제
    removeCookie("x_auth");
    alert(`${data.user.name}님이 로그아웃 하였습니다.`);
  }
);

// authHandler
export const authHandler = createAsyncThunk(
  "user/authHandler", //
  async (thunkAPI) => {
    const { data } = await axios.get(
      "http://localhost:3601/api/users/auth", //
      { withCredentials: true }
    );
    return data;
  }
);

// getTotal

export const getTotal = createAsyncThunk(
  "user/total", //
  async (thunkAPI) => {
    // 날짜 변환
    const getMD = (create) => {
      const d = new Date(create);
      const md = d.getFullYear() + "." + (d.getMonth() + 1) + "." + d.getDate(); // 데이터 객체 에서 월 , 일 만 가지고 와서 문자열로 만들어 준다
      return md;
    };

    const response1 = await axios.get("http://localhost:3601/api/meals");
    let meals = response1.data.infor;
    let timelineData = [];
    for (let i = 0; i < meals.length; i++) {
      const obj = {
        _id: meals[i]._id,
        icon: <i className="fas fa-apple-alt"></i>,
        type: "meals",
        display_type: "Meal",
        desc: meals[i].meal_desc,
        cal: meals[i].calorie,
        create: (meals[i].create = getMD(meals[i].create)),
      };
      meals[i].create = getMD(meals[i].create);
      timelineData.push(obj);
    }
    // work out api
    const response2 = await axios.get("http://localhost:3601/api/workout");
    let workout = response2.data.infor;
    for (let i = 0; i < workout.length; i++) {
      const obj = {
        _id: workout[i]._id,
        icon: <i className="fas fa-dumbbell"></i>,
        type: "workout",
        display_type: "WorkOut",
        desc: [workout[i].workout_type],
        cal: workout[i].workout_calorie,
        hour: workout[i],
        create: (workout[i].create = getMD(workout[i].create)),
        // create:
      };
      // console.log(obj.hour, "시간시간");
      timelineData.push(obj);
    }
  }
);
