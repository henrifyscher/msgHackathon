import React from 'react'
import { Routes, Route} from "react-router-dom";
import Hero from '../UI/Hero';
import Testimonials from '../UI/Testimonials';
import Pricing from '../UI/Pricing';
import Track from '../UI/Track';
//import Exercise from '../UI/Exercise';
import Home from '../UI/Home';
import { useAuth0 } from "@auth0/auth0-react";
// import Login from '../UI/LogIn/Login';
import Login from '../component/Login';
import CalendarPage from '../UI/CalendarPage'; 
import BookAppointment from '../UI/BookAppointment'; 

const AllRoutes = () => {  
  return (
    <Routes>
      <Route path="/" element={<Home/>} />  
      <Route path="/programs" element={<Testimonials />} />  
      <Route path="/membership" element={<Pricing />} />  
      <Route path="/BookAppointment" element={<BookAppointment />} />
      <Route path="/calendar" element={<CalendarPage />} /> 
      <Route path="/Track" element={<Track />} />
      <Route path='/login' element={<Login/>}></Route>
    </Routes>
  )
}

export default AllRoutes
