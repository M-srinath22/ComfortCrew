// import React from "react";
// import Paper from "@mui/material/Paper";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardActions from "@mui/material/CardActions";
// import Button from "@mui/material/Button";
// import CardMedia from "@mui/material/CardMedia";
// import Grid from "@mui/material/Grid";

// const services = [
//   {
//     title: "CCTV and Security alarm",
//     price: "₹ 100",
//     image: "https://www.serviceonwheel.com/uploads/service/228501672041298.jpg",
//   },
//   {
//     title: "CCTV Installation",
//     price: "₹ 150",
//     image: "https://www.serviceonwheel.com/uploads/service/452211672041410.jpg",
//   },
//   {
//     title: "CCTV Uninstallation",
//     price: "₹ 250",
//     image: "https://www.serviceonwheel.com/uploads/service/711231672041423.jpg",
//   },
//   {
//     title: "CCTV Shifting",
//     price: "₹ On Visit",
//     image: "https://www.serviceonwheel.com/uploads/service/838451672041435.jpg",
//   },
//   {
//     title: "Repairs",
//     price: "₹ On Visit",
//     image: "https://www.serviceonwheel.com/uploads/service/171901672041460.jpg",
//   },
//   {
//     title: "Annual Maintanence",
//     price: "₹ On Visit",
//     image: "https://www.serviceonwheel.com/uploads/service/759281672041472.jpg",
//   },
//   {
//     title: "Others",
//     price: "₹ On Visit",
//     image: "https://www.serviceonwheel.com/uploads/service/452211672041410.jpg",
//   },
// ];

// export default function AcServiceCards() {
//   return (
//     <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4, bgcolor: '#f5f5f5', padding: 3 }}>
//       <Typography variant="h4" component="h1" gutterBottom sx={{ color: '#1976d2', fontWeight: 'bold' }}>
//         CCTV Service
//       </Typography>
//       <Grid container spacing={2} sx={{ alignItems: 'center', mb: 4 }}>
//         <Grid item xs={12} md={6}>
//           <Typography variant="body1" gutterBottom sx={{ textAlign: 'justify' }}>
//             CCTV AND BURGLAR ALARM SYSTEM..!!
//             In today's life surveillance of home in Nagpur is everyone needs. We offer best home security systems in Nagpur. We install and use quality CCTV Camera in Nagpur to capture the high definition video. You can view all of the cameras remotely over the Internet using the best apps available for Mac, Windows, iOS, and Android. The team at our CCTV Installation Services By ServiceOnWheel, constantly provide the best 360° Security Solutions and CCTV Camera installation in Nagpur and surrounding areas. So if you are searching security cameras in Nagpur, in home security cameras in Nagpur, surveillance cameras in Nagpur, security systems in Nagpur, outdoor security cameras in Nagpur, home camera security system in Nagpur, home security cameras in Nagpur, Best security cameras in Nagpur, We are providing 24*7 best customer service & technical support. Not everyone's needs the same camera. Call us at to know our best deals and discounts. We deal in of all type of CCTV Camera service in Nagpur. We provide best CCTV Camera repair service in Nagpur at Service On Wheel! We provide you CCTV Camera repair experts near you in Nagpur to take care of your CCTV Camera repair service in Nagpur. Just let the responsibility of offering a CCTV Camera service near you rest on the shoulders of our amazing CCTV Camera service experts of Service On Wheel. We are specialized in service of any kind of CCTV Camera of Industrial, Commercial & Household. We can do service of mostly all brands!!
//           </Typography>
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <img
//             src="https://www.serviceonwheel.com/uploads/service/322011584075000.jpg"
//             alt="CCTV Service"
//             style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
//           />
//         </Grid>
//       </Grid>
//       <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
//         {services.map((service, index) => (
//           <Card key={index} sx={{ maxWidth: 345, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.05)' } }}>
//             <CardMedia
//               component="img"
//               height="200"
//               image={service.image}
//               alt={service.title}
//             />
//             <CardContent>
//               <Typography gutterBottom variant="h5" component="div" sx={{ color: '#1976d2', fontWeight: 'bold' }}>
//                 {service.title}
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 {service.price}
//               </Typography>
//             </CardContent>
//             <CardActions sx={{ justifyContent: 'center' }}>
//               <Button size="small" variant="contained" color="primary">
//                 Add to Cart
//               </Button>
//             </CardActions>
//           </Card>
//         ))}
//       </Box>
//       <Box sx={{ mt: 3 }}>
//         <Button variant="contained" color="secondary" sx={{ padding: '10px 20px', fontSize: '16px' }}>
//           Proceed to Checkout
//         </Button>
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

const services = [
  {
    title: "CCTV and Security alarm",
    price: "₹ 100",
    image: "https://www.serviceonwheel.com/uploads/service/228501672041298.jpg",
  },
  {
    title: "CCTV Installation",
    price: "₹ 150",
    image: "https://www.serviceonwheel.com/uploads/service/452211672041410.jpg",
  },
  {
    title: "CCTV Uninstallation",
    price: "₹ 250",
    image: "https://www.serviceonwheel.com/uploads/service/711231672041423.jpg",
  },
  {
    title: "CCTV Shifting",
    price: "₹ On Visit",
    image: "https://www.serviceonwheel.com/uploads/service/838451672041435.jpg",
  },
  {
    title: "Repairs",
    price: "₹ On Visit",
    image: "https://www.serviceonwheel.com/uploads/service/171901672041460.jpg",
  },
  {
    title: "Annual Maintenance",
    price: "₹ On Visit",
    image: "https://www.serviceonwheel.com/uploads/service/759281672041472.jpg",
  },
  {
    title: "Others",
    price: "₹ On Visit",
    image: "https://www.serviceonwheel.com/uploads/service/452211672041410.jpg",
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
        CCTV Service
      </Typography>
      <Grid container spacing={2} sx={{ alignItems: 'center', mb: 4 }}>
        <Grid item xs={12} md={6}>
          <Typography variant="body1" gutterBottom sx={{ textAlign: 'justify' }}>
            CCTV AND BURGLAR ALARM SYSTEM..!!
            In today's life surveillance of home in Nagpur is everyone needs. We offer best home security systems in Nagpur. We install and use quality CCTV Camera in Nagpur to capture the high definition video. You can view all of the cameras remotely over the Internet using the best apps available for Mac, Windows, iOS, and Android. The team at our CCTV Installation Services By ServiceOnWheel, constantly provide the best 360° Security Solutions and CCTV Camera installation in Nagpur and surrounding areas. So if you are searching security cameras in Nagpur, in home security cameras in Nagpur, surveillance cameras in Nagpur, security systems in Nagpur, outdoor security cameras in Nagpur, home camera security system in Nagpur, home security cameras in Nagpur, Best security cameras in Nagpur, We are providing 24*7 best customer service & technical support. Not everyone's needs the same camera. Call us at to know our best deals and discounts. We deal in of all type of CCTV Camera service in Nagpur. We provide best CCTV Camera repair service in Nagpur at Service On Wheel! We provide you CCTV Camera repair experts near you in Nagpur to take care of your CCTV Camera repair service in Nagpur. Just let the responsibility of offering a CCTV Camera service near you rest on the shoulders of our amazing CCTV Camera service experts of Service On Wheel. We are specialized in service of any kind of CCTV Camera of Industrial, Commercial & Household. We can do service of mostly all brands!!
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src="https://www.serviceonwheel.com/uploads/service/322011584075000.jpg"
            alt="CCTV Service"
            style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
          />
        </Grid>
      </Grid>
      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
        {services.map((service, index) => (
          <Card key={index} sx={{ maxWidth: 345, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.05)' } }}>
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
        ))}
      </Box>
      <Box sx={{ mt: 3 }}>
        <Button variant="contained" color="secondary" sx={{ padding: '10px 20px', fontSize: '16px' }} onClick={handleGoToCart}>
          Go to Cart
        </Button>
      </Box>
    </Box>
  );
}
