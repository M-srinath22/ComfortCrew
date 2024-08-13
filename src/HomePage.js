import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Grid, Card, CardContent, CardMedia, TextField, Autocomplete } from '@mui/material';
import { styled } from '@mui/system';
import { Link, useNavigate } from 'react-router-dom';
import Slide from './components/Slider';
import Footer from './components/Footer';

const AppBarStyled = styled(AppBar)({
  backgroundColor: '#000',
  color: '#fff',
  padding: '10px 0',
});

const ToolbarStyled = styled(Toolbar)({
  justifyContent: 'space-between',
});

const HeaderSection = styled('header')({
  textAlign: 'center',
  padding: '2rem 0',
  backgroundColor: '#f7c847',
});

const HeaderButton = styled(Button)({
  marginTop: '1rem',
});

const WhyChooseSection = styled('section')({
  textAlign: 'center',
  padding: '2rem 0',
  backgroundImage: 'url(/mnt/data/th.jpeg)', // Ensure the correct path to the image
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  color: 'white',
});

const SectionTitle = styled(Typography)({
  color: 'black', // Yellow color for highlighting
  textDecoration: 'underline', // Underline the text
});

const Section = styled('section')({
  textAlign: 'center',
  padding: '2rem 0',
});

const StyledCard = styled(Card)({
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  width: '100%',
  maxWidth: 280, // Adjusted width for cards
  margin: '0 auto', // Center the card horizontally
  backgroundColor: '#f7c847', // Yellow background color
  color: '#000', // Text color to ensure readability on yellow background
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)',
  },
});

const StyledCardMedia = styled(CardMedia)({
  height: 200, // Adjust height to fit smaller cards
  transition: 'filter 0.3s ease',
  '&:hover': {
    filter: 'brightness(80%)',
  },
});

const LocationSearchContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  padding: '2rem 0',
});

const locationOptions = [
  { label: 'Electrical Service', path: '/elec' },
  { label: 'Painting Service', path: '/pain' },
  { label: 'Bathroom Service', path: '/bathroom' },
  { label: 'Water Purify Service', path: '/water' },
  { label: 'AC Service', path: '/ac' },
  { label: 'Plumbing Service', path: '/plumb' },
  { label: 'Kitchen Service', path: '/kitchen' },
  { label: 'Gardening Service', path: '/garden' },
  { label: 'Home Cleaning Service', path: '/carpet' },
  { label: 'Car Wash', path: '/carwash' },
  { label: 'Refrigerator Service', path: '/tank' },
  { label: 'CCTV Service', path: '/cctv' },
];

function HomePage() {
  const navigate = useNavigate();

  const handleOptionSelect = (event, newValue) => {
    if (newValue) {
      navigate(newValue.path);
    }
  };

  return (
    <>
      <AppBarStyled position="static">
        <ToolbarStyled>
          <Typography variant="h6">
            {"COMFORT CREW"}
          </Typography>
          <div>
            <Link to="/about">
              <Button color="inherit">About Us</Button>
            </Link>
            <Link to="/service">
              <Button color="inherit">Our Services</Button>
            </Link>
            <Link to="/contact">
              <Button color="inherit">Contact</Button>
            </Link>
            <Link to="/blogs">
              <Button color="inherit">Blogs</Button>
            </Link>
            <Link to="/cart">
              <Button color="inherit">Cart</Button>
            </Link>
            <Link to="/login">
              <Button color="inherit">Login</Button>
            </Link>
          </div>
        </ToolbarStyled>
      </AppBarStyled>

      <Container style={{ padding: '0 2rem', margin: '0 auto', maxWidth: '1200px' }}> {/* Adjusted padding and maxWidth */}
        <LocationSearchContainer>
          <Autocomplete
            options={locationOptions}
            getOptionLabel={(option) => option.label}
            onChange={handleOptionSelect}
            renderInput={(params) => <TextField {...params} label="Search Services" variant="outlined" />}
            style={{ width: 300, marginRight: '1rem' }}
          />
        </LocationSearchContainer>

        <div>
          <Slide />
        </div>

        <WhyChooseSection>
          <SectionTitle variant="h4" component="h2" gutterBottom>
            Why Choose Our Company For Your Home Repairs?
          </SectionTitle>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6} md={3}>
              <StyledCard>
                <StyledCardMedia
                  component="img"
                  alt="High Quality"
                  image="https://hickeysafety.ie/wp-content/uploads/2022/02/Home-repair-1.jpg"
                />
                <CardContent>
                  <Typography variant="h6" component="h3">
                    High Quality
                  </Typography>
                  <Typography component="p">
                    Our high-quality repairing services ensure that every job is completed with precision and care. We use top-grade materials and advanced techniques to guarantee durability and excellence in every repair. Trust us to enhance the longevity and performance of your home fixtures and appliances.
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StyledCard>
                <StyledCardMedia
                  component="img"
                  alt="Professionalism"
                  image="https://hickeysafety.ie/wp-content/uploads/2022/02/Home-repair-1.jpg"
                />
                <CardContent>
                  <Typography variant="h6" component="h3">
                    Professionalism
                  </Typography>
                  <Typography component="p">
                    Experience unparalleled professionalism with our repairing services. Our skilled technicians are punctual, courteous, and dedicated to delivering superior craftsmanship. We pride ourselves on maintaining transparent communication and ensuring your complete satisfaction from start to finish.
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StyledCard>
                <StyledCardMedia
                  component="img"
                  alt="Flexibility"
                  image="https://hickeysafety.ie/wp-content/uploads/2022/02/Home-repair-1.jpg"
                />
                <CardContent>
                  <Typography variant="h6" component="h3">
                    Flexibility
                  </Typography>
                  <Typography component="p">
                    Our flexibility in repairing services ensures that we work around your schedule, providing convenient and efficient solutions. Whether it's an urgent fix or a planned upgrade, we tailor our services to meet your unique needs and timing, ensuring minimal disruption to your daily routine and doing the best service.
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StyledCard>
                <StyledCardMedia
                  component="img"
                  alt="Certified"
                  image="https://hickeysafety.ie/wp-content/uploads/2022/02/Home-repair-1.jpg"
                />
                <CardContent>
                  <Typography variant="h6" component="h3">
                    Certified
                  </Typography>
                  <Typography component="p">
                    Our certified repairing services guarantee that all work is performed by qualified and experienced professionals. We adhere to industry standards and regulations, ensuring safe and reliable repairs. Trust our certified experts to deliver exceptional results with every project and providing good service.
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>
          </Grid>
        </WhyChooseSection>

        <Section>
          <Typography variant="h4" component="h2" gutterBottom>
            Reliable, Trusted, and Professional Services
          </Typography>
          <Typography component="p" gutterBottom>
            Our team of professionals are here to provide top-notch services to keep your home in great condition.
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6} md={3}>
              <StyledCard>
                <StyledCardMedia
                  component="img"
                  alt="Kitchen Repair"
                  image="https://cdn2.hubspot.net/hubfs/4495544/electrical-system-in-home.jpeg"
                />
              </StyledCard>
              <Link to="/elec">
                <Button>
                  <Typography variant="h6" component="h3">
                    Electrical Service
                  </Typography>
                </Button>
              </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StyledCard>
                <StyledCardMedia
                  component="img"
                  alt="Ground Repair"
                  image="https://thepaintpeople.com/wp-content/uploads/2017/05/wallpainter.jpg"
                />
              </StyledCard>
              <Link to="/pain">
                <Button>
                  <Typography variant="h6" component="h3">
                    Painting Service
                  </Typography>
                </Button>
              </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StyledCard>
                <StyledCardMedia
                  component="img"
                  alt="Countertop Repair"
                  image="https://i1.wp.com/i.pinimg.com/originals/19/f2/18/19f21857163adcee4349166af11ae145.jpg?w=1140&ssl=1"
                />
              </StyledCard>
              <Link to="/bathroom">
                <Button>
                  <Typography variant="h6" component="h3">
                    Bathroom Service
                  </Typography>
                </Button>
              </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StyledCard>
                <StyledCardMedia
                  component="img"
                  alt="Countertop Repair"
                  image="https://tse1.mm.bing.net/th?id=OIP.u11XtOifLP1uRIaWmwxnIgHaHa&pid=Api&P=0&h=180"
                />
              </StyledCard>
              <Link to="/water">
                <Button>
                  <Typography variant="h6" component="h3">
                    Water Purify Service
                  </Typography>
                </Button>
              </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StyledCard>
                <StyledCardMedia
                  component="img"
                  alt="Countertop Repair"
                  image="https://depobagoesbangunan.com/wp-content/uploads/2021/11/0c0f926de3-ac-1-pkac-inverter-aqa-kcrv99wgw.jpg"
                />
              </StyledCard>
              <Link to="/ac">
                <Button>
                  <Typography variant="h6" component="h3">
                    AC Service
                  </Typography>
                </Button>
              </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StyledCard>
                <StyledCardMedia
                  component="img"
                  alt="Shower Head Repair"
                  image="https://pinoybuilders.ph/wp-content/uploads/2020/09/thumbnail-7453a20af19e11ea80de0a28c9fc2713.jpeg"
                />
              </StyledCard>
              <Link to="/plumb">
                <Button>
                  <Typography variant="h6" component="h3">
                    Plumbing Service
                  </Typography>
                </Button>
              </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StyledCard>
                <StyledCardMedia
                  component="img"
                  alt="Bathroom Repair"
                  image="https://tse1.mm.bing.net/th?id=OIP.VQawv30nNtKcUjqo659jeAHaE7&pid=Api&P=0&h=180"
                />
              </StyledCard>
              <Link to="/kitchen">
                <Button>
                  <Typography variant="h6" component="h3">
                    Kitchen Service
                  </Typography>
                </Button>
              </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StyledCard>
                <StyledCardMedia
                  component="img"
                  alt="Toilet Repair"
                  image="https://www.theenglishgarden.co.uk/wp-content/uploads/2016/10/britains-best-lawn.jpg"
                />
              </StyledCard>
              <Link to="/garden">
                <Button>
                  <Typography variant="h6" component="h3">
                    Gardening Service
                  </Typography>
                </Button>
              </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StyledCard>
                <StyledCardMedia
                  component="img"
                  alt="Countertop Repair"
                  image="https://tse1.mm.bing.net/th?id=OIP.tMWyag0QEnQWKq29ffCbJAHaE8&pid=Api&P=0&h=180"
                />
              </StyledCard>
              <Link to="/carpet">
                <Button>
                  <Typography variant="h6" component="h3">
                    Home Cleaning Service
                  </Typography>
                </Button>
              </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StyledCard>
                <StyledCardMedia
                  component="img"
                  alt="Countertop Repair"
                  image="https://websta.me/wp-content/uploads/2020/09/washing-car-2048x1367.jpg"
                />
              </StyledCard>
              <Link to="/carwash">
                <Button>
                  <Typography variant="h6" component="h3">
                    Car Wash
                  </Typography>
                </Button>
              </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StyledCard>
                <StyledCardMedia
                  component="img"
                  alt="Countertop Repair"
                  image="https://tse2.mm.bing.net/th?id=OIP.uAJBPgpMVrbQBgGYMM4rNgHaE8&pid=Api&P=0&h=180"
                />
              </StyledCard>
              <Link to="/tank">
                <Button>
                  <Typography variant="h6" component="h3">
                    Refrigerator Service
                  </Typography>
                </Button>
              </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StyledCard>
                <StyledCardMedia
                  component="img"
                  alt="Countertop Repair"
                  image="https://irp-cdn.multiscreensite.com/34b75936/dms3rep/multi/stock-photo-technician-installing-cctv-camera-for-security-741405910.jpg"
                />
              </StyledCard>
              <Link to="/cctv">
                <Button>
                  <Typography variant="h6" component="h3">
                    CCTV Service
                  </Typography>
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Section>
      </Container>
      <br/>
      <br/>
      <br/>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
