
import React, { useRef, useState } from "react";
import "./BeyondEngineering.css";
import SectionHeading from "../components/SectionHeading";

const contributions = [
  {
    id: 1,
    title: "Voluntary Blood Donation",
    category: "SOCIAL CONTRIBUTION",
    description:
      "A personal contribution towards saving lives through voluntary blood donation.",
    date: "21 April 2025",
    image: "images/certificates/blood_donation.jpeg"
  },
   {
    id: 2,
    title: "Voluntary Blood Donation",
    category: "SOCIAL CONTRIBUTION",
    description:
      "A personal contribution towards saving lives through voluntary blood donation.",
    date: "23 August 2025",
    image: "images/certificates/blood_donation_2.jpeg"
  },
   {
    id: 3,
    title: "Voluntary Blood Donation",
    category: "SOCIAL CONTRIBUTION",
    description:
      "A personal contribution towards saving lives through voluntary blood donation.",
    date: "23 August 2025",
    image: "images/certificates/blood_vgm.jpeg"
  },
   {
    id: 3,
    title: "Voluntary Blood Donation",
    category: "SOCIAL CONTRIBUTION",
    description:
      "A personal contribution towards saving lives through voluntary blood donation.",
    date: "30 june 2026",
    image: "images/certificates/blood_donation_raj.jpeg"
  },
];

function BeyondEngineering() {
  const scrollRef = useRef(null);
  const [selectedContribution, setSelectedContribution] = useState(null);

  const scrollContributions = (direction) => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: direction * 360,
      behavior: "smooth"
    });
  };

  return (
    <section id="beyond-engineering" className="beyond-section">
      <div className="beyond-container">

        <SectionHeading
          tag=" 11 //SOCIAL IMPACT & CONTRIBUTIONS"
          title="Beyond"
          highlight="Engineering"
          description="Beyond academics and technology, I believe in giving back to society through meaningful actions and voluntary contributions."
        />

        <div className="beyond-quote">
          <span className="beyond-quote-label">// A THOUGHT TO LIVE BY</span>
          <p>உதிரம் கொடுப்போம், உயிர்களைக் காப்போம்!</p>
          <span className="beyond-quote-translation">
            Let us donate blood and save lives.
          </span>
        </div>

        <div className="beyond-toolbar">
          <span className="beyond-count">
            {String(contributions.length).padStart(2, "0")} CONTRIBUTIONS
          </span>

          <div className="beyond-controls">
            <button
              type="button"
              className="beyond-arrow"
              onClick={() => scrollContributions(-1)}
              aria-label="Scroll contributions left"
            >
              ←
            </button>

            <button
              type="button"
              className="beyond-arrow"
              onClick={() => scrollContributions(1)}
              aria-label="Scroll contributions right"
            >
              →
            </button>
          </div>
        </div>

        <div className="beyond-track" ref={scrollRef}>
          {contributions.map((item) => (
            <article className="beyond-card" key={item.id}>

              <button
                type="button"
                className="beyond-image-button"
                onClick={() => setSelectedContribution(item)}
                aria-label={`View ${item.title} photograph`}
              >
                <div className="beyond-image-frame">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="beyond-image"
                    loading="lazy"
                  />

                  <span className="beyond-view">
                    VIEW IMAGE ↗
                  </span>
                </div>
              </button>

              <div className="beyond-card-info">
                <span className="beyond-category">
                  {item.category}
                </span>

                <h3>{item.title}</h3>

                <p className="beyond-description">
                  {item.description}
                </p>

                <div className="beyond-card-footer">
                  <span>VOLUNTARY SERVICE</span>
                  <span>{item.date}</span>
                </div>
              </div>

            </article>
          ))}
        </div>

        <div className="beyond-scroll-hint">
          <span>←</span>
          <span>SCROLL TO EXPLORE CONTRIBUTIONS</span>
          <span>→</span>
        </div>

      </div>

      {selectedContribution && (
        <div
          className="beyond-modal"
          onClick={() => setSelectedContribution(null)}
        >
          <button
            type="button"
            className="beyond-modal-close"
            onClick={() => setSelectedContribution(null)}
            aria-label="Close image preview"
          >
            ×
          </button>

          <div
            className="beyond-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedContribution.image}
              alt={selectedContribution.title}
            />

            <span>{selectedContribution.title}</span>
          </div>
        </div>
      )}

    </section>
  );
}

export default BeyondEngineering;
