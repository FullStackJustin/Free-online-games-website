import React from 'react';
import "../styles/navbar.css"
const Navbar = () =>{
  
  return (
    <nav className="navbar" role="navigation">
    <div className="logo">
    <h1 className="logoText"><a href="#">JMedia</a></h1>
    </div>
      <div className="navbar-container">
        <ul id="menu">
          <li><a href="#">PC Games</a></li>
        </ul>
      </div>
    </nav>
  )
}
export default Navbar;
