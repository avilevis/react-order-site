import React, { useState } from "react";

import CartProvider from "./store/CartProvider";
import Header from "./components/Header/Header";
import MealsSummary from "./Meals/MealsSummary";
import MealList from "./Meals/MealList";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header openCartHandler={showCartHandler} />
      <MealsSummary />
      <MealList />
    </CartProvider>
  );
}

export default App;
