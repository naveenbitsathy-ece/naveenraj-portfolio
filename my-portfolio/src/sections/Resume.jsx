import React, { useState, useEffect } from "react";
import "./Resume.css";
import SectionHeading from "../components/SectionHeading";

function Resume() {
  const [pdfAvailable, setPdfAvailable] = useState(false);

  useEffect(() => {
    // Check if resume.pdf is reachable without throwing errors
    fetch("/resume/resume_naveen.pdf", { method: "HEAD" })    // Change here for update 
      .then((res) => {
        if (res.ok) {
          setPdfAvailable(true);
        } else {
          setPdfAvailable(false);
        }
      })
      .catch(() => {
        setPdfAvailable(false);
      });
  }, []);

  return (
    <section id="resume" className="resume-section">
      <div className="resume-container">
        <SectionHeading
          tag="07 // CURRICULUM VITAE"
          title="Engineering"
          highlight="Resume"
          description="A consolidated record of hardware engineering coursework, RTL implementations, RISC-V co-designs, and technical toolchains."
        />

        <div className="resume-control-strip">
          <div className="resume-status-col">
            <span className="doc-label">// DOCUMENT:</span>
            <span className="doc-name">Naveenraj_VLSI_Resume.pdf</span>
            <span className={`doc-availability-tag ${pdfAvailable ? "ready" : "pending"}`}>
              {pdfAvailable ? "PDF SYNTHESIZED & READY" : "PLACEHOLDER MODE"}
            </span>
          </div>

          <div className="resume-buttons-col">
            <a
              href="/resume/resume_naveen.pdf"      // Change here for update 
              download="Naveenraj_VLSI_Resume.pdf"
              className="btn-resume-download"
            >
              <span>Download Resume</span>
              <span className="btn-glyph">↓</span>
            </a>

            <a
              href="/resume/resume_naveen.pdf"     //Change here 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-resume-open"
            >
              <span>Open in New Tab</span>
              <span className="btn-glyph">↗</span>
            </a>
          </div>
        </div>

        {/* RESUME PREVIEW PANEL */}
        <div className="resume-preview-panel">
          {pdfAvailable ? (
           <div className="resume-pdf-preview">
  {/* Desktop: keep your original viewer */}
  <iframe
    src="/resume/resume_naveen.pdf"
    title="Resume Preview"
    className="resume-desktop-pdf"
  />

  {/* Mobile: open PDF in the browser's document viewer */}
  <div className="resume-mobile-pdf">
    <a
      href="/resume/resume_naveen.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="resume-mobile-open"
    >
      <span>VIEW MY RESUME</span>
      <span>Open PDF ↗</span>
    </a>
  </div>
</div>
          ) : (
            <div className="resume-structured-preview">
              <div className="resume-preview-header">
                <div className="preview-top-badge">
                  <span>RESUME DOCUMENT PREVIEW</span>
                  <span className="status-notice">
                    Upload your PDF to <code>public/resume/resume_naveen.pdf</code> to activate direct PDF viewer
                  </span>
                </div>
                <h3 className="candidate-name">NAVEENRAJ</h3>
                <p className="candidate-headline">
                  Electronics and Communication Engineering Student · Aspiring VLSI / RTL Design Engineer
                </p>
                <div className="candidate-contacts">
                  <span>BIT, Tamil Nadu, India</span>
                  <span>·</span>
                  <span>github.com/placeholder-naveenraj</span>
                  <span>·</span>
                  <span>linkedin.com/in/placeholder-naveenraj</span>
                </div>
              </div>

              <div className="preview-sections-grid">
                {/* 1. Core Profile */}
                <div className="preview-col">
                  <h4 className="preview-heading">CAREER OBJECTIVE</h4>
                  <p className="preview-text">
                    Aspiring VLSI / RTL Design Engineer seeking opportunities to build,
                    simulate, and verify high-performance digital hardware, RISC-V coprocessors,
                    and FPGA signal processing architectures.
                  </p>

                  <h4 className="preview-heading">EDUCATION</h4>
                  <div className="preview-edu-entry">
                    <strong>Bachelor of Engineering — ECE</strong>
                    <span>Bannari Amman Institute of Technology (BIT)</span>
                    <span className="entry-sub">Tamil Nadu, India</span>
                  </div>

                  <h4 className="preview-heading">HARDWARE SKILLS</h4>
                  <ul className="preview-skill-bullets">
                    <li><strong>Languages:</strong> Verilog HDL, SystemVerilog, C, Python</li>
                    <li><strong>EDA Tools:</strong> Xilinx Vivado, QuestaSim, ModelSim, Icarus Verilog, GTKWave</li>
                    <li><strong>Silicon Platforms:</strong> Zynq-7000 (ZedBoard), PolarFire SoC, VEGA Aries V2</li>
                  </ul>
                </div>

                {/* 2. Key Projects */}
                <div className="preview-col">
                  <h4 className="preview-heading">SELECTED HARDWARE PROJECTS</h4>
                  <div className="preview-project-entry">
                    <strong>Zynq-7000 Moving Average Filter (Verilog, Vivado, ZedBoard)</strong>
                    <p>Designed pipelined digital filter in PL fabric with ILA hardware debugging.</p>
                  </div>
                  <div className="preview-project-entry">
                    <strong>PicoRV32 RISC-V DNA Accelerator (3rd Place Make-a-thon)</strong>
                    <p>Dynamic programming hardware coprocessor coupled with 32-bit RISC-V soft-core.</p>
                  </div>
                  <div className="preview-project-entry">
                    <strong>VEGA Aries V2 Conductor Breakage Telemetry</strong>
                    <p>Indigenous RISC-V controller with multi-sensor fusion and LoRa wireless telemetry.</p>
                  </div>

                  <h4 className="preview-heading">AWARDS</h4>
                  <p className="preview-text">
                    <strong>3rd Place</strong> — RISC-V Make-a-thon, Bannari Amman Institute of Technology.
                  </p>
                </div>
              </div>

              <div className="preview-bottom-alert">
                <span className="alert-symbol">ℹ</span>
                <span className="alert-message">
                  <strong>Notice for Hiring Managers:</strong> An official compiled PDF copy can be downloaded via the button above once placed in <code>public/resume.pdf</code>.
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Resume;
