import React from "react";

import style from "./MealList.module.css";
import Card from "../components/UI/Card";
import MealItem from "./MealItem/MealItem";

import meals from "./meal-content.json";

function MealList() {
  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={style.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
}

export default MealList;
