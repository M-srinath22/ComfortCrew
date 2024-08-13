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
//     title: "Switchboard Repair",
//     price: "₹ 100",
//     image: "https://app.kampainfra.com/wp-content/uploads/2022/12/kampa01.jpg",
//   },
//   {
//     title: "Socket Replacement",
//     price: "₹ 150",
//     image: "https://i.ytimg.com/vi/0S63MCqZPns/maxresdefault.jpg",
//   },
//   {
//     title: "Fan Installation and Repair",
//     price: "₹ 250",
//     image: "https://www.goldmedalservice.com/wp-content/uploads/2022/06/Ceiling-Fan-Installation-Solutions-Technician-Image.jpg",
//   },
//   {
//     title: "Inverter Repair",
//     price: "₹ On Visit",
//     image: "https://www.solarrepairservice.com.au/wp-content/uploads/2021/04/solar-repairs-w1024-h684.jpg",
//   },
//   {
//     title: "Decorative Lightings",
//     price: "₹ On Visit",
//     image: "http://warisanlighting.com/wp-content/uploads/2016/06/decorative-ceiling-lights-photo-4.jpg",
//   },
//   {
//     title: "Wiring",
//     price: "₹ On Visit",
//     image: "https://www.coynecollege.edu/wp-content/uploads/2020/06/Learn-the-Basics-of-Home-Electrical-Wiring-CoyneCollege-scaled.jpeg",
//   },
// ];

// // Define the AcServiceCards component
// export default function AcServiceCards() {
//   return (
//     <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4, bgcolor: '#f5f5f5', padding: 3, borderRadius: 2 }}>
//       {/* Main container Box with column direction and centered alignment */}
//       <Typography variant="h4" component="h1" gutterBottom sx={{ color: '#1976d2', fontWeight: 'bold' }}>
//         Electrical Service
//       </Typography>
//       {/* Typography for the heading */}
//       <Grid container spacing={2} sx={{ alignItems: 'center', mb: 4 }}>
//         <Grid item xs={12} md={6}>
//           <Typography variant="body1" gutterBottom sx={{ textAlign: 'justify' }}>
//             Electrical repairs are essential to maintain the safety and functionality of your home or business. Whether you are dealing with faulty wiring, malfunctioning outlets, or circuit breaker issues, professional electrical repair services can help prevent potential hazards and ensure your electrical systems operate efficiently. Regular maintenance and prompt attention to electrical problems can save you from costly repairs and enhance the longevity of your electrical installations.
//             Book an Electrician in Nagpur near you within 90 minutes with 30-day post-service guarantee. If you are searching for an Electrician near me in Nagpur, electricians in Nagpur, electrical companies in Nagpur, electrical contractors in Nagpur, Electricians in my area in Nagpur, Local electrician in Nagpur, Local Electrician near me in Nagpur, Electrician near me in Nagpur, Electrician repair service in Nagpur, Electrician in Nagpur, Electrician service in Nagpur, Electrician in my area in Nagpur,best Electrician in Nagpur. Then Service On Wheel is the one stop Electrical solution that provides for all your electrical problems in Nagpur.Experts at Service On Wheel provide you with basic electrical repairs in Nagpur.We provide electricians in Nagpur with variety of Electrician services in Nagpur at the comfort of your home, choose a slot according to your convenience and leave the rest on us.Our Services are Electrical repair in Nagpur,Electrical wiring in Nagpur,House wiring in Nagpur,Electrical appliances Repair and installation in Nagpur,Electrician job in Nagpur.
//           </Typography>
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <img
//             src="https://www.serviceonwheel.com/uploads/service/805621584075079.jpg" // Replace with actual image URL
//             alt="Electrical Service"
//             style={{ width: '90%', height: 'auto', borderRadius: '8px' }}
//           />
//         </Grid>
//       </Grid>
//       <Grid container spacing={2} justifyContent="center">
//         {/* Grid container to align cards */}
//         {services.map((service, index) => (
//           <Grid item xs={12} sm={6} md={3} key={index}>
//             {/* Each card takes up 3 columns on medium screens (4 cards per row) */}
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







// import React, { useState } from "react"; // Import React and useState hook
// import Box from "@mui/material/Box"; // Import Box component from Material-UI for layout
// import Typography from "@mui/material/Typography"; // Import Typography component for text styling
// import Card from "@mui/material/Card"; // Import Card component from Material-UI for card layout
// import CardContent from "@mui/material/CardContent"; // Import CardContent for card's main content
// import CardActions from "@mui/material/CardActions"; // Import CardActions for card's action area
// import Button from "@mui/material/Button"; // Import Button component for clickable actions
// import CardMedia from "@mui/material/CardMedia"; // Import CardMedia for displaying images in cards
// import Grid from "@mui/material/Grid"; // Import Grid component from Material-UI for layout
// import IconButton from "@mui/material/IconButton"; // Import IconButton for clickable icon actions
// import DeleteIcon from "@mui/icons-material/Delete"; // Import DeleteIcon for remove button

// // Define an array of service objects with details for each service
// const services = [
//   {
//     title: "Switchboard Repair",
//     price: "₹ 100",
//     image: "https://app.kampainfra.com/wp-content/uploads/2022/12/kampa01.jpg",
//   },
//   {
//     title: "Socket Replacement",
//     price: "₹ 150",
//     image: "https://i.ytimg.com/vi/0S63MCqZPns/maxresdefault.jpg",
//   },
//   {
//     title: "Fan Installation and Repair",
//     price: "₹ 250",
//     image: "https://www.goldmedalservice.com/wp-content/uploads/2022/06/Ceiling-Fan-Installation-Solutions-Technician-Image.jpg",
//   },
//   {
//     title: "Inverter Repair",
//     price: "₹ On Visit",
//     image: "https://www.solarrepairservice.com.au/wp-content/uploads/2021/04/solar-repairs-w1024-h684.jpg",
//   },
//   {
//     title: "Decorative Lightings",
//     price: "₹ On Visit",
//     image: "http://warisanlighting.com/wp-content/uploads/2016/06/decorative-ceiling-lights-photo-4.jpg",
//   },
//   {
//     title: "Wiring",
//     price: "₹ On Visit",
//     image: "https://www.coynecollege.edu/wp-content/uploads/2020/06/Learn-the-Basics-of-Home-Electrical-Wiring-CoyneCollege-scaled.jpeg",
//   },
// ];

// // Define the AcServiceCards component
// export default function AcServiceCards() {
//   const [cart, setCart] = useState([]); // State to hold cart items

//   const handleAddToCart = (service) => {
//     setCart([...cart, service]); // Add service to cart
//   };

//   const handleRemoveFromCart = (index) => {
//     const newCart = [...cart];
//     newCart.splice(index, 1); // Remove item at the specified index
//     setCart(newCart); // Update cart state
//   };

//   return (
//     <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4, bgcolor: '#f5f5f5', padding: 3, borderRadius: 2 }}>
//       <Typography variant="h4" component="h1" gutterBottom sx={{ color: '#1976d2', fontWeight: 'bold' }}>
//         Electrical Service
//       </Typography>
//       <Grid container spacing={2} sx={{ alignItems: 'center', mb: 4 }}>
//         <Grid item xs={12} md={6}>
//           <Typography variant="body1" gutterBottom sx={{ textAlign: 'justify' }}>
//             Electrical repairs are essential to maintain the safety and functionality of your home or business. Whether you are dealing with faulty wiring, malfunctioning outlets, or circuit breaker issues, professional electrical repair services can help prevent potential hazards and ensure your electrical systems operate efficiently. Regular maintenance and prompt attention to electrical problems can save you from costly repairs and enhance the longevity of your electrical installations.
//             Book an Electrician in Nagpur near you within 90 minutes with 30-day post-service guarantee. If you are searching for an Electrician near me in Nagpur, electricians in Nagpur, electrical companies in Nagpur, electrical contractors in Nagpur, Electricians in my area in Nagpur, Local electrician in Nagpur, Local Electrician near me in Nagpur, Electrician near me in Nagpur, Electrician repair service in Nagpur, Electrician in Nagpur, Electrician service in Nagpur, Electrician in my area in Nagpur, best Electrician in Nagpur. Then Service On Wheel is the one stop Electrical solution that provides for all your electrical problems in Nagpur. Experts at Service On Wheel provide you with basic electrical repairs in Nagpur. We provide electricians in Nagpur with variety of Electrician services in Nagpur at the comfort of your home, choose a slot according to your convenience and leave the rest on us. Our Services are Electrical repair in Nagpur, Electrical wiring in Nagpur, House wiring in Nagpur, Electrical appliances Repair and installation in Nagpur, Electrician job in Nagpur.
//           </Typography>
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <img
//             src="https://www.serviceonwheel.com/uploads/service/805621584075079.jpg"
//             alt="Electrical Service"
//             style={{ width: '90%', height: 'auto', borderRadius: '8px' }}
//           />
//         </Grid>
//       </Grid>
//       <Grid container spacing={2} justifyContent="center">
//         {services.map((service, index) => (
//           <Grid item xs={12} sm={6} md={3} key={index}>
//             <Card sx={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.05)' }, width: '100%', borderRadius: 2 }}>
//               <CardMedia
//                 component="img"
//                 height="200"
//                 image={service.image}
//                 alt={service.title}
//                 sx={{ borderRadius: '8px' }}
//               />
//               <CardContent>
//                 <Typography gutterBottom variant="h5" component="div" sx={{ color: '#1976d2', fontWeight: 'bold' }}>
//                   {service.title}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   {service.price}
//                 </Typography>
//               </CardContent>
//               <CardActions sx={{ justifyContent: 'center' }}>
//                 <Button size="small" variant="contained" color="primary" onClick={() => handleAddToCart(service)}>
//                   Add to Cart
//                 </Button>
//               </CardActions>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//       <Box sx={{ mt: 3, width: '100%' }}>
//         <Typography variant="h5" sx={{ mb: 2, textAlign: 'center' }}>
//           Cart Items: {cart.length}
//         </Typography>
//         <Grid container spacing={2}>
//           {cart.map((item, index) => (
//             <Grid item xs={12} md={6} lg={4} key={index}>
//               <Card sx={{ display: 'flex', alignItems: 'center', padding: 2 }}>
//                 <CardMedia
//                   component="img"
//                   image={item.image}
//                   alt={item.title}
//                   sx={{ width: 100, height: 100, borderRadius: '8px', mr: 2 }}
//                 />
//                 <Box sx={{ flexGrow: 1 }}>
//                   <Typography variant="h6">{item.title}</Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     {item.price}
//                   </Typography>
//                 </Box>
//                 <IconButton color="secondary" onClick={() => handleRemoveFromCart(index)}>
//                   <DeleteIcon />
//                 </IconButton>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>
//       <Box sx={{ mt: 3 }}>
//         <Button variant="contained" color="secondary" sx={{ padding: '10px 20px', fontSize: '16px' }}>
//           Proceed to Checkout
//         </Button>
//       </Box>
//     </Box>
//   );
// }
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
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
    title: "Switchboard Repair",
    price: "₹ 100",
    image: "https://app.kampainfra.com/wp-content/uploads/2022/12/kampa01.jpg",
  },
  {
    title: "Socket Replacement",
    price: "₹ 150",
    image: "https://i.ytimg.com/vi/0S63MCqZPns/maxresdefault.jpg",
  },
  {
    title: "Fan Installation and Repair",
    price: "₹ 250",
    image: "https://www.goldmedalservice.com/wp-content/uploads/2022/06/Ceiling-Fan-Installation-Solutions-Technician-Image.jpg",
  },
  {
    title: "Inverter Repair",
    price: "₹ On Visit",
    image: "https://www.solarrepairservice.com.au/wp-content/uploads/2021/04/solar-repairs-w1024-h684.jpg",
  },
  {
    title: "Decorative Lightings",
    price: "₹ On Visit",
    image: "http://warisanlighting.com/wp-content/uploads/2016/06/decorative-ceiling-lights-photo-4.jpg",
  },
  {
    title: "Wiring",
    price: "₹ On Visit",
    image: "https://www.coynecollege.edu/wp-content/uploads/2020/06/Learn-the-Basics-of-Home-Electrical-Wiring-CoyneCollege-scaled.jpeg",
  },
];

export default function AcServiceCards() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleAddToCart = (service) => {
    const newCart = [...cart, service];
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart)); // Save to local storage
  };

  const handleGoToCart = () => {
    navigate('/cart'); // Navigate to Cart page
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4, bgcolor: '#f5f5f5', padding: 3, borderRadius: 2 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ color: '#1976d2', fontWeight: 'bold' }}>
        Electrical Service
      </Typography>
      <Grid container spacing={2} sx={{ alignItems: 'center', mb: 4 }}>
        <Grid item xs={12} md={6}>
          <Typography variant="body1" gutterBottom sx={{ textAlign: 'justify' }}>
            Electrical repairs are essential to maintain the safety and functionality of your home or business. Whether you are dealing with faulty wiring, malfunctioning outlets, or circuit breaker issues, professional electrical repair services can help prevent potential hazards and ensure your electrical systems operate efficiently. Regular maintenance and prompt attention to electrical problems can save you from costly repairs and enhance the longevity of your electrical installations.
            Book an Electrician in Nagpur near you within 90 minutes with a 30-day post-service guarantee. If you are searching for an Electrician near me in Nagpur, electricians in Nagpur, electrical companies in Nagpur, electrical contractors in Nagpur, Electricians in my area in Nagpur, Local electrician in Nagpur, Local Electrician near me in Nagpur, Electrician near me in Nagpur, Electrician repair service in Nagpur, Electrician in Nagpur, Electrician service in Nagpur, Electrician in my area in Nagpur, best Electrician in Nagpur. Then Service On Wheel is the one-stop Electrical solution that provides for all your electrical problems in Nagpur. Experts at Service On Wheel provide you with basic electrical repairs in Nagpur. We provide electricians in Nagpur with a variety of Electrician services in Nagpur at the comfort of your home, choose a slot according to your convenience and leave the rest on us. Our Services are Electrical repair in Nagpur, Electrical wiring in Nagpur, House wiring in Nagpur, Electrical appliances Repair and installation in Nagpur, Electrician job in Nagpur.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src="https://www.serviceonwheel.com/uploads/service/805621584075079.jpg"
            alt="Electrical Service"
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
