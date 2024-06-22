import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom'; 
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import "../styles/calenderpage.css"; 
import {  BookingContext } from './BookingContext';


const localizer = momentLocalizer(moment);

const CalendarPage = () => {
  const { bookings } = useContext(BookingContext);
  const events = bookings.map((booking) => ({
    id: booking.id, 
    title: `${booking.coachName}, ${booking.info} `, 
    start: new Date(booking.start), 
    end: new Date(booking.end), 
  }));

  return (
    <div className="calendar-page">
      <h1>Your Appointments</h1>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};

export default CalendarPage;
