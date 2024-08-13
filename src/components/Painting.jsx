
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
//     title: "Painting",
//     price: "₹ 100",
//     image: "https://www.serviceonwheel.com/uploads/service/164201671792514.png",
//   },
//   {
//     title: "Wall Texture Paintings",
//     price: "₹ 150",
//     image: "https://img.staticmb.com/mbcontent/images/uploads/2022/6/Wall%20with%20handmade%20white%20rustic%20textured%20design%20.jpg",
//   },
//   {
//     title: "Complete Home Painting",
//     price: "₹ 250",
//     image: "https://jooinn.com/images/painter-7.jpg",
//   },
//   {
//     title: "Gate Painting",
//     price: "₹ On Visit",
//     image: "https://tse2.mm.bing.net/th?id=OIP.6P6dYEVQ2xWVob3wctw5KwHaEK&pid=Api&P=0&h=180",
//   },
//   {
//     title: "Window Grill Painting",
//     price: "₹ On Visit",
//     image: "https://img.staticmb.com/mbcontent/images/uploads/2023/5/simple-grill-design-for-windows.jpg",
//   },
//   {
//     title: "Wall Putty Repair",
//     price: "₹ On Visit",
//     image: "https://www.smalldesignideas.com/wp-content/uploads/2016/05/kitchen_puttying.jpg",
//   },
// ];

// // Define the AcServiceCards component
// export default function AcServiceCards() {
//   return (
//     <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4, bgcolor: '#f5f5f5', padding: 3, borderRadius: 2 }}>
//       {/* Main container Box with column direction and centered alignment */}
//       <Typography variant="h4" component="h1" gutterBottom sx={{ color: '#1976d2', fontWeight: 'bold' }}>
//         Painting Service
//       </Typography>
//       {/* Typography for the heading */}
//       <Grid container spacing={2} sx={{ alignItems: 'center', mb: 4 }}>
//         <Grid item xs={12} md={6}>
//           <Typography variant="body1" gutterBottom sx={{ textAlign: 'justify' }}>
//             Nothing improves the look and feel of your residence as quickly and affordably as a good paint job. Choose colors that reflect your personality to create spaces that are calming and inviting. Service On Wheel can help you to use color to create maximum impact in the interior of your home as well your exterior to enhance the curb appeal. If you are searching for a Home Painter in Nagpur, we can assist you with all your painting needs. We offer services for house painting, wall painting, interior and exterior painting, and more. Contact us for professional painting services in Nagpur.
//           </Typography>
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <img
//             src="https://www.platinumeliteservices.co.uk/wp-content/uploads/2020/02/AdobeStock_197858567.jpg" // Replace with actual image URL
//             alt="Painting Service"
//             style={{ width: '90%', height: 'auto', borderRadius: '8px' }}
//           />
//         </Grid>
//       </Grid>
//       <Grid container spacing={2} justifyContent="center">
//         {/* Grid container to align cards */}
//         {services.map((service, index) => (
//           <Grid item xs={12} sm={6} md={4} key={index}>
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
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

// Define an array of service objects with details for each service
const services = [
  {
    title: "Painting",
    price: "₹ 100",
    image: "https://www.serviceonwheel.com/uploads/service/164201671792514.png",
  },
  {
    title: "Wall Texture Paintings",
    price: "₹ 150",
    image: "https://img.staticmb.com/mbcontent/images/uploads/2022/6/Wall%20with%20handmade%20white%20rustic%20textured%20design%20.jpg",
  },
  {
    title: "Complete Home Painting",
    price: "₹ 250",
    image: "https://jooinn.com/images/painter-7.jpg",
  },
  {
    title: "Gate Painting",
    price: "₹ On Visit",
    image: "https://tse2.mm.bing.net/th?id=OIP.6P6dYEVQ2xWVob3wctw5KwHaEK&pid=Api&P=0&h=180",
  },
  {
    title: "Window Grill Painting",
    price: "₹ On Visit",
    image: "https://img.staticmb.com/mbcontent/images/uploads/2023/5/simple-grill-design-for-windows.jpg",
  },
  {
    title: "Wall Putty Repair",
    price: "₹ On Visit",
    image: "https://www.smalldesignideas.com/wp-content/uploads/2016/05/kitchen_puttying.jpg",
  },
];

// Define the PaintingServiceCards component
export default function PaintingServiceCards() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  // Load cart from localStorage on component mount
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  const handleAddToCart = (service) => {
    const newCart = [...cart, service];
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart)); // Save to local storage
  };

  const handleRemoveFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart)); // Update local storage
  };

  const handleGoToCart = () => {
    navigate('/cart'); // Navigate to Cart page
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4, bgcolor: '#f5f5f5', padding: 3, borderRadius: 2 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ color: '#1976d2', fontWeight: 'bold' }}>
        Painting Service
      </Typography>
      <Grid container spacing={2} sx={{ alignItems: 'center', mb: 4 }}>
        <Grid item xs={12} md={6}>
          <Typography variant="body1" gutterBottom sx={{ textAlign: 'justify' }}>
            Nothing improves the look and feel of your residence as quickly and affordably as a good paint job. Choose colors that reflect your personality to create spaces that are calming and inviting. Service On Wheel can help you to use color to create maximum impact in the interior of your home as well as your exterior to enhance the curb appeal. If you are searching for a Home Painter in Nagpur, we can assist you with all your painting needs. We offer services for house painting, wall painting, interior and exterior painting, and more. Contact us for professional painting services in Nagpur.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src="https://www.platinumeliteservices.co.uk/wp-content/uploads/2020/02/AdobeStock_197858567.jpg"
            alt="Painting Service"
            style={{ width: '90%', height: 'auto', borderRadius: '8px' }}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
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
