import React,{useState, useEffect} from 'react'
import { BrowserRouter as Router, Route, Routes,} from 'react-router-dom'
import axios from 'axios'
import Cookies from 'js-cookie'
import {Button, Container,Typography} from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
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
        const register =await axios.post('https://animebloggerserver.onrender.com/api/register',User)
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

  //For Identifying the Current User
  const[Logged_user,setUser]=useState("")
  useEffect(()=>{
    const loggedUser = Cookies.get('loggedUser')
    setUser(loggedUser)
  },[])

  //Login Route
  function verifyUser(userData){
    async function getUserData(userCredentials){
    const logInfo = await axios.post('https://animebloggerserver.onrender.com/api/login',userCredentials)
    alert(logInfo.data.message)
    const responseToken= logInfo.data.token
    const authToken = responseToken // Get the auth token from the server
    Cookies.set('authToken', authToken, { expires: 1/24 }); // Setting the authToken cookie to expire in 1 hour
    setLogIn(logInfo.data.stat);
    //Setting Cookie to Track the Current User
    const currentUser = logInfo.data.User
    const loggedUser = currentUser //Get the Current User Info from server
    Cookies.set('loggedUser',loggedUser,{expires:1/24});
    setUser(currentUser)

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
      const updateInfo = await axios.patch('https://animebloggerserver.onrender.com/api/forgotpassword',userResetInfo)
      alert(updateInfo.data.username+ " "+updateInfo.data.message)
      Logout()
    }
    resetUserPassword(resetinfo)
  }
  //End of User Register and Login Routes

  //Blog Posts Routes
  //Creating a New post
  function createPost(newPost,C_user){
    async function postData(currentPost,current_User){
      const postStatus =await axios.post('https://animebloggerserver.onrender.com/api/posts',currentPost,{headers:{
        'header-1':current_User }})
      alert(postStatus.data.message)
      // fetchPosts(); //It wiil fetch the data after data inserted into database
  }
  postData(newPost,C_user)
  }

  //Fetching Posts from server
  async function fetchPosts(){
    try {
      const response = await axios.get('https://animebloggerserver.onrender.com/api/posts');
      setPost(response.data);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

//Editing a Post
function editPost(p_id,blog){
  async function updatePost(PID,blogPost){
    const url="https://animebloggerserver.onrender.com/api/edit-post/"+PID
    if(isLoggedIn===false){
        alert("Please SignIn and Try Again")
    }else{
        try{
            const editedInfo = await axios.patch(url,blogPost)
            alert(editedInfo.data.message)
            fetchPosts()
        }catch(error){
            console.error('Error in Updating the Post:', error);
          }
    }
  }
  updatePost(p_id,blog)
}

//For Deleting a post
function deletePost(pID){
  async function removePost(pid){
    const url="https://animebloggerserver.onrender.com/api/delete-post/"+pid
    if(isLoggedIn===false){
        alert("Please SignIn and Try Again")
    }else{
        try{
            const deletedInfo = await axios.delete(url)
            alert(deletedInfo.data.message)
            fetchPosts()
        }catch(error){
            console.error('Error in Deleting the Post:', error);
          }
    }
}
removePost(pID)
}

  //
  return (
    <Container> 
      <main>
      {isLoggedIn &&(<Typography align='right' mb={1}>
      <Button onClick={Logout}><LogoutIcon /></Button></Typography>)}
      <Router><Routes>
      <Route path="/" element={<HomePage /> } />
      <Route path="/signup" element={<SignUp addUser={createAccount}/>} />
      <Route path="/login" element={<Login onLoggin={verifyUser}/>}/>
      <Route path="/password-reset" element={<ForgotPassword onReset={resetPassword} />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/compose" element={isLoggedIn?(<Compose onAdd={createPost} c_user={Logged_user}/>):
      (<Login onLoggin={verifyUser}/>)} />
      <Route path="/posts" element={
          posts.map(mypost=>(
            <Posts
              key={mypost._id}
              postid={mypost._id}
              Title={mypost.name}
              imgURL={mypost.blogImage}
              Content={mypost.content}
              onEdit={editPost}
              delPost={deletePost}
              />))}/>
      <Route path="/api/shared-post/:id" element={<SharedPost/>} />
      </Routes></Router>
      </main>
      </Container>
  );
}

export default App;
