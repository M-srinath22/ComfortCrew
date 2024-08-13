import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';

const services = [
  {
    title: "Personal Care",
    description: "Our personal care service includes assistance with daily activities such as bathing, dressing, and grooming. Our caregivers are trained to provide compassionate and respectful support to ensure comfort and dignity.",
    image: "https://dlyhjlf6lts50.cloudfront.net/app/uploads/2019/02/AdultDayMeal.png",
  },
  {
    title: "Medical Assistance",
    description: "We offer medical assistance including medication management, monitoring of health conditions, and coordination with healthcare professionals. Our trained staff ensures that are addressed with care and precision.",
    image: "https://www.access-healthcare.com/wp-content/uploads/2019/09/home-nurse-services.jpg",
  },
  {
    title: "Companionship",
    description: "Our companionship service provides emotional support and social interaction. Whether it's engaging in conversation, playing games, or participating in activities, our caregivers offer companionship to help reduce feelings of loneliness.",
    image: "https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/health/wp-content/uploads/2022/07/companion_care.jpeg.jpg",
  },
  {
    title: "Meal Preparation",
    description: "We provide nutritious meal preparation tailored to individual dietary needs. Our caregivers ensure that meals are not only healthy but also enjoyable, accommodating any special dietary restrictions or preferences.",
    image: "https://www.caringseniorservice.com/hubfs/Caregiver%20delivering%20a%20meal%20to%20a%20senior.jpeg",
  },
];

function DayNursingServices() {
  return (
    <Container>
      <Box sx={{ padding: 4 }}>
        <Typography variant="h2" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
          Day Nursing Services
        </Typography>
        <Typography variant="body1" paragraph sx={{ mb: 4 }}>
          Our day nursing services are designed to provide high-quality care and support for elderly individuals during the day. We focus on enhancing quality of life through compassionate care, personalized support, and a variety of services tailored to meet individual needs.
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
                    Book the Session
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

export default DayNursingServices;
