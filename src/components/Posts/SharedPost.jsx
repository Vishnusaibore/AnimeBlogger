import React,{ useState,useEffect} from 'react'
import axios from 'axios';
import { useParams} from 'react-router-dom';
import LikeButton from './LikeButton';
import ShareButton from './ShareButton';
import "./BlogPosts.css"

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
    <div className='container-xxl'>
        <div className="card">
        <h4 className="card-title mb-2">{post.name}</h4>
        <h6 className='p-date'>Published on : {post.date}</h6>
        <h6 className='p-auth'>🤵 * * * </h6>
        <img src={post.blogImage}  className="card-img-top" alt="BlogImage"/>
        <div className="card-body">
        <p>{post.content}</p>
        </div>
        <div className='card-actions'>
        <ShareButton title={post.name} url={post._id} />
        <LikeButton />
        </div>

        </div>
    </div>
  );
}