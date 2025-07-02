import React from "react";
import './Header.css';
import logo from '../../assets/images/logo.png'

const Header=()=>{
  return(
     <>
    <div className="Nav">
     <div className="nav-logo">
     <img src={logo} alt="" />
     </div>
     <div className="nav-items">
       <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
     </div>
    </div>
    </>
  )
}
export default Header;
