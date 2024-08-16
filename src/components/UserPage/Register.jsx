import * as React from 'react';
import {Container,Box,Grid,Button,Typography,TextField,Avatar,Link,FormControlLabel,Checkbox} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';


export default function SignUp(props) {
    const[user,setUser]=React.useState({
        firstName:"",
        lastName:"",
        email:"",
        password:""
    })
    function handleInput(event){
        const{name,value}=event.currentTarget
        setUser(prevData=>{
            return{
                ...prevData,
                [name]:value
            }
        })
    }
  const handleSubmit = (event) => {
    props.addUser(user)
    event.preventDefault();
    setUser({
        firstName:"",
        lastName:"",
        email:"",
        password:""
    })
  };

  return (
      <div id="register">
      <Container component="div" maxWidth="xs" sx={{padding:2}} style={{backgroundColor:"#fff"}}>
        <Box
          sx={{
            marginTop:2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m:1 }} style={{backgroundColor:"#ac4ac9"}}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  value={user.firstName}
                  onChange={handleInput}
                  label="First Name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  value={user.lastName}
                  onChange={handleInput}
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  value={user.email}
                  onChange={handleInput}
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  value={user.password}
                  onChange={handleInput}
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <p>Already have an account?<Link href="#/login" variant="body2"> Sign in </Link></p>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      </div>
  );
}