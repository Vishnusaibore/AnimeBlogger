import * as React from 'react';
import {Box} from '@mui/material';
// https://wallpapers.com/images/high/bleach-pc-q6krf6843jyfa27q.webp
const styles = {
    boxContainer: {
      backgroundImage:`url('https://images.squarespace-cdn.com/content/v1/5fe4caeadae61a2f19719512/1610907971273-UQ8TFBASYC7LC0OY9AWP/3.jpg?format=1000w')`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      width: '100%',
      height: '545px',
      display: 'flex-grow',
    },
  };

function HomePage(){
    return(
        <Box style={styles.boxContainer} >
        <div className='homepage'>
        <div className='homeContent'>
        <h1>Publish your passions, your way</h1>
        <p>Create a unique and Intresting Anime Blogs easily.</p>
        <div className='pt-1 pb-4 homebutton'>
            <a href='/compose' role="button" className='btn btn-warning'>Create Your Blog</a>
        </div>
        <p>Let's Explore Blogs from Anime Blogger...</p>
        <div className='homebutton'>
        <a href='/posts' role="button" className='btn btn-info'>Read the Blogs</a>
        </div>
        </div>
        </div>
        </Box>
    )
}

export default HomePage