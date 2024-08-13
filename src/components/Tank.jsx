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
//     title: "Single Door",
//     price: "₹ 100",
//     image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6369/6369428cv1d.jpg",
//   },
//   {
//     title: "Double Door",
//     price: "₹ 150",
//     image: "https://www.subzero-wolf.com/-/media/images/united-states/widen/interior-images/bi-48s_interior.jpg?quality=90&height=1600&hash=1D46C03B468CCC00541E4E3E68E3FA2EBB955F48",
//   },
//   {
//     title: "Triple Door",
//     price: "₹ 250",
//     image: "https://www.twice.com/wp-content/uploads/2020/12/Thermador-36-inch-Master-Fridge-all-open-T36IR900SP_v003-scaled.jpg",
//   },
//   {
//     title: "Installation",
//     price: "₹ On Visit",
//     image: "http://images.samsung.com/is/image/samsung/in_RF858QALAX3-TL_004_Front-Open-With-Food_silver?$TM-Gallery$",
//   },
//   {
//     title: "Freezer Cooling Issue",
//     price: "₹ On Visit",
//     image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5003/5003924cv15d.jpg",
//   },
//   {
//     title: "Stabilizer Repair",
//     price: "₹ On Visit",
//     image: "https://3.imimg.com/data3/FA/MT/MY-3619010/stabilizer-for-refrigerator-1000x1000.jpg",
//   },
//   {
//     title: "Other",
//     price: "₹ On Visit",
//     image: "https://tse1.mm.bing.net/th?id=OIP.4F0xru_cL2VhcNbqneWIqwHaE6&pid=Api&P=0&h=180",
//   },

// ];

// // Define the AcServiceCards component
// export default function AcServiceCards() {
//   return (
//     <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4, bgcolor: '#f5f5f5', padding: 3 }}>
//       {/* Main container Box with column direction and centered alignment */}
//       <Typography variant="h4" component="h1" gutterBottom sx={{ color: '#1976d2', fontWeight: 'bold' }}>
//         Refrigerator Service
//       </Typography>
//       {/* Typography for the heading */}
//       <Grid container spacing={2} sx={{ alignItems: 'center', mb: 4 }}>
//         <Grid item xs={12} md={6}>
//           <Typography variant="body1" gutterBottom sx={{ textAlign: 'justify' }}>
//             Is your refrigerator, freezer, or fridge or other refrigeration unit experiencing loud noises, frequent water leaks,
//             insufficient cooling, excessive cooling, or cycling too often? And you are searching for appliance repair service near me in Nagpur, Refrigerator repair near me in Nagpur, Refrigerator repair service in Nagpur, Fridge repair near me in Nagpur, appliance service near me in Nagpur, local appliance repair in Nagpur, Refrigerator repair service near me in Nagpur, Freezer repair near me in Nagpur, Refrigerator service in Nagpur, Fix Refrigerator in Nagpur, LG Refrigerator repair in Nagpur, Samsung LG Refrigerator repair in Nagpur, whirlpool LG Refrigerator repair in Nagpur, Appliance services in Nagpur, Best fridge repair shop in Nagpur, Refrigerator technician in Nagpur, Best Refrigerator repair services in Nagpur,
//             WE PROVIDE SERVICE FOR- Refrigerator not cooling in Nagpur, Fridge not cooling in Nagpur, Refrigerator installation service in Nagpur, Refrigerator service in Nagpur,
//             Refrigerator cooling issue service in Nagpur, Fixing of Refrigerator in Nagpur, Refrigerator leaking water, Just book the service online and relax. We can send trained, experienced and verified professionals to attend to your fridge repair and appliance services request and get the job done.
//           </Typography>
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <img
//             src="https://www.serviceonwheel.com/uploads/service/15901600844475.jpg"
//             alt="Refrigerator Service"
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
    title: "Single Door",
    price: "₹ 100",
    image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6369/6369428cv1d.jpg",
  },
  {
    title: "Double Door",
    price: "₹ 150",
    image: "https://www.subzero-wolf.com/-/media/images/united-states/widen/interior-images/bi-48s_interior.jpg?quality=90&height=1600&hash=1D46C03B468CCC00541E4E3E68E3FA2EBB955F48",
  },
  {
    title: "Triple Door",
    price: "₹ 250",
    image: "https://www.twice.com/wp-content/uploads/2020/12/Thermador-36-inch-Master-Fridge-all-open-T36IR900SP_v003-scaled.jpg",
  },
  {
    title: "Installation",
    price: "₹ On Visit",
    image: "http://images.samsung.com/is/image/samsung/in_RF858QALAX3-TL_004_Front-Open-With-Food_silver?$TM-Gallery$",
  },
  {
    title: "Freezer Cooling Issue",
    price: "₹ On Visit",
    image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5003/5003924cv15d.jpg",
  },
  {
    title: "Stabilizer Repair",
    price: "₹ On Visit",
    image: "https://3.imimg.com/data3/FA/MT/MY-3619010/stabilizer-for-refrigerator-1000x1000.jpg",
  },
  {
    title: "Other",
    price: "₹ On Visit",
    image: "https://tse1.mm.bing.net/th?id=OIP.4F0xru_cL2VhcNbqneWIqwHaE6&pid=Api&P=0&h=180",
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
        Refrigerator Service
      </Typography>
      <Grid container spacing={2} sx={{ alignItems: 'center', mb: 4 }}>
        <Grid item xs={12} md={6}>
          <Typography variant="body1" gutterBottom sx={{ textAlign: 'justify' }}>
            Is your refrigerator, freezer, or fridge experiencing issues like loud noises, frequent water leaks, or insufficient cooling? We provide comprehensive refrigerator repair services to address these problems. Our experienced professionals offer solutions for refrigerator installation, cooling issues, freezer repairs, and more. Simply book online and let us handle the rest.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src="https://www.serviceonwheel.com/uploads/service/15901600844475.jpg"
            alt="Refrigerator Service"
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
