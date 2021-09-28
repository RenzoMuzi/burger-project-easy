import React from "react";
import MealItemForm from './MealItemForm';
import classes from './MealItem.module.css';


const MealItem = ({ name, description, price: mealPrice }) => {
  const price = `$${mealPrice.toFixed(2)}`;

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm />
      </div>
    </li>
  );
};

export default MealItem;