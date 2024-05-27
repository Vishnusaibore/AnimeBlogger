
import * as React from 'react';
import {Typography,Container,Box, TextField,Button,Paper} from '@mui/material';
import PostAddIcon from '@mui/icons-material/PostAdd';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function Compose(props){
    const[post,setPost] = React.useState({
        name:"",
        blogImage:"",
        content:""
    })
    //Create Post
    function handleInput(event){
        const{name,value}=event.target
        setPost(prevPost=>{
            return{
                ...prevPost,
                [name]:value
            }
        })
    }

    function submitPost(event){
        let Current_User=props.c_user
        props.onAdd(post,Current_User)
        event.preventDefault()
        setPost({
            name:"",
            blogImage:"",
            content:""
        })
    }
    //
    return(
    <div className='container-fluid'>
    <Container maxWidth="lg">
    <Paper>
    <Box sx={{
            marginTop:1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
    component="form"
    noValidate
    autoComplete="off">
    <Typography variant="h5" style={{fontFamily:'serif',color:'#c653c6'}} align="center" 
    gutterBottom sx={{marginTop:2,marginBottom:3}}>
            Compose Your Blog Here...
    </Typography>
    <Grid container spacing={2}>
    <Grid xs={4}><Item>
    <TextField id="outlined-controlled" label="Title" color="primary"
    name="name" value={post.name} onChange={handleInput} 
    sx={{marginTop:1,marginBottom:2}}
    />
    </Item></Grid>
    <Grid xs={8}><Item>
    <TextField fullWidth id="outlined-controlled" label="Blog Image"
    name="blogImage" value={post.blogImage} onChange={handleInput} 
    sx={{marginTop:1,marginBottom:2}}
    />
    </Item></Grid>
    <Grid xs={12}><Item>
    <TextField fullWidth id="standard-multiline-flexible" label="Content"
          name="content"
          value={post.content}
          multiline
          maxRows={10}
          variant="standard"
          onChange={handleInput}
          sx={{marginTop:1,marginBottom:2}}
        />
    </Item></Grid>
    
    <Button  onClick={submitPost} variant="contained" 
    sx={{ mt: 2, mb: 3 }} 
    endIcon={<PostAddIcon />}>Publish</Button>
    </Grid>
    </Box>
    </Paper>
    </Container>
    </div>
    )
}
export default Compose