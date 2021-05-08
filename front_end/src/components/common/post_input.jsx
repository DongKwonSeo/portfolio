import React from "react";
import "../../scss/common/input.scss";

const Postinput = ({ title, onchange, placeholder }) => {
  return (
    <>
      <form className="post">
        <h2>{title}</h2>
        <label htmlFor="post" className="hidden">
          post
        </label>
        <input
          className="post__input"
          type="text"
          onChange={onchange}
          placeholder={placeholder}
        />
      </form>
    </>
  );
};

export default Postinput;
