import React, { useState } from 'react';
import './styles/SlideCard.css';

const SlideCard = ({ item, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    if (quantity > 0) {
      onAddToCart(item, quantity);
      setQuantity(1);
    }
  };

  return (
    <div className="slide-card">
      <div className="slide-card-content">
        <label htmlFor="quantity">Quantity:</label>
        <input
          type="number"
          id="quantity"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
          min="1"
        />
      </div>
      <div className="slide-card-actions">
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default SlideCard;
