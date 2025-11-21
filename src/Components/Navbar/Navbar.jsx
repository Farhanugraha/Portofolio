import React from "react";
import "./Navbar.css";
import logo from "../../assets/navlogo.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* <img src={logo} alt="Logo" className="nav-logo" /> */}
      <ul className="nav-menu">
        <li>Home</li>
        <li>About Me</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
      <div className="nav-connect">Connect With Me</div>
    </div>
  );
};

export default Navbar;
