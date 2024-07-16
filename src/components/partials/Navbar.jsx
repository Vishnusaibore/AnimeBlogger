import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout'
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
    <nav className='navbar navbar-expand-lg bg-dark'>
    <div className='container-fluid'>
        <a href="/" className='navbar-brand'><img src={Appicon} width={"40"} height={"42"} alt="AppIcon"></img></a>
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
    <div className='blogtitle'>
    <h4>Anime Blogger</h4>
    </div>
    <div className=''>
    <a class="btn btn-primary mybutton" href="#/login" role="button">Login</a>
    <a class="btn btn-secondary mybutton" href="#/signup" role="button">Sign up</a>
    <a class="btn btn-warning mybutton" href="#/compose" role="button">Create Your Blog</a>
    {login&&<button onClick={handleLogout}  className="btn btn-sm btn-outline-light logout"><LogoutIcon /></button>}
    </div>
    <button className="navbar-toggler btn-outline-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <MenuIcon />
    </button>
    </div>
    </nav>
    </section>
  )
}

export default Navbar