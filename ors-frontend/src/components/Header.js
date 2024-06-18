import React from 'react';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/cart">My Cart</a></li>
          <li><a href="/orders">My Orders</a></li>
          <li><a href="/profile">My Profile</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
