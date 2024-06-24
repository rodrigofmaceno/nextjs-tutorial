// "use client";
import React from "react";
import AddToCart from "./AddToCart";
// import styles from './ProductCard.module.css';

const ProductCard = () => {
  return (
    // className='p-5 my-5 bg-sky-400 text-white text-xl hover:bg-sky-500'
    <div>
      {/* <button onClick={() => console.log("Hi")}>Add to Cart</button> */}
      <AddToCart />
    </div>
  );
};

export default ProductCard;
