import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import About from './components/About';
// import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Navbar from './components/Navbar';
import SalesPolicies from './components/SalesPolicies';
import Contact from './components/Contact';
import LandingContainer from './components/LandingContainer';
import './globals.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingContainer />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/policies" element={<SalesPolicies />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  </React.StrictMode>
);
