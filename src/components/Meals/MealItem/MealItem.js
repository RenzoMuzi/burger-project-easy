import React, { useContext } from "react";
import CartContext from "../../../store/cart-context";
import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";

const MealItem = ({ name, id, description, price: mealPrice }) => {
  const cartCtx = useContext(CartContext);

  const price = `$${mealPrice.toFixed(2)}`;

  const addToCartHandler = amount => {
    cartCtx.addItem({ id: id, name: name, amount: amount, price: mealPrice });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
