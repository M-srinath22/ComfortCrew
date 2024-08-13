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
//     title: "Flush Tank Repair",
//     price: "₹ 100",
//     image: "https://5.imimg.com/data5/YV/KP/LO/SELLER-9636432/cera-dual-pvc-flush-tank-500x500.jpg",
//   },
//   {
//     title: "Wash Basin Repair",
//     price: "₹ 150",
//     image: "https://images-na.ssl-images-amazon.com/images/I/9183vJdeN-L._AC_SL1500_.jpg",
//   },
//   {
//     title: "Shower Repair",
//     price: "₹ 250",
//     image: "https://cdn.thewirecutter.com/wp-content/media/2021/04/showerheads-2048px-1682.jpg",
//   },
//   {
//     title: "Bath Tub Repair",
//     price: "₹ On Visit",
//     image: "https://www.blissbathandkitchen.com/wp-content/uploads/2017/03/cheviot-regency-cast-iron-bathtub.png",
//   },
//   {
//     title: "Faucets",
//     price: "₹ On Visit",
//     image: "http://g-ec2.images-amazon.com/images/G/01/th/aplus/americanstandard/B004GK56KO/B004GK56KO_2_Large._V364163427_.jpg",
//   },
//   {
//     title: "Others",
//     price: "₹ On Visit",
//     image: "http://newcastleplumbinginc.com/wp-content/uploads/2018/03/bathroom-repair.jpg",
//   },
// ];

// // Define the AcServiceCards component
// export default function AcServiceCards() {
//   return (
//     <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4, bgcolor: '#f5f5f5', padding: 3, borderRadius: 2 }}>
//       {/* Main container Box with column direction and centered alignment */}
//       <Typography variant="h4" component="h1" gutterBottom sx={{ color: '#1976d2', fontWeight: 'bold' }}>
//         Bathroom Service
//       </Typography>
//       {/* Typography for the heading */}
//       <Grid container spacing={2} sx={{ alignItems: 'center', mb: 4 }}>
//         <Grid item xs={12} md={6}>
//           <Typography variant="body1" gutterBottom sx={{ textAlign: 'justify' }}>
//           We connect you to all brands of Bathroom Accessories & Sanitary ware Dealers. Get the best contacts for Bathroom Accessories & Sanitary ware Dealers in Nagpur through Service On Wheel. We provide a platform to hire the best service providers for your sanitary fittings needs. Whether you need service for flush tanks, wash basins, showers, or faucets, we offer comprehensive solutions from trusted experts in Nagpur.
//             We connect you to all brands of Bathroom Accessories & Sanitary ware Dealers. Get the best contacts for Bathroom Accessories & Sanitary ware Dealers in Nagpur through Service On Wheel. We provide a platform to hire the best service providers for your sanitary fittings needs. Whether you need service for flush tanks, wash basins, showers, or faucets, we offer comprehensive solutions from trusted experts in Nagpur.
//           </Typography>
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <img
//             src="https://www.serviceonwheel.com/uploads/service/773951677325955.jpg" // Replace with actual image URL
//             alt="Bathroom Service"
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
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
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
    title: "Flush Tank Repair",
    price: "₹ 100",
    image: "https://5.imimg.com/data5/YV/KP/LO/SELLER-9636432/cera-dual-pvc-flush-tank-500x500.jpg",
  },
  {
    title: "Wash Basin Repair",
    price: "₹ 150",
    image: "https://images-na.ssl-images-amazon.com/images/I/9183vJdeN-L._AC_SL1500_.jpg",
  },
  {
    title: "Shower Repair",
    price: "₹ 250",
    image: "https://cdn.thewirecutter.com/wp-content/media/2021/04/showerheads-2048px-1682.jpg",
  },
  {
    title: "Bath Tub Repair",
    price: "₹ On Visit",
    image: "https://www.blissbathandkitchen.com/wp-content/uploads/2017/03/cheviot-regency-cast-iron-bathtub.png",
  },
  {
    title: "Faucets",
    price: "₹ On Visit",
    image: "http://g-ec2.images-amazon.com/images/G/01/th/aplus/americanstandard/B004GK56KO/B004GK56KO_2_Large._V364163427_.jpg",
  },
  {
    title: "Others",
    price: "₹ On Visit",
    image: "http://newcastleplumbinginc.com/wp-content/uploads/2018/03/bathroom-repair.jpg",
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

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4, bgcolor: '#f5f5f5', padding: 3, borderRadius: 2 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ color: '#1976d2', fontWeight: 'bold' }}>
        Bathroom Service
      </Typography>
      <Grid container spacing={2} sx={{ alignItems: 'center', mb: 4 }}>
        <Grid item xs={12} md={6}>
          <Typography variant="body1" gutterBottom sx={{ textAlign: 'justify' }}>
            We connect you to all brands of Bathroom Accessories & Sanitary ware Dealers. Get the best contacts for Bathroom Accessories & Sanitary ware Dealers in Nagpur through Service On Wheel. We provide a platform to hire the best service providers for your sanitary fittings needs. Whether you need service for flush tanks, wash basins, showers, or faucets, we offer comprehensive solutions from trusted experts in Nagpur.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src="https://www.serviceonwheel.com/uploads/service/773951677325955.jpg"
            alt="Bathroom Service"
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
        <Button variant="contained" color="secondary" sx={{ padding: '10px 20px', fontSize: '16px' }} onClick={() => navigate('/cart')}>
          Go to Cart
        </Button>
      </Box>
    </Box>
  );
}
