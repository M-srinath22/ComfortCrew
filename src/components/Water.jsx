import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

// Define an array of service objects with details for each service
const services = [
  {
    title: "Installation",
    price: "₹ 100",
    image: "https://www.serviceonwheel.com/uploads/service/917271671531275.jpg",
  },
  {
    title: "Servicing",
    price: "₹ 150",
    image: "https://www.serviceonwheel.com/uploads/service/952881671531368.jpg",
  },
  {
    title: "Repair",
    price: "₹ 150",
    image: "https://www.serviceonwheel.com/uploads/service/300181671531255.jpg",
  },
  {
    title: "Filter Change",
    price: "₹ 150",
    image: "https://www.serviceonwheel.com/uploads/service/255471672134743.jpg",
  },
  {
    title: "Shifting",
    price: "₹ 150",
    image: "https://www.serviceonwheel.com/uploads/service/414701672134675.jpg",
  },
  {
    title: "Water Leakage",
    price: "₹ 250",
    image: "https://tse4.mm.bing.net/th?id=OIP._xU9RJnNHj8iL57Fp3tyFQHaE8&pid=Api&P=0&h=180",
  },
  {
    title: "Others",
    price: "₹ On visit",
    image: "https://www.serviceonwheel.com/uploads/service/324621671531307.jpg",
  },
];

// Define the AcServiceCards component
export default function AcServiceCards() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  // Initialize cart from local storage
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  // Function to handle adding a service to the cart
  const handleAddToCart = (service) => {
    const newCart = [...cart, service];
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart)); // Save to local storage
  };

  // Function to handle removing a service from the cart
  const handleRemoveFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart)); // Update local storage
  };

  // Function to navigate to the Cart page
  const handleGoToCart = () => {
    navigate('/cart'); // Navigate to Cart page
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4, bgcolor: '#f5f5f5', padding: 3, borderRadius: 2 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ color: '#1976d2', fontWeight: 'bold' }}>
        Water Purify Services
      </Typography>
      <Grid container spacing={2} sx={{ alignItems: 'center', mb: 4 }}>
        <Grid item xs={12} md={6}>
          <Typography variant="body1" gutterBottom sx={{ textAlign: 'justify' }}>
            Water purify repairs and maintenance are crucial to ensure the efficient and reliable operation of your air conditioning systems. Whether you need installation, servicing, repair, or filter changes, professional AC services can help maintain a comfortable indoor environment. Book an AC service in Nagpur near you within 90 minutes with a 30-day post-service guarantee.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src="https://www.serviceonwheel.com/uploads/service/805621584075079.jpg"
            alt="AC Service"
            style={{ width: '90%', height: 'auto', borderRadius: '8px' }}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.05)' }, width: '100%', borderRadius: 2 }}>
              <CardMedia
                component="img"
                height="200"
                image={service.image}
                alt={service.title}
                sx={{ borderRadius: '8px' }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ color: '#1976d2', fontWeight: 'bold' }}>
                  {service.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {service.price}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center' }}>
                <Button size="small" variant="contained" color="primary" onClick={() => handleAddToCart(service)}>
                  Add to Cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ mt: 3 }}>
        <Button variant="contained" color="secondary" sx={{ padding: '10px 20px', fontSize: '16px' }} onClick={handleGoToCart}>
          Go to Cart
        </Button>
      </Box>
    </Box>
  );
}
