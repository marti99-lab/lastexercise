import React from 'react';
import { Link } from 'react-router-dom';
import restaurantImage from './images/restauranfood.jpg';

function Header() {
  return (
    /* Hero Section */
    <section role="banner">
      <header className="header">
        <div className="header-card">
          <h1 className="header-title">Little Lemon Restaurant</h1>
          <h2 className="header-title2">Chicago</h2>
          <p className="header-article">We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <Link to="/booking" className="header-button">Reserve a Table</Link>
        </div>
        <div className="header-card2">
          <img src={restaurantImage} alt="Restaurant Image" className="header-image" />
        </div>
      </header>
    </section>
  );
}

export default Header;