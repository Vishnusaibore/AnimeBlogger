import React,{ useState,useEffect} from 'react'
import axios from 'axios';
import { useParams} from 'react-router-dom';
import {Container,Card,CardActions,CardMedia,CardContent,Typography} from '@mui/material';
import LikeButton from './LikeButton';

export default function SharedPost() {
  //For Getting the url Paramters i.e is id from pageurl
  const { id } = useParams();
  const url="https://animebloggerserver.onrender.com/api/post/"+id
  //For fetching post data from the server of the above id
  const[post,setPost]=useState([])
  //
  useEffect(() => {
    async function fetchSharedPost(){
      try {
        const response = await axios.get(url);
        setPost(response.data);
      } catch (error) {
        console.error('Error fetching notes:', error);
      }
    };
    fetchSharedPost();
  });
  //
  
  return (
    <Container sx={{marginTop:2,marginBottom:3,paddingBottom:2}}>
    <Card sx={{ maxWidth: 1000 }}>
    <CardContent align="center">
    <Typography gutterBottom variant="h5" component="div" color="secondary.dark"  sx={{marginBottom:2}}>
          {post.name}
        </Typography>
    <div className='img-class'>
      <CardMedia
        component="img"
        alt="BlogImage"
        image={post.blogImage}
        sx={{width:720,height:375}}
      />
      </div>
      </CardContent>
      <CardContent>
        <Typography variant="body2" >
          {post.content}
        </Typography>
      </CardContent>
      <CardActions>
        <LikeButton />
      </CardActions>
    </Card>
    </Container>
  );
}