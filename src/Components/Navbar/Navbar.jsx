import React, { useState } from "react";
import "./Navbar.css";
import ANU from "../../assets/ANU.png";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isOpen, setIsOpen] = useState(false); // ✅ track menu open/close

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div className="navbar">
      {/* Logo */}
      <img src={ANU} alt="Logo" />

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

        <li>
          <AnchorLink
            className="anchor-link"
            href="#home"
            onClick={() => {
              setMenu("home");
              handleClose();
            }}
          >
            <p>Home</p>
          </AnchorLink>
          {menu === "home" && <img src={underline} alt="" />}
        </li>

        <li>
          <AnchorLink
            className="anchor-link"
            href="#about"
            offset={50}
            onClick={() => {
              setMenu("about");
              handleClose();
            }}
          >
            <p>About Me</p>
          </AnchorLink>
          {menu === "about" && <img src={underline} alt="" />}
        </li>

        <li>
          <AnchorLink
            className="anchor-link"
            href="#service"
            offset={50}
            onClick={() => {
              setMenu("certification");
              handleClose();
            }}
          >
            <p>Certifications</p>
          </AnchorLink>
          {menu === "certification" && <img src={underline} alt="" />}
        </li>

        <li>
          <AnchorLink
            className="anchor-link"
            href="#internship"
            offset={50}
            onClick={() => {
              setMenu("internship");
              handleClose();
            }}
          >
            <p>Internships</p>
          </AnchorLink>
          {menu === "internship" && <img src={underline} alt="" />}
        </li>

        <li>
          <AnchorLink
            className="anchor-link"
            href="#portfolio"
            offset={50}
            onClick={() => {
              setMenu("portfolio");
              handleClose();
            }}
          >
            <p>Portfolio</p>
          </AnchorLink>
          {menu === "portfolio" && <img src={underline} alt="" />}
        </li>

        <li>
          <AnchorLink
            className="anchor-link"
            href="#contact"
            offset={50}
            onClick={() => {
              setMenu("contact");
              handleClose();
            }}
          >
            <p>Contact</p>
          </AnchorLink>
          {menu === "contact" && <img src={underline} alt="" />}
        </li>
      </ul>

      {/* Connect Button (desktop only) */}
      <div className="nav-connect">
        <AnchorLink className="anchor-link" href="#contact" offset={50}>
          Connect with Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
