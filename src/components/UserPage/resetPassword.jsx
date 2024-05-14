import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function ForgotPassword(props){
    const[userdata,setPassword]=React.useState({
        email:"",
        password:"",
        confirmPassword:""
    })
    function handleInput(event){
        const{name,value}=event.currentTarget
        setPassword(prevData=>{
            return{
                ...prevData,
                [name]:value
            }
        })
    }
    function validatePassword(){
        let newPass = userdata.password
        let retypedPass =userdata.confirmPassword 
        if(newPass===retypedPass){
            return true
        }
        else{
            return false
        }  
    }
  const handleSubmit = (event) => {
    if(validatePassword()){
        props.onReset(userdata)
        setPassword({
            email:"",
            password:"",
            confirmPassword:""
        })
    }
    else{
        alert("Passwords does not Matches! Please Try Again")
        setPassword({
            email:userdata.email,
            password:"",
            confirmPassword:""
        })
    }
    
    event.preventDefault();
  };

  return(
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs" style={{backgroundColor:"#fff"}}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Forgot Password?
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  value={userdata.email}
                  onChange={handleInput}
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="New Password"
                  type="password"
                  id="password"
                  value={userdata.password}
                  onChange={handleInput}
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Re-Type New Password"
                  type="password"
                  id="newPassword"
                  value={userdata.confirmPassword}
                  onChange={handleInput}
                  autoComplete="New-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
            Reset Password
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <Link href="/login" variant="body2">
                 Sign In Now
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )

}