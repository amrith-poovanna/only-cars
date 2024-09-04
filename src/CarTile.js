import React from 'react';
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import { CurrencyRupee } from '@mui/icons-material';
import './CarTile.css'; // Import the CSS file
import image1 from './assets/2367.jpg';
import image2 from './assets/9747.jpg';
import image3 from './assets/9179.jpg';
import image4 from './assets/5850.jpg';
import image5 from './assets/8297.jpg';
import image6 from './assets/3607.jpg';

const CarTile = ({ car }) => {
  let imageUrl;

  // Map car IDs to images
  if (car.id === 1) {
    imageUrl = image1;
  } else if (car.id === 2) {
    imageUrl = image2;
  } else if (car.id === 3) {
    imageUrl = image3;
  } else if (car.id === 4) {
    imageUrl = image4;
  } else if (car.id === 5) {
    imageUrl = image5;
  } else if (car.id === 6) {
    imageUrl = image6;
  }

  return (
    <Card className="car-card">
      <CardMedia
        component="img"
        // className="card-media"
        height="280"
        image={imageUrl}
        alt={`${car.Manufacturer} ${car.Model}`}
      />
      <CardContent height="180" className="car-content">
        <div className="car-title">
            <Typography variant="h6">
            {car.Manufacturer} {car.Model} {car.Varient} ({car.ManufacturingYear}) {car.Sunroof ? "with sunroof" : ""}
            </Typography>
        </div>
        <Typography variant="subtitle2" color="text.secondary">
            {car.RegistrationNo} 
        </Typography>
        <Typography variant="subtitle2" color="text.secondary">
            {car.Driven} km . {car.FuelType} . {car.Transmission} . Owners: {car.Owners}
        </Typography>
        <Typography variant="h6" component="div">
            <Box display="flex" alignItems="center">
                <CurrencyRupee fontSize="small" />
                {car.CoatPrice}
            </Box>
        </Typography>
      </CardContent>
      {/* <CardContent className="card-content">
        <Typography variant="h6" className="title">
          {car.name}
        </Typography>
        <Typography variant="body2" className="year">
          {car.year}
        </Typography>
      </CardContent> */}
    </Card>
  );
};

export default CarTile;
