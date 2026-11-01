
import React, { useRef } from "react";
import "./Achievements.css";
import SectionHeading from "../components/SectionHeading";

const certificates = [
  {
    id: 1,
    title: "RISC-V Make-a-thon Participation & Award Certificate",
    category: "EVENT & COMPETITION",
    organization: "BIT",
    year: "2026",
    description:
      "Participated in the RISC-V Make-a-thon and secured 3rd place for a hardware-accelerated DNA sequence analysis and motif detection system.",
    tags: ["RISC-V", "FPGA", "Hardware Accelerator"],
    image: "/images/certificates/riscv-hackathon-cert.jpg",
    link: "https://lnkd.in/p/gXGHRHSQ"
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
  const carouselRef = useRef(null);

  const scrollCertificates = (direction) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: direction * carouselRef.current.clientWidth * 0.8,
        behavior: "smooth"
      });
    }
  };

  const openCertificate = (image) => {
    window.open(image, "_blank", "noopener,noreferrer");
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

        {/* MAJOR FEATURED ACHIEVEMENT - UNCHANGED */}

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

        {/* CERTIFICATE CAROUSEL */}

        <div className="certifications-subarea">

          <div className="cert-carousel-header">
            <div>
              <span className="subarea-tag">02 PROGRAMS</span>
            </div>

            <div className="cert-carousel-controls">
              <button
                type="button"
                onClick={() => scrollCertificates(-1)}
                aria-label="Previous certificates"
              >
                ←
              </button>

              <button
                type="button"
                onClick={() => scrollCertificates(1)}
                aria-label="Next certificates"
              >
                →
              </button>
            </div>
          </div>

          <div className="cert-carousel" ref={carouselRef}>
            {certificates.map((certificate) => (
              <article className="cert-carousel-card" key={certificate.id}>

                <button
                  type="button"
                  className="cert-image-button"
                  onClick={() => openCertificate(certificate.image)}
                  aria-label={`View ${certificate.title}`}
                >
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="cert-image"
                    loading="lazy"
                  />
                  <span className="cert-image-overlay">
                    VIEW CERTIFICATE ↗
                  </span>
                </button>

                <div className="cert-carousel-content">

                  <div className="cert-carousel-category">
                    {certificate.category}
                  </div>

                  <h3 className="cert-carousel-title">
                    {certificate.title}
                  </h3>

                  <p className="cert-carousel-description">
                    {certificate.description}
                  </p>

                  <div className="cert-tags">
                    {certificate.tags.map((tag) => (
                      <span className="cert-tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="cert-carousel-footer">
                    <span>FOR: {certificate.organization}</span>
                    <span>{certificate.year}</span>
                  </div>

                  {certificate.link && (
                    <a
                      className="cert-link"
                      href={certificate.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      VIEW EVENT ↗
                    </a>
                  )}

                </div>
              </article>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Achievements;
