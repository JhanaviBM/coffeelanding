import React from "react";
import { useParams } from "react-router-dom";

const Coffee = () => {
  const products = [
    { id: 1, name: "Cappuccino", price: 3.5 },
    { id: 2, name: "Espresso", price: 2.5 },
    { id: 3, name: "Latte", price: 3 },
    { id: 4, name: "Filter Coffee", price: 3 },
  ];

  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id)); 
  

  return (
    <div>
      <h1>Product Details</h1>
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <p>Description: A great coffee blend with a smooth taste!</p>
    </div>
  );
};

export default Coffee;
