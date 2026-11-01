
import React, { useRef, useState } from "react";
import "./Participation.css";
import SectionHeading from "../components/SectionHeading";

const certificates = [
   {
    id: 1,
    title: "Bit Hackathon 2025",
    organization: "Bannari Amman Institute of Technology",
    year: "2025",
    category: "HACKATHON",
    image: "/images/certificates/bithack_1.jpeg"
  },
     {
    id: 2,
    title: "Bit Hackathon 2025 Season 2",
    organization: "Bannari Amman Institute of Technology",
    year: "2025",
    category: "HACKATHON",
    image: "/images/certificates/bit_hackathon_2.jpeg"
  },
       {
    id: 3,
    title: "Robo soccer",
    organization: "Coimbatore Institute of Technology",
    year: "2025",
    category: "HACKATHON",
    image: "/images/certificates/cit_soccer.jpeg"
  },
    {  id: 4,
    title: "Robo Rally",
    organization: "Coimbatore Institute of Technology",
    year: "2025",
    category: "HACKATHON",
    image: "/images/certificates/Robo_rally.jpg"
  },
         {
    id: 4,
    title: "Hackzilla",
    organization: "KPR Institute of Technology",
    year: "2025",
    category: "HACKATHON",
    image: "/images/certificates/kpr_event.jpeg"
  },
         {
    id: 5,
    title: "Sakthi hackathon",
    organization: "Dr.Mahalingam college of engineering and technology",
    year: "2025",
    category: "HACKATHON",
    image: "/images/certificates/sakthi_hackathon.jpeg"
  },
         {
    id: 6,
    title: "Utsava'26",
    organization: "Sri Ramakrishna engineering college",
    year: "2026",
    category: "HACKATHON",
    image: "/images/certificates/SREC_certificate.jpg"
  },

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
          tag="PARTICIPATION & RECOGNITION"
          title="Certificates &"
          highlight="Documents"
          description="Showcasing hands-on exposure to technical competitions, 
          innovation challenges, and collaborative engineering experiences."
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
                <span className="participation-category">
                  {certificate.category}
                </span>

                <h3>{certificate.title}</h3>

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
