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
    title: "Full-Time Care",
    description: "Our full-time care service offers comprehensive and personalized care for your child throughout the day. Our caregivers provide a nurturing environment with engaging activities, meals, and educational content.",
    image: "https://www.tinyworld.biz/wp-content/uploads/2016/03/babies1.jpg",
  },
  {
    title: "Part-Time Care",
    description: "Ideal for parents who need flexible care options, our part-time service ensures your child receives quality care during specific hours. Whether it’s a few hours a day or a few days a week.",
    image: "https://safeathomechildcare.com/wp-content/uploads/2020/03/Safe-At-Home-Child-Care-Ann-Arbor-Michigan-Nanny-Services-In-Home-Childcare-1024x683.jpg",
  },
  {
    title: "Infant Care",
    description: "Our infant care service is designed to cater to the needs of your youngest ones. With trained caregivers and a safe environment, we provide care that promotes early development and security.",
    image: "https://thenewageparents.com/wp-content/uploads/2017/03/Infant-Care.jpg",
  },
  {
    title: "Special Needs Care",
    description: "We offer specialized care for children with unique needs. Our trained caregivers work with each child to provide personalized support, ensuring that every child receives the care they require to thrive.",
    image: "https://skool4kidz.com.sg/wp-content/uploads/2021/03/Skool4Kidz-ranks-Among-Top-Infant-Care-in-Singapore-01.jpg",
  },
];

function ChildCareServices() {
  return (
    <Container>
      <Box sx={{ padding: 4 }}>
        <Typography variant="h2" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
          Our Child Care Services
        </Typography>
        <Typography variant="body1" paragraph sx={{ mb: 4 }}>
          At Child Care Services, we offer a range of high-quality care options designed to meet the diverse needs of families. Our dedicated team of caregivers ensures that every child receives personalized attention in a safe and enriching environment.
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

export default ChildCareServices;
