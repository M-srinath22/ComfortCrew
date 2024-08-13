import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";

export default function Cart() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Load cart items from local storage
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(savedCart);
  }, []);

  const handleRemoveFromCart = (index) => {
    const newCart = [...cartItems];
    newCart.splice(index, 1);
    setCartItems(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const handleProceedToCheckout = () => {
    const totalPrice = cartItems.reduce((total, item) => total + parseFloat(item.price), 0);
    navigate('/checkout', { state: { cartItems, totalPrice } });
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4, bgcolor: '#f5f5f5', padding: 3, borderRadius: 2 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ color: '#1976d2', fontWeight: 'bold' }}>
        Your Cart
      </Typography>
      <Box sx={{ width: '100%' }}>
        {cartItems.length > 0 ? (
          <Box>
            {cartItems.map((item, index) => (
              <Card key={index} sx={{ display: 'flex', alignItems: 'center', padding: 2, mb: 2 }}>
                <CardMedia
                  component="img"
                  image={item.image}
                  alt={item.title}
                  sx={{ width: 100, height: 100, borderRadius: '8px', mr: 2 }}
                />
                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="h6">{item.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.price}
                  </Typography>
                </Box>
                <IconButton color="secondary" onClick={() => handleRemoveFromCart(index)}>
                  <DeleteIcon />
                </IconButton>
              </Card>
            ))}
          </Box>
        ) : (
          <Typography variant="h6">Your cart is empty.</Typography>
        )}
      </Box>
      <Box sx={{ mt: 3 }}>
        <Button variant="contained" color="secondary" sx={{ padding: '10px 20px', fontSize: '16px' }} onClick={handleProceedToCheckout}>
          Proceed to Checkout
        </Button>
        <br/>
        <br/>
        <Button variant="contained" color="secondary" sx={{ padding: '10px 40px', fontSize: '16px' }} onClick={() => navigate('/')}>
          Back to Services
        </Button>
      </Box>
    </Box>
  );
}
