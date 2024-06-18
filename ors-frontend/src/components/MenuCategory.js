import React from 'react';
import '../styles/MenuCategory.css';
import DishCard from './DishCard';

const MenuCategory = ({ category, dishes }) => {
  return (
    <div className="menu-category">
      <h2 className="category-title">{category}</h2>
      <div className="dish-list">
        {dishes.map(dish => (
          <DishCard key={dish.id} dish={dish} />
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
