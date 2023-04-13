import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
    <navbar>
      <div className='container1'>
      <div className='nav_main'>
        <div className='row'>
        <div className="col-md-3">
  <span className='main_logo'><img src="Alpha1.png" alt="" width={50} /></span>
  </div>
  <div className="col-md-6">
     <span className='main_menu'>  
    <NavLink to="/">Home</NavLink>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/gallery">Gallery</NavLink>
    <NavLink to="/blog">Blog</NavLink>
    <NavLink to="/contact">Contact</NavLink>
    </span> 
    </div>
    
    <div className="col-md-3"><div className='sing_up'><NavLink to="/singup">SingUp</NavLink></div>
    </div>
    </div>
    </div>
    </div>  
    </navbar>
    </>
  )
}

export default Header