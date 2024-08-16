import React from 'react';
import ShareIcon from '@mui/icons-material/Share';

function ShareButton(props) {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: props.title,
        url:"https://animeblogger.onrender.com/#/api/shared-post/"+props.url
      })
      .then(() => console.log('Shared successfully'))
      .catch((error) => console.error('Error sharing:', error));
    } else {
      console.log('Web Share API not supported.');
    }
  };

  return (
    <button  onClick={handleShare} className='btn btn-sm share-btn'> 
      <ShareIcon />
    </button>
  );
};

export default ShareButton;
