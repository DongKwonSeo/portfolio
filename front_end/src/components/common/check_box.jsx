import React from "react";
import "../../scss/common/check_box.scss";

const CheckBox = ({ type, onchange }) => {
  return (
    <div className="checkbox">
      <label htmlFor="checkbox" className="checkbox__label">
        <input
          className="checkbox__input"
          type="checkbox" //
          value={type}
          name="box"
          onChange={onchange}
        />
        <span className="checkbox__span">{type}</span>
      </label>
    </div>
  );
};

export default CheckBox;
