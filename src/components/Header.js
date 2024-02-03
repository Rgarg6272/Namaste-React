import React, { useState } from "react";
import { LOGO_URL } from "../Utils/constants";
 
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
 
  const nameChange = () => {
    btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
  };
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <button className="login-btn" onClick={nameChange}>
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};
 
export default Header;