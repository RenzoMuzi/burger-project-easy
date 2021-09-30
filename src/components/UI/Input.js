import React, { forwardRef } from "react";
import classes from "./Input.module.css";

const Input = forwardRef(({ label, input: { id, ...inputProps } }, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={id}>{label}</label>
      <input ref={ref} {...inputProps} />
    </div>
  );
});

export default Input;
