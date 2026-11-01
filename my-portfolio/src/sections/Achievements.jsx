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

            




import React, { useRef, useState } from "react";
import "./Participation.css";
import SectionHeading from "../components/SectionHeading";

const certificates = [
  {
    id: 1,
    title: "RISC-V Make-a-thon Participation & Award Certificate",
    category: "EVENT & COMPETITION",
    organization: "Bannari Amman Institute of Technology",
    year: "2026",
    description:
      "Participated in the RISC-V Make-a-thon and secured 3rd place for a hardware-accelerated DNA sequence analysis and motif detection system.",
    image: "/images/certificates/riscv-hackathon-cert.jpg",
    link: "https://lnkd.in/p/gXGHRHSQ"
  },
  {
    id: 2,
    title: "Cadence 2-Day Technical Workshop",
    category: "TECHNICAL WORKSHOP",
    organization: "Entuple Technology",
    year: "2025",
    description:
      "Completed two days of hands-on training covering semi-custom and full-custom VLSI design using Cadence EDA tools.",
    image: "/images/certificates/entuple_certificate.jpg",
    link: "https://lnkd.in/p/ghrb-v7C"
  },
  {
    id: 3,
    title: "UTSAVA'26 – Technical Event",
    category: "EVENT & COMPETITION",
    organization: "Sri Ramakrishna Engineering College, Coimbatore",
    year: "2026",
    description:
      "Participated in UTSAVA'26, a technical event organized by Sri Ramakrishna Engineering College.",
    image: "/images/certificates/SREC_certificate.jpg",
    link: null
  }
];

function Participation() {
  const scrollRef = useRef(null);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const scrollCertificates = (direction) => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: direction * 360,
      behavior: "smooth"
    });
  };

  return (
    <section id="participation" className="participation-section">
      <div className="participation-container">

        <SectionHeading
          tag="09 // PARTICIPATION & RECOGNITION"
          title="Certificates &"
          highlight="Documents"
          description="Showcasing hands-on exposure to technical competitions, innovation challenges, and collaborative engineering experiences."
        />

        <div className="participation-toolbar">
          <span className="participation-count">
            {String(certificates.length).padStart(2, "0")} DOCUMENTS
          </span>

          <div className="participation-controls">
            <button
              type="button"
              className="participation-arrow"
              onClick={() => scrollCertificates(-1)}
              aria-label="Scroll certificates left"
            >
              ←
            </button>

            <button
              type="button"
              className="participation-arrow"
              onClick={() => scrollCertificates(1)}
              aria-label="Scroll certificates right"
            >
              →
            </button>
          </div>
        </div>

        <div className="participation-track" ref={scrollRef}>
          {certificates.map((certificate) => (
            <article className="participation-card" key={certificate.id}>

              <button
                type="button"
                className="participation-image-button"
                onClick={() => setSelectedCertificate(certificate)}
                aria-label={`View ${certificate.title} certificate`}
              >
                <div className="participation-image-frame">
                  <img
                    src={certificate.image}
                    alt={`${certificate.title} certificate`}
                    className="participation-image"
                    loading="lazy"
                  />

                  <span className="participation-view">
                    VIEW DOCUMENT ↗
                  </span>
                </div>
              </button>

              <div className="participation-card-info">

                <div className="participation-card-top">
                  {certificate.link ? (
                    <a
                      className="participation-category"
                      href={certificate.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      [{certificate.category}]
                    </a>
                  ) : (
                    <span className="participation-category">
                      [{certificate.category}]
                    </span>
                  )}
                </div>

                <h3>{certificate.title}</h3>

                <p className="participation-description">
                  {certificate.description}
                </p>

                <div className="participation-card-footer">
                  <span>{certificate.organization}</span>
                  <span className="participation-year">
                    {certificate.year}
                  </span>
                </div>

              </div>
            </article>
          ))}
        </div>

        <div className="participation-scroll-hint">
          <span>←</span>
          <span>SCROLL TO EXPLORE DOCUMENTS</span>
          <span>→</span>
        </div>

      </div>

      {selectedCertificate && (
        <div
          className="participation-modal"
          onClick={() => setSelectedCertificate(null)}
        >
          <button
            type="button"
            className="participation-modal-close"
            onClick={() => setSelectedCertificate(null)}
            aria-label="Close certificate preview"
          >
            ×
          </button>

          <div
            className="participation-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedCertificate.image}
              alt={`${selectedCertificate.title} full certificate`}
            />

            <div className="participation-modal-caption">
              {selectedCertificate.title}
            </div>
          </div>
        </div>
      )}

    </section>
  );
}

export default Participation;


          </div>
        </div>
      </div>
    </section>
  );
}

export default Achievements;

