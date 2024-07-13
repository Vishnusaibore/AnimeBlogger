import * as React from 'react';
import {Container,Box,Grid,Button,Typography,TextField,Avatar,Link} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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
        <Box
          sx={{
            marginTop: 4,
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
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3,mb:2 }}>
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
                <Link href="#/login" variant="body2">
                 Login Now
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )

}