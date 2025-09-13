
import React, { useState, useRef } from "react";
import "./Navbar.css";
import logo from '../../assets/logo.svg';
import underline from '../../assets/nav_underline.svg';
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <div className="navbar">
      {/* Logo */}
      <img src={logo} alt="Logo" />

      {/* Mobile Open Icon */}
      <img 
        src={menu_open} 
        onClick={openMenu} 
        alt="Open Menu" 
        className="nav-mob-open"
      />

      {/* Nav Menu */}
      <ul ref={menuRef} className="nav-menu">
        {/* Mobile Close Icon */}
        <img 
          src={menu_close}  
          onClick={closeMenu} 
          alt="Close Menu" 
          className="nav-mob-close" 
        />

        <li>
          <AnchorLink className="anchor-link" href="#home" onClick={() => setMenu("home")}>
            <p>Home</p>
          </AnchorLink>
          {menu === "home" && <img src={underline} alt="" />}
        </li>

        <li>
          <AnchorLink className="anchor-link" href="#about" offset={50} onClick={() => setMenu("about")}>
            <p>About Me</p>
          </AnchorLink>
          {menu === "about" && <img src={underline} alt="" />}
        </li>

        <li>
          <AnchorLink className="anchor-link" href="#service" offset={50} onClick={() => setMenu("certification")}>
            <p>Certifications</p>
          </AnchorLink>
          {menu === "certification" && <img src={underline} alt="" />}
        </li>

        <li>
          <AnchorLink className="anchor-link" href="#internship" offset={50} onClick={() => setMenu("internship")}>
            <p>Internships</p>
          </AnchorLink>
          {menu === "internship" && <img src={underline} alt="" />}
        </li>

        <li>
          <AnchorLink className="anchor-link" href="#portfolio" offset={50} onClick={() => setMenu("portfolio")}>
            <p>Portfolio</p>
          </AnchorLink>
          {menu === "portfolio" && <img src={underline} alt="" />}
        </li>

        <li>
          <AnchorLink className="anchor-link" href="#contact" offset={50} onClick={() => setMenu("contact")}>
            <p>Contact</p>
          </AnchorLink>
          {menu === "contact" && <img src={underline} alt="" />}
        </li>
      </ul>

      {/* Connect Button */}
      <div className="nav-connect">
        <AnchorLink className="anchor-link" href="#contact" offset={50}>
          Connect with Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;

















/*import React, { useState } from "react";
import "./Navbar.css";
import logo from '../../assets/logo.svg';
import underline from '../../assets/nav_underline.svg';
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';
import React, { useState, useRef } from "react";


const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef=useRef();

  const openMenu =() =>{
    menuRef.current.style.right="0";
  }

const closeMenu =() =>{
    menuRef.current.style.right="-350px";
  }


  return (
    <div className="navbar">
      <img src={logo} alt="Logo" />
      <img src={menu_open} onclick={openMenu} alt="Logo" className="nav-mob-open"/>


      <ul ref={menu_ref}className="nav-menu">
        <img src={menu_close}  onclick={closeMenu} alt="" className="nav-mob-close" />
  <li>
    <AnchorLink className="anchor-link" href="#home" onClick={() => setMenu("home")}>
      <p>Home</p>
    </AnchorLink>
    {menu === "home" ? <img src={underline} alt="" /> : null}
  </li>

  <li>
    <AnchorLink className="anchor-link" href="#about" offset={50} onClick={() => setMenu("about")}>
      <p>About Me</p>
    </AnchorLink>
    {menu === "about" ? <img src={underline} alt="" /> : null}
  </li>

  <li>
    <AnchorLink className="anchor-link" href="#service" offset={50} onClick={() => setMenu("certification")}>
      <p>Certifications</p>
    </AnchorLink>
    {menu === "certification" ? <img src={underline} alt="" /> : null}
  </li>

  <li>
    <AnchorLink className="anchor-link" href="#internship" offset={50} onClick={() => setMenu("internship")}>
      <p>Internships</p>
    </AnchorLink>
    {menu === "internship" ? <img src={underline} alt="" /> : null}
  </li>

  <li>
    <AnchorLink className="anchor-link" href="#portfolio" offset={50} onClick={() => setMenu("portfolio")}>
      <p>Portfolio</p>
    </AnchorLink>
    {menu === "portfolio" ? <img src={underline} alt="" /> : null}
  </li>

  <li>
    <AnchorLink className="anchor-link" href="#contact" offset={50} onClick={() => setMenu("contact")}>
      <p>Contact</p>
    </AnchorLink>
    {menu === "contact" ? <img src={underline} alt="" /> : null}
  </li>
</ul>


      
     <div className="nav-connect">
  <AnchorLink className="anchor-link" href="#contact" offset={50}>
    Connect with Me
  </AnchorLink>
</div>
    </div>
  );
};

export default Navbar;




*/