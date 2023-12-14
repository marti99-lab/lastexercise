import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './Nav';
import Header from './Header';
import Main from './Main';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';
import Footer from './Footer';


function App() {
  return (
    <div className="app-container">
      <Nav />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/main" element={<Main />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/confirm-booking" element={<ConfirmedBooking />} />
      </Routes>
      <Main />
      <Footer />
    </div>
  );
}

export default App;