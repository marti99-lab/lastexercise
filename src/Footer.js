import React from 'react';
import logo2Image from './images/logo2.jpg';

function Footer() {
  return (
    <section id="footer">
      <footer className="footer" role="contentinfo" aria-label="Footer Navigation">
        <div className="footer-card-container">
          <div className="footer-card">
            <img src={logo2Image} alt="Little Lemon Logo2" />
          </div>
          <div className="footer-card">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Menu</li>
              <li>Reservations</li>
              <li>Order Online</li>
              <li>Login</li>
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