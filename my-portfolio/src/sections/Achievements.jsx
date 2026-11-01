import React, { useRef, useState } from "react";
import "./Training.css";
import "./Achievements.css";
import SectionHeading from "../components/SectionHeading";

const certificates = [
  {
    id: 1,
    title: "RISC-V Make-a-thon Participation & Award Certificate",
    category: "EVENTS & COMPETITION",
    organization: "BIT",
    year: "2026",
    description:
      "Participated in the RISC-V Make-a-thon and secured 3rd place for a hardware-accelerated DNA sequence analysis and motif detection system.",
    tags: ["RISC-V", "FPGA", "Hardware Accelerator"],
    image: "/images/certificates/riscv-hackathon-cert.jpg",
    link: "https://lnkd.in/p/gXGHRHSQ",
  },
  {
    id: 2,
    title: "Cadence 2-Day Technical Workshop",
    category: "TECHNICAL WORKSHOP",
    organization: "BIT",
    year: "2025",
    description:
      "Two days of hands-on training on semi-custom and full-custom design using Cadence EDA tools by Entuple Technology.",
    tags: ["Semi-Custom", "Full-Custom", "Cadence EDA"],
    image: "/images/certificates/entuple_certificate.jpg",
    link: "https://lnkd.in/p/ghrb-v7C"
  },
   {
    id: 3,
    title: "UTSAVA'26 – Technical Event",
    category: "EVENT & COMPETITION",
    organization: "SREC",
    year: "2026",
    description:
      "Participated in UTSAVA'26, a technical event organized by Sri Ramakrishna Engineering College, Coimbatore.",
    tags: ["Technical Event", "Innovation", "Problem Solving"],
    image: "/images/certificates/SREC_certificate.jpg",
    link: null
  }
];

function Achievements() {
  const scrollRef = useRef(null);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const scrollCertificates = (direction) => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: direction * 360,
      behavior: "smooth",
    });
  };

  return (
    <section id="achievements" className="achievements-section">
      <div className="achievements-container">
        <SectionHeading
          tag="02 // ACHIEVEMENTS"
          title="Major"
          highlight="Achievements"
          description="Recognitions, competitions, and certifications that reflect hands-on engineering work and technical problem solving."
        />

        {/* Hero Card Banner */}
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
                <span className="event-host">
                  Bannari Amman Institute of Technology
                </span>
              </div>

              <h3 className="achievement-title">
                PicoRV32-Powered Hardware-Accelerated DNA Sequence Analysis
                and Motif Detection System on FPGA
              </h3>

              <p className="achievement-desc">
                Awarded 3rd Place for developing an end-to-end
                hardware-accelerated bioinformatics coprocessor.
                Integrated an open-source 32-bit RISC-V soft processor
                (PicoRV32) with a custom Verilog accelerator executing
                the Smith–Waterman dynamic programming algorithm for
                DNA sequence alignment and motif detection.
              </p>

              <div className="achievement-team-row">
                <div className="team-unit">
                  <span className="unit-label">TEAM MEMBERS:</span>
                  <span className="unit-value">
                    · Harish · Naveenraj · Rahul Sivesh
                  </span>
                </div>

                <div className="team-unit">
                  <span className="unit-label">HARDWARE DOMAIN:</span>
                  <span className="unit-value">
                    RISC-V Soft Core & Custom RTL Coprocessor
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certificate Section formatted like Training track */}
        <div className="training-toolbar">
          <span className="training-count">
            {String(certificates.length).padStart(2, "0")} CERTIFICATES
          </span>

          <div className="training-controls">
            <button
              type="button"
              className="training-arrow"
              onClick={() => scrollCertificates(-1)}
              aria-label="Scroll certificates left"
            >
              ←
            </button>

            <button
              type="button"
              className="training-arrow"
              onClick={() => scrollCertificates(1)}
              aria-label="Scroll certificates right"
            >
              →
            </button>
          </div>
        </div>

        <div className="training-track" ref={scrollRef}>
          {certificates.map((cert) => (
            <article className="training-card" key={cert.id}>
              <button
                type="button"
                className="training-image-button"
                onClick={() => setSelectedCertificate(cert)}
                aria-label={`View ${cert.title}`}
              >
                <div className="training-image-frame">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="training-image"
                    loading="lazy"
                  />
                  <span className="training-view">VIEW CERTIFICATE ↗</span>
                </div>
              </button>

              <div className="training-card-info">
                <span className="training-category">{cert.category}</span>

                <h3>{cert.title}</h3>

                <p className="training-description">{cert.description}</p>

                <div className="training-topics">
                  {cert.tags.map((tag, index) => (
                    <span key={index}>{tag}</span>
                  ))}
                </div>

                <div className="training-card-footer">
                  <span>FOR: {cert.organization}</span>
                  <span>{cert.year}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="training-scroll-hint">
          <span>←</span>
          <span>SCROLL TO EXPLORE CERTIFICATES</span>
          <span>→</span>
        </div>
      </div>

      {/* Modal */}
      {selectedCertificate && (
        <div
          className="training-modal"
          onClick={() => setSelectedCertificate(null)}
        >
          <button
            type="button"
            className="training-modal-close"
            onClick={() => setSelectedCertificate(null)}
            aria-label="Close certificate preview"
          >
            ×
          </button>

          <div
            className="training-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedCertificate.image}
              alt={selectedCertificate.title}
            />
            <span>{selectedCertificate.title}</span>
          </div>
        </div>
      )}
    </section>
  );
}

export default Achievements;