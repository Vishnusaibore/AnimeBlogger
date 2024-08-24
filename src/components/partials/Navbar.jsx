import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import Appicon from './android-chrome-192x192.png'
import "./Partials.css"

function Navbar(props) {
    const login = props.loginVal
    function handleLogout(event){
        props.signOut()
        event.preventDefault()
    }
  return(
    <section id="header">
    <nav className='navbar navbar-expand-lg bg-body-dark'>
    <div className='container-fluid'>
    <a href="/" className='navbar-brand'><img src={Appicon} width={"40"} height={"42"} alt="AppIcon"></img></a>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ">
        <li className="nav-item ">
          <a className="nav-link mylink" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mylink" href="#/myposts">Blogs</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mylink" href="#/contact">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mylink" href="#/about">About</a>
        </li>
      </ul> 
    </div>
    <div className='blogtitle'>
    <h4>Anime Blogger</h4>
    </div>
    <div className='header-buttons'>
    {login?(<div>
      <a className='btn btn-sm create-blog-btn mybutton' role='button' href="#/compose">Create Your Blog</a>
      <button onClick={handleLogout}  className="btn btn-sm btn-outline-light mybutton">Logout</button>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <MenuIcon />
    </button>
    </div>):(<div>
    <a className="btn btn-outline-light btn-sm mybutton " href="#/login" role="button">Login</a>
    <a className="btn btn-primary btn-sm mybutton " href="#/signup" role="button">Sign up</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
     <MenuIcon/>
    </button>
    </div>)}
    
    </div>
    </div>
    </nav>
    </section>
  )
}

export default Navbar