import React,{useState, useEffect} from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import axios from 'axios'
import Cookies from 'js-cookie'
import {Container,Button, Typography} from '@mui/material';
import SignUp from './components/UserPage/Register'
import Login from './components/UserPage/Login'
import ForgotPassword from './components/UserPage/resetPassword'
import HomePage from "./components/HomePage"
import Posts from './components/Posts/Posts'
import SharedPost from './components/Posts/SharedPost'
import Compose from './components/Compose'
import About from './components/About'
import Contact from './components/Contact'
import "./App.css"
//
function App() {
  const[posts,setPost]=useState([])

  //User Registration and Login Routes
  //Register Route
  function createAccount(newUser){
    async function createUser(User){
        const register =await axios.post('http://localhost:5000/api/register',User)
        let isregisterdMessage = register.data.message
        setLogIn(register.data.stat)
       alert(isregisterdMessage)
    }
    createUser(newUser)
  }

  //The below useState will handles loginStatus
  const[isLoggedIn,setLogIn] = useState(false)

  useEffect(()=>{
    const authToken = Cookies.get('authToken')
    if (authToken) {
      setLogIn(true); // User is logged in
    }
  },[])

  //Login Route
  function verifyUser(userData){
    async function getUserData(userCredentials){
    const logInfo = await axios.post('http://localhost:5000/api/login',userCredentials)
    alert(logInfo.data.message)
    const responseToken= logInfo.data.token
    const authToken = responseToken // Get the auth token from the server
    Cookies.set('authToken', authToken, { expires: 1 }); // Set cookie to expire in 1 day
    setLogIn(logInfo.data.stat);
    }
    getUserData(userData)
  }

  //Logout
   
  function Logout(){
    Cookies.remove('authToken');
    setLogIn(false);
  }

  //Password Reset Route
  function resetPassword(resetinfo){
    async function resetUserPassword(userResetInfo) {
      const updateInfo = await axios.patch('http://localhost:5000/api/forgotpassword',userResetInfo)
      alert(updateInfo.data.username+ " "+updateInfo.data.message)
    }
    resetUserPassword(resetinfo)
  }
  //End of User Register and Login Routes

  //Creating a New post
  function createPost(newPost){
    async function postData(currentPost){
      const postStatus =await axios.post('http://localhost:5000/api/posts',currentPost)

      alert(postStatus.data.message)
      // fetchPosts(); //It wiil fetch the data after data inserted into database
  }
  postData(newPost)
  }

  //Fetching Posts the Data from server
  useEffect(() => {

    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/posts');
        setPost(response.data);
      } catch (error) {
        console.error('Error fetching notes:', error);
      }
    };
    fetchPosts();
  }, []);

 
  //
  return (
    <Container>
      <main>
      {isLoggedIn &&(<Typography align='right' mb={1}>
      <Button onClick={Logout} variant="contained" color="warning">Logout</Button></Typography>)}
      <Router><Routes>
      <Route path="/" element={<HomePage /> } />
      <Route path="/signup" element={<SignUp addUser={createAccount}/>} />
      <Route path="/login" element={<Login onLoggin={verifyUser}/>}/>
      <Route path="/password-reset" element={<ForgotPassword onReset={resetPassword} />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/compose" element={isLoggedIn?(<Compose onAdd={createPost} />):
      (<Login onLoggin={verifyUser}/>)} />
      <Route path="/posts" element={ isLoggedIn?(
          posts.map(mypost=>(
              <Posts
              key={mypost._id}
              postid={mypost._id}
              Title={mypost.name}
              imgURL={mypost.blogImage}
              Content={mypost.content} 

              />))):(<Login onLoggin={verifyUser}/>)}/>
      <Route path="/api/shared-post/:id" element={<SharedPost/>} />
      </Routes></Router>
      </main>
      </Container>
  );
}

export default App;
