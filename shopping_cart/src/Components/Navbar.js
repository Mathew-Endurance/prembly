// In your main layout component or navigation bar component file (e.g., NavBar.js or Header.js)

import React from 'react';
import { Link } from 'react-router-dom';
import CartIcon from './CartIcon'; // Import the CartIcon component

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-brand">My Online Store</Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/products" className="nav-link">Products</Link>
          </li>
          <li className="nav-item">
            <CartIcon /> {/* Render the CartIcon component */}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
