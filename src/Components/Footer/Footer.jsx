import React from 'react'
import './Footer.css';
import { assets } from '../../Assets/assets';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam cumque maiores voluptatum atque, asperiores reiciendis consectetur earum molestias doloribus quasi modi maxime alias deleniti laborum sed iste. Numquam praesentium incidunt inventore laboriosam adipisci deleniti tempore, tempora libero eius molestias id.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>

            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-212-456-6786</li>
                    <li>tomoto@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">
            Copyright 2024 @ Tomoto.com - All Right Reserved.
        </p>
        
    </div>
  )
}

export default Footer