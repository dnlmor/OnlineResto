import React from 'react';
import './styles/OrderItem.css';

const OrderItem = ({ order }) => {
  return (
    <div className="order-item">
      <div className="order-item-details">
        <div>{order.name}</div>
        <div>${order.totalPrice}</div>
      </div>
      <div className="order-item-actions">
        <button>View Details</button>
      </div>
    </div>
  );
};

export default OrderItem;
