import React from "react";

import "./navbar.css";
import "./iconStyles.css";
import "./dropmenu.css";

import Facebook from "../icons/social/Facebook";
import Github from "../icons/social/Github";
import Instagram from "../icons/social/Instagram";
import Linkedin from "../icons/social/Linkedin";

function Navbar() {
  return (
    <>
      <div id="nav_bar">
        <a className="logo" rel="index" href="https://www.pierregober.com">
          <img
            className="logo_pic"
            src="https://i.imgur.com/QQqDVej.png"
            alt="Software Developer Logo, Full Stack Software Engineer Logo"
          />
        </a>
        <nav className="en">
          <a rel="index" href="/home" className="home-link">
            <i className="icon home"></i>
          </a>
          <a rel="about" href="/about">
            <i className="icon about"></i>
          </a>
          <a rel="skills" href="/skills">
            <i className="icon skills"></i>
          </a>
          <a rel="gallery" href="/works">
            <i className="icon work"></i>
          </a>
          <a rel="contact" href="contact">
            <i className="icon contact"></i>
          </a>
        </nav>

        <ul>
          <li>
            <a
              href="https://github.com/pierregober"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/pierregober/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/pierregober"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/pierrethetruth/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram />
            </a>
          </li>
        </ul>
        <a id="mobile-link" href="#">
          <i className="fa fa-bars" />
        </a>
      </div>
    </>
  );
}
export default Navbar;
