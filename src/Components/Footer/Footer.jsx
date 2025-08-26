import React from 'react'
import "./Footer.css";
import footer_logo from '../../assets/logo.jpg'
import user from "../../assets/user.jpeg";


const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footer_logo} alt="" height={40} />
          <p>
            I am a frontend devloper from koderma , delhi with 5years of
            experience
          </p>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={user} alt="" height={25}/>
                <input type="email" placeholder='Enter your email' />
            </div>
            <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">@ 2025 Md Shahdab. All rights recieved</p>
        <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
}
export default Footer;
