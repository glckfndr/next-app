import React from "react";
import AddToCart from "../AddToCart";
import classes from "./ProductCard.module.css";

const ProductCard = () => {
  return (
    <div className={classes.card}>
      <AddToCart />
    </div>
  );
};

export default ProductCard;
