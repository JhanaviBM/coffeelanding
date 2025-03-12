import React from "react";
import { Link } from "react-router-dom";

const Coffe = () => {
  const products = [
    { id: 1, name: "Cappuccino", price: 3.5 },
    { id: 2, name: "Espresso", price: 2.5 },
    { id: 3, name: "Latte", price: 3 },
    { id: 4, name: "Filter Coffee", price: 3 },
  ];

  return (
    <div>
      <h1>Welcome to Coffee Page</h1>
      <h2>Products</h2>
      <ul className="space-y-4">
        {products.map((product) => (
          <li key={product.id} className="flex justify-between bg-amber-300">
            <Link to={`/know-more/${product.id}`}>
              <h3>{product.name}</h3>
              <p>${product.price}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Coffe;
