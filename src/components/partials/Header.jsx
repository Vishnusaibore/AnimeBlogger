import React from 'react';
import NewspaperIcon from '@mui/icons-material/Newspaper';
function Header(){
  
    return(<div>
  <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <h1 className="navbar-brand"><NewspaperIcon /> Blogger</h1>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/posts">Blogs</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/compose">Compose</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/contact">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>)
}
export default Header