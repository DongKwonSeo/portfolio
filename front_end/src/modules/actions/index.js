import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk(
  "user/login",
  async (userInfo, thunkAPI) => {
    const { data } = await axios.post(
      "http://localhost:3601/api/users/login",
      userInfo
    );

    console.log(data);
  }
);
