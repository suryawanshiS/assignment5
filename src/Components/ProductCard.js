// src/Components/ProductCard.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="card h-100">
      <img src={product.image} className="card-img-top" alt={product.name} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text"><strong>Price:</strong> {product.price}</p>
        <p className="card-text"><strong>Color:</strong> {product.color}</p>
        <button 
          className="btn btn-primary mt-auto" 
          onClick={() => onAddToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
