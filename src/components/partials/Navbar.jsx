import React from 'react'
import LogoutIcon from '@mui/icons-material/Logout'
import Appicon from './apple-touch-icon.png'
import "./Partials.css"

function Navbar(props) {
    const login = props.loginVal
    function handleLogout(event){
        props.signOut()
        event.preventDefault()
    }
  return(
    <nav className='navbar navbar-expand-lg bg-dark'>
    <div className='container-fluid'>
        <a href="/" className='navbar-brand'><img src={Appicon} width={"40"} height={"40"} alt="AppIcon"></img></a>
        <a href='/' className='navbar-brand'><h5>Anime Blogger</h5></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ">
        <li className="nav-item ">
          <a className="nav-link mylink" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mylink" href="#/posts">Blogs</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mylink" href="#/about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mylink" href="#/contact">Contact</a>
        </li>
      </ul>
    </div>
    <div className=''>
    <a class="btn btn-primary mybutton" href="#/login" role="button">Login</a>
    <a class="btn btn-secondary mybutton" href="#/signup" role="button">Sign up</a>
    <a class="btn btn-warning mybutton" href="#/compose" role="button">Create Your Blog</a>
    {login&&<button onClick={handleLogout}  className="btn btn-sm btn-outline-light logout"><LogoutIcon /></button>}
    </div>
    </div>
    </nav>
  )
}

export default Navbar