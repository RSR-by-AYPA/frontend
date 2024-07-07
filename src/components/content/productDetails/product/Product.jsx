import React, { useState } from 'react';
import './Product.css';

const Product = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  return (
    <div className="product-container">
      <div className="product-image">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7q8-CyRMOWXEdfAJcERFsk-40-N6P9m73hQ&s" alt="Product" />
      </div>
      <div className="product-details">
        <h1>Amethyst 1</h1>
        <div className="product-rating">
          <span className="stars">★★★★★</span>
          <span className="reviews">10 auf</span>
        </div>
        <div className="product-description">
          Kurze Beschreibung hier:
          <br />
          - 
          <br />
          - 
          <br />
          - 
          <br />
          - 
        </div>
        <div className="product-price">
          € 24,00 EUR
          <br />
          <span className="vat">inkl. MwSt., Versand wird beim Checkout berechnet</span>
        </div>
        <div className="product-quantity">
          Menge:
          <input type="number" id='changeQuantityProductButton' value={quantity} onChange={handleQuantityChange} min="1" />
        </div>
        <button className="add-to-cart" id='addToCartProductButton'>In den Warenkorb</button>
      </div>
    </div>
  );
};

export default Product;