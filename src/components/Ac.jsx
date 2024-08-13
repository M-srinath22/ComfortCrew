// import React from "react"; // Import React for using JSX syntax
// import Box from "@mui/material/Box"; // Import Box component from Material-UI for layout
// import Typography from "@mui/material/Typography"; // Import Typography component for text styling
// import Card from "@mui/material/Card"; // Import Card component from Material-UI for card layout
// import CardContent from "@mui/material/CardContent"; // Import CardContent for card's main content
// import CardActions from "@mui/material/CardActions"; // Import CardActions for card's action area
// import Button from "@mui/material/Button"; // Import Button component for clickable actions
// import CardMedia from "@mui/material/CardMedia"; // Import CardMedia for displaying images in cards
// import Grid from "@mui/material/Grid"; // Import Grid component from Material-UI for layout

// // Define an array of service objects with details for each service
// const services = [
//   {
//     title: "Split AC",
//     price: "₹ 1000",
//     image: "https://images.homedepot-static.com/productImages/0f94e266-3c04-42c0-98da-a3cd6ae533b5/svn/gree-ductless-mini-splits-vir36hp230v1a-64_1000.jpg",
//   },
//   {
//     title: "Window AC",
//     price: "₹ 1500",
//     image: "http://digital.hammacher.com/Items/87935/87935_1000x1000.jpg",
//   },
//   {
//     title: "Central AC",
//     price: "₹ 2500",
//     image: "https://img1.exportersindia.com/product_images/bc-full/dir_150/4491672/office-ceiling-cassette-lg-1527234283-3903438.jpeg",
//   },
//   {
//     title: "Room Tower AC",
//     price: "₹ On Visit",
//     image: "https://5.imimg.com/data5/QB/QA/LO/SELLER-10464833/bs-ye42seu-tower-ac-500x500.JPG",
//   },
// ];

// // Define the AcServiceCards component
// export default function AcServiceCards() {
//   return (
//     <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4, bgcolor: '#f5f5f5', padding: 3, borderRadius: 2 }}>
//       {/* Main container Box with column direction and centered alignment */}
//       <Typography variant="h4" component="h1" gutterBottom sx={{ color: '#1976d2', fontWeight: 'bold' }}>
//         Air Conditioner Service
//       </Typography>
//       {/* Typography for the heading */}
//       <Grid container spacing={2} sx={{ alignItems: 'center', mb: 4 }}>
//         <Grid item xs={12} md={6}>
//           <Typography variant="body1" gutterBottom sx={{ textAlign: 'justify' }}>
//             Any Air Conditioner equipment, if not properly maintained or serviced on time, may lead to a reduced life cycle of air conditioners in Nagpur. If you are searching for the best AC repair service in Nagpur, or air conditioning repair in Nagpur, or AC service near you, then you should be aware of ServiceOnWheel.com. It connects you with the best AC repair and installation companies in Nagpur or the best HVAC contractors in Nagpur for air conditioning service. We provide various services including air conditioner repair, installation, gas charging, cooling repair, and shifting.
//           </Typography>
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <img
//             src="https://www.serviceonwheel.com/uploads/service/748141670401655.jpg" // Replace with actual image URL
//             alt="AC Service"
//             style={{ width: '90%', height: 'auto', borderRadius: '8px' }}
//           />
//         </Grid>
//       </Grid>
//       <Grid container spacing={2} justifyContent="center">
//         {/* Grid container to align cards */}
//         {services.map((service, index) => (
//           <Grid item xs={12} sm={6} md={3} key={index}>
//             <Card sx={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.05)' }, width: '100%', borderRadius: 2 }}>
//               {/* Card component with a width of 100% to fit the Grid item */}
//               <CardMedia
//                 component="img"
//                 height="200"
//                 image={service.image}
//                 alt={service.title}
//                 sx={{ borderRadius: '8px' }}
//               />
//               {/* CardMedia to display service image */}
//               <CardContent>
//                 {/* CardContent to hold the main content of the card */}
//                 <Typography gutterBottom variant="h5" component="div" sx={{ color: '#1976d2', fontWeight: 'bold' }}>
//                   {service.title}
//                 </Typography>
//                 {/* Typography for the service title */}
//                 <Typography variant="body2" color="text.secondary">
//                   {service.price}
//                 </Typography>
//                 {/* Typography for the service price */}
//               </CardContent>
//               <CardActions sx={{ justifyContent: 'center' }}>
//                 {/* CardActions to hold action buttons */}
//                 <Button size="small" variant="contained" color="primary">
//                   Add to Cart
//                 </Button>
//                 {/* Button to add the service to the cart */}
//               </CardActions>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//       <Box sx={{ mt: 3 }}>
//         {/* Box for the checkout button */}
//         <Button variant="contained" color="secondary" sx={{ padding: '10px 20px', fontSize: '16px' }}>
//           Proceed to Checkout
//         </Button>
//         {/* Button to proceed to checkout */}
//       </Box>
//     </Box>
//   );
// }
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";

// Define an array of service objects with details for each service
const services = [
  {
    title: "Split AC",
    price: "₹ 1000",
    image: "https://images.homedepot-static.com/productImages/0f94e266-3c04-42c0-98da-a3cd6ae533b5/svn/gree-ductless-mini-splits-vir36hp230v1a-64_1000.jpg",
  },
  {
    title: "Window AC",
    price: "₹ 1500",
    image: "http://digital.hammacher.com/Items/87935/87935_1000x1000.jpg",
  },
  {
    title: "Central AC",
    price: "₹ 2500",
    image: "https://img1.exportersindia.com/product_images/bc-full/dir_150/4491672/office-ceiling-cassette-lg-1527234283-3903438.jpeg",
  },
  {
    title: "Room Tower AC",
    price: "₹ On Visit",
    image: "https://5.imimg.com/data5/QB/QA/LO/SELLER-10464833/bs-ye42seu-tower-ac-500x500.JPG",
  },
];

// Define the AcServiceCards component
export default function AcServiceCards() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  // Initialize cart from local storage
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  const handleAddToCart = (service) => {
    const newCart = [...cart, service];
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const handleGoToCart = () => {
    navigate('/cart');
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4, bgcolor: '#f5f5f5', padding: 3, borderRadius: 2 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ color: '#1976d2', fontWeight: 'bold' }}>
        Air Conditioner Service
      </Typography>
      <Grid container spacing={2} sx={{ alignItems: 'center', mb: 4 }}>
        <Grid item xs={12} md={6}>
          <Typography variant="body1" gutterBottom sx={{ textAlign: 'justify' }}>
            Any Air Conditioner equipment, if not properly maintained or serviced on time, may lead to a reduced life cycle of air conditioners in Nagpur. If you are searching for the best AC repair service in Nagpur, or air conditioning repair in Nagpur, or AC service near you, then you should be aware of ServiceOnWheel.com. It connects you with the best AC repair and installation companies in Nagpur or the best HVAC contractors in Nagpur for air conditioning service. We provide various services including air conditioner repair, installation, gas charging, cooling repair, and shifting.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src="https://www.serviceonwheel.com/uploads/service/748141670401655.jpg"
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
