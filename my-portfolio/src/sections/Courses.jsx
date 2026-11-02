import React, { useRef, useState } from "react";
import "./Training.css";
import "./Courses.css";
import SectionHeading from "../components/SectionHeading";

const coursesData = [
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
    id: 2,
    title: "Student Mentor – Analog & Digital Design",
    category: "STUDENT MENTORSHIP",
    audience: "First-Year Students",
    description:
      "Introduced fundamental electronic concepts, practical circuit design, and hardware implementation while encouraging technical exploration and problem-solving.",
    topics: [
      "Analog Design",
      "Digital Design",
      "Hands-on Learning",
      "Electronics Fundamentals",
    ],
    date: "10 October 2025 – 29 November 2025",
    image: "/images/certificates/training_image.jpg",
  },
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

                <div className="training-card-footer">
                  <span>FOR: {course.audience.toUpperCase()}</span>
                  <span>{course.date}</span>
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