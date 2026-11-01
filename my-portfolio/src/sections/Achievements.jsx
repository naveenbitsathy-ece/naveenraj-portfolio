import React, { useState } from "react";
import "./Achievements.css";
import SectionHeading from "../components/SectionHeading";

function Achievements() {
  const [certImgError, setCertImgError] = useState(false);

  return (
    <section id="achievements" className="achievements-section">
      <div className="achievements-container">
        <SectionHeading
          tag="04 // HONORS & RECOGNITION"
          title="Achievements &"
          highlight="Certifications"
          description="Competitive hackathons, algorithmic FPGA design competitions, and technical skill validations."
        />




        {/* MAJOR FEATURED ACHIEVEMENT CARD */}
        <div className="major-achievement-hero-card">
          <div className="achievement-corner top-l" />
          <div className="achievement-corner bottom-r" />

          <div className="achievement-content-row">
            <div className="achievement-award-mark">
              <span className="trophy-symbol">★</span>
              <span className="award-rank">3RD PLACE</span>
              <span className="award-tier">BRONZE RECOGNITION</span>
            </div>

            <div className="achievement-details">
              <div className="achievement-meta">
                <span className="event-name">RISC-V MAKE-A-THON</span>
                <span className="meta-sep">/</span>
                <span className="event-host">Bannari Amman Institute of Technology</span>
              </div>

              <h3 className="achievement-title">
                PicoRV32-Powered Hardware-Accelerated DNA Sequence Analysis and Motif Detection System on FPGA
              </h3>

              <p className="achievement-desc">
                Awarded 3rd Place for developing an end-to-end hardware-accelerated bioinformatics
                coprocessor. Integrated an open-source 32-bit RISC-V soft processor (PicoRV32) with a
                custom Verilog accelerator executing the Smith–Waterman dynamic programming algorithm,
                achieving dramatic speedup in local DNA sequence alignment and motif detection.
              </p>

              <div className="achievement-team-row">
                <div className="team-unit">
                  <span className="unit-label">TEAM MEMBERS:</span>
                  <span className="unit-value">· Harish · Naveenraj · Rahul sivesh</span>
                </div>
                <div className="team-unit">
                  <span className="unit-label">HARDWARE DOMAIN:</span>
                  <span className="unit-value">RISC-V Soft Core & Custom RTL Coprocessor</span>
                </div>
              </div>
            </div>
          </div>
        </div>












        {/* WORKSHOPS, HACKATHONS & CERTIFICATIONS GRID (With clear placeholders) */}
        <div className="certifications-subarea">
          <div className="subarea-header">
            <span className="subarea-tag">// CERTIFICATIONS, WORKSHOPS & TECHNICAL EVENTS</span>
            <span className="subarea-notice">Verified credentials & academic participation</span>
          </div>

          <div className="certifications-grid">

            



   {/* ITEM 1: RISC-V Make-a-thon Certificate Placeholder */}
<div className="cert-card">
  <div className="cert-card-top">
    
    <a
  className="cert-type"
  href="https://lnkd.in/p/gXGHRHSQ"
  target="_blank"
  rel="noopener noreferrer"
>
  [Event & competition]
</a>

    <span className="cert-date">[BIT · 2026]</span>
  </div>

  <h4 className="cert-name">RISC-V Make-a-thon Participation & Award Certificate </h4>

  <p className="cert-issuer">
   Organized by Bannari Amman Institute of Technology
  </p>

         <div
  className="cert-placeholder-banner"
  onClick={() =>
    window.open(
      "/images/certificates/riscv-hackathon-cert.jpg",
      "_blank"
    )
  }
  role="button"
  tabIndex={0}
  onKeyDown={(e) => {
    if (e.key === "Enter" || e.key === " ") {
      window.open(
        "/images/certificates/riscv-hackathon-cert.jpg",
        "_blank"
      );
    }
  }}
>
  <span className="placeholder-chip">CERTIFICATE</span>

  <span className="placeholder-path">
    Click here to see the certificate
  </span>
</div> 

</div>
 



 {/* ITEM 2: Cadence 2-Day Workshop */} 
<div className="cert-card">
  <div className="cert-card-top">
    
    <a
  className="cert-type"
  href="https://lnkd.in/p/ghrb-v7C"
  target="_blank"
  rel="noopener noreferrer"
>
  [TECHNICAL WORKSHOP]
</a>

    <span className="cert-date">[BIT · 2025]</span>
  </div>

  <h4 className="cert-name">Cadence 2-Day Technical Workshop </h4>

  <p className="cert-issuer">
    Two days handson training on semi custom and full custom in cadence eda tool  by entuple technology
  </p>

         <div
  className="cert-placeholder-banner"
  onClick={() =>
    window.open(
      "/images/certificates/entuple_certificate.jpg",
      "_blank"
    )
  }
  role="button"
  tabIndex={0}
  onKeyDown={(e) => {
    if (e.key === "Enter" || e.key === " ") {
      window.open(
        "/images/certificates/entuple_certificate.jpg",
        "_blank"
      );
    }
  }}
>
  <span className="placeholder-chip">CERTIFICATE</span>

  <span className="placeholder-path">
    Click here to see the certificate
  </span>
</div> 

</div>
       
       
{/* ITEM 3: UTSAVA competition */}

<div className="cert-card">
  <div className="cert-card-top">
    
    <a
  className="cert-type"
  href="https://lnkd.in/p/ghrb-v7C"
  target="_blank"
  rel="noopener noreferrer"
>
  [TECHNICAL WORKSHOP]
</a>

    <span className="cert-date">[BIT · 2025]</span>
  </div>

  <h4 className="cert-name">UTSAVA’26, a technical event </h4>

  <p className="cert-issuer">
   Organized by Sri Ramakrishna Engineering College, Coimbatore 
  </p>

         <div
  className="cert-placeholder-banner"
  onClick={() =>
    window.open(
      "/images/certificates/SREC_certificate.jpg",
      "_blank"
    )
  }
  role="button"
  tabIndex={0}
  onKeyDown={(e) => {
    if (e.key === "Enter" || e.key === " ") {
      window.open(
        "/images/certificates/SREC_certificate.jpg",
        "_blank"
      );
    }
  }}
>
  <span className="placeholder-chip">CERTIFICATE</span>

  <span className="placeholder-path">
    Click here to see the certificate
  </span>
</div> 

</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Achievements;

