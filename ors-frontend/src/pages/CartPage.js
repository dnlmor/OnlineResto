import React from 'react';
import '../styles/CartPage.css';

const CartPage = () => {
  // Dummy data for cart items
  const cartItems = [
    { id: 1, name: 'Dish 1', price: 10.99, quantity: 2 },
    { id: 2, name: 'Dish 2', price: 15.99, quantity: 1 },
    { id: 3, name: 'Dish 3', price: 8.99, quantity: 3 },
  ];

  return (
    <div className="cart-page">
      <h2>Cart Page</h2>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <p>{item.name}</p>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <hr />
          </div>
        ))}
      </div>
      <button className="checkout-button">Proceed to Checkout</button>
    </div>
  );
};

export default CartPage;
