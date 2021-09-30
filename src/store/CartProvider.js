import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const updatedTotalAmount =
        state.totalAmount + action.item.price * action.item.amount;
      const existingCartItemIndex = state.items.findIndex(
        item => item.id === action.item.id
      );
      const existingCartItem = state.items[existingCartItemIndex];
      let updatedItems;

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.item.amount
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.item);
      }

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount
      };
    case "REMOVE":
      const existingCartItemRemoveIndex = state.items.findIndex(
        item => item.id === action.id
      );
      const existingItem = state.items[existingCartItemRemoveIndex];
      const updatedTotalAmountRemove = state.totalAmount - existingItem.price;
      let updatedItemsRemove;
      if (existingItem.amount === 1) {
        updatedItemsRemove = state.items.filter(item => item.id !== action.id);
      } else {
        const updatedItemRemove = {
          ...existingItem,
          amount: existingItem.amount - 1
        };
        updatedItemsRemove = [...state.items];
        updatedItemsRemove[existingCartItemRemoveIndex] = updatedItemRemove;
      }
      return {
        items: updatedItemsRemove,
        totalAmount: updatedTotalAmountRemove
      };
    default:
      return defaultCartState;
  }
};

const CartProvider = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = item => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemToCartHandler = id => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
