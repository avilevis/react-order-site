import React, { useContext } from "react";

import style from "./CartButton.module.css";
import CartIcon from "../Cart/CartIcon";

import CartContext from "../../store/cart-context";

function CartButton(props) {
  const cartCtx = useContext(CartContext);

  return (
    <button className={style.button} onClick={props.onClick}>
      <span className={style.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={style.badge}>{cartCtx.totalAmount}</span>
    </button>
  );
}

export default CartButton;
