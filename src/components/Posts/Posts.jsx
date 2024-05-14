
import * as React from 'react';
import {Container,Card,CardActions,CardMedia,CardContent,Typography} from '@mui/material';
import LikeButton from './LikeButton';
import ShareButton from './ShareButton';

export default function Posts(props) {
  return (
    <Container sx={{marginTop:2,marginBottom:3,paddingBottom:2}}>
    <Card sx={{ maxWidth: 1000 }}>
    <CardContent align="center">
    <Typography gutterBottom variant="h5" component="div" color="secondary.dark"  sx={{marginBottom:2}}>
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
      </CardActions>
    </Card>
    </Container>
  );
}