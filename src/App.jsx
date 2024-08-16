import React,{useState, useEffect} from 'react'
import {Route, Routes} from 'react-router-dom'
import axios from 'axios'
import Cookies from 'js-cookie'
import Navbar from './components/partials/Navbar'
import Footer from './components/partials/Footer'
import Home from './components/Home'
import SignUp from './components/UserPage/Register'
import Login from './components/UserPage/Login'
import ForgotPassword from './components/UserPage/resetPassword'
import MyPosts from './components/Posts/MyPosts'
import SharedPost from './components/Posts/SharedPost'
import Compose from './components/Compose'
import About from './components/About'
import Contact from './components/Contact'
import "./App.css"

function App() {

// Create a new Date object
const today = new Date();
const day = String(today.getDate()).padStart(2, '0'); // Get the day and pad with leading zero if necessary
const year = today.getFullYear(); // Get the full year
// Array of month names
const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
// Get the month name
const month = monthNames[today.getMonth()];
// Format the date as day-month-year
const formattedDate = `${day} ${month}, ${year}`;

  //User Registration and Login Routes
  //Register Route
  function createAccount(newUser){
    if((newUser.firstName==="")||(newUser.lastName==="")||(newUser.email==="")||(newUser.password==="")){
      alert("Hold on! Looks like some information is missing to create your account. Please fill in the details to continue.")
    }
    else{
      async function createUser(){
        const register =await axios.post('https://animebloggerserver.onrender.com/api/register',newUser)
        let isregisterdMessage = register.data.message
       alert(isregisterdMessage)
    }
    createUser()
    }  
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
  function verifyUser(loginCredentials){
    if((loginCredentials.email==="")||(loginCredentials.password==="")){
      alert("Invalid Credentials ! ")
    }
    else{
    async function userLogIn(){
    const logInfo = await axios.post('https://animebloggerserver.onrender.com/api/login',loginCredentials)
    alert(logInfo.data.message)
    if(logInfo.data.stat===true)
    {
    const responseToken= logInfo.data.token
    const authToken = responseToken // Get the auth token from the server
    Cookies.set('authToken', authToken, { expires: 1/24 }); //Setting Cookie to Track the Current User
    setLogIn(true);

    const currentUser = logInfo.data.User
    const loggedUser = currentUser //Get the Current User Info from server
    Cookies.set('loggedUser',loggedUser,{expires:1/24});
    setUser(currentUser)
    }else{
    setLogIn(logInfo.data.stat);
    } }
    userLogIn()
   }  
  }

  //Logout
  function Logout(){
    Cookies.remove('authToken');
    Cookies.remove('loggedUser');
    setUser("");
    setLogIn(false);
    alert("Successfully Logged Out")
  }
  //Password Reset Route
  function resetPassword(newPassword){
    async function resetUserPassword() {
      const updateInfo = await axios.patch('https://animebloggerserver.onrender.com/api/forgotpassword',newPassword)
      alert(updateInfo.data.username+ " "+updateInfo.data.message)
    }
    resetUserPassword()
  }
  //End of User Register and Login Routes

  //Blog Posts Routes
  const[posts,setPost]=useState([])
  //Creating a New post
  function createPost(newPost,current_User){
    if((newPost.name==="")||(newPost.blogImage==="")||(newPost.content==="")){
      alert("Alert! Missing Blog Details. Title | Featured Image | Content. Fill these in to Publish.")
    }
    else{
    async function postData(){
      const postStatus =await axios.post('https://animebloggerserver.onrender.com/api/posts',newPost,{headers:{
        'header-1':current_User,'header-date':formattedDate}})
      alert(postStatus.data.message)
      // fetchPosts(); //It wiil fetch the data after data inserted into database
  }
  postData() }
  }

  //Fetching Posts from server
  async function fetchPosts(){
    try {
      const response = await axios.get('https://animebloggerserver.onrender.com/api/posts');
      setPost(response.data);
    } catch (error) {
      console.error('Error fetching Posts :', error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

//Editing a Post
function editPost(p_id,blog,postOwner,postName){
  if((blog.name==="")&&(blog.blogImage==="")&&(blog.content===""))
  {
    alert("!!! Invalid Deatils | Please Enter valid Details")
  }
  else{
  async function updatePost(){
    const url="https://animebloggerserver.onrender.com/api/edit-post/"+p_id
      try{
        const editedInfo = await axios.patch(url,blog,{headers:{'header-2':postOwner,'header-3':postName}})
        alert(editedInfo.data.message)
        fetchPosts()
    }catch(error){ console.error('Error in Updating the Post:', error); }
  }
  updatePost()
  }
}

//For Deleting a post
function deletePost(pid,blogWriter,blogName){
  async function removePost(){
    const url="https://animebloggerserver.onrender.com/api/delete-post/"+pid
    
    switch(Logged_user){
      case "bsai42358@gmail.com":
        try{
          const deletedInfo = await axios.delete(url,{headers:{'header-4':blogWriter,'header-5':blogName}})
          alert(blogName+" Titled "+deletedInfo.data.message+" by Admin! ")
          fetchPosts()
        }catch(error){console.error('Deletion Error: ',error)}
        break;

      case blogWriter:
        try{
          const deletedInfo = await axios.delete(url,{headers:{'header-4':blogWriter,'header-5':blogName}})
          alert(blogName+" Titled "+deletedInfo.data.message+" by You !")
          fetchPosts()
        }catch(error){console.error('Deletion Error: ',error)}
        break;
      default:
        alert("You aren't Allowed to Delete Someone's Blog! Please Contact the Admin");
    }
   
}
removePost()
}
  //
  return (
    <div>
    <Navbar loginVal={isLoggedIn} signOut={Logout}/>
    <section id="main">
      <Routes>
      <Route path='/' element={<Home />}/>
      <Route path="/signup" element={<SignUp addUser={createAccount}/>} />
      <Route path="/login" element={<Login onLoggin={verifyUser}/>}/>
      <Route path="/password-reset" element={<ForgotPassword onReset={resetPassword} />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/compose" element={isLoggedIn?(<Compose onAdd={createPost} c_user={Logged_user}/>):
      (<Login onLoggin={verifyUser}/>)} />
      
      <Route path="/myposts" element={
          posts.map(mypost=>(
            <MyPosts
              key={mypost._id}
              postid={mypost._id}
              Title={mypost.name}
              imgURL={mypost.blogImage}
              Content={mypost.content}
              Writer={mypost.owner}
              postDate={mypost.date}
              LogStat={isLoggedIn}
              LogUser={Logged_user}
              onEdit={editPost}
              delPost={deletePost}
              />))}/>
      
      <Route path="/api/shared-post/:id" element={<SharedPost/>} />
      </Routes>
    </section>
    <Footer />
    </div>
  );
}

export default App;
