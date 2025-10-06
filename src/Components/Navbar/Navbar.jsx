import React, { useState, useEffect } from "react";
import "./Navbar.css";
import ANU from "../../assets/ANU.png";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const menuItems = [
    { id: "home", label: "Home", href: "#home", offset: 0 },
    { id: "about", label: "About Me", href: "#about", offset: 50 },
    { id: "certification", label: "Certifications", href: "#service", offset: 50 },
    { id: "internship", label: "Internships", href: "#internship", offset: 50 },
    { id: "portfolio", label: "Portfolio", href: "#portfolio", offset: 50 },
    { id: "contact", label: "Contact", href: "#contact", offset: 50 },
    
  ];

  return (
    <>
      {/* Navbar */}
      <div className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        {/* Logo with animation */}
        <div className="navbar-logo">
          <img src={ANU} alt="Logo" className="logo-img"   />
          <div className="logo-glow"></div>
        </div>

        {/* Mobile Open Icon */}
        {!isOpen && (
          <img
            src={menu_open}
            onClick={handleOpen}
            alt="Open Menu"
            className="nav-mob-open"
          />
        )}

        {/* Nav Menu */}
        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          {/* Mobile Close Icon */}
          <img
            src={menu_close}
            onClick={handleClose}
            alt="Close Menu"
            className="nav-mob-close"
          />

          {menuItems.map((item, index) => (
            <li
              key={item.id}
              className={`nav-item ${menu === item.id ? "active" : ""}`}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              style={{ animationDelay: isOpen ? `${index * 0.1}s` : "0s" }}
            >
              <AnchorLink
                className="anchor-link"
                href={item.href}
                offset={item.offset}
                onClick={() => {
                  setMenu(item.id);
                  handleClose();
                }}
              >
                <p className="nav-text">{item.label}</p>
                <div className="nav-hover-effect"></div>
              </AnchorLink>
              
              {/* Underline with smooth transition */}
              <div className={`nav-underline ${menu === item.id ? "show" : ""}`}>
                <img src={underline} alt="" />
              </div>

              {/* Hover indicator */}
              {hoveredItem === item.id && menu !== item.id && (
                <div className="hover-indicator"></div>
              )}
            </li>
          ))}

          {/* Mobile Connect Button */}
          <li className="nav-mobile-connect">
            <AnchorLink 
              className="anchor-link" 
              href="#contact" 
              offset={50}
              onClick={handleClose}
            >
              <button className="connect-btn-mobile">
                <span>Connect with Me</span>
                <div className="btn-shine"></div>
              </button>
            </AnchorLink>
          </li>
        </ul>

        {/* Connect Button (desktop only) */}
        <div className="nav-connect">
          <AnchorLink className="anchor-link" href="#contact" offset={50}>
            <button className="connect-btn">
              <span>Connect with Me</span>
              <div className="btn-particles">
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
              </div>
            </button>
          </AnchorLink>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && <div className="nav-overlay" onClick={handleClose}></div>}
    </>
  );
};

export default Navbar;