import React from 'react';
import { Card, CardMedia, CardContent, Typography, Box, IconButton } from '@mui/material';
import { CurrencyRupee, WhatsApp, Phone } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import './CarTile.css';

const CarTile = ({ car }) => {
  const importImage = (imageName) => {
    try {
      return require(`./assets/${imageName}`);
    } catch (err) {
      return null;
    }
  };

  const formatPrice = (price) => new Intl.NumberFormat('en-IN').format(price);
  const imageUrl = importImage(car.ImageNames[0]);

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

  return (
    <Card className="car-card" style={{ position: 'relative' }}>
      {/* Sold Banner */}
      {car.Sold && (
        <div className="sold-banner">Sold Out</div>
      )}

      <Link
        to={`/car/${car.CarId}`}
        style={{ textDecoration: 'none', color: 'inherit', pointerEvents: 'auto' }}
      >
        <CardMedia
          component="img"
          height="280"
          image={imageUrl}
          alt={`${car.Manufacturer} ${car.Model}`}
        />
        <CardContent className="car-content">
          <Typography variant="subtitle1">
            {car.Manufacturer} {car.Model} {car.Varient} ({car.ManufacturingYear}{car.ManufacturingYear !== car.RegistrationYear ? "/" + car.RegistrationYear :""})
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            {car.Driven} km · {car.FuelType} · {car.Transmission} . {car.Sunroof ? "Sunroof" : ""}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            Owners: {car.Owners} · Insurance: {car.InsuranceType}
          </Typography>
          <Typography variant="h6" component="div" className="price-div">
            <Box className="price-box">
                <CurrencyRupee fontSize="small" />
                {formatPrice(car.CoatPrice)}
            </Box>
          </Typography>
        </CardContent>
      </Link>
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
    </Card>
  );
};

export default CarTile;
