import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import './globals.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <React.StrictMode>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navbar />} />
          {/* <Route path="/product/:itemId" element={<Component />} /> */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        {/* <OtherComponents /> */}
      </BrowserRouter>
    </React.StrictMode>
  </ChakraProvider>
);
