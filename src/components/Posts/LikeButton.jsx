import React, { useState } from 'react';
// import './LikeButton.css';
import FavoriteIcon from '@mui/icons-material/Favorite';

function LikeButton(){
    const[liked,setLiked] = useState(false)

    function toggleLiked(){
        setLiked(!liked)
    }
    return(
        <button className={liked ? "like-button liked" : "like-button"} onClick={toggleLiked}>
      <FavoriteIcon />
    </button>
    )
}
export default LikeButton