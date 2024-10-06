import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Box, IconButton, Grid, Button } from '@mui/material';
import { CurrencyRupee, WhatsApp, Phone, ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { useSwipeable } from 'react-swipeable';
import cars from './cars.json'; // Import car data
import { Link } from 'react-router-dom';

const CarDetails = () => {
  const { carId } = useParams();
  const car = cars.find(car => car.CarId === carId);

  const importImage = (imageName) => {
    try {
      return require(`./assets/${imageName}`);
    } catch (err) {
      return null; // Handle image not found case
    }
  };

  const formatPrice = (price) => new Intl.NumberFormat('en-IN').format(price);
  const handleWhatsAppClick = () => {
    const phoneNumber = '+918970312345'; 
    const message = `Hello, I'm interested in the ${car.Manufacturer} ${car.Model} (${car.ManufacturingYear}) listed for Rs. ${formatPrice(car.CoatPrice)}.`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  // Load all images for the car from `ImageNames`
  const images = car.ImageNames.map(importImage);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Handle left and right swipe actions
  const handleSwipeLeft = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleSwipeRight = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleSwipeLeft,
    onSwipedRight: handleSwipeRight,
    trackMouse: true, // Enables mouse dragging
    trackTouch: true,  // Enables touch swiping
    preventScrollOnSwipe: true,  // Prevents vertical scroll
    delta: 10, // Adjust sensitivity for swipe
  });

  return (
    <Box style={{ marginTop: '1em' }}>
      {/* Swipeable image container */}
      <div {...swipeHandlers} style={{ position: 'relative', width: '100%', overflow: 'hidden', textAlign: 'center', touchAction: 'pan-y', }}>
        <IconButton
          style={{
            position: 'absolute',
            left: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            display: images.length > 1 ? 'block' : 'none'
          }}
          onClick={handleSwipeRight}
        >
          <ArrowBackIos fontSize="large" />
        </IconButton>

        {/* Current Image */}
        <img
          src={images[currentImageIndex]}
          alt={`${car.Manufacturer} ${car.Model}`}
          style={{
            width: '100%',
            height: 'auto', // Allows height to adjust based on the aspect ratio
            maxHeight: '400px', // Control maximum height
            objectFit: 'contain', // Maintain aspect ratio
          }}
        />

        <IconButton
          style={{
            position: 'absolute',
            right: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            display: images.length > 1 ? 'block' : 'none'
          }}
          onClick={handleSwipeLeft}
        >
          <ArrowForwardIos fontSize="large" />
        </IconButton>
      </div>

      {/* Image indicators */}
      <Box style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
        {images.map((_, index) => (
          <Box
            key={index}
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: index === currentImageIndex ? '#007bff' : '#ccc',
              margin: '0 5px',
              cursor: 'pointer'
            }}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </Box>

      {/* Car Details in a Responsive Grid Format */}
      <Box p={2} style={{ backgroundColor: '#f5f5f5', marginTop: '20px' }}>
        <Typography variant="h6">{car.Manufacturer} {car.Model}</Typography>
        <Grid container spacing={2} style={{ marginTop: '20px', marginLeft: '-8px' }}>
          {[
            { label: "Price", value: <><span className="price-div">
              <span className="price-box">
                <CurrencyRupee fontSize="small" className="rupee-font"/>
                {formatPrice(car.CoatPrice)}
              </span>
            </span></> },
            { label: "Manufacturing Year", value: car.ManufacturingYear },
            { label: "Registration Year", value: car.RegistrationYear },
            { label: "Kilometer Driven", value: `${car.Driven} km` },
            { label: "Fuel Type", value: car.FuelType },
            { label: "Transmission", value: car.Transmission },
            { label: "Owners", value: car.Owners },
            { label: "Insurance Type", value: car.InsuranceType },
          ].map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} style={{ border: '1px solid #ccc', padding: '10px', backgroundColor: 'white' }}>
              {/* <Typography style={{ textAlign: 'left' }}><strong>{item.label}:</strong> <span style={{ textAlign: 'left' }}>{item.value}</span></Typography> */}
              <Grid container>
                <Grid item xs={6} style={{ textAlign: 'left' }}>
                  <Typography><strong>{item.label}</strong></Typography>
                </Grid>
                <Grid item xs={6} style={{ textAlign: 'left' }}>
                  <Typography>{item.value}</Typography>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
        <Box style={{ marginTop: '20px', textAlign: 'center' }}>
          {car.Sold ? (
            <Typography
            variant="h6"
            style={{
              backgroundColor: 'red',
              color: 'white',
              fontWeight: 'bold',
              padding: '10px', 
              borderRadius: '5px', 
            }}
          >
            Sold Out
          </Typography>
          ) : (
            <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
              {/* Call and WhatsApp buttons */}
              <Box style={{ flex: 1, marginRight: '10px' }}>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<Phone fontSize="small" style={{ color: 'white' }} />}
                  fullWidth
                  onClick={() => window.location.href = `tel:+918970312345`}
                >
                  Call
                </Button>
              </Box>
              <Box style={{ flex: 1, marginLeft: '10px' }}>
                <Button
                  variant="contained"
                  color="success"
                  startIcon={<WhatsApp fontSize="small" style={{ color: 'white' }} />}
                  fullWidth
                  onClick={handleWhatsAppClick}
                >
                  Message
                </Button>
              </Box>
            </Box>
          )}
        </Box>
        <Box style={{ marginTop: '20px', textAlign: 'center' }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <span
              style={{
                color: '#012023', 
                textDecoration: 'underline',
              }}
            >
              View Other Cars
            </span>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default CarDetails;
