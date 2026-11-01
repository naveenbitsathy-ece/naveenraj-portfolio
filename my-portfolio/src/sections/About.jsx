import React from "react";
import "./About.css";
import SectionHeading from "../components/SectionHeading";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <SectionHeading
          tag="01 // BACKGROUND & PHILOSOPHY"
          title="About"
          highlight="Me"
          description="A dedicated engineering journey focused on digital silicon, RTL synthesis,digital signal processing, processor architectures and FPGA acceleration."
        />

        <div className="about-split-grid">
          {/* LEFT NARRATIVE */}
          <div className="about-left-col">
            <div className="about-accent-line" />
            <h3 className="about-headline">
              Bridging theoretical circuit concepts with synthesizable silicon logic.
            </h3>
            <blockquote className="about-quote">
              “I believe the best way to understand hardware is to design it, simulate it, implement it, and verify it.”
            </blockquote>

            <p className="about-text">
              I am an Electronics and Communication Engineering student at Bannari
              Amman Institute of Technology (BIT), Tamil Nadu, India. My fascination
              with semiconductors began with understanding how micro-architectural
              decisions directly influence throughput, latency, and power efficiency
              in physical silicon.
            </p>

            <p className="about-text">
              Rather than approaching digital logic purely in simulation, I actively
              model synthesizable designs using Verilog, targeting
              real hardware platforms including Xilinx Zynq-7000 SoCs and RISC-V
              microprocessors. My ultimate career objective is to contribute as a
              VLSI / RTL Design Engineer to next-generation computing hardware.
            </p>
          </div>

          {/* RIGHT KEY DOMAINS & FOCUS */}
          <div className="about-right-col">
            <div className="about-focus-card">
              <span className="focus-card-header">// ENGINEERING FOCUS AREAS</span>
              
              <ul className="focus-list">
                <li className="focus-item">
                  <span className="focus-marker">▫</span>
                  <div className="focus-content">
                    <strong className="focus-title">RTL & Digital Architecture</strong>
                    <p className="focus-desc">
                      Modeling synchronous datapaths, parameterized FIFO buffers, and finite state machines (FSM) adhering to synthesis and timing constraints.
                    </p>
                  </div>
                </li>

                <li className="focus-item">
                  <span className="focus-marker">▫</span>
                  <div className="focus-content">
                    <strong className="focus-title">FPGA DSP & Prototyping</strong>
                    <p className="focus-desc">
                      Transforming mathematical algorithms into pipelined digital filters (FIR, Moving Average) and validating with Xilinx Vivado and on-chip ILA logic analyzers.
                    </p>
                  </div>
                </li>

                <li className="focus-item">
                  <span className="focus-marker">▫</span>
                  <div className="focus-content">
                    <strong className="focus-title">RISC-V & Hardware Acceleration</strong>
                    <p className="focus-desc">
                      Integrating soft cores (PicoRV32) with custom hardware accelerators for domain-specific workloads.
                    </p>
                  </div>
                </li>

                <li className="focus-item">
                  <span className="focus-marker">▫</span>
                  <div className="focus-content">
                    <strong className="focus-title">Functional Verification & EDA</strong>
                    <p className="focus-desc">
                      Validating design correctness through structured testbenches in QuestaSim, ModelSim, GTKWave and Icarus Verilog before physical bitstream deployment.
                    </p>
                  </div>
                </li>
              </ul>

              <div className="focus-card-footer">
  <span className="footer-label">INSTITUTION:</span>

  <a
    className="footer-val institution-link"
    href="https://www.bitsathy.ac.in/"
    target="_blank"
    rel="noopener noreferrer"
  >
    Bannari Amman Institute of Technology (BIT)
  </a>
</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

