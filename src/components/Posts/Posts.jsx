import React,{useState} from 'react';
import {Container,Card,CardActions,CardMedia,CardContent,Typography,Button} from '@mui/material';
import {Box,Paper,TextField} from '@mui/material';
import './BlogPosts.css'
import LikeButton from './LikeButton';
import ShareButton from './ShareButton';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import EditNoteIcon from '@mui/icons-material/EditNote';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';


export default function Posts(props) {
  const postId=props.postid
  //For Editing Blog

  //For Handling Edit State is Active or Not
  const[isActive,setActive]=useState(false)
  function handleActive(){
  setActive(true)
  }
  //For Minimizing Edit Icon
  function handleMinimize(){
  setActive(false)
  }
  //For Handling Notes Editing or Updation
  const[blog,setBlog]=useState({
    name:"",
    blogImage:"",
    content:""
  })

  function handleInput(event){
    const{name,value}=event.target
        setBlog(prevPost=>{
            return{
                ...prevPost,
                [name]:value
            }
        })
  }

  function submitPost(event){
    props.onEdit(postId,blog)
    event.preventDefault()
    setBlog({
    name:"",
    blogImage:"",
    content:""
    })
    setActive(false)

  }

  //Delete --BlogPost
  function handleDelete(event){
    props.delPost(postId)
    event.preventDefault();
  }

  return (
    <Container sx={{marginTop:2,marginBottom:3,paddingBottom:2}}>
    <Card sx={{ maxWidth: 1000 }}>
    <CardContent align="center">
    <Typography gutterBottom variant="h5" 
    component="div" sx={{marginBottom:2}} style={{color:"#ff751a",fontFamily:"Fantasy"}}>
    {props.Title}
    </Typography>
    <div className='img-class'>
      <CardMedia
        component="img"
        alt="BlogImage"
        image={props.imgURL}
        sx={{width:720,height:375}}
      />
      </div>
      </CardContent>
      <CardContent>
        <Typography variant="body2" >
          {props.Content}
        </Typography>
      </CardContent>
      <CardActions>
        <ShareButton 
        title={props.Title}
        url={props.postid}/>
        <LikeButton />
        <Button onClick={handleDelete} variant="text" style={{color:"orange"}}>
          <DeleteSweepIcon />
        </Button>
      
      <Button variant='text' onClick={handleActive}><EditNoteIcon /></Button>
      {isActive &&(<Box sx={{marginTop:1,marginLeft:1, display: 'flex',flexDirection: 'column',alignItems: 'center',
      }} component="form" noValidate autoComplete="off">
      <Paper>
      <TextField id="outlined-controlled" label="Title" color="primary"
      name="name" value={blog.name} onChange={handleInput} 
      sx={{marginBottom:1,marginLeft:1}} />

      <TextField fullWidth id="outlined-controlled" label="Blog Image"
      name="blogImage" value={blog.blogImage} onChange={handleInput} 
      sx={{marginTop:1,marginBottom:1}}/>
      <TextField fullWidth id="standard-multiline-flexible" label="Content"
          name="content"
          value={blog.content}
          multiline
          maxRows={5}
          variant="standard"
          onChange={handleInput}
          sx={{marginTop:1,marginBottom:1}}
        />
      <Button  onClick={submitPost} variant="contained" color="secondary" 
      sx={{display:'flex',marginLeft:2}}>Modify</Button>
      <div className='minimize'>
      <Button onClick={handleMinimize} variant='text' color="error" 
      sx={{backgroundColor:""}}>
      <RemoveCircleIcon /></Button>
      </div>
      </Paper>
      </Box>)}
      </CardActions>
    </Card>
    </Container>
  );
}