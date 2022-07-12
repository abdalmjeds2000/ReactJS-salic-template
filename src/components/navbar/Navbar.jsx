import React from "react";
import './Navbar.css';
import logo from '../../icons/icons-menu/logo.jpg';

const Navbar = (props) => {

  return ( 
    <div className="navbar" style={props.style}>
      <img src={logo} alt="logo" />
      {props.children}
    </div>
  )
}

export default Navbar