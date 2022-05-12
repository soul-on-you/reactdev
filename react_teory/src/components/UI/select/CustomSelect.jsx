import React from "react";
import classes from "./CustomSelect.module.css";

function CustomSelect({ options, defaultValue, value, onChange, ...props }) {
  return (
    <select
      {...props}
      className={classes.customSelect}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option disabled key={0} value="">
        {defaultValue}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.text}
        </option>
      ))}
    </select>
  );
}

export default CustomSelect;
