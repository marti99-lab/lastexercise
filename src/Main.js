import React from 'react';
import { Link } from 'react-router-dom';
import aboutImage from './images/abouttop.jpg';
import aboutImageTwo from './images/aboutbackground.jpg';
import saladImage from './images/greeksalad.jpg';
import bruchettaImage from './images/bruchetta.jpg';
import dessertImage from './images/lemondessert.jpg';
import deliveryImage from './images/deliveryicon.jpg';
import starImage from './images/star.png';

function Main() {
  return (
    <main className="Main" role="main">

      {/* Highlights Section */}
      <section id="menu" className="highlights" aria-labelledby="menu-heading">
        {/* Top Highlights */}
        <div style={{ display: 'flex', justifyContent: 'space-around'}}>
          <div style={{ height: '300px', width: '250px', textAlign: 'left' }}>
            <p className="main-special"> This weeks specials!</p>
          </div>
          <div style={{ height: '175px', width: '250px' }}>
            <Link to="#" className="main-button" aria-label="View Online Menu">Online Menu</Link>
            </div>
          </div>

        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <div>
            <img src={saladImage} className="highlightImage" alt="Greek Salad"/>
            <p>Greek Salad</p>
            <p>Nice Greek salad with gyros and feta like tradition. €12.99</p>
            <p>Order a delivery {'\u00A0'} <img src={deliveryImage} className="deliveryImage" alt="Delivery Image"/></p>
          </div>

          <div>
            <img src={bruchettaImage} className="highlightImage" alt="Bruchetta"/>
            <p>Bruchetta</p>
            <p>Nice bruchetta which sure will taste very good. €5.09</p>
            <p>Order a delivery {'\u00A0'} <img src={deliveryImage} className="deliveryImage" alt="Delivery Image"/></p>
          </div>
          <div>
            <img src={dessertImage} className="highlightImage" alt="Lemon Desert"/>
            <p>Lemon Desert</p>
            <p>If you want to have a special desert here you can have it. €6.00</p>
            <p>Order a delivery {'\u00A0'} <img src={deliveryImage} className="deliveryImage" alt="Delivery Image"/></p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials" aria-labelledby="testimonials-heading">
        <h2 style={{ textAlign: 'center' }}>Testimonials</h2>

        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <div className="testimonial-card">
            <p>4.2</p>
            <img src={starImage} alt="Star Image" className="star-image" />
            <p>Greek Salad</p>
          </div>

          <div className="testimonial-card">
            <p>3.9</p>
            <img src={starImage} alt="Star Image" className="star-image" />
            <p>Bruchetta</p>
          </div>

          <div className="testimonial-card">
            <p>4.7</p>
            <img src={starImage} alt="Star Image" className="star-image" />
            <p>Lemon Desert</p>
          </div>

          <div className="testimonial-card">
            <p>3.9</p>
            <img src={starImage} alt="Star Image" className="star-image" />
            <p>Rice Pudding</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about" aria-labelledby="about-heading">
  <div className="about-card">
    <h1 id="about-heading" className="about-title">Little Lemon Restaurant</h1>
    <h2 className="about-title2">Chicago</h2>
    <p className="about-article">
      We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
    </p>
  </div>
  <div className="about-card2">
    <img src={aboutImage} alt="About Image" className="about-image" />
    <img src={aboutImageTwo} alt="About Image" className="about-image2" />
  </div>
</section>
    </main>
  );
}

export default Main;