import React from 'react';
import CarList from './CarList';
import './App.css';
import { Typography } from '@mui/material';
import logo from './assets/logo.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Only Cars Logo" className="logo" />
        <h1>Only Cars</h1>
        <p className="slogan">Where Quality Meets the Road</p>
        <Typography variant="body2" className='contact'>
            Contact Amrith Poovanna :+91 8970312345 
        </Typography>
      </header>
      <div className="CarListContainer">
        <CarList />
      </div>
    </div>
  );
}

export default App;
