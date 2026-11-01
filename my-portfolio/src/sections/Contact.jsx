
import React, { useState } from "react";
import "./Contact.css";
import SectionHeading from "../components/SectionHeading";

// WhatsApp destination (not displayed on the page)
const WHATSAPP_NUMBER = "917598657617";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    message: ""
  });

  const [formNotice, setFormNotice] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormNotice(null);

    const whatsappMessage =
      `Hello Naveenraj!\n\n` +
      `Name: ${formData.name}\n` +
      `Subject: ${formData.subject}\n\n` +
      `Message:\n${formData.message}`;

    const whatsappUrl =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

    const whatsappWindow = window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );

    if (whatsappWindow) {
      setFormNotice({
        type: "success",
        text: "WhatsApp opened with your message. Please press Send to deliver it."
      });

      setFormData({
        name: "",
        subject: "",
        message: ""
      });
    } else {
      setFormNotice({
        type: "error",
        text: "WhatsApp could not be opened. Please allow pop-ups and try again."
      });
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">

        <SectionHeading
          tag="08 // GET IN TOUCH"
          title="Let's"
          highlight="Connect"
          description="I am interested in connecting with engineers, researchers, and teams working in VLSI, digital design, FPGA development, and hardware acceleration."
        />

        <div className="contact-grid">

          {/* CONTACT INFORMATION */}

          <div className="contact-info-col">
            <h3 className="contact-col-title">
              Professional Correspondence
            </h3>

            <p className="contact-col-desc">
              Whether you are discussing RTL design methodologies, FPGA
              prototyping internships, RISC-V research, or hardware
              co-design opportunities, feel free to reach out.
            </p>

            <div className="contact-channels-list">

              {/* WHATSAPP - NUMBER NOT DISPLAYED */}

              <div className="channel-item">
                <span className="channel-icon">◉</span>
                <div className="channel-content">
                  <span className="channel-label">WHATSAPP</span>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="channel-value"
                  >
                    Message me on WhatsApp ↗
                  </a>
                </div>
              </div>

              {/* GITHUB */}

              <div className="channel-item">
                <span className="channel-icon">⬡</span>
                <div className="channel-content">
                  <span className="channel-label">GITHUB REGISTRY</span>
                  <a
                    href="https://github.com/naveenbitsathy-ece"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="channel-value"
                  >
                    github.com/naveenbitsathy-ece
                  </a>
                </div>
              </div>

              {/* LINKEDIN */}

              <div className="channel-item">
                <span className="channel-icon">◈</span>
                <div className="channel-content">
                  <span className="channel-label">LINKEDIN NETWORK</span>
                  <a
                    href="https://www.linkedin.com/in/naveenraj07/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="channel-value"
                  >
                    linkedin.com/in/naveenraj07
                  </a>
                </div>
              </div>

              {/* LOCATION */}

              <div className="channel-item">
                <span className="channel-icon">⚲</span>
                <div className="channel-content">
                  <span className="channel-label">LOCATION</span>
                  <span className="channel-value plain">
                    Tamil Nadu, India
                  </span>
                </div>
              </div>

            </div>

            <div className="contact-meta-card">
              <span className="meta-card-tag">// AVAILABILITY</span>
              <p className="meta-card-text">
                Available for VLSI / RTL Design Engineer internships,
                graduate trainee roles, and collaborative FPGA projects.
              </p>
            </div>
          </div>

          {/* WHATSAPP CONTACT FORM */}

          <div className="contact-form-col">
            <form className="contact-form" onSubmit={handleSubmit}>

              <div className="form-header">
                <span className="form-tag">// SEND A MESSAGE</span>
                <span className="form-spec">WHATSAPP CONNECTION</span>
              </div>

              {/* NAME */}

              <div className="form-field-group">
                <label htmlFor="contact-name" className="form-label">
                  YOUR NAME <span className="req">*</span>
                </label>

                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. John Doe / Hiring Team"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              {/* SUBJECT */}

              <div className="form-field-group">
                <label htmlFor="contact-subject" className="form-label">
                  SUBJECT / TOPIC <span className="req">*</span>
                </label>

                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  required
                  placeholder="e.g. VLSI Internship / FPGA Collaboration"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              {/* MESSAGE */}

              <div className="form-field-group">
                <label htmlFor="contact-message" className="form-label">
                  MESSAGE BODY <span className="req">*</span>
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                />
              </div>

              {/* SUBMIT */}

              <button
                type="submit"
                className="btn-submit-message"
              >
                <span>Send via WhatsApp</span>
                <span className="submit-arrow">→</span>
              </button>

              {/* STATUS */}

              {formNotice && (
                <div className={`form-notice-box ${formNotice.type}`}>
                  <span className="notice-icon">
                    {formNotice.type === "success" ? "✓" : "⚠"}
                  </span>

                  <div className="notice-content">
                    <span className="notice-msg">
                      {formNotice.text}
                    </span>
                  </div>
                </div>
              )}

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
