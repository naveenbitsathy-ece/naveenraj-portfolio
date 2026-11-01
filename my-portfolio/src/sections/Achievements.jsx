
import React from "react";
import "./Achievements.css";
import SectionHeading from "../components/SectionHeading";

// CERTIFICATE DATA
const certificates = [
  {
    id: 1,
    title: "RISC-V Make-a-thon Participation & Award Certificate",
    category: "EVENT & COMPETITION",
    date: "BIT · 2026",
    issuer: "Organized by Bannari Amman Institute of Technology",
    image: "/images/certificates/riscv-hackathon-cert.jpg",
    link: "https://lnkd.in/p/gXGHRHSQ"
  },
  {
    id: 2,
    title: "Cadence 2-Day Technical Workshop",
    category: "TECHNICAL WORKSHOP",
    date: "BIT · 2025",
    issuer:
      "Two days hands-on training on semi-custom and full-custom design using Cadence EDA tools by Entuple Technology.",
    image: "/images/certificates/entuple_certificate.jpg",
    link: "https://lnkd.in/p/ghrb-v7C"
  },
  {
    id: 3,
    title: "UTSAVA'26 – Technical Event",
    category: "EVENT & COMPETITION",
    date: "S· 2026",
    issuer:
      "Organized by Sri Ramakrishna Engineering College, Coimbatore.",
    image: "/images/certificates/SREC_certificate.jpg",
    link: null
  }
];

function Achievements() {
  const openCertificate = (image) => {
    window.open(image, "_blank", "noopener,noreferrer");
  };

  const handleCertificateKeyDown = (e, image) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openCertificate(image);
    }
  };

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

        {/* CERTIFICATIONS, WORKSHOPS & EVENTS */}

        <div className="certifications-subarea">

          <div className="subarea-header">
            <span className="subarea-tag">
              // CERTIFICATIONS, WORKSHOPS & TECHNICAL EVENTS
            </span>

            <span className="subarea-notice">
              Verified credentials & academic participation
            </span>
          </div>

          <div className="certifications-grid">

            {certificates.map((certificate) => (
              <div className="cert-card" key={certificate.id}>

                <div className="cert-card-top">

                  {certificate.link ? (
                    <a
                      className="cert-type"
                      href={certificate.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      [{certificate.category}]
                    </a>
                  ) : (
                    <span className="cert-type">
                      [{certificate.category}]
                    </span>
                  )}

                  <span className="cert-date">
                    [{certificate.date}]
                  </span>

                </div>

                <h4 className="cert-name">
                  {certificate.title}
                </h4>

                <p className="cert-issuer">
                  {certificate.issuer}
                </p>

                <div
                  className="cert-placeholder-banner"
                  onClick={() => openCertificate(certificate.image)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) =>
                    handleCertificateKeyDown(e, certificate.image)
                  }
                  aria-label={`View ${certificate.title}`}
                >
                  <span className="placeholder-chip">
                    CERTIFICATE
                  </span>

                  <span className="placeholder-path">
                    Click here to see the certificate
                  </span>
                </div>

              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}

export default Achievements;
