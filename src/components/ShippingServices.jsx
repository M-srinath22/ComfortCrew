import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

const services = [
  {
    title: "Local Shipping",
    description: "Our local shipping service ensures quick and reliable delivery within the city. Ideal for urgent shipments and local deliveries, we provide efficient tracking and support to ensure your items reach their destination safely and on time.",
    image: "https://www.beidelivery.com/wp-content/uploads/sites/551/2020/09/img4.jpg",
  },
  {
    title: "National Shipping",
    description: "For shipments across the country, our national shipping service offers comprehensive coverage. We handle all logistics, including tracking and customer support, to make sure your packages are delivered securely and promptly to any location nationwide.",
    image: "https://cometdelivery.com/assets/img/international.jpg",
  },
  {
    title: "International Shipping",
    description: "Our international shipping service provides global delivery options for your packages. With careful handling and customs support, we ensure that your shipments reach their international demands",
    image: "https://fineartshippers.com/wp-content/uploads/2019/05/International-shipping-services-in-NYC.jpg",
  },
  {
    title: "Others",
    description: "Need your package delivered in a hurry? Our express shipping service offers fast delivery with priority handling. Perfect for time-sensitive shipments, we provide expedited processing to get your items where they need to go as quickly as possible.",
    image: "http://ww1.prweb.com/prfiles/2013/05/17/10889171/shipping%2020.jpg",
  },
];

function ShippingServices() {
  return (
    <Container>
      <Box sx={{ padding: 4 }}>
        <Typography variant="h2" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
          Shipping Services
        </Typography>
        <Typography variant="body1" paragraph sx={{ mb: 4 }}>
          Our shipping services are designed to cater to all your delivery needs, whether local, national, or international. We prioritize speed, reliability, and security to ensure that your shipments reach their destination on time and in perfect condition.
        </Typography>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ display: 'flex', flexDirection: 'column', boxShadow: 3 }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={service.image}
                  alt={service.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {service.description}
                  </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                  <Button variant="contained" color="primary" href="#contact">
                    Book now
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default ShippingServices;
