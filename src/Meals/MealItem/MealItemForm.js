import React, { useState, useRef } from "react";

import style from "./MealItemForm.module.css";
import Input from "../../components/UI/Input";

function MealItemForm(props) {
  const amountInputRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountValidationHandler = () => {
    const value = Number(amountInputRef.current.value());

    setAmountIsValid(value >= 1 && value <= 5);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    amountValidationHandler();

    if (amountIsValid) {
      props.onAddToCart(amountInputRef.current.value());
    }
  };

  return (
    <form className={style.form} onSubmit={submitHandler}>
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
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
}

export default MealItemForm;
