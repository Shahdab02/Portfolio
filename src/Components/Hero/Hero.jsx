import React from 'react'
import './Hero.css'
import dp from '../../assets/dp picter.jpg';
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={dp} alt="" height={210} width={200} className="dp" />
      <h1>
        <span>I'm MD Shahdab,</span> frontend devloper based on India.
      </h1>
      <p>
        I am a frontend devloper from Jaipur Rajasthan India.
      </p>
      <div className="hero-action">
        <div className="hero-connect" onClick={() => setmenu("contact")}>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with Me
          </AnchorLink>
        </div>
        <div className="hero-resume">
          <a href="https://drive.google.com/file/d/11ScAmW9VuWsTVYaii4EWHCNPQZvQXVEU/view?usp=drivesdk">My Resume</a>
        </div>
      </div>
    </div>
  );
}

export default Hero