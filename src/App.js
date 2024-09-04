import React from 'react';
import CarList from './CarList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Available Cars</h1>
      </header>
      <CarList />
    </div>
  );
}

export default App;
