import React from 'react';
import logo2Image from './images/logo2.jpg';

function Footer() {

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
  const scrollToOrder = () => {
    const footerElement = document.getElementById('menu');
    footerElement.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="footer">
      <footer className="footer" role="contentinfo" aria-label="Footer Navigation">
        <div className="footer-card-container">
          <div className="footer-card">
            <img src={logo2Image} alt="Little Lemon Logo2" />
          </div>
          <div className="footer-card">
            <ul>
            <li><a href="./" className="nav-item link2">Home</a></li>
          <li><span onClick={scrollToAbout} className="nav-item link2" aria-label="Navigate to About Section">About</span></li>
          <li><span onClick={scrollToHighlights} className="nav-item link2" aria-label="Navigate to Menu Section">Menu</span></li>
          <li><a href="/booking" className="nav-item link2">Reservations</a></li>
          <li><span onClick={scrollToOrder} className="nav-item link2" aria-label="Order Online">Order online</span></li>
          <li><span onClick={scrollToFooter} className="nav-item link2" aria-label="Navigate to Footer Section">Footer</span></li>
            </ul>
        </div>
          <div className="footer-card">
            <ul>
              <li>Contact</li>
              <br />
              <br />
              <li>Address</li>
              <li>Phone number</li>
              <li>Email</li>
            </ul>
          </div>
          <div className="footer-card">
            <ul>
              <li>Social Media Links</li>
              <br />
              <li>Address</li>
              <li>Phone number</li>
              <li>Email</li>
            </ul>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default Footer;