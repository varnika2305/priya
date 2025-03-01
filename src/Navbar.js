import React from "react";
import "./Styles.css";

const Navbar = () => {
  return (
    <Nav className="Navbar">
      <div className="logo">E-Shop</div>
      <ul className="Nav-links">
        <li><a href="/Home">Home</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">About</a></li>
      </ul>
      <input type="text" placeholder="Search products..." className="search-bar" />
    </Nav>
  );
};

export default Navbar;