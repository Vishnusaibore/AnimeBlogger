import * as React from 'react';
import {Typography,Paper,Container,Grid,Box,IconButton ,Stack} from '@mui/material';
import { LinkedIn, GitHub, Mail} from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const styles = {
  paperContainer: {
    backgroundImage:`url('https://img.freepik.com/premium-photo/web-contact-us-icons-blue-background-contact-us-cutomer-support-concept-copy-space-website-page-contact-us-web-banner-copy-space-blue-background_256259-1520.jpg?w=826')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '100%',
    height: '100%',
    display: 'flex-grow',
    // justifyContent: 'center',
    //  alignItems: 'center',
  },
};


function Connect(){
    return(
    <Container maxWidth="lg">
    <Grid container spacing={2} sx={{marginBottom:1,marginTop:3,}}>
        <Paper style={styles.paperContainer} elevation={3}>

        <Grid item xs={12} sx={{marginBottom:10}}>
            <Typography variant="h5" align="left" sx={{marginTop:2,marginLeft:2}} style={{color:"#5c8a8a"}}>
            Contact Us
          </Typography>
          <Typography variant="h4" align="left" sx={{marginTop:2,marginLeft:2}}>
            How can we help You?
          </Typography>
         </Grid>
        
         <Grid item xs={12} sx={{marginTop:10,marginRight:3}} justifyContent="center">
            <Typography variant='h6' align='center' color="secondary.dark" sx={{paddingRight:9}}>
              Had Any Queries...? Just Ping me in LinkedIn or contact through the Mail
            </Typography>
            <Typography variant="body1" align='center' sx={{paddingRight:5}}>
              You can connect with us through the following platforms
            </Typography>
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
        </Grid>

        </Paper>
        </Grid>
        </Container>
    )
}
export default Connect