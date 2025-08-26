import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.jpg'
import AnchorLink from "react-anchor-link-smooth-scroll";
import ham from "../../assets/hamicon.jpeg";
import close from "../../assets/closeicon.jpeg";




const Navbar = () => {

const[menu,setmenu]=useState('home');
const menuRef = useRef();


const closeMenu=()=>{
  menuRef.current.style.right="-350px";
}


const openMenu = () => {
  menuRef.current.style.right = "0";
};

  return (
    <div className="navbar"> 
     <img src={logo} alt="" height={50} />
     <img src={ham} onClick={openMenu} alt="" height={30} className='nav-mob-open'/>
    <ul ref={menuRef} className="nav-menu">
      <img src={close} onClick={closeMenu} alt="" height={30} className='nav-mob-close' />
       <li> <AnchorLink className="anchor-link"  href="#home"> <p onClick={()=>setmenu("home")}>Home</p></AnchorLink></li>
       <li> <AnchorLink className="anchor-link"offset={50} href="#about"> <p onClick={()=>setmenu("about")}>About Me</p></AnchorLink></li>
       <li> <AnchorLink className="anchor-link"offset={50}  href="#services"><p onClick={()=>setmenu("services")}>Skills</p></AnchorLink> </li>
       <li> <AnchorLink className="anchor-link" offset={50} href="#work"><p onClick={()=>setmenu("portfolio")}>Project</p></AnchorLink></li>
       <li> <AnchorLink  className="anchor-link" offset={50}  href="#contact"><p onClick={()=>setmenu("contact")}>Contact</p></AnchorLink></li> 
    </ul>
   <div className="nav-connect" onClick={()=>setmenu("contact")}><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with Me</AnchorLink></div>
   
    </div>
  )
}

export default Navbar