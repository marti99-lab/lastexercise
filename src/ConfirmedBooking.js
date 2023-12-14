import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Booking.css'; // Import the CSS file

const ConfirmedBooking = () => {
  const location = useLocation();
  const { bookingDetails } = location.state || {};

  useEffect(() => {
    // Save booking details to local storage
    if (bookingDetails) {
      const storedBookings = JSON.parse(localStorage.getItem('bookings')) || [];
      const updatedBookings = [...storedBookings, bookingDetails];
      localStorage.setItem('bookings', JSON.stringify(updatedBookings));
    }
  }, [bookingDetails]);

  return (
    <div className="confirmation-container">
      <div className="confirmation-content">
        <h1>Booking Confirmation</h1>
        <p>Thank you! Your booking has been confirmed.</p>

        <h2>Booking Details:</h2>
        {bookingDetails ? (
          <table className="booking-details-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Guests</th>
                <th>Occasion</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{bookingDetails.date}</td>
                <td>{bookingDetails.time}</td>
                <td>{bookingDetails.guests}</td>
                <td>{bookingDetails.occasion}</td>
              </tr>
            </tbody>
          </table>
        ) : (
          <p>No booking details available.</p>
        )}

        <p>We look forward to welcoming you!</p>
        <Link to="/" className="back-to-home-button">
          Back to the homepage
        </Link>
      </div>
    </div>
  );
};

export default ConfirmedBooking;