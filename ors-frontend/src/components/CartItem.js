import React from 'react';
import './styles/CartItem.css';

const CartItem = ({ item }) => {
  return (
    <div className="cart-item">
      <div className="cart-item-details">
        <div>{item.name}</div>
        <div>${item.price} x {item.quantity}</div>
      </div>
      <div className="cart-item-actions">
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default CartItem;
