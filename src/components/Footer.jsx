import React from 'react';
import {Grid,Typography} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';


function Footer()
{
  return (
      
      <div style={{ backgroundColor: 'grey', color: '#000000', padding: '0px' }}>
           <div style={{ backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '5vh' }}>
         <Grid container spacing={2} style={{  textAlign: 'center', borderRadius: '50px', padding: '2px', color: 'white' }}>
             <Grid item xs={12} sm={6} md={3} style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <Typography variant="body1" style={{ marginRight: '50px' }}>
                    <Typography fontSize='22px' variant='h6'>Company</Typography>
                    <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <br></br>
                        <li style={{ margin: '0 0 10px 0' }}>About Us</li>
                        <li style={{ margin: '0 0 10px 0' }}>Complaints</li>
                        <li style={{ margin: '0 0 10px 0' }}>Carrer</li>
                        <li style={{ margin: '0 0 10px 0' }}>Terms & Conditions</li>
                        <li style={{ margin: '0 0 10px 0' }}>Privacy Policy</li>
                        <li style={{ margin: '0' }}>Blogs</li>  
                    </ul>
                </Typography>
            </Grid>
             <Grid item xs={12} sm={6} md={3} style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <Typography variant="body1" style={{ marginRight: '50px' }}>
                    <Typography fontSize='22px' variant='h6'>Help Lines</Typography>
                    <br></br>
                    <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <li style={{ margin: '0 0 10px 0' }}>Feedback</li>
                        <li style={{ margin: '0 0 10px 0' }}>Complaints</li>
                        <li style={{ margin: '0 0 10px 0' }}>Customer Care</li>
                        <li style={{ margin: '0' }}>Contact Us</li>  
                    </ul>
                </Typography>
            </Grid>
             <Grid item xs={12} sm={6} md={3} style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <Typography variant="body1" style={{ marginRight: '50px' }}>
                    <Typography fontSize='22px' variant='h6'>Cities</Typography>
                    <br></br>
                    <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <li style={{ margin: '0 0 10px 0' }}>Kolkata</li>
                        <li style={{ margin: '0 0 10px 0' }}>Mumbai</li>
                        <li style={{ margin: '0 0 10px 0' }}>Bangalore</li>
                        <li style={{ margin: '0' }}>Chennai</li>  
                    </ul>
                </Typography>
            </Grid>
             <Grid item xs={12} sm={6} md={3} style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <Typography variant="body1" style={{ marginRight: '50px' }}>
                    <Typography fontSize='22px' variant='h6'>Delhi</Typography>
                    <br></br>
                    <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <li style={{ margin: '0 0 10px 0' }}>Pune</li>
                        <li style={{ margin: '0 0 10px 0' }}>Coimbator</li>
                        <li style={{ margin: '0 0 10px 0' }}>Nagpur</li>
                        <li style={{ margin: '0 0 10px 0' }}>Hyderabad</li>
                        <li style={{ margin: '0 0 10px 0' }}>Ahmedabad</li>
                         
                    </ul>
                </Typography>
            </Grid>

            <Grid item xs={12}  sm={800} md={300} style={{ display: 'flex', justifyContent: 'space-evenly' }} >
                <Typography variant="body1">
                   <Typography>Get Connected :</Typography>
                   <div className='sec'>
                    <InstagramIcon />
                    <FacebookIcon />
                    <TwitterIcon />
                    <YouTubeIcon />
                   </div>
                </Typography>
            </Grid>
        </Grid>
    </div>
    </div>
  )
}

export default Footer;