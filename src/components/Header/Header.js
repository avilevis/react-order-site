import React from "react";

import style from "./Header.module.css";
import mealsImage from "../../assets/meals.jpeg";
import CartButton from "./CartButton";

function Header(props) {
  return (
    <React.Fragment>
      <header className={style.header}>
        <h1>React Meals</h1>
        <CartButton onClick={props.openCartHandler} />
      </header>
      <div className={style["main-image"]}>
        <img src={mealsImage} />
      </div>
    </React.Fragment>
  );
}

export default Header;
