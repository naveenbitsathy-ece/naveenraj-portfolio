
import React, { useRef, useState } from "react";
import "./Training.css";
import SectionHeading from "../components/SectionHeading";

const trainingPrograms = [
  {
    id: 1,
    title: "Semi-Custom VLSI Design Training",
    category: "TECHNICAL TRAINING",
    audience: "Students",
    description:
      "Conducting technical training sessions for students, introducing semi-custom VLSI design concepts, ASIC design flow, and industry-relevant EDA tools.",
    topics: ["Semi-Custom Design", "ASIC Flow", "EDA Tools"],
    date: "08 August 2025",
    image: "images/certificates/Cadence training.jpg"
  },
 {
  id: 1,
  title: "Student Mentor – Analog & Digital Design",
  category: "STUDENT MENTORSHIP",
  audience: "First-Year Students",
  description:
    "Introduced fundamental electronic concepts, practical circuit design, and hardware implementation while encouraging technical exploration and problem-solving.",
 
 
    topics: [
    "Analog Design",
    "Digital Design",
    "Hands-on Learning",
    "Electronics Fundamentals"
  ],
  date: "10 October 2025 – 29 November 2025",
  image: "/images/certificates/training_image.jpg"
}
  
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
          tag="09 // TRAINING & KNOWLEDGE SHARING"
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

export default Training;
