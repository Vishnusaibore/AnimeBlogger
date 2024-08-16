import React,{ useState,useEffect} from 'react'
import axios from 'axios';
import { useParams} from 'react-router-dom';

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
        <h6 className='p-date'>Published on : {post.date}</h6>
        <h4 className="card-title mb-1">{post.name}</h4>
        <img src={post.blogImage}  className="card-img-top" alt="BlogImage"/>
        <div className="card-body">
        <p>{post.content}</p>
        </div>
        </div>
    </div>
  );
}