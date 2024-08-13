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
//     title: "Tap Repair",
//     price: "₹ 100",
//     image: "https://tse4.mm.bing.net/th?id=OIP.ttXm1qDDvtDMlSZLEe4BOQHaE8&pid=Api&P=0&h=180",
//   },
//   {
//     title: "Wash Basin Repair",
//     price: "₹ 150",
//     image: "https://tse4.mm.bing.net/th?id=OIP.7Vxr1uRkQkX33p_dEKfb3QHaG4&pid=Api&P=0&h=180",
//   },
//   {
//     title: "Shower Installation ",
//     price: "₹ 250",
//     image: "https://tse1.mm.bing.net/th?id=OIP.h_fFf8_eH61xmqZM-yD6AgHaFj&pid=Api&P=0&h=180",
//   },
//   {
//     title: "Bath Tub Repair",
//     price: "₹ On Visit",
//     image: "https://tse4.mm.bing.net/th?id=OIP.4BcGIAPupyjaHfX8ZVMeawHaHa&pid=Api&P=0&h=180",
//   },
//   {
//     title: "Balcony Drain Blockage",
//     price: "₹ On Visit",
//     image: "https://tse1.mm.bing.net/th?id=OIP.ZkWoprg6-mMGFv8EBGqW7gHaEX&pid=Api&P=0&h=180",
//   },
//   {
//     title: "Tank Installation",
//     price: "₹ On Visit",
//     image: "https://www.envmart.com/ENVMartImages/ProductImage/sintex-triple-layer-water-tank-500l-31232.jpg",
//   },
//   {
//     title: "Water Pipe Connection",
//     price: "₹ On Visit",
//     image: "https://www.serviceonwheel.com/uploads/service/941671671772091.jpg",
//   },
//   {
//     title: "Others",
//     price: "₹ On Visit",
//     image: "https://www.serviceonwheel.com/uploads/service/315811673929679.jpg",
//   },
// ];

// // Define the PlumbingServiceCards component
// export default function PlumbingServiceCards() {
//   return (
//     <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4, bgcolor: '#f5f5f5', padding: 3 }}>
//       {/* Main container Box with column direction and centered alignment */}
//       <Typography variant="h4" component="h1" gutterBottom sx={{ color: '#1976d2', fontWeight: 'bold' }}>
//         Plumbing Service
//       </Typography>
//       {/* Typography for the heading */}
//       <Grid container spacing={2} sx={{ alignItems: 'center', mb: 4 }}>
//         <Grid item xs={12} md={6}>
//           <Typography variant="body1" gutterBottom sx={{ textAlign: 'justify' }}>
//             Is water leaking from the tap? Is your kitchen sink pipe choked? Or do you simply need a new pipeline fitting? Our fully expert plumbers in Nagpur are well-trained in all kinds of fittings, installations, and repairs. Whether it is your bathroom, kitchen, drainage, water tanks, or sewage system. We also help you design special combo packages for bulk deals for societies or commercial properties. Get plumbing service in Nagpur near you within 90 minutes with a 30-day post-service guarantee. If you are searching for a plumber near me in Nagpur, emergency plumber in Nagpur, plumbing companies in Nagpur, 24-hour plumber in Nagpur, plumbing service near me in Nagpur, emergency plumber near me in Nagpur, plumber services in Nagpur, plumbers in my area in Nagpur, plumbing repair in Nagpur, plumbing contractor in Nagpur, best plumbing service in Nagpur, or plumbers near me in Nagpur, then Service On Wheel is the one-stop solution for all your plumbing problems in Nagpur. Experts at Service On Wheel provide you with basic plumber repairs in Nagpur. We provide plumbers in Nagpur at the comfort of your home; choose a slot according to your convenience and leave the rest to us. Our services include plumber repair service in Nagpur, plumbing repair in Nagpur, and plumber job in Nagpur.
//           </Typography>
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <img
//             src="https://www.serviceonwheel.com/uploads/service/834431670584630.jpg" // Replace with actual image URL
//             alt="Plumbing Service"
//             style={{ width: '90%', height: 'auto', borderRadius: '8px' }}
//           />
//         </Grid>
//       </Grid>
//       <Grid container spacing={2} justifyContent="center">
//         {/* Grid container to align cards */}
//         {services.map((service, index) => (
//           // Iterate over services array and render a Card for each service
//           <Grid item xs={12} sm={6} md={3} key={index}>
//             <Card sx={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.05)' }, width: '100%' }}>
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
    title: "Tap Repair",
    price: "₹ 100",
    image: "https://tse4.mm.bing.net/th?id=OIP.ttXm1qDDvtDMlSZLEe4BOQHaE8&pid=Api&P=0&h=180",
  },
  {
    title: "Wash Basin Repair",
    price: "₹ 150",
    image: "https://tse4.mm.bing.net/th?id=OIP.7Vxr1uRkQkX33p_dEKfb3QHaG4&pid=Api&P=0&h=180",
  },
  {
    title: "Shower Installation",
    price: "₹ 250",
    image: "https://tse1.mm.bing.net/th?id=OIP.h_fFf8_eH61xmqZM-yD6AgHaFj&pid=Api&P=0&h=180",
  },
  {
    title: "Bath Tub Repair",
    price: "₹ 150",
    image: "https://tse4.mm.bing.net/th?id=OIP.4BcGIAPupyjaHfX8ZVMeawHaHa&pid=Api&P=0&h=180",
  },
  {
    title: "Balcony Drain Blockage",
    price: "₹ 200",
    image: "https://tse1.mm.bing.net/th?id=OIP.ZkWoprg6-mMGFv8EBGqW7gHaEX&pid=Api&P=0&h=180",
  },
  {
    title: "Tank Installation",
    price: "₹ 500",
    image: "https://www.envmart.com/ENVMartImages/ProductImage/sintex-triple-layer-water-tank-500l-31232.jpg",
  },
  {
    title: "Water Pipe Connection",
    price: "₹ 500",
    image: "https://www.serviceonwheel.com/uploads/service/941671671772091.jpg",
  },
  {
    title: "Others",
    price: "₹ On Visit",
    image: "https://www.serviceonwheel.com/uploads/service/315811673929679.jpg",
  },
];

// Define the PlumbingServiceCards component
export default function PlumbingServiceCards() {
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
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4, bgcolor: '#f5f5f5', padding: 3 }}>
      {/* Main container Box with column direction and centered alignment */}
      <Typography variant="h4" component="h1" gutterBottom sx={{ color: '#1976d2', fontWeight: 'bold' }}>
        Plumbing Service
      </Typography>
      {/* Typography for the heading */}
      <Grid container spacing={2} sx={{ alignItems: 'center', mb: 4 }}>
        <Grid item xs={12} md={6}>
          <Typography variant="body1" gutterBottom sx={{ textAlign: 'justify' }}>
            Is water leaking from the tap? Is your kitchen sink pipe choked? Or do you simply need a new pipeline fitting? Our fully expert plumbers in Nagpur are well-trained in all kinds of fittings, installations, and repairs. Whether it is your bathroom, kitchen, drainage, water tanks, or sewage system. We also help you design special combo packages for bulk deals for societies or commercial properties. Get plumbing service in Nagpur near you within 90 minutes with a 30-day post-service guarantee. If you are searching for a plumber near me in Nagpur, emergency plumber in Nagpur, plumbing companies in Nagpur, 24-hour plumber in Nagpur, plumbing service near me in Nagpur, emergency plumber near me in Nagpur, plumber services in Nagpur, plumbers in my area in Nagpur, plumbing repair in Nagpur, plumbing contractor in Nagpur, best plumbing service in Nagpur, or plumbers near me in Nagpur, then Service On Wheel is the one-stop solution for all your plumbing problems in Nagpur. Experts at Service On Wheel provide you with basic plumber repairs in Nagpur. We provide plumbers in Nagpur at the comfort of your home; choose a slot according to your convenience and leave the rest to us. Our services include plumber repair service in Nagpur, plumbing repair in Nagpur, and plumber job in Nagpur.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src="https://www.serviceonwheel.com/uploads/service/834431670584630.jpg"
            alt="Plumbing Service"
            style={{ width: '90%', height: 'auto', borderRadius: '8px' }}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} justifyContent="center">
        {/* Grid container to align cards */}
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.05)' }, width: '100%' }}>
              {/* Card component with a width of 100% to fit the Grid item */}
              <CardMedia
                component="img"
                height="200"
                image={service.image}
                alt={service.title}
                sx={{ borderRadius: '8px' }}
              />
              {/* CardMedia to display service image */}
              <CardContent>
                {/* CardContent to hold the main content of the card */}
                <Typography gutterBottom variant="h5" component="div" sx={{ color: '#1976d2', fontWeight: 'bold' }}>
                  {service.title}
                </Typography>
                {/* Typography for the service title */}
                <Typography variant="body2" color="text.secondary">
                  {service.price}
                </Typography>
                {/* Typography for the service price */}
              </CardContent>
              <CardActions sx={{ justifyContent: 'center' }}>
                {/* CardActions to hold action buttons */}
                <Button size="small" variant="contained" color="primary" onClick={() => handleAddToCart(service)}>
                  Add to Cart
                </Button>
                {/* Button to add the service to the cart */}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ mt: 3 }}>
        <Button variant="contained" color="secondary" sx={{ padding: '10px 20px', fontSize: '16px' }} onClick={handleGoToCart}>
          Go to Cart
        </Button>
        {/* Button to go to the cart page */}
      </Box>
    </Box>
  );
}
