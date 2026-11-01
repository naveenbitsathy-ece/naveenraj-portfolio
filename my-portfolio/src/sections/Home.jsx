import React, { useState } from "react";
import "./Home.css";
import { hardwareStats } from "../data/skills";

function Home() {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="home" className="hero-section">
      {/* Background architectural grid */}
      <div className="hero-grid-overlay" aria-hidden="true" />

      <div className="hero-container">
        {/* LEFT COLUMN: HERO INTRO & ACTIONS */}
        <div className="hero-left-col">
          <div className="hero-eyebrow">
            <span className="live-pulse-dot" />
            <span className="eyebrow-text">
              AVAILABLE FOR VLSI & RTL INTERNSHIPS / ENTRY ROLES
            </span>
          </div>

          <div className="hero-title-area">
            <span className="hero-role-label">ELECTRONICS & COMMUNICATION ENGINEERING</span>
            <h1 className="hero-name">
              NAVEENRAJ<br />
              <span className="hero-role-highlight">VLSI & RTL DESIGN</span>
            </h1>
          </div>

          <p className="hero-bio">
            I am an Electronics and Communication Engineering student passionate about
            VLSI design, digital hardware development,Digital signal processing,FPGA implementation, and
            hardware acceleration. I enjoy turning concepts into working hardware
            systems through RTL design, simulation, and FPGA-based prototyping.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn-primary-orange">
              <span>View Projects</span>
              <span className="btn-icon">→</span>
            </a>
            <a href="#resume" className="btn-secondary-dark">
              <span>Download Resume</span>
              <span className="btn-icon">↓</span>
            </a>
          </div>

          <div className="hero-social-links">
            <span className="social-label">PROFILES:</span>
            <a
              href="https://github.com/naveenbitsathy-ece"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-tag"
            >
              <span>GitHub</span>
              <span className="arrow">↗</span>
            </a>
            <a
              href="https://www.linkedin.com/in/naveenraj07/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-tag"
            >
              <span>LinkedIn</span>
              <span className="arrow">↗</span>
            </a>
            <span className="hero-meta-divider">|</span>

            <a
            href="https://www.bitsathy.ac.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-location-tag"
            >
            BIT · TAMIL NADU, INDIA
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: HARDWARE ARCHITECTURE VISUAL & PROFILE PLACEHOLDER */}
        <div className="hero-right-col">
          {/* Layered Technical Architecture Card inspired by reference design */}
          <div className="tech-visual-stage">
            <div className="card-layer-back back-layer-1" aria-hidden="true" />
            <div className="card-layer-back back-layer-2" aria-hidden="true" />

            <div className="tech-main-card">
              {/* Corner brackets for engineering aesthetic */}
              <div className="corner-bracket top-left" />
              <div className="corner-bracket bottom-right" />

              <div className="card-header-bar">
                <div className="card-header-tag">
                  <span className="status-indicator-dot" />
                  <span>TARGET HARDWARE ARCHITECTURE</span>
                </div>
                <span className="card-clock-spec">100 MHz · SYNTHESIZED</span>
              </div>

              <div className="card-center-spec">
                <span className="spec-subheading">PRIMARY CORE ENGINE</span>
                <div className="spec-display-metric">DSP</div>
                <div className="spec-subtitle">
                  MATLAB & FPGA communication
                </div>
              </div>

              <div className="card-divider-line">
                <span className="divider-accent-pip" />
              </div>

              <div className="card-details-grid">
                <div className="detail-item">
                  <span className="detail-label">RTL LANGUAGE</span>
                  <span className="detail-val">Verilog</span>
                </div>

                
                <div className="detail-item">
                  <span className="detail-label">Tools used</span>
                  <span className="detail-val">  · Matlab  · Vitis  · Vivado</span>
                </div>


                <div className="detail-item">
                  <span className="detail-label">VERIFICATION</span>
                  <span className="detail-val">Vivado · ILA</span>
                </div>
              </div>

 {/* ENGINEERING PROFILE */}
<div className="profile-slot-container">
  {!imageError ? (
    <a
      href="/images/profile/naveenraj.jpg"
      target="_blank"
      rel="noopener noreferrer"
      className="profile-photo-link"
      aria-label="View full engineering profile photograph"
    >
      <div className="profile-photo-wrapper">
        <img
          src="/images/profile/naveenraj.jpg"
          alt="Naveenraj - VLSI & FPGA Engineering Student"
          className="profile-photo-img"
          onError={() => setImageError(true)}
        />

        <div className="profile-photo-caption">
          <span>NAVEENRAJ</span>
          <span className="caption-sub">B.E. ECE Student</span>
        </div>
      </div>
    </a>
  ) : (
    <a
      href="images/certificates/eng_profile.jpeg"
      target="_blank"
      rel="noopener noreferrer"
      className="profile-placeholder-link"
    >
      <div className="profile-placeholder-box">
        <div className="placeholder-icon-symbol">⬡</div>
        <div className="placeholder-info">
          <span className="placeholder-title">
            ENGINEERING PROFILE
          </span>
          <span className="placeholder-hint">
            Click here to see profile 
          </span>
        </div>
      </div>
    </a>
  )}
</div>             
            </div>

            {/* Floating architectural badges */}
            <div className="floating-hardware-badge badge-top-left">
              <span>FPGA FABRIC: ACTIVE</span>
            </div>
            <div className="floating-hardware-badge badge-bottom-right">
              <span>AXI4-LITE BUS</span>
            </div>
          </div>
        </div>
      </div>

      {/* METRICS STRIP (Matches reference 3-column stats bar) */}
      <div className="hero-metrics-container">
        <div className="hero-metrics-bar">
          {hardwareStats.map((stat, idx) => (
            <div key={idx} className="metric-box">
              <div className="metric-box-header">
                <span className="metric-box-label">{stat.label}</span>
                <span className="metric-box-detail">{stat.detail}</span>
              </div>
              <div className="metric-box-content">
                <span className="metric-box-value">{stat.value}</span>
                <span className="metric-box-sub">{stat.sub}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;

