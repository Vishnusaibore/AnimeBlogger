import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Appicon from "./apple-touch-icon.png"
import "./Partials.css"

function Footer() {
  return (
    <Box component="footer" sx={{paddingTop:1,paddingBottom:2}} style={{backgroundColor:"#000"}}>
      <Container maxWidth="lg">
      <div className='copyright'>
      <div>
      <a href='https://twitter.com/' className='social-icon'><i class='social-icon fa fa-twitter'></i></a>
      <a href='https://www.facebook.com/' className='social-icon'><i class='social-icon fa fa-facebook-f'></i></a>
      <a href='https://www.instagram.com/' className='social-icon'><i class='social-icon fa fa-instagram'></i></a>
      </div>
      <p><a href='/'><img src={Appicon} width={"30"} height={"28"} alt="AppIcon"></img></a>{" "}
      © {new Date().getFullYear()}, Anime Blogger | All Rights Reserved</p>
    </div>
      </Container>
    </Box>
  );
}

export default Footer;