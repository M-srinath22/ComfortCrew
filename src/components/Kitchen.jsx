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
//     title: "Gas Burner",
//     price: "₹ 100",
//     image: "https://www.serviceonwheel.com/uploads/service/205741671873692.jpg",
//   },
//   {
//     title: "Mixer Juicer",
//     price: "₹ 150",
//     image: "https://www.serviceonwheel.com/uploads/service/718261671868963.jpg",
//   },
//   {
//     title: "Mixer Grinder",
//     price: "₹ 250",
//     image: "https://www.serviceonwheel.com/uploads/service/308041671873363.jpg",
//   },
//   {
//     title: "Hand Grinder Mixer",
//     price: "₹ On Visit",
//     image: "https://www.serviceonwheel.com/uploads/service/288871671869055.jpg",
//   },
//   {
//     title: "Mixer Juicer",
//     price: "₹ On Visit",
//     image: "https://kitchenrating.com/wp-content/uploads/2021/03/best-juicer-mixer.jpg",
//   },
//   {
//     title: "Toaster Oven",
//     price: "₹ On Visit",
//     image: "https://www.serviceonwheel.com/uploads/service/303351671869139.jpg",
//   },
//   {
//     title: "Other",
//     price: "₹ On Visit",
//     image: "https://www.serviceonwheel.com/uploads/service/197651671876796.jpg",
//   },
// ];

// // Define the AcServiceCards component
// export default function AcServiceCards() {
//   return (
//     <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4, bgcolor: '#f5f5f5', padding: 3 }}>
//       {/* Main container Box with column direction and centered alignment */}
//       <Typography variant="h4" component="h1" gutterBottom sx={{ color: '#1976d2', fontWeight: 'bold' }}>
//         Kitchen Service
//       </Typography>
//       {/* Typography for the heading */}
//       <Grid container spacing={2} sx={{ alignItems: 'center', mb: 4 }}>
//         <Grid item xs={12} md={6}>
//           <Typography variant="body1" gutterBottom sx={{ textAlign: 'justify' }}>
//             Service On Wheel is the best name in Kitchen Appliances service in Nagpur Today. We provide the best Local Kitchen Appliances repair in Nagpur. So book service in Nagpur if your Kitchen Appliances are not working properly, even if you have bought them recently. You should keep a note about the maintenance of your Kitchen Appliances. If you are searching for Kitchen Appliances repair near me in Nagpur, Gas burner repair in Nagpur, Gas burner repair near me in Nagpur, Gas hob cleaning near me in Nagpur, Mixer service in Nagpur, How to clean a Gas burner in Nagpur, Gas chulha services near me in Nagpur, Best Kitchen Appliances repair shop in Nagpur, Kitchen Appliances technician in Nagpur, or Gas burner cleaning in Nagpur, then you should be aware of the best Kitchen Appliances services in Nagpur. WE PROVIDE - Mixer grinder repair in Nagpur, Chimney installation service in Nagpur. Just book the service online and relax.
//             Maintaining a functional and aesthetically pleasing kitchen is crucial for any home. Kitchen repairing services offer a range of solutions to ensure your kitchen remains in top condition, addressing everything from minor fixes to major renovations. Here’s a detailed look at what kitchen repairing services typically include:
//           </Typography>
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <img
//             src="https://www.serviceonwheel.com/uploads/service/325391600837244.jpg" // Replace with actual image URL
//             alt="Kitchen Service"
//             style={{ width: '90%', height: 'auto', borderRadius: '8px' }}
//           />
//         </Grid>
//       </Grid>
//       <Grid container spacing={2} justifyContent="center">
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

const services = [
  {
    title: "Gas Burner",
    price: "₹ 100",
    image: "https://www.serviceonwheel.com/uploads/service/205741671873692.jpg",
  },
  {
    title: "Mixer Juicer",
    price: "₹ 150",
    image: "https://www.serviceonwheel.com/uploads/service/718261671868963.jpg",
  },
  {
    title: "Mixer Grinder",
    price: "₹ 250",
    image: "https://www.serviceonwheel.com/uploads/service/308041671873363.jpg",
  },
  {
    title: "Hand Grinder Mixer",
    price: "₹ On Visit",
    image: "https://www.serviceonwheel.com/uploads/service/288871671869055.jpg",
  },
  {
    title: "Mixer Juicer",
    price: "₹ On Visit",
    image: "https://kitchenrating.com/wp-content/uploads/2021/03/best-juicer-mixer.jpg",
  },
  {
    title: "Toaster Oven",
    price: "₹ On Visit",
    image: "https://www.serviceonwheel.com/uploads/service/303351671869139.jpg",
  },
  {
    title: "Other",
    price: "₹ On Visit",
    image: "https://www.serviceonwheel.com/uploads/service/197651671876796.jpg",
  },
];

export default function AcServiceCards() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const handleAddToCart = (service) => {
    const newCart = [...cart, service];
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const handleGoToCart = () => {
    navigate("/cart");
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4, bgcolor: '#f5f5f5', padding: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ color: '#1976d2', fontWeight: 'bold' }}>
        Kitchen Service
      </Typography>
      <Grid container spacing={2} sx={{ alignItems: 'center', mb: 4 }}>
        <Grid item xs={12} md={6}>
          <Typography variant="body1" gutterBottom sx={{ textAlign: 'justify' }}>
            Service On Wheel is the best name in Kitchen Appliances service in Nagpur Today. We provide the best Local Kitchen Appliances repair in Nagpur. So book service in Nagpur if your Kitchen Appliances are not working properly, even if you have bought them recently. You should keep a note about the maintenance of your Kitchen Appliances. If you are searching for Kitchen Appliances repair near me in Nagpur, Gas burner repair in Nagpur, Gas burner repair near me in Nagpur, Gas hob cleaning near me in Nagpur, Mixer service in Nagpur, How to clean a Gas burner in Nagpur, Gas chulha services near me in Nagpur, Best Kitchen Appliances repair shop in Nagpur, Kitchen Appliances technician in Nagpur, or Gas burner cleaning in Nagpur, then you should be aware of the best Kitchen Appliances services in Nagpur. WE PROVIDE - Mixer grinder repair in Nagpur, Chimney installation service in Nagpur. Just book the service online and relax.
            Maintaining a functional and aesthetically pleasing kitchen is crucial for any home. Kitchen repairing services offer a range of solutions to ensure your kitchen remains in top condition, addressing everything from minor fixes to major renovations. Here’s a detailed look at what kitchen repairing services typically include:
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src="https://www.serviceonwheel.com/uploads/service/325391600837244.jpg"
            alt="Kitchen Service"
            style={{ width: '90%', height: 'auto', borderRadius: '8px' }}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.05)' }, width: '100%' }}>
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
      <Box sx={{ mt: 3, textAlign: 'center' }}>
        <Button variant="contained" color="secondary" sx={{ padding: '10px 20px', fontSize: '16px' }} onClick={handleGoToCart}>
          Go to Cart
        </Button>
      </Box>
    </Box>
  );
}
