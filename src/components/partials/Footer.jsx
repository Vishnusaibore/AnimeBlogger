import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import "./Partials.css"

function Copyright() {
  return (
    <Typography variant="body2" align="center" >
      {'Copyright © '}
        Vishnusai Bore {" "}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function Footer(props) {
  const { description, title } = props;

  return (
    <Box component="footer" sx={{paddingTop:1,paddingBottom:2}} style={{backgroundColor:"#000",color:"#fff"}}>
      <Container maxWidth="lg">
        <h6>{title}</h6>
        <Typography
          variant="subtitle1"
          align="center"
          component="h5"
        >
          {description}
        <Link underline='none' href="#/contact"><ConnectWithoutContactIcon /></Link>
        </Typography>
        <Copyright />
      </Container>
    </Box>
  );
}

Footer.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Footer;