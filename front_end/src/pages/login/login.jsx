import React, { useState } from "react";
import Button from "../../components/common/button";
import Postinput from "../../components/common/post_input";
import { useDispatch } from "react-redux";
import { login } from "../../store/user";
import { useHistory } from "react-router";
import "../../scss/style.scss";

const Login = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [user_id, setUser_id] = useState("");
  const [password, setPassword] = useState("");

  const user_id_Onchang = (e) => {
    setUser_id(e.target.value);
  };
  const password_Onchang = (e) => {
    setPassword(e.target.value);
  };

  const login_sumit = async (e) => {
    let information = {
      user_id,
      password,
    };
    dispatch(login(history, information));

    //  input reset
    setUser_id("");
    setPassword("");
  };
  const handleKeyPress = (e) => {
    console.log(e.key);
    if (e.key === "Enter") {
      e.preventDefault();
      login_sumit();
    }
  };

  return (
    <section className="section_padding container login">
      <div>
        <h1 className="login__title">LOGIN</h1>
        <Postinput
          type={"id"}
          value={user_id}
          onchange={user_id_Onchang}
          placeholder={"ID"}
          onKeyPress={handleKeyPress}
        />
        <Postinput
          type={"password"}
          value={password}
          onchange={password_Onchang}
          placeholder={"PASSWORD"}
          onKeyPress={handleKeyPress}
        />
        <Button children={"LOGIN"} handleClick={login_sumit} />
      </div>
    </section>
  );
};

export default Login;
