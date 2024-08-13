// import React from "react"; 
// import Box from "@mui/material/Box"; 
// import Typography from "@mui/material/Typography"; 
// import Card from "@mui/material/Card"; 
// import CardContent from "@mui/material/CardContent"; 
// import CardActions from "@mui/material/CardActions"; 
// import Button from "@mui/material/Button"; 
// import CardMedia from "@mui/material/CardMedia"; 
// import Grid from "@mui/material/Grid"; 

// // Define an array of service objects with details for each service
// const services = [
//   {
//     title: "Home Gardening",
//     price: "₹ 1000",
//     image: "https://www.thewowstyle.com/wp-content/uploads/2020/10/image1-13.jpg",
//   },
// ];

// // Define the AcServiceCards component
// export default function AcServiceCards() {
//   return (
//     <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4, bgcolor: '#f5f5f5', padding: 3 }}>
//       {/* Main container Box with column direction and centered alignment */}
//       <Typography variant="h4" component="h1" gutterBottom sx={{ color: '#1976d2', fontWeight: 'bold' }}>
//         Gardening Service
//       </Typography>
//       {/* Typography for the heading */}
//       <Grid container spacing={2} sx={{ alignItems: 'center', mb: 4 }}>
//         <Grid item xs={12} md={6}>
//           <Typography variant="body1" gutterBottom sx={{ textAlign: 'justify' }}>
//             Gardening services are essential for maintaining the beauty and health of your outdoor spaces. Whether you need regular lawn care, seasonal planting, or specialized landscape design, professional gardening services can transform your garden into a vibrant and welcoming environment. Expert gardeners offer a range of services including mowing, trimming, pruning, fertilizing, weed control, and pest management. They can also provide advice on plant selection and garden design to suit your specific needs and preferences. Regular maintenance not only enhances the aesthetic appeal of your garden but also ensures the health and longevity of your plants. Gardening services include soil testing and fertilization to promote robust plant growth, as well as weed control to keep your garden tidy and free from invasive plants. Pest management is another crucial aspect, protecting your plants from harmful insects and diseases.

//             For those looking to transform their outdoor space, landscape design services provide customized plans that incorporate your preferences and the unique characteristics of your property. This might include the installation of pathways, water features, garden lighting, and irrigation systems.
//           </Typography>
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <img
//             src="https://www.edenslandscapes.co.uk/wp-content/uploads/2019/08/GardenLawnMowing.jpg"
//             alt="Gardening Service"
//             style={{ width: '90%', height: 'auto', borderRadius: '8px' }}
//           />
//         </Grid>
//       </Grid>
//       <Grid container spacing={2} justifyContent="center">
//         {services.map((service, index) => (
//           // Iterate over services array and render a Card for each service
//           <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
//             <Card sx={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.05)' } }}>
//               {/* Card component with a maximum width */}
//               <CardMedia
//                 component="img"
//                 height="200"
//                 image={service.image}
//                 alt={service.title}
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



import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import { useNavigate } from 'react-router-dom';

const services = [
  {
    title: "Home Gardening",
    price: "₹ 1000",
    image: "https://www.thewowstyle.com/wp-content/uploads/2020/10/image1-13.jpg",
  },
];

export default function AcServiceCards() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const handleAddToCart = (service) => {
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCart = [...existingCart, service];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4, bgcolor: '#f5f5f5', padding: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ color: '#1976d2', fontWeight: 'bold' }}>
        Gardening Service
      </Typography>
      <Grid container spacing={2} sx={{ alignItems: 'center', mb: 4 }}>
        <Grid item xs={12} md={6}>
          <Typography variant="body1" gutterBottom sx={{ textAlign: 'justify' }}>
            Gardening services are essential for maintaining the beauty and health of your outdoor spaces. Whether you need regular lawn care, seasonal planting, or specialized landscape design, professional gardening services can transform your garden into a vibrant and welcoming environment. Expert gardeners offer a range of services including mowing, trimming, pruning, fertilizing, weed control, and pest management. They can also provide advice on plant selection and garden design to suit your specific needs and preferences. Regular maintenance not only enhances the aesthetic appeal of your garden but also ensures the health and longevity of your plants. Gardening services include soil testing and fertilization to promote robust plant growth, as well as weed control to keep your garden tidy and free from invasive plants. Pest management is another crucial aspect, protecting your plants from harmful insects and diseases.
            For those looking to transform their outdoor space, landscape design services provide customized plans that incorporate your preferences and the unique characteristics of your property. This might include the installation of pathways, water features, garden lighting, and irrigation systems.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src="https://www.edenslandscapes.co.uk/wp-content/uploads/2019/08/GardenLawnMowing.jpg"
            alt="Gardening Service"
            style={{ width: '90%', height: 'auto', borderRadius: '8px' }}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card sx={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.05)' } }}>
              <CardMedia
                component="img"
                height="200"
                image={service.image}
                alt={service.title}
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
        <Button
          variant="contained"
          color="secondary"
          sx={{ padding: '10px 20px', fontSize: '16px' }}
          onClick={() => navigate('/cart')}
        >
          Go to Cart
        </Button>
      </Box>
    </Box>
  );
}
