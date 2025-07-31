import React, { useState } from 'react'
import {assets} from '../../Assets/assets';
import './Navbar.css';

const Navbar = () => {
  const [menu,setMenu]=useState("Home");
  return (
    <div className='navbar'>
        <img  src={assets.logo} alt="" className='logo' />
        <ul className="navbar-menu">
          <li onClick={()=>{setMenu("Home")}}  className={menu==='Home'?"active":""} >Home</li>
          <li onClick={()=>{setMenu("Menu")}} className={menu==='Menu'?"active":""} >Menu</li>
          <li onClick={()=>{setMenu("Mobile-app")}} className={menu==='Mobile-app'?"active":""} >Mobile-app</li>
          <li onClick={()=>{setMenu("Contact us")}} className={menu==='Contact us'?"active":""} >Contact us</li>
        </ul>
<div className="navbar-right">
  <img src={assets.search_icon} alt="" />
  <div className="navbar-search-icon">
    <img src={assets.basket_icon} alt="" />
    <div className="dot"></div>
  </div>
  
</div>
<button>Sign In</button>
    </div>
  )
}

export default Navbar