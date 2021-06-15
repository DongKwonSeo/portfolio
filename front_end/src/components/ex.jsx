import React from "react";
import "../scss/style.scss";
import Useform from "./common/useform";

const Ex = (props) => {
  const { values, handleChange, handleClick } = Useform();
  return (
    <form className="form" onSubmit={handleClick}>
      <>
        <input
          type="id"
          placeholder="아이뒤"
          name="username"
          value={values.username}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="비밀번호 "
          name="password"
          value={values.password}
          onChange={handleChange}
        />
        <button type="submit">버튼 눌러주세요</button>

        {/* <input
          type="id"
          placeholder="아이뒤"
          {...register("test", { required: true })}
        />
        <input
          type="text"
          placeholder="비밀번호 "
          {...register("pass", { required: true })}
        />
        <input type="submit" /> */}
      </>
    </form>
  );
};

export default Ex;
