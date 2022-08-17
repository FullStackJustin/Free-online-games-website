import React from 'react';
import "../styles/navbar.css"
const Navbar = () =>{
  return (
    <nav className="navbar">
      <div className="navbar -container container">
        <input type="checkbox" name="" id=""/>
        <div className="hamburger-lines">
        <span className="line line1">1</span>
        <span className="line line2">2</span>
        <span className="line line3">3</span>
        </div>
        <ul className="menu-items">
          <li><a href="/home">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/food">Category</a></li>
          <li><a href="/food-menu">Menu</a></li>
          <li><a href="/tesimonials">Testimonials</a></li>
          <li><a href="/Contact">Contact</a></li>
        </ul>
        <h1 className="logo">RS</h1>
      </div>
    </nav>
  )
}
export default Navbar;
