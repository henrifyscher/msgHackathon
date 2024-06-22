import "./App.css";
import React, { useEffect } from 'react';
import Aos from "aos"
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from "./UI/Footer";
import Header from "./component/Header";
import AllRoutes from "./component/AllRoutes";
import { BookingProvider } from './UI/BookingContext';




function App() {

  useEffect(()=>{
    Aos.init();
  },[])

  return <>
  <BookingProvider> 
  <Header/>
  <AllRoutes/>
  <Footer/>
  </BookingProvider>
  
  </>;
}

export default App;
