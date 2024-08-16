import * as React from 'react';
import {Paper,Grid,Box,IconButton ,Stack} from '@mui/material';
import { LinkedIn, GitHub, Mail} from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import p1 from "./images/Chopper.png"

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function Contact(){
    return(
    <div id="contact" className='container-fluid'>
    <Grid container spacing={2}>
        <Grid item xs={12}>
          <img src={p1} alt="contactImg" className='contact-img'></img>
          <div className='contact-heading'>
          <h2>Get in Touch </h2>
          <h5>Want to get in touch ? We'd love to hear from you. Here's how you can reach us...</h5>
          </div>
          <div className='contact-data'>
          <h5>Direct Contact</h5>
          <p>Phone : +91 9705941133</p>
          <p>Email : bsai42358@gmail.com</p>
          </div>
         </Grid>
        
         <Grid item xs={12} justifyContent="center">
          <div className='contact-items'>   
           <h5>You can connect with us through the following platforms</h5>
            <Box
            my={3}
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap={4}
            p={2}> 
            <Stack direction="row" spacing={2}>
            <Item>
                <IconButton
                  component="a"
                  href="https://www.linkedin.com/in/vishnusai-bore-823373226"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedIn />
                </IconButton>
            </Item>
            <Item>
                <IconButton
                  component="a"
                  href="https://github.com/Vishnusaibore"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHub />
                </IconButton>
            </Item>
            <Item>
                <IconButton
                  component="a"
                  href="mailto:bsai42358@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Mail />
                </IconButton>
            </Item>
          </Stack>
          </Box>
          </div>  
        </Grid>
        </Grid>
        </div>
    )
}
export default Contact