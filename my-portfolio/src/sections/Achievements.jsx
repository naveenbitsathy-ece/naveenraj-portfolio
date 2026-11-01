
import React, { useRef, useState } from "react";
import "./Training.css";
import "./Achievements.css";
import SectionHeading from "../components/SectionHeading";

const trainingPrograms = [
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

  
];

function Training() {
  const scrollRef = useRef(null);
  const [selectedTraining, setSelectedTraining] = useState(null);

  const scrollTraining = (direction) => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: direction * 360,
      behavior: "smooth"
    });
  };

  return (
    <section id="training" className="training-section">
      <div className="training-container">

        <SectionHeading
          tag="11 // TRAINING & KNOWLEDGE SHARING"
          title="Training &"
          highlight="Mentorship"
          description="Sharing technical knowledge, guiding fellow students, and creating opportunities to learn engineering concepts through practical exposure."
        />

        <div className="training-toolbar">
          <span className="training-count">
            {String(trainingPrograms.length).padStart(2, "0")} PROGRAMS
          </span>

          <div className="training-controls">
            <button
              type="button"
              className="training-arrow"
              onClick={() => scrollTraining(-1)}
              aria-label="Scroll training left"
            >
              ←
            </button>

            <button
              type="button"
              className="training-arrow"
              onClick={() => scrollTraining(1)}
              aria-label="Scroll training right"
            >
              →
            </button>
          </div>
        </div>

        <div className="training-track" ref={scrollRef}>
          {trainingPrograms.map((program) => (
            <article className="training-card" key={program.id}>

              <button
                type="button"
                className="training-image-button"
                onClick={() => setSelectedTraining(program)}
                aria-label={`View ${program.title} photograph`}
              >
                <div className="training-image-frame">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="training-image"
                    loading="lazy"
                  />

                  <span className="training-view">
                    VIEW IMAGE ↗
                  </span>
                </div>
              </button>

              <div className="training-card-info">
                <span className="training-category">
                  {program.category}
                </span>

                <h3>{program.title}</h3>

                <p className="training-description">
                  {program.description}
                </p>

                <div className="training-topics">
                  {program.topics.map((topic, index) => (
                    <span key={index}>{topic}</span>
                  ))}
                </div>

                <div className="training-card-footer">
                  <span>FOR: {program.audience.toUpperCase()}</span>
                  <span>{program.date}</span>
                </div>
              </div>

            </article>
          ))}
        </div>

        <div className="training-scroll-hint">
          <span>←</span>
          <span>SCROLL TO EXPLORE TRAINING</span>
          <span>→</span>
        </div>

      </div>

      {selectedTraining && (
        <div
          className="training-modal"
          onClick={() => setSelectedTraining(null)}
        >
          <button
            type="button"
            className="training-modal-close"
            onClick={() => setSelectedTraining(null)}
            aria-label="Close image preview"
          >
            ×
          </button>

          <div
            className="training-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedTraining.image}
              alt={selectedTraining.title}
            />

            <span>{selectedTraining.title}</span>
          </div>
        </div>
      )}

    </section>
  );
}

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
