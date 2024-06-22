import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/bookAppointment.css";
import coachJohnImage from '../assets/img/p1.png';
import coachSarahImage from '../assets/img/p2.png'; 
import coachInesImage from '../assets/img/p3.png';
import { BookingContext } from './BookingContext';
import Modal from './model.jsx';


const coaches = [
  {
    id: 1,
    name: 'Coach John',
    specialization: 'Strength Training',
    image: coachJohnImage,
    availableSlots: ['9:00 AM', '11:00 AM', '2:00 PM'],
  },
  {
    id: 2,
    name: 'Coach Sarah',
    specialization: 'Yoga',
    image: coachSarahImage ,
    availableSlots: ['10:00 AM', '1:00 PM', '4:00 PM'],
  },
  {
    id: 3,
    name: 'Coach Ines',
    specialization: 'Meditation',
    image: coachInesImage,
    availableSlots: ['08:00 AM', '5:00 PM', '6:00 PM'],
  },
];

const BookAppointment = () => {
    const [showModal, setShowModal] = useState(false);
    const [bookingDetails, setBookingDetails] = useState({});

    const { bookings, setBookings } = useContext(BookingContext);
    const navigate = useNavigate();
  
    const handleBook = (coach, slot) => {
        
        const startDate = new Date();
        const endDate = new Date();
       
        const [hour, minute, period] = slot.match(/(\d+):(\d+) (AM|PM)/).slice(1);
        startDate.setHours(period === 'PM' ? parseInt(hour, 10) + 12 : parseInt(hour, 10));
        startDate.setMinutes(parseInt(minute, 10));
        endDate.setHours(startDate.getHours() + 1); // assuming 1-hour slots
    
        const newBooking = {
          coachName: coach.name,
          slot,
          info : coach.specialization,
          start: startDate,
          end: endDate,
        };

        setBookingDetails(newBooking);
        setBookings([...bookings, newBooking]);
        setShowModal(true);
        navigate('/calendar');
      };
    
      const closeModal = () => {
        setShowModal(false);
        navigate('/calendar', { state: { bookings } });
      };
    
      return (
        <div className="book-appointment">
          <h1>Book an Appointment with a Personal Trainer</h1>
          <div className="coaches-container">
            {coaches.map((coach) => (
              <div className="coach-card" key={coach.id}>
                <img src={coach.image} alt={`${coach.name}`} className="coach-image" />
                <h2>{coach.name}</h2>
                <p>{coach.specialization}</p>
                <div className="slots">
                  {coach.availableSlots.map((slot) => (
                    <button
                      key={slot}
                      className="slot-button"
                      onClick={() => handleBook(coach, slot)}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <Modal show={showModal} onClose={closeModal} bookingDetails={bookingDetails} />
        </div>
      );
    };
    
    export default BookAppointment;