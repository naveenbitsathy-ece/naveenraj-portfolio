import React from "react";
import "./Education.css";
import SectionHeading from "../components/SectionHeading";

function Education() {
  return (
    <section id="education" className="education-section">
      <div className="education-container">
        <SectionHeading
          tag="05 // ACADEMIC FOUNDATION"
          title="Education &"
          highlight="Credentials"
          description="Formal degree coursework in digital electronics, microprocessors, and integrated circuit engineering."
        />

        <div className="education-timeline-layout">
          {/* DEGREE ITEM */}
          <article className="education-card">
            <div className="education-time-col">
              <span className="edu-tag">[UNDERGRADUATE DEGREE]</span>
              <span className="edu-period">[Academic Years Placeholder]</span>
              <span className="edu-status-badge">CURRENTLY ENROLLED</span>
            </div>

            <div className="education-detail-col">
              <div className="edu-institution-line">
                <h3 className="edu-degree">Bachelor of Engineering (B.E.)</h3>
                <span className="edu-institution">
                  Bannari Amman Institute of Technology (BIT)
                </span>
              </div>

              <div className="edu-dept-location">
                <span className="edu-dept">
                  Department of Electronics and Communication Engineering
                </span>
                <span className="edu-sep">·</span>
                <span className="edu-location">Tamil Nadu, India</span>
              </div>

              <p className="edu-desc">
                Engaged in foundational and advanced studies spanning digital circuit
                theory, VLSI design principles, HDL programming (Verilog/SystemVerilog),
                microprocessor architectures, signal processing algorithms, and hardware
                interfacing.
              </p>

              {/* RELEVANT COURSEWORK TAGS */}
              <div className="coursework-block">
                <span className="coursework-title">// CORE SUBJECTS & LABS:</span>
                <div className="coursework-tags">
                  <span className="course-tag">VLSI Design</span>
                  <span className="course-tag">Digital Electronics & Logic Design</span>
                  <span className="course-tag">Microprocessors & Microcontrollers</span>
                  <span className="course-tag">Digital Signal Processing (DSP)</span>
                  <span className="course-tag">Signals and Systems</span>
                  <span className="course-tag">Computer Architecture</span>
                  <span className="course-tag">Embedded Systems</span>
                  <span className="course-tag">Electronic Circuits</span>
                </div>
              </div>

              {/* ACADEMIC METRICS PLACEHOLDERS */}
              <div className="academic-placeholders-row">
                <div className="academic-stat-box">
                  <span className="stat-label">CGPA / PERCENTAGE</span>
                  <span className="stat-placeholder">[7.98]</span>
                </div>
                <div className="academic-stat-box">
                  <span className="stat-label">GRADUATION YEAR</span>
                  <span className="stat-placeholder">[2028]</span>
                </div>
                <div className="academic-stat-box">
                  <span className="stat-label">AFFILIATION</span>
                  <span className="stat-value">Anna University / Autonomous BIT</span>
                </div>
              </div>
            </div>
          </article>
        </div>



      
       {/* school education */}
        <div className="education-timeline-layout">
          {/* DEGREE ITEM */}
          <article className="education-card">
            <div className="education-time-col">
              <span className="edu-tag">[Higher Secondary]</span>
              <span className="edu-period">[2022 – 2024]</span>
              <span className="edu-status-badge">COMPLETED</span>
            </div>

            <div className="education-detail-col">
              <div className="edu-institution-line">
                <h3 className="edu-degree">Higher Secondary Education (HSE)</h3>
                <span className="edu-institution">
                  Saraswathi matric higher secondary school 
                </span>
              </div>

              <div className="edu-dept-location">
                <span className="edu-dept">
                  Group : Maths biology
                </span>
                <span className="edu-sep">·</span>
                <span className="edu-location">Tamil Nadu, India</span>
              </div>

              <p className="edu-desc">
                Engaged in higher secondary education, developed a strong foundation in mathematics, 
                physics, chemistry and Biology with an interest in electronics, 
                analytical problem-solving, and technology.
              </p>

              {/* RELEVANT COURSEWORK TAGS */}
              <div className="coursework-block">
                <span className="coursework-title">// SUBJECTS :</span>
                <div className="coursework-tags">
                  <span className="course-tag">Mathematics</span>
                  <span className="course-tag">Physics</span>
                  <span className="course-tag">Chemistry</span>
                  <span className="course-tag">Biology</span>
                </div>
              </div>

              {/* ACADEMIC METRICS PLACEHOLDERS */}
              <div className="academic-placeholders-row">
                <div className="academic-stat-box">
                  <span className="stat-label">PERCENTAGE</span>
                  <span className="stat-placeholder">[89.16]</span>
                </div>
                <div className="academic-stat-box">
                  <span className="stat-label">COMPLETED YEAR</span>
                  <span className="stat-placeholder">[2024]</span>
                </div>
                
              </div>
            </div>
          </article>
        </div>


      </div>
    </section>
  );
}

export default Education;

