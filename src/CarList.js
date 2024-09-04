import React from 'react';
import CarTile from './CarTile';
import { Grid } from '@mui/material';
import cars from './cars.json'; // Import your car data
import './CarTile.css'; 

const CarList = () => {
  return (
    <Grid container spacing={4} className="car-list">
      {cars.map(car => (
        <Grid item xs={12} sm={6} md={4} key={car.CarId}>
          <CarTile car={car} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CarList;
