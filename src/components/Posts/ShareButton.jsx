import React from 'react';
import { Button } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';

function ShareButton(props) {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: props.title,
        url:"http://localhost:3000/api/shared-post/"+props.url
      })
      .then(() => console.log('Shared successfully'))
      .catch((error) => console.error('Error sharing:', error));
    } else {
      console.log('Web Share API not supported.');
    }
  };

  return (
    <Button variant='text' onClick={handleShare}>
      <ShareIcon />
    </Button>
  );
};

export default ShareButton;
