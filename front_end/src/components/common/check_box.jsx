import React from "react";
import "../../scss/common/check_box.scss";

const CheckBox = ({ type, onchange, name }) => {
  return (
    <>
      <label htmlFor={type} className="radio">
        <input
          id={type}
          className="a11y radio__input"
          type="radio" //
          value={type}
          name={name}
          onChange={onchange}
        />
        <span className="radio__value">{type}</span>
      </label>
    </>
  );
};

export default CheckBox;
