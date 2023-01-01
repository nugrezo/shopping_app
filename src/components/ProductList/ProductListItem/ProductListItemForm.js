import { useRef, useState } from "react";
import Input from "../../../UI/Input";
import classes from "./ProductListItemForm.module.css";

const ProductListItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    //this will always return a string
    const enteredAmount = amountInputRef.current.value;
    //we need to convert string to a number
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      {!amountIsValid && <p>Please enter a valid amount(1-5)</p>}
      <button>+ Add</button>
    </form>
  );
};

export default ProductListItemForm;
