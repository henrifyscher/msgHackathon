import React from 'react';
import '../styles/model.css'; // Import the CSS for the modal

const Modal = ({ show, onClose, bookingDetails }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Booking Confirmation</h2>
        <p>You have booked an appointment with {bookingDetails.coachName} at {bookingDetails.slot}.</p>
        <button className="close-button" onClick={onClose}>Confirm</button>
      </div>
    </div>
  );
};

export default Modal;
