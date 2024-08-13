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
//     title: "4 Seater",
//     price: "₹ 1000",
//     image: "https://tse1.mm.bing.net/th?id=OIP.WIxGmaRzHvVpsIYMw1PdGAHaEA&pid=Api&P=0&h=180",
//   },
//   {
//     title: "7 Seater",
//     price: "₹ 1500",
//     image: "https://tse1.mm.bing.net/th?id=OIP.c2AnnJe8j4VyBDkTnC3CMAHaE8&pid=Api&P=0&h=180",
//   },
//   {
//     title: "Regular Service",
//     price: "₹ On Visit",
//     image: "https://hips.hearstapps.com/hmg-prod/images/35140-elantragtn-line-1547230622.jpg?crop=0.820xw:0.615xh;0.0867xw,0.342xh&resize=980:*",
//   },
//   {
//     title: "Others",
//     price: "₹ On Visit",
//     image: "https://tse4.mm.bing.net/th?id=OIP.o5O7A41mqcvRUbV9bg-WcwHaDt&pid=Api&P=0&h=180",
//   },
// ];

// // Define the AcServiceCards component
// export default function AcServiceCards() {
//   return (
//     <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4, bgcolor: '#f5f5f5', padding: 3 }}>
//       {/* Main container Box with column direction and centered alignment */}
//       <Typography variant="h4" component="h1" gutterBottom sx={{ color: '#1976d2', fontWeight: 'bold' }}>
//         Car Service
//       </Typography>
//       {/* Typography for the heading */}
//       <Grid container spacing={2} sx={{ alignItems: 'center', mb: 4 }}>
//         <Grid item xs={12} md={6}>
//           <Typography variant="body1" gutterBottom sx={{ textAlign: 'justify' }}>
//             Bathroom Accessories & Sanitary ware Dealers Service
//             We Connect you to all Brands of Bathroom Accessories & Sanitary ware Dealers<br/><br/><br/><br/>
//             We provide best Bathroom Accessories & Sanitary ware Dealers contacts in Nagpur at Service On Wheel! We provide you with a platform to hire great Bathroom Accessories & Sanitary ware Dealers near you in Nagpur to take care of your Sanitary fittings services in Nagpur. Just let us the responsibility of offering a nearby Bathroom Accessories & Sanitary ware Dealers in Nagpur on the shoulders of our amazing service experts of Service On Wheel. We are specialized to connect you Best Bathroom Accessories & Sanitary ware Dealers.
//           </Typography>
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <img
//             src="https://www.cardivision.com/sites/default/files/featured-images/car-wash-a.jpg"
//             alt="Car Service"
//             style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
//           />
//         </Grid>
//       </Grid>
//       <Grid container spacing={2} justifyContent="center">
//         {services.map((service, index) => (
//           // Iterate over services array and render a Card for each service
//           <Grid item xs={12} sm={6} md={3} key={index}>
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


import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import { useNavigate } from 'react-router-dom';

// Define an array of service objects with details for each service
const services = [
  {
    title: "4 Seater",
    price: "₹ 1000",
    image: "https://tse1.mm.bing.net/th?id=OIP.WIxGmaRzHvVpsIYMw1PdGAHaEA&pid=Api&P=0&h=180",
  },
  {
    title: "7 Seater",
    price: "₹ 1500",
    image: "https://tse1.mm.bing.net/th?id=OIP.c2AnnJe8j4VyBDkTnC3CMAHaE8&pid=Api&P=0&h=180",
  },
  {
    title: "Regular Service",
    price: "₹ On Visit",
    image: "https://hips.hearstapps.com/hmg-prod/images/35140-elantragtn-line-1547230622.jpg?crop=0.820xw:0.615xh;0.0867xw,0.342xh&resize=980:*",
  },
  {
    title: "Others",
    price: "₹ On Visit",
    image: "https://tse4.mm.bing.net/th?id=OIP.o5O7A41mqcvRUbV9bg-WcwHaDt&pid=Api&P=0&h=180",
  },
];

export default function AcServiceCards() {
  const navigate = useNavigate();

  // Function to handle adding items to cart
  const handleAddToCart = (service) => {
    const currentCart = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCart = [...currentCart, service];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  // Function to handle navigation to the cart page
  const handleGoToCart = () => {
    navigate('/cart');
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4, bgcolor: '#f5f5f5', padding: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ color: '#1976d2', fontWeight: 'bold' }}>
        Car Service
      </Typography>
      {/* Typography for the heading */}
      <Grid container spacing={2} sx={{ alignItems: 'center', mb: 4 }}>
        <Grid item xs={12} md={6}>
          <Typography variant="body1" gutterBottom sx={{ textAlign: 'justify' }}>
            We provide best Car Service contacts. Connect with trusted car service providers near you for your car maintenance needs. From regular servicing to special treatments, we ensure high-quality services to keep your car in top shape.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src="https://www.cardivision.com/sites/default/files/featured-images/car-wash-a.jpg"
            alt="Car Service"
            style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
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
        <Button variant="contained" color="secondary" sx={{ padding: '10px 20px', fontSize: '16px' }} onClick={handleGoToCart}>
          Go to Cart
        </Button>
      </Box>
    </Box>
  );
}
