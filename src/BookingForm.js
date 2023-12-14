import React, { useState, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';

const BookingForm = () => {
  const updateTimesReducer = (state, action) => {
    switch (action.type) {
      case 'UPDATE_TIMES':
        const newAvailableTimes = fetchAPI(action.payload.date);
        return { availableTimes: newAvailableTimes };
      default:
        return state;
    }
  };

  const initializeTimes = () => {
    const currentDateTime = new Date();
    const currentTime = currentDateTime.getHours() * 60 + currentDateTime.getMinutes();

    const initialTimes = [
      '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
    ].filter((time) => {
      const [hours, minutes] = time.split(':');
      const timeInMinutes = parseInt(hours) * 60 + parseInt(minutes);

      return timeInMinutes >= currentTime;
    });

    return { availableTimes: initialTimes };
  };

  const fetchAPI = (date) => {
    return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  };

  const [availableTimes, dispatch] = useReducer(updateTimesReducer, initializeTimes());
  const [date, setDate] = useState('');
  const [time, setTime] = useState('17:00');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  const [bookingData, setBookingData] = useState([]);
  const [showTable, setShowTable] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;

    const currentDate = new Date().toISOString().split('T')[0];
    if (selectedDate < currentDate) {
      setErrorMessage('Selected date is in the past');
      return;
    }

    setErrorMessage('');
    setDate(selectedDate);
    dispatch({ type: 'UPDATE_TIMES', payload: { date: selectedDate } });
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleGuestsChange = (e) => {
    setGuests(parseInt(e.target.value, 10));
  };

  const handleOccasionChange = (e) => {
    setOccasion(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!date || date < new Date().toISOString().split('T')[0]) {
      setErrorMessage('Please choose a valid future date for your reservation!');
      return;
    }

    if (guests < 1) {
      setErrorMessage('Number of guests must be at least 1!');
      return;
    }

    const newBooking = { date, time, guests, occasion };
    setBookingData([...bookingData, newBooking]);
    setShowTable(true);
    console.log('Form submitted:', newBooking);

    navigate('/confirm-booking', { state: { bookingDetails: newBooking } });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" value={date} onChange={handleDateChange} />

        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" value={time} onChange={handleTimeChange}>
          {availableTimes.availableTimes.map((t, index) => (
            <option key={index} value={t}>{t}</option>
          ))}
        </select>

        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={handleGuestsChange} />

        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" value={occasion} onChange={handleOccasionChange}>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Graduation Dinner">Graduation Dinner</option>
          <option value="Job Promotion">Job Promotion</option>
        </select>

        <input
          type="submit"
          value="Make Your Reservation"
          disabled={!date || date < new Date().toISOString().split('T')[0]}
        />
      </form>

      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default BookingForm;