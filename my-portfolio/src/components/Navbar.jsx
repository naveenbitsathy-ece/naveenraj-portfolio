import React, { useState, useEffect } from "react";
import "./Navbar.css";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Expertise", href: "#expertise" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Education", href: "#education" },
  { name: "Blog", href: "#blog" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" }
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Track scroll position for styling and active link detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Detect active section
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`navbar-wrapper ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">
        {/* BRAND IDENTITY */}
        <a
          href="#home"
          className="navbar-brand"
          onClick={closeMenu}
          aria-label="Naveenraj - Home"
        >
          <div className="brand-logo-mark">
            <span className="brand-char">ந</span>
            <span className="brand-dot"></span>
          </div>
          <div className="brand-meta">
            <span className="brand-title">நவீன்ராஜ் செந்தில்குமார்</span>
            <span className="brand-subtitle">VLSI / FPGA ENGINEER</span>
          </div>
        </a>

        {/* DESKTOP NAVIGATION */}
        <nav
          id="main-navigation"
          className={`navbar-links-panel ${menuOpen ? "open" : ""}`}
          aria-label="Main Navigation"
        >
          <div className="mobile-nav-header">
            <span className="mobile-nav-title">// NAVIGATION MENU</span>
            <button
              className="mobile-close-btn"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>

          <ul className="nav-list">
            {navItems.map((item) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <li key={item.name} className="nav-item">
                  <a
                    href={item.href}
                    className={`nav-link ${isActive ? "active" : ""}`}
                    onClick={closeMenu}
                  >
                    <span className="nav-text">{item.name}</span>
                    {isActive && <span className="nav-active-pip" />}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="mobile-nav-cta">
            <a
              href="#contact"
              className="mobile-connect-btn"
              onClick={closeMenu}
            >
              <span>LET'S CONNECT</span>
              <span className="arrow">↗</span>
            </a>
            <div className="mobile-nav-footer-text">
              <span>DESIGNING DIGITAL SILICON</span>
              <span>TAMIL NADU, INDIA</span>
            </div>
          </div>
        </nav>

        {/* DESKTOP CTA BUTTON */}
        <div className="navbar-action-desktop">
          <a href="#contact" className="navbar-cta-btn">
            <span>GET IN TOUCH</span>
            <span className="btn-arrow">→</span>
          </a>
        </div>

        {/* MOBILE HAMBURGER BUTTON */}
        <button
          className={`hamburger-btn ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
        >
          <span className="hamburger-box">
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </span>
        </button>
      </div>

      {/* MOBILE BACKDROP */}
      {menuOpen && (
        <div
          className="navbar-backdrop"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </header>
  );
}

export default Navbar;
