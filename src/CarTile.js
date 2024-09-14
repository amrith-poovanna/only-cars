import React from 'react';
import { Card, CardMedia, CardContent, Typography, Box, IconButton } from '@mui/material';
import { CurrencyRupee, WhatsApp, Phone } from '@mui/icons-material';
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

  const handleWhatsAppClick = () => {
    const phoneNumber = '+918970312345'; 
    const message = `Hello, I'm interested in the ${car.Manufacturer} ${car.Model} (${car.ManufacturingYear}) listed for Rs. ${formatPrice(car.CoatPrice)}.`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCallClick = () => {
    const phoneNumber = '+918970312345'; 
    window.location.href = `tel:${phoneNumber}`;
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
            Owners: {car.Owners} . Insurance: {car.InsuranceType}
        </Typography>
        <Typography variant="h6" component="div" className="price-div">
            <Box className="price-box">
                <CurrencyRupee fontSize="small" />
                {formatPrice(car.CoatPrice)}
            </Box>
        </Typography>
        {/* Call and WhatsApp Icons */}
        <Box className="icon-row">
          <IconButton className="call-icon" onClick={handleCallClick}>
            <Phone fontSize="medium" style={{ color: '#007bff' }} />
            {/* <span className="icon-text">Call</span> */}
          </IconButton>
          <IconButton className="whatsapp-icon" onClick={handleWhatsAppClick}>
            <WhatsApp fontSize="medium" style={{ color: '#25D366' }} />
            {/* <span className="icon-text">Message</span> */}
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CarTile;
