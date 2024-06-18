import React from 'react';
import '../styles/OrdersPage.css';

const OrdersPage = () => {
  // Dummy data for orders
  const orders = [
    { id: 1, status: 'Paid', items: [{ name: 'Dish 1', quantity: 2 }, { name: 'Dish 2', quantity: 1 }] },
    { id: 2, status: 'Waiting for Payment', items: [{ name: 'Dish 3', quantity: 3 }] },
  ];

  return (
    <div className="orders-page">
      <h2>Orders Page</h2>
      {orders.map((order) => (
        <div key={order.id} className="order-item">
          <p>Order ID: {order.id}</p>
          <p>Status: {order.status}</p>
          <ul>
            {order.items.map((item, index) => (
              <li key={index}>
                {item.name} - Quantity: {item.quantity}
              </li>
            ))}
          </ul>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default OrdersPage;
