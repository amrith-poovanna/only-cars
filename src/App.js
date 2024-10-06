import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CarList from './CarList';
import CarDetails from './CarDetails';
import './App.css';
import { Typography } from '@mui/material';
import logo from './assets/logo.png'
import { Link } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <img src={logo} alt="Only Cars Logo" className="logo" />
            <h1>Only Cars</h1>
            <p className="slogan">Where Quality Meets the Road</p>
        </Link>
        <Typography variant="body2" className="contact">
          <a href="tel:+918970312345" style={{ textDecoration: 'none', color: 'inherit' }}>
            Contact Amrith Poovanna: +91 8970312345
          </a>
        </Typography>
      </header>
      <div className="CarListContainer">
        <Routes>
          <Route path="/" element={<CarList />} />
          <Route path="/car/:carId" element={<CarDetails />} />
          <Route path="*" element={<CarList />} />
        </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
