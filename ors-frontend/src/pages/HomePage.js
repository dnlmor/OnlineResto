import React from 'react';
import MenuCategory from '../components/MenuCategory';
import '../styles/HomePage.css';

const HomePage = () => {
  // Dummy data for menu categories
  const categories = ['Appetizer', 'Main Course', 'Desserts', 'Snacks', 'Drinks'];

  return (
    <div className="home-page">
      <h2>Welcome to Our Restaurant Menu</h2>
      <div className="categories-container">
        {categories.map((category, index) => (
          <MenuCategory key={index} category={category} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
