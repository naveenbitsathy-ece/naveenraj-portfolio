import React, { useRef, useState } from "react";
import "./Training.css";
import "./Courses.css";
import SectionHeading from "../components/SectionHeading";

const coursesData = [
    {
  id: 1,
  title: "VLSI Design & Verification Training",
  category: "INDUSTRY-ORIENTED TRAINING",
  audience: "VLSI Aspirants",
  description:
    "Currently undergoing technical training at Maven Silicon, strengthening knowledge in RTL design, Verilog, SystemVerilog, functional verification, and industry-oriented VLSI design methodologies.",
  topics: [
    "Verilog HDL",
    "SystemVerilog",
    "RTL Design",
    "Functional Verification",
    "VLSI Design"
  ],
  date: "ONGOING",
  image: "/images/certificates/maven_certificate.png"
},
      {
    id: 2,
    title: "Cadence 2-Day Technical Workshop",
    category: "TECHNICAL WORKSHOP",
    audience: "First-Year Students",    
    description:
      "Cadence 2-Day workshop on semi-custom and full-custom VLSI design, covering topics such as analog and digital design, hands-on learning, and electronics fundamentals.",
    topics: [
      "Analog Design",
      "Digital Design",
      "Hands-on Learning",
      "Electronics Fundamentals",
    ],
    date: "07 April 2025 – 08 April 2025",
    image: "/images/certificates/entuple_certificate.jpg",
  },
{
  id: 3,
  title: "NPTEL – Forests and Their Management",
  category: "NPTEL ONLINE CERTIFICATION",
  audience: "Online Learners",
  description:
    "Successfully completed the 12-week NPTEL Elite certification course on Forests and Their Management, offered by IIT Kanpur, achieving a consolidated score of 79%.",
  topics: [
    
    "Forest Management",
    "Environmental Studies",
    "Sustainable Practices",
    "Ecosystem Conservation",
  ],
  date: "January 2026 – April 2026",
  image: "/images/certificates/Nptel_certificate.jpg"
}

];

function Courses() {
  const scrollRef = useRef(null);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const scrollCourses = (direction) => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: direction * 360,
      behavior: "smooth",
    });
  };

  return (
    <section id="courses" className="training-section">
      <div className="training-container">
        <SectionHeading
          tag="07 // COURSES & WORKSHOP"
          title="Courses &"
          highlight="Training"
          description="Exploring various courses and training programs to enhance technical skills and knowledge."
        />

        <div className="training-toolbar">
          <span className="training-count">
            {String(coursesData.length).padStart(2, "0")} PROGRAMS
          </span>

          <div className="training-controls">
            <button
              type="button"
              className="training-arrow"
              onClick={() => scrollCourses(-1)}
              aria-label="Scroll courses left"
            >
              ←
            </button>

            <button
              type="button"
              className="training-arrow"
              onClick={() => scrollCourses(1)}
              aria-label="Scroll courses right"
            >
              →
            </button>
          </div>
        </div>

        <div className="training-track" ref={scrollRef}>
          {coursesData.map((course) => (
            <article className="training-card" key={course.id}>
              <button
                type="button"
                className="training-image-button"
                onClick={() => setSelectedCourse(course)}
                aria-label={`View ${course.title} photograph`}
              >
                <div className="training-image-frame">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="training-image"
                    loading="lazy"
                  />
                  <span className="training-view">VIEW IMAGE ↗</span>
                </div>
              </button>

              <div className="training-card-info">
                <span className="training-category">{course.category}</span>

                <h3>{course.title}</h3>

                <p className="training-description">{course.description}</p>

                <div className="training-topics">
                  {course.topics.map((topic, index) => (
                    <span key={index}>{topic}</span>
                  ))}
                </div>

                
              </div>
            </article>
          ))}
        </div>

        <div className="training-scroll-hint">
          <span>←</span>
          <span>SCROLL TO EXPLORE COURSES</span>
          <span>→</span>
        </div>
      </div>

      {selectedCourse && (
        <div
          className="training-modal"
          onClick={() => setSelectedCourse(null)}
        >
          <button
            type="button"
            className="training-modal-close"
            onClick={() => setSelectedCourse(null)}
            aria-label="Close image preview"
          >
            ×
          </button>

          <div
            className="training-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedCourse.image}
              alt={selectedCourse.title}
            />
            <span>{selectedCourse.title}</span>
          </div>
        </div>
      )}
    </section>
  );
}

export default Courses;