import React, { useState } from "react";
import Button from "../../components/common/button";
import Postinput from "../../components/common/post_input";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { login } from "../../modules/actions";

import "../../scss/style.scss";

const Login = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [user_id, Setuser_id] = useState("");
  const [password, Setpassword] = useState("");

  const user_id_Onchang = (e) => {
    Setuser_id(e.target.value);
  };
  const password_Onchang = (e) => {
    Setpassword(e.target.value);
  };

  const login_sumit = (e) => {
    let userInfo = {
      user_id,
      password,
    };
    dispatch(login(userInfo));
    Setuser_id("");
    Setpassword("");
    history.push("/");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      login_sumit();
    }
  };

  return (
    <section className="login">
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
