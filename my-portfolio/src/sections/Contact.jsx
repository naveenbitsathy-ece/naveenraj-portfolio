
import React, { useState } from "react";
import "./Contact.css";
import SectionHeading from "../components/SectionHeading";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [formNotice, setFormNotice] = useState(null);
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setFormNotice(null);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        })
      });

      if (!response.ok) {
        throw new Error("Email delivery failed.");
      }

      const whatsappMessage =
        `Hello Naveenraj!\n\n` +
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Subject: ${formData.subject}\n\n` +
        `Message:\n${formData.message}`;

      const whatsappUrl =
        `https://wa.me/917598657617?text=${encodeURIComponent(whatsappMessage)}`;

      setFormNotice({
        type: "success",
        text: "Your enquiry has been sent to my email successfully.",
        whatsappUrl
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });

    } catch (error) {
      setFormNotice({
        type: "error",
        text: "Unable to send your message. Please try again or contact me directly by email."
      });
    } finally {
      setIsSending(false);
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
              Whether you are discussing RTL design methodologies, FPGA prototyping
              internships, RISC-V research, or hardware co-design opportunities, feel free
              to reach out.
            </p>

            <div className="contact-channels-list">

              <div className="channel-item">
                <span className="channel-icon">✉</span>
                <div className="channel-content">
                  <span className="channel-label">DIRECT EMAIL</span>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=naveenrajs1003@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="channel-value"
                  >
                    naveenrajs1003@gmail.com
                  </a>
                </div>
              </div>

              <div className="channel-item">
                <span className="channel-icon">◉</span>
                <div className="channel-content">
                  <span className="channel-label">WHATSAPP</span>
                  <a
                    href="https://wa.me/917598657617"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="channel-value"
                  >
                    +91 75986 57617
                  </a>
                </div>
              </div>

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
                Available for VLSI / RTL Design Engineer internships, graduate trainee
                roles, and collaborative FPGA projects.
              </p>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="contact-form-col">
            <form className="contact-form" onSubmit={handleSubmit}>

              <div className="form-header">
                <span className="form-tag">// TRANSMIT INQUIRY</span>
                <span className="form-spec">STANDARD ASCII ENCODED</span>
              </div>

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

              <div className="form-field-group">
                <label htmlFor="contact-email" className="form-label">
                  EMAIL ADDRESS <span className="req">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-field-group">
                <label htmlFor="contact-subject" className="form-label">
                  SUBJECT / TOPIC <span className="req">*</span>
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  required
                  placeholder="e.g. VLSI Internship / FPGA Project Collaboration"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

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

              <button
                type="submit"
                className="btn-submit-message"
                disabled={isSending}
              >
                <span>
                  {isSending ? "Transmitting..." : "Dispatch Message"}
                </span>
                <span className="submit-arrow">→</span>
              </button>

              {formNotice && (
                <div className={`form-notice-box ${formNotice.type}`}>
                  <span className="notice-icon">
                    {formNotice.type === "success" ? "✓" : "⚠"}
                  </span>

                  <div className="notice-content">
                    <span className="notice-msg">
                      {formNotice.text}
                    </span>

                    {formNotice.whatsappUrl && (
                      <a
                        href={formNotice.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="whatsapp-submit-link"
                      >
                        Continue to WhatsApp →
                      </a>
                    )}
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
