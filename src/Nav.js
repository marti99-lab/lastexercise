import React from 'react';
import logoImage from './images/logo.jpg';

function Nav() {

  const scrollToHighlights = () => {
    const footerElement = document.getElementById('menu');
    footerElement.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToAbout = () => {
    const footerElement = document.getElementById('about');
    footerElement.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToFooter = () => {
    const footerElement = document.getElementById('footer');
    footerElement.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section>
      <nav className="nav" aria-label="Main Navigation">
        <ul className="nav-image">
          <li><img src={logoImage} alt="Little Lemon Logo" aria-label="Little Lemon Logo"/></li>
        </ul>
        <ul className="nav-list">
        <li><span onClick={scrollToFooter} className="nav-item link" aria-label="Navigate to Home Section">HOME</span></li>
          <li><span onClick={scrollToAbout} className="nav-item link" aria-label="Navigate to About Section">ABOUT</span></li>
          <li><span onClick={scrollToHighlights} className="nav-item link" aria-label="Navigate to Menu Section">MENU</span></li>
          <li><a href="#" className="nav-link">RESERVATIONS</a></li>
          <li><a href="#" className="nav-link">ORDER ONLINE</a></li>
          <li><a href="#" className="nav-link">LOGIN</a></li>
        </ul>
      </nav>
    </section>
  );
}

export default Nav;