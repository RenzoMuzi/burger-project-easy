import React from "react";
import classes from "./Input.module.css";

const Input = ({ label, input: { id, ...inputProps } }) => {
  return (
    <div className={classes.input}>
      <label htmlFor={id}>{label}</label>
      <input {...inputProps} />
    </div>
  );
};

export default Input;
