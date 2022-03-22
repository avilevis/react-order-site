import React from "react";

import style from "./Header.module.css";
import mealsImage from "../assets/meals.jpeg";

function Header() {
  return (
    <React.Fragment>
      <header className={style.header}>
        <h1>React Meals</h1>
      </header>
      <div className={style["main-image"]}>
        <img src={mealsImage} />
      </div>
    </React.Fragment>
  );
}

export default Header;
