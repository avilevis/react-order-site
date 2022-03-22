import React, { useState, useEffect } from "react";

import CartContext from "./cart-context";

function CartProvider(props) {
  const [items, setItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const addItemHandler = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };
  const removeItemHandler = (prevItems, itemId) => {
    const newItemList = prevItems.filter((item) => item.id !== itemId);

    setItems(newItemList);
  };
  const getTotalPrice = () => {
    const calcPrice = items.reduce(
      (acc, item) => acc + item.price * item.amount,
      0
    );

    return calcPrice.toFixed(2);
  };

  useEffect(() => {
    const amountCount = items.reduce(
      (acc, item) => acc + Number(item.amount),
      0
    );

    setTotalAmount(amountCount);
  }, [items]);

  return (
    <CartContext.Provider
      value={{
        items: items,
        totalAmount: totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
        totalPrice: getTotalPrice,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
