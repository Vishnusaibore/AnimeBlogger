import * as React from 'react';
import { Typography, Container, Grid, Paper } from '@mui/material';

const styles = {
  paperContainer: {
    backgroundImage:`url('https://th.bing.com/th/id/OIP.-AiMEJwS_BCc8rFQCqWxwAHaD2?rs=1&pid=ImgDetMain')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '100%',
    height: '780px',
    display: 'flex-grow',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

function About() {
  return (
    <Container maxWidth="xl" sx={{marginTop:4,paddingBottom:4}}>
    <Paper style={styles.paperContainer} elevation={3}>
      <Grid container spacing={3} sx={{paddingBottom:10}}>
        <Grid item xs={12}>
          <Typography style={{ fontFamily: 'serif'}}
          variant="h4" align="center" color="secondary.dark" gutterBottom>
            About Us
          </Typography>
        </Grid>
        <Grid item xs={12}>
            <Typography variant="body1" align='center' color="inherit">
              Welcome to our Anime Blogsite! We are passionate anime fans who
              love to share our thoughts, reviews, and recommendations with
              fellow enthusiasts.
            </Typography>
            <br />
            <Typography variant="body1" align='center' color="inherit">
              Our goal is to create a vibrant community where anime lovers from
              all around the world can come together to discuss their favorite
              shows, discover new ones, and connect with like-minded people.
            </Typography>
            <br />
            <Typography color="inherit" variant="body1" align='center' 
            sx={{marginBottom:4,paddingBottom:3}}>
              Whether you're a seasoned otaku or just getting started on your
              anime journey, we hope you'll find our blogsite entertaining,
              informative, and inspiring.
            </Typography>
            <Typography align='center' color='info.main' variant="h6" style={{ fontFamily: 'cursive, sans-serif'}}>
              Thank You for Visiting our Blog Site...
            </Typography>
        </Grid>
      </Grid>
      </Paper>
    </Container>
  )
}

export default About
