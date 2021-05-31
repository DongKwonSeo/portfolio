import React, { useState } from "react";
import Button from "../../components/common/button";
import Postinput from "../../components/common/post_input";
import { useDispatch } from "react-redux";
import { setlogin } from "../../store/user";
import "../../scss/login.scss";

const Login = (props) => {
  const dispatch = useDispatch();
  const [user_id, setUser_id] = useState("");
  const [password, setPassword] = useState("");

  const user_id_Onchang = (e) => {
    setUser_id(e.target.value);
  };
  const password_Onchang = (e) => {
    setPassword(e.target.value);
  };

  const login_sumit = async (e) => {
    e.preventDefault();
    let information = {
      user_id,
      password,
    };
    dispatch(setlogin(information));

    //  input reset
    setUser_id("");
    setPassword("");
  };
  return (
    <section className="section_padding container">
      <div className="login">
        <section>
          <h1 className="login__title">LOGIN</h1>

          <Postinput
            type={"id"}
            value={user_id}
            onchange={user_id_Onchang}
            placeholder={"ID"}
          />
          <Postinput
            type={"password"}
            value={password}
            onchange={password_Onchang}
            placeholder={"PASSWORD"}
          />

          <Button children={"LOGIN"} handleClick={login_sumit} />
        </section>
      </div>
    </section>
  );
};

export default Login;
