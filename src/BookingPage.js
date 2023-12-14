import React from 'react';
import BookingForm from './BookingForm';
import { Link } from 'react-router-dom';
import './Booking.css';

const BookingPage = () => {
  return (
    <div className="booking-page-container">
      <div className="booking-page-content">
        <h1>Little Lemon Reservations</h1>
        <BookingForm />
        <div style={{ marginTop: '50px', textAlign: 'left' }}>
          <Link to="/" className="back-to-main-button">Back to the main page</Link>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;