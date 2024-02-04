import React, { useEffect, useState } from "react";
import { LOGO_URL } from "../Utils/constants";
import { Link } from "react-router-dom";
 
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
 
  const nameChange = () => {
    btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
  };


  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/"><img className="logo" src={LOGO_URL} /></Link>
        
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <button className="login-btn" onClick={nameChange}>
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};
 
export default Header;