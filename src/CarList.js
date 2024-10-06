import React from 'react';
import CarTile from './CarTile';
import { Grid, Typography, Box, Button } from '@mui/material';
import { WhatsApp } from '@mui/icons-material';
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
      <Grid item xs={12}>
        <Box>
          <Typography variant="subtitle2" color="text.secondary">
            Looking for a different car? <br /> 
            Contact Amrith Poovanna at +91 8970312345
          </Typography>
          <Button
              variant="contained"
              color="success"
              startIcon={<WhatsApp fontSize="small" />}
              onClick={() => window.open(`https://api.whatsapp.com/send?phone=+918970312345`, '_blank')}
            >
              Message
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default CarList;
