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
//     title: "1 BHK (up to 450 sqft)",
//     price: "₹ 1500",
//     image: "https://www.serviceonwheel.com/uploads/service/332531671790919.jpg",
//   },
//   {
//     title: "2 BHK (451-1000 sqft)",
//     price: "₹ 2500",
//     image: "https://www.serviceonwheel.com/uploads/service/773611671790934.jpg",
//   },
//   {
//     title: "3 BHK (1001 - 1500 sqft)",
//     price: "₹ 3500",
//     image: "https://www.serviceonwheel.com/uploads/service/512491671790969.jpg",
//   },
//   {
//     title: "4 BHK (1501 - 2000 sqft)",
//     price: "₹ 4500", 
//     image: "https://www.serviceonwheel.com/uploads/service/144931671791038.jpg",
//   },
// ];
// export default function AcServiceCards() {
//   return (
//     <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4, bgcolor: '#f5f5f5', padding: 3 }}>
//       {}
//       <Typography variant="h4" component="h1" gutterBottom sx={{ color: '#1976d2', fontWeight: 'bold' }}>
//         House Cleaning Service
//       </Typography>
//       {/* Typography for the heading */}
//       <Grid container spacing={2} sx={{ alignItems: 'center', mb: 4 }}>
//         <Grid item xs={12} md={6}>
//           <Typography variant="body1" gutterBottom sx={{ textAlign: 'justify' }}>
//             Home cleaning services are essential for maintaining a clean, healthy, and comfortable living environment. Professional cleaning services offer a wide range of options to meet your specific needs, whether it's regular maintenance, deep cleaning, or special services for move-ins and move-outs.Regular Cleaning: Regular cleaning services typically include dusting, vacuuming, mopping, and cleaning bathrooms and kitchens. This helps to keep your home tidy and free from dust and allergens.Hiring professional home cleaning services saves you time and effort, allowing you to focus on other important aspects of your life. It also ensures that your home is cleaned to a high standard, providing a healthier environment for you and your family.Home cleaning services are invaluable for ensuring that your living space remains clean, organized, and inviting. These services cater to various needs, offering flexibility and convenience for homeowners with busy schedules or special cleaning requirements. For a more thorough clean, deep cleaning services target areas that are often neglected during routine cleanings. This involves scrubbing tile grout, cleaning inside appliances like ovens and refrigerators, washing windows, and deep cleaning carpets and upholstery. Deep cleaning is recommended periodically to ensure every corner of your home is spotless.
//           </Typography>
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <img
//             src="https://goinggreencs.com/wp-content/uploads/2020/03/AdobeStock_199161361-Cleaning-services-header-image-Resize.jpg" // Replace with actual image URL
//             alt="House Cleaning"
//             style={{ width: '90%', height: 'auto', borderRadius: '8px' }}
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
    title: "1 BHK (up to 450 sqft)",
    price: "₹ 1500",
    image: "https://www.serviceonwheel.com/uploads/service/332531671790919.jpg",
  },
  {
    title: "2 BHK (451-1000 sqft)",
    price: "₹ 2500",
    image: "https://www.serviceonwheel.com/uploads/service/773611671790934.jpg",
  },
  {
    title: "3 BHK (1001 - 1500 sqft)",
    price: "₹ 3500",
    image: "https://www.serviceonwheel.com/uploads/service/512491671790969.jpg",
  },
  {
    title: "4 BHK (1501 - 2000 sqft)",
    price: "₹ 4500", 
    image: "https://www.serviceonwheel.com/uploads/service/144931671791038.jpg",
  },
];

export default function AcServiceCards() {
  const navigate = useNavigate();

  const handleAddToCart = (service) => {
    const currentCart = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCart = [...currentCart, service];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleGoToCart = () => {
    navigate('/cart');
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4, bgcolor: '#f5f5f5', padding: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ color: '#1976d2', fontWeight: 'bold' }}>
        House Cleaning Service
      </Typography>
      <Grid container spacing={2} sx={{ alignItems: 'center', mb: 4 }}>
        <Grid item xs={12} md={6}>
          <Typography variant="body1" gutterBottom sx={{ textAlign: 'justify' }}>
            Home cleaning services are essential for maintaining a clean, healthy, and comfortable living environment. Professional cleaning services offer a wide range of options to meet your specific needs, whether it's regular maintenance, deep cleaning, or special services for move-ins and move-outs. Regular Cleaning: Regular cleaning services typically include dusting, vacuuming, mopping, and cleaning bathrooms and kitchens. This helps to keep your home tidy and free from dust and allergens. Hiring professional home cleaning services saves you time and effort, allowing you to focus on other important aspects of your life. It also ensures that your home is cleaned to a high standard, providing a healthier environment for you and your family. Home cleaning services are invaluable for ensuring that your living space remains clean, organized, and inviting. These services cater to various needs, offering flexibility and convenience for homeowners with busy schedules or special cleaning requirements. For a more thorough clean, deep cleaning services target areas that are often neglected during routine cleanings. This involves scrubbing tile grout, cleaning inside appliances like ovens and refrigerators, washing windows, and deep cleaning carpets and upholstery. Deep cleaning is recommended periodically to ensure every corner of your home is spotless.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src="https://goinggreencs.com/wp-content/uploads/2020/03/AdobeStock_199161361-Cleaning-services-header-image-Resize.jpg" 
            alt="House Cleaning"
            style={{ width: '90%', height: 'auto', borderRadius: '8px' }}
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
