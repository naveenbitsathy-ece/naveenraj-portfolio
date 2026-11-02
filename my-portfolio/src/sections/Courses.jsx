
import React, { useRef, useState } from "react";
import "./Courses.css";
import SectionHeading from "../components/SectionHeading";

const Courses = [
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

function Courses() {
  const scrollRef = useRef(null);
  const [selectedCourses, setSelectedCourses] = useState(null);

  const scrollCourses = (direction) => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: direction * 360,
      behavior: "smooth"
    });
  };

  return (
    <section id="courses" className="courses-section">
      <div className="courses-container">

        <SectionHeading
          tag="07 // Courses & Certifications"
          title="Courses &"
          highlight="Certifications"
          description="Participating in technical courses to strengthen my knowledge and explore emerging engineering technologies"
        />

        <div className="courses-toolbar">
          <span className="courses-count">
            {String(Courses.length).padStart(2, "0")} PROGRAMS
          </span>

          <div className="courses-controls">
            <button
              type="button"
              className="courses-arrow"
              onClick={() => scrollCourses(-1)}
              aria-label="Scroll courses left"
            >
              ←
            </button>

            <button
              type="button"
              className="courses-arrow"
              onClick={() => scrollCourses(1)}
              aria-label="Scroll courses right"
            >
              →
            </button>
          </div>
        </div>

        <div className="courses-track" ref={scrollRef}>
          {Courses.map((program) => (
            <article className="courses-card" key={program.id}>

              <button
                type="button"
                className="courses-image-button"
                onClick={() => setSelectedCourses(program)}
                aria-label={`View ${program.title} photograph`}
              >
                <div className="courses-image-frame">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="courses-image"
                    loading="lazy"
                  />

                  <span className="courses-view">
                    VIEW IMAGE ↗
                  </span>
                </div>
              </button>

              <div className="courses-card-info">
                <span className="courses-category">
                  {program.category}
                </span>

                <h3>{program.title}</h3>

                <p className="courses-description">
                  {program.description}
                </p>

                <div className="courses-topics">
                  {program.topics.map((topic, index) => (
                    <span key={index}>{topic}</span>
                  ))}
                </div>

                <div className="courses-card-footer">
                  <span>FOR: {program.audience.toUpperCase()}</span>
                  <span>{program.date}</span>
                </div>
              </div>

            </article>
          ))}
        </div>

        <div className="courses-scroll-hint">
          <span>←</span>
          <span>SCROLL TO EXPLORE COURSES</span>
          <span>→</span>
        </div>

      </div>

      {selectedCourses && (
        <div
          className="courses-modal"
          onClick={() => setSelectedCourses(null)}
        >
          <button
            type="button"
            className="courses-modal-close"
            onClick={() => setSelectedCourses(null)}
            aria-label="Close image preview"
          >
            ×
          </button>

          <div
            className="courses-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedCourses.image}
              alt={selectedCourses.title}
            />

            <span>{selectedCourses.title}</span>
          </div>
        </div>
      )}

    </section>
  );
}

export default Courses;
