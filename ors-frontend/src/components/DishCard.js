import React from 'react';
import '../styles/DishCard.css';

const DishCard = ({ dish }) => {
  return (
    <div className="dish-card">
      <img src={dish.image} alt={dish.name} />
      <div className="dish-card-content">
        <h3 className="dish-card-title">{dish.name}</h3>
        <p className="dish-card-price">${dish.price}</p>
        <p className="dish-card-description">{dish.description}</p>
        <button className="dish-card-button">Add to Cart</button>
      </div>
    </div>
  );
};

export default DishCard;
