import React from 'react';
import '../styles/popup.css';

function Modal({ show, message, onClose }) {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>{message}</h3>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Modal;
