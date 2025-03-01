import React from "react";
import Smartphone1 from'/Smartphone1.jpg';
import Smartphone2 from'/Smartphone2.jpg';
import Smartphone3 from'/Smartphone3.jpg';

const Products = [
  { id: 1, name: "Smartphone1", price: 3000, description: "High-performance laptop with 16GB RAM." },
  { id: 2, name: "Smartphone2", price: 5599, description: "Latest 5G smartphone with OLED display." },
  { id: 3, name: "Smartphone3", price: 6199, description: "Noise-canceling wireless headphones." }
];

const ProductList = () => {
  return (
    <div className="Product-list">
      {products.map((Product) => (
        <div key={Product.id} className="Product">
          <h3>{Product.name}</h3>
          <p>{Product.description}</p>
          <p><strong>${Product.price}</strong></p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;