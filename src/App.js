import React from 'react';
import CarList from './CarList';
import './App.css';
import { Typography } from '@mui/material';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Only Cars</h1>
        <small>By Amrith Poovanna</small>
        <Typography variant="h6">
            Contact :+91 8970312345 
        </Typography>
      </header>
      <div className="CarListContainer">
        <CarList />
      </div>
    </div>
  );
}

export default App;
