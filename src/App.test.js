import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import BookingForm from './BookingForm';

// Mocking useNavigate
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('HTML5 Validation', () => {
  test('renders date input with HTML5 validation attributes', () => {
    render(<BookingForm />);
    
    const dateInput = screen.getByLabelText('Choose date');
    
    expect(dateInput).toHaveAttribute('type', 'date');
    expect(dateInput).toHaveAttribute('id', 'res-date');
  });

});

describe('JavaScript Validation Functions', () => {
  test('validates date input correctly', () => {
    render(<BookingForm />);
    
    const dateInput = screen.getByLabelText('Choose date');
    
    // Test for valid date
    fireEvent.change(dateInput, { target: { value: '2023-12-14' } });
    expect(screen.queryByText('Selected date is in the past')).not.toBeInTheDocument();

    // Test for invalid date (in the past)
    fireEvent.change(dateInput, { target: { value: '2022-01-01' } });
    expect(screen.getByText('Selected date is in the past')).toBeInTheDocument();
  });

});

describe('BookingForm', () => {
  test('renders BookingForm component', () => {
    render(<BookingForm />);

    // Add test assertions based on component's content
    expect(screen.getByLabelText('Choose date')).toBeInTheDocument();
    expect(screen.getByLabelText('Choose time')).toBeInTheDocument();
  });

  test('handles date change', () => {
    render(<BookingForm />);

    const dateInput = screen.getByLabelText('Choose date');
    fireEvent.change(dateInput, { target: { value: '2023-01-01' } });

  });
});