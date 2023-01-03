import React from "react";
import classes from "./Cart.module.css";

const CartOrderButton = (props) => {
  return (
    <button className={classes.button} onClick={props.onClick}>
      Order
    </button>
  );
};

export default CartOrderButton;
