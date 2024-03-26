import React,{useState,useEffect} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import axios from 'axios'
import Header from "./components/partials/Header"
import Footer from "./components/partials/Footer"
import Home from './components/Home'
import Posts from './components/Posts'
import Compose from './components/Compose'
import About from './components/About'
import Contact from './components/Contact';

function App() {
  const[posts,setPost]=useState([])

  //Creating a New post
  function createPost(newPost){
    //
    async function postData(currentPost){
    console.log(currentPost)
      await axios.post('http://localhost:5000/api/posts',currentPost)
      // fetchPosts(); //It wiil fetch the data after data inserted into database
  }
  postData(newPost)
  }

  //Fetching the Data from server
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/posts');
      setPost(response.data);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  //
  return (
    <div>
      <Header/>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/compose" element={<Compose onAdd={createPost}/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/posts" element={
          posts.map(post=>(
              <Posts
              Title={post.name}
              imgURL={post.blogImage}
              Content={post.content} 

              />))}/>
       </Routes>
      </Router>
      {/* {posts.map(post=>(
              <Posts
              Title={post.name}
              imgURL={post.blogImage}
              Content={post.content} />
            ))} */}
      <Footer />
    </div>
  );
}

export default App;
