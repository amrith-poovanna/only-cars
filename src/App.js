import React from 'react';
import CarList from './CarList';
import './App.css';
import { Typography } from '@mui/material';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Only Cars</h1>
        <Typography variant="h6">
            Contact Amrith Poovanna : 8970312345 
        </Typography>
      </header>
      <CarList />
    </div>
  );
}

export default App;
