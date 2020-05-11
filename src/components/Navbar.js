import React, { useEffect, useRef, useState } from "react";

import "./navbar.css";
import "./iconStyles.css";
import "./dropmenu.css";

import Facebook from "../icons/social/Facebook";
import Github from "../icons/social/Github";
import Instagram from "../icons/social/Instagram";
import Linkedin from "../icons/social/Linkedin";

import About from "./dropmenu/About";
import Contact from "./dropmenu/About";
import Skills from "./dropmenu/About";
import Work from "./dropmenu/About";

function Navbar() {
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [showWork, setShowWork] = useState(false);

  const aboutRef = useRef();
  const contactRef = useRef();
  const skillsRef = useRef();
  const workRef = useRef();

  useEffect(() => {
    function monitorMouse({ target }) {
      if (showAbout && !aboutRef.current.contains(target)) {
        setShowAbout(false);
      }
      if (showContact && !contactRef.current.contains(target)) {
        setShowContact(false);
      }
      if (showSkills && !skillsRef.current.contains(target)) {
        setShowSkills(false);
      }
      if (showWork && !workRef.current.contains(target)) {
        setShowWork(false);
      }
    }
  }, [
    setShowAbout,
    setShowContact,
    setShowSkills,
    setShowWork,
    showAbout,
    showContact,
    showSkills,
    showWork
  ]);

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
          <a rel="index" href="/home" className="home-link active">
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
        <a id="mobile-link" href>
          <i className="fa fa-bars" />
        </a>
      </div>
      {showAbout && <About />}
    </>
  );
}
export default Navbar;
