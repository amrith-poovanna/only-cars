import React from 'react';
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import { CurrencyRupee } from '@mui/icons-material';
import './CarTile.css'; // Import the CSS file

const CarTile = ({ car }) => {
  const importImage = (imageName) => {
    try {
      return require(`./assets/${imageName}`);
    } catch (err) {
      return null; // Fallback if the image is not found
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN').format(price);
  };
  const imageUrl = importImage(car.ImageName);

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
            <Typography variant="subtitle1">
            {car.Manufacturer} {car.Model} {car.Varient} ({car.ManufacturingYear}{car.ManufacturingYear !== car.RegistrationYear ? "/" + car.RegistrationYear :""}) {car.Sunroof ? "with sunroof" : ""}
            </Typography>
        </div>
        <Typography variant="subtitle2" color="text.secondary">
            {car.Driven} km . {car.FuelType} . {car.Transmission}
        </Typography>
        <Typography variant="subtitle2" color="text.secondary">
            Owners: {car.Owners} . Insurance {car.InsuranceType}
        </Typography>
        <Typography variant="h6" component="div" className="price-div">
            <Box className="price-box">
                <CurrencyRupee fontSize="small" />
                {formatPrice(car.CoatPrice)}
            </Box>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CarTile;
