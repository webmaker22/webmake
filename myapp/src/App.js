// App.js
import React, { useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './Home';
import Home2 from './allfront';
import AboutUs from './Pages/aboutus';
import Amazon from './Pages/Amazon';
import ArtificialInteliigence from './Pages/ai';
import CyberSecurity from './Pages/cyber';
import WebDesign from './Pages/webdesign';
import WebDevelopment from './Pages/webdevelopment';
import Arts from './Pages/artshandcraft';
import SignUp from './Pages/Signup';
import Login from './Pages/login';
import ContactPage from './Pages/contactus';
import ResetPassword from './Pages/resetpassw';

const App = () => {
  const locationLink = useLocation()

  useEffect(() => {
    // Scroll to the top
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling animation
    });
  }, [locationLink.pathname])


  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allfront" element={<Home2 />} />
        <Route path="/Pages/aboutus" element={<AboutUs />} />
        <Route path="/Pages/Amazon" element={<Amazon />} />
        <Route path="/Pages/ai" element={<ArtificialInteliigence />} />
        <Route path="/Pages/cyber" element={<CyberSecurity />} />
        <Route path="/Pages/webdesign" element={<WebDesign />} />
        <Route path="/Pages/webdevelopment" element={<WebDevelopment />} />
        <Route path="/Pages/artshandcraft" element={<Arts />} />
        <Route path="/Pages/Signup" element={<SignUp />} />
        <Route path="/Pages/login" element={<Login />} />
        <Route path="/Pages/contactus" element={<ContactPage />} />
        <Route path="/Pages/resetpassw" element={<ResetPassword />} />
      </Routes>
    </>
  );
};

export default App;


