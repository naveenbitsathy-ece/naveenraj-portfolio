import React from "react";
import "./Footer.css";

const CURRENT_YEAR = new Date().getFullYear();

function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand-col">
            <div className="footer-brand">
              <span className="footer-mark">N</span>
              <span className="footer-title">NAVEENRAJ</span>
            </div>
            <p className="footer-tagline">
              Electronics & Communication Engineering · Bannari Amman Institute of Technology
            </p>
            <p className="footer-focus">
              Focus: VLSI Architecture, RTL Synthesis, DSP, and FPGA Prototyping
            </p>
          </div>

          <div className="footer-links-col">
            <span className="footer-heading">// QUICK NAVIGATION</span>
            <ul className="footer-nav">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#expertise">Expertise</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#achievements">Achievements</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#resume">Resume</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-social-col">
            <span className="footer-heading">// CONNECT & CODE</span>
            <div className="footer-social-links">
              <a
                href="https://github.com/naveenbitsathy-ece"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
              >
                <span>GITHUB</span>
                <span className="social-arrow">↗</span>
              </a>
              <a
                href="https://www.linkedin.com/in/naveenraj07/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
              >
                <span>LINKEDIN</span>
                <span className="social-arrow">↗</span>
              </a>
              <a
               href="https://mail.google.com/mail/?view=cm&fs=1&to=naveenrajs1003@gmail.com"
                className="footer-social-link"
                 rel="noopener noreferrer"
                target="_blank"
               // className="channel-value"
              >
                <span>EMAIL</span>
                <span className="social-arrow">↗</span>
              </a>
            </div>
            <div className="footer-hardware-badge">
              <span className="badge-dot"></span>
              <span>SYNTHESIZABLE · HARDWARE ACCELERATED</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            © {CURRENT_YEAR} Naveenraj. All rights reserved. Designed for Silicon & Hardware Engineering.
          </div>
          <div className="footer-meta">
            <span> பண்ணாரி அம்மன் தொழில்நுட்பக் கல்லூரி</span>
            <span className="meta-sep">,</span>
            <span>சத்தியமங்கலம்</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
