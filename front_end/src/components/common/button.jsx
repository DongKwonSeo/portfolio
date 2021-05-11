import React from "react";
import "../../scss/common/button.scss";
const Button = ({ children, handleClick }) => {
  return (
    <button
      type="button"
      className="btn" //
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
