export const projects = [


  {
    id: "picorv32-dna-sequence-accelerator",
    title: "PicoRV32-Based DNA Sequence Analysis and Motif Detection Accelerator",
    shortTitle: "PicoRV32 DNA Sequence Accelerator",
    category: "RISC-V & Hardware Acceleration",
    status: "Award Winner",
    statusType: "award",
    timeline: "RISC-V Make-a-thon",
    award: "Secured 3rd Place at RISC-V Make-a-thon, Bannari Amman Institute of Technology",
    teamMembers: ["Harish S", "Naveenraj S", "Rahul Sivesh"],
    summary:
      "Developed a hardware-accelerated DNA sequence analysis system using a PicoRV32 RISC-V soft processor and an FPGA-based accelerator exploring the Smith–Waterman algorithm.",
    workflow: [
      { step: "01", label: "Sequence Ingestion", desc: "Genomic sequence data fed through memory-mapped I/O to soft-core" },
      { step: "02", label: "Dynamic Matrix Computation", desc: "Custom hardware PE grid computes Smith–Waterman similarity scores" },
      { step: "03", label: "Motif Identification", desc: "High-scoring local alignment motifs identified with hardware offload" },
      { step: "04", label: "RISC-V Coordination", desc: "PicoRV32 handles control logic, reporting, and result aggregation" }
    ],
    technologies: ["PicoRV32", "RISC-V", "Verilog", "FPGA", "Smith–Waterman Algorithm", "Hardware Acceleration"],
    highlights: [
      "Award-winning project: 3rd Place at RISC-V Make-a-thon (BIT)",
      "PicoRV32 32-bit RISC-V soft-core deployed as the system host controller",
      "Dedicated hardware accelerator implementing Smith–Waterman dynamic programming logic"
    ],
    overview:
      "Biological sequence analysis, specifically motif detection and DNA local alignment via dynamic programming, is computationally intensive when executed purely in software. This project introduces a domain-specific hardware accelerator integrated with the PicoRV32 RISC-V soft processor, offloading scoring matrix calculations to dedicated FPGA logic to dramatically reduce execution time.",
    problemStatement:
      "The Smith–Waterman algorithm provides exact local sequence alignment but exhibits quadratic time complexity O(M×N). On standard embedded processors, searching long genome sequences against motif databases causes severe performance degradation.",
    proposedSolution:
      "A systolic/pipelined hardware coprocessor mapped alongside a PicoRV32 RISC-V 32-bit soft processor. The processor configures target DNA strings, offloads the dynamic programming matrix cell score calculation to the custom Verilog accelerator, and retrieves the identified alignment coordinates.",
    systemArchitecture:
      "1. RISC-V Host Core: PicoRV32 (RV32IMC compatible soft core) running firmware that manages data memory, controls accelerator states, and outputs results.\n2. Bus Interface: Memory-mapped accelerator registers communicating via custom handshaking signals.\n3. Processing Element (PE) Datapath: Hardware module computing substitution score, insertion penalty, and deletion penalty in parallel using max-select logic.",
    hardwareSoftwareTools: [
      { name: "Processor Core", detail: "PicoRV32 (Open-source RISC-V soft-core)" },
      { name: "RTL Language", detail: "Verilog HDL (Synthesizable datapath and control FSM)" },
      { name: "Target Platform", detail: "FPGA Development Board" },
      { name: "Simulation Suite", detail: "ModelSim / QuestaSim / Icarus Verilog & GTKWave" },
       { name: "Programming Suite", detail: "Xilinx vivado" },
      { name: "Embedded Firmware", detail: "RISC-V GNU Toolchain (Bare-metal C code)" }
    ],
    implementationMethodology:
      "1. Algorithmic Profiling: Analyzed bottlenecks of the Smith–Waterman alignment algorithm in C.\n2. RTL Accelerator Design: Modeled dynamic programming cell calculation (diagonal, top, and left score comparison) in synthesizable Verilog.\n3. PicoRV32 Integration: Connected accelerator control registers to memory-mapped space with custom address decoding.\n4. Verification: Ran testbenches matching short synthetic DNA motifs against standard algorithmic references.\n5. Demonstration: Presented live functional proof at the RISC-V Make-a-thon, demonstrating hardware-accelerated motif detection.",
    myContribution:
      "Co-designed the RTL architecture with team member Harish S; modeled the hardware accelerator modules in Verilog; configured the PicoRV32 soft-core memory interface; created verification testbenches in simulation; and contributed to the algorithm mapping and live competition presentation.",
    resultsObservations:
      "Demonstrated reliable DNA sequence matching and motif scoring with significant hardware cycle reduction over software execution. The system secured 3rd Place at the institutional RISC-V Make-a-thon at Bannari Amman Institute of Technology.",
    githubUrl: "https://github.com/naveenbitsathy-ece/makathon-.git"
  },


  {
    id: "zynq-moving-average-filter",
    title: "FPGA-Based Moving Average Filter Using Zynq-7000",
    shortTitle: "Moving Average Filter on Zynq-7000",
    category: "DSP & FPGA Prototyping",
    status: "Completed & Verified",
    statusType: "completed",
    timeline: "Academic Project",
    summary:
      "Implemented a moving average digital filter on a Xilinx Zynq-7000 FPGA platform using the Processing System (PS) and Programmable Logic (PL) partitioned architecture.",
    workflow: [
      { step: "01", label: "MATLAB Signal Generation", desc: "Generated clean sinusoidal test vectors and superimposed Gaussian noise" },
      { step: "02", label: "FPGA Processing", desc: "Shift-register pipeline & adder tree executed within Zynq Programmable Logic" },
      { step: "03", label: "Filtered Output", desc: "Hardware-streamed real-time smoothed signal transmitted via UART" },
      { step: "04", label: "Signal Validation", desc: "Waveforms analyzed & verified in real-time using Vivado ILA & MATLAB" }
    ],
    technologies: ["Verilog", "Vivado", "Vitis", "MATLAB", "ZedBoard", "UART", "ILA"],
    highlights: [
      "Hardware-software co-design leveraging ARM Cortex-A9 PS and 7-series PL fabric",
      "Fixed-point moving average pipeline with shift registers and optimized divider tree",
      "Real-time signal inspection utilizing Xilinx Integrated Logic Analyzer (ILA) core"
    ],
    overview:
      "Digital filtering is fundamental in hardware signal processing for removing high-frequency noise from sensor and communication signals. This project implements a fully hardware-accelerated Moving Average Filter on the Xilinx Zynq-7000 All-Programmable SoC (ZedBoard). By offloading filtering computations from software to custom Verilog RTL in the FPGA programmable logic, deterministic low-latency processing is achieved.",
    problemStatement:
      "Software-based digital filtering on microcontrollers faces latency jitter and computational bottlenecks when processing continuous high-rate digital audio or sensor streams. Implementing the filter directly in custom FPGA hardware provides single-cycle pipelined execution and predictable timing without consuming CPU cycles.",
    proposedSolution:
      "A hardware-accelerated digital FIR-style moving average filter implemented in synthesizable Verilog HDL on the Zynq-7000 PL. The ARM Processing System initializes and transfers noisy signal samples through an AXI interface, while the PL datapath computes the running sum and normalized output continuously in parallel.",
    systemArchitecture:
      "The system architecture consists of two primary domains:\n1. Processing System (PS): Dual-core ARM Cortex-A9 host managing data transfer, UART communication, and supervisory control.\n2. Programmable Logic (PL): Pipelined Verilog datapath comprising an N-tap shift-register array, parallel adders, bit-shift scaling for power-of-two division, and an Integrated Logic Analyzer (ILA) core for in-system waveform capture.",
    hardwareSoftwareTools: [
      { name: "Hardware Platform", detail: "Xilinx ZedBoard (Zynq-7000 XC7Z020-CLG484)" },
      { name: "FPGA Design Suite", detail: "Xilinx Vivado Design Suite (RTL Synthesis, Implementation, Bitstream)" },
      { name: "Embedded Toolchain", detail: "Xilinx Vitis Unified Software Platform" },
      { name: "Simulation & Modeling", detail: "MATLAB (Signal generation, coefficient computation, FFT analysis)" },
      { name: "Hardware Debugging", detail: "Vivado Integrated Logic Analyzer (ILA) & UART terminal" }
    ],
    implementationMethodology:
      "1. MATLAB Modeling: Created synthetic signals contaminated with noise, tested filter window lengths (N=4, 8, 16), and determined fixed-point precision.\n2. Verilog RTL Design: Authored synthesizable Verilog modules featuring synchronous reset, parameterized buffer depth, and pipelined accumulation.\n3. Simulation: Verified filter impulse and frequency response using testbench stimuli against golden MATLAB reference.\n4. Hardware Synthesis & Bitstream: Synthesized in Vivado with timing constraints; generated bitstream for ZedBoard.\n5. In-System Debugging: Connected Vivado ILA probes to monitor internal taps, accumulator registers, and output valid flags during live board execution.",
    myContribution:
      "Designed and coded the synthesizable Verilog RTL for the moving average datapath; built testbenches for functional verification; set up Vivado block designs integrating the AXI stream / GPIO interfaces; created MATLAB verification scripts to compare hardware output against simulated float-point equivalents; and performed on-chip debugging via ILA.",
    resultsObservations:
      "The hardware filter demonstrated real-time noise reduction matching theoretical MATLAB simulation results. Pipelined architecture maintained timing closure at target system frequency with minimal FPGA resource utilization (LUTs, FFs, DSP slices), confirming the suitability of FPGA fabric for deterministic DSP operations.",
    githubUrl: "https://github.com/naveenbitsathy-ece/moving_average_filter.git"
  },





  {
  id: "matlab-fpga-dsp-zedboard",
  title: "MATLAB–FPGA Based Digital Signal Processing Using ZedBoard",
  shortTitle: "FPGA-Based DSP Using ZedBoard",

  category: "DSP & FPGA Prototyping",
  status: "Completed & verified",
  statusType: "completed",
  timeline: "Academic Mini Project",

  summary:
    "Designed and implemented a 12-point moving average filter on the Xilinx ZedBoard (Zynq-7000 SoC), integrating MATLAB-based signal generation, UART communication, FPGA hardware processing, FFT analysis, and output verification.",

  workflow: [
    {
      step: "01",
      label: "Signal Generation",
      desc: "Generated synthetic vibration signals containing multiple frequency components and random noise using MATLAB."
    },
    {
      step: "02",
      label: "UART Transmission",
      desc: "Scaled and quantized signals into 16-bit unsigned samples and transmitted them to ZedBoard at 115200 baud."
    },
    {
      step: "03",
      label: "FPGA Processing",
      desc: "Processed incoming samples using a 12-point moving average filter implemented in Verilog HDL."
    },
    {
      step: "04",
      label: "Output Verification",
      desc: "Returned filtered samples to MATLAB for reference comparison, error analysis, and FFT visualization."
    }
  ],

  technologies: [
    "Verilog HDL",
    "MATLAB",
    "Xilinx Vivado",
    "Vitis",
    "Zynq-7000",
    "ZedBoard",
    "UART",
    "FFT",
    "Python",
    "Machine Learning",
    "Excel"
  ],

  highlights: [
    "Implemented a 12-point moving average filter using Verilog HDL.",
    "Integrated MATLAB with Zynq-7000 FPGA hardware through UART communication.",
    "Established bidirectional data transfer at 115200 baud.",
    "Performed hardware output verification using maximum absolute error and mismatch count.",
    "Applied MATLAB FFT analysis to examine frequency components of filtered signals.",
    "Integrated an optional external Machine Learning server interface using Python and HTTP.",
    "Generated signal visualizations and exported experimental results to Excel."
  ],

  overview:
    "This project demonstrates an end-to-end Digital Signal Processing system using MATLAB and the Xilinx ZedBoard (Zynq-7000 SoC). MATLAB generates synthetic vibration signals containing multiple frequency components and random noise. These samples are transmitted to FPGA hardware, where a 12-point moving average filter performs digital signal processing. The filtered output is returned to MATLAB for accuracy verification, frequency-domain analysis, visualization, and optional Machine Learning prediction.",

  problemStatement:
    "Noisy vibration signals contain unwanted rapid fluctuations that can affect signal interpretation and subsequent analysis. The project explores FPGA-based digital filtering to smooth noisy input signals and evaluates the accuracy of hardware-generated outputs against a MATLAB software reference model.",

  proposedSolution:
    "Developed a MATLAB–FPGA co-design architecture using the Zynq-7000 platform. MATLAB generates and quantizes vibration signal samples, which are transmitted through UART to the FPGA. A 12-point moving average filter implemented in Verilog processes the samples. The filtered output is transmitted back to MATLAB for error calculation, FFT analysis, visualization, and optional external ML-based prediction.",

  systemArchitecture:
    "1. MATLAB Signal Generation: Generates synthetic vibration signals with multiple frequency components and random noise.\n2. Signal Quantization: Scales and converts generated samples into 16-bit unsigned integer values.\n3. UART Communication: Transfers input samples from the PC to ZedBoard at 115200 baud.\n4. Zynq-7000 Processing System: Handles communication between MATLAB and the FPGA processing architecture.\n5. Programmable Logic: Executes the 12-point moving average filter implemented in Verilog HDL.\n6. Output Transmission: Sends filtered samples back to MATLAB through UART.\n7. Verification and FFT Analysis: Compares FPGA outputs against the MATLAB reference model and examines frequency components using FFT.\n8. ML Integration: Optionally transmits processed samples to an external Python-based ML server using HTTP.",

  hardwareSoftwareTools: [
    {
      name: "Target Hardware",
      detail: "Xilinx ZedBoard based on Zynq-7000 SoC"
    },
    {
      name: "Processor Architecture",
      detail: "ARM Cortex-A9 Dual-Core Processing System and FPGA Programmable Logic"
    },
    {
      name: "RTL Language",
      detail: "Verilog HDL"
    },
    {
      name: "FPGA Design Suite",
      detail: "Xilinx Vivado"
    },
    {
      name: "Software Development",
      detail: "Xilinx Vitis"
    },
    {
      name: "Signal Processing",
      detail: "MATLAB for signal generation, reference filtering, and FFT analysis"
    },
    {
      name: "Communication Interface",
      detail: "UART serial communication at 115200 baud"
    },
    {
      name: "Machine Learning Integration",
      detail: "Python-based external ML server communication using HTTP"
    },
    {
      name: "Data Analysis",
      detail: "MATLAB visualization and Excel-based experimental reports"
    }
  ],

  implementationMethodology:
    "1. Signal Generation: Created synthetic vibration signals with multiple frequency components and random noise using MATLAB.\n2. Sample Preparation: Scaled and quantized the generated signal into 16-bit unsigned integer samples.\n3. RTL Development: Designed a 12-point moving average filter using Verilog HDL.\n4. FPGA Integration: Integrated the filter with the Zynq-7000 platform using Vivado and Vitis.\n5. UART Communication: Established PC-to-FPGA and FPGA-to-PC communication at 115200 baud.\n6. Hardware Processing: Transmitted input samples to the FPGA and performed moving average filtering in programmable logic.\n7. Output Verification: Compared returned FPGA samples with a MATLAB software reference model using maximum absolute error and mismatch count.\n8. Frequency Analysis: Performed FFT analysis on the FPGA-filtered output to examine its frequency components.\n9. ML Integration: Enabled optional transmission of processed samples to an external Python ML server using HTTP.\n10. Visualization and Reporting: Visualized input signals, filtered outputs, error waveforms, and FFT magnitude spectra, and exported experimental results to Excel.",

  myContribution:
    "Worked on the MATLAB–FPGA digital signal processing workflow, including Verilog RTL development of the 12-point moving average filter, Zynq-7000 FPGA integration using Vivado and Vitis, UART-based communication, MATLAB signal generation, hardware output verification, and frequency-domain analysis using FFT.",

  resultsObservations:
    "Established bidirectional UART communication between MATLAB and the ZedBoard at 115200 baud. Implemented the 12-point moving average filtering workflow on FPGA hardware and returned processed samples to MATLAB. Evaluated hardware output accuracy using maximum absolute error and mismatch count. Performed FFT-based frequency analysis and generated visualizations and Excel reports for experimental evaluation. The architecture also supports optional external Machine Learning server integration.",

  githubUrl: "https://github.com/naveenbitsathy-ece/S5_mini_project.git"
},


 /* {
    id: "polarfire-network-qos-monitor",
    title: "FPGA-Accelerated Predictive Network Health and QoS Management System",
    shortTitle: "Predictive Network QoS on PolarFire SoC",
    category: "Network Hardware & Edge AI",
    status: "Proposed / In-Progress",
    statusType: "proposed",
    timeline: "Research & Development",
    summary:
      "A proposed PolarFire SoC-based system for monitoring Industrial Ethernet network health and predicting Quality of Service conditions using hardware feature extraction and RISC-V processing.",
    workflow: [
      { step: "01", label: "Packet Feature Extraction", desc: "Low-latency FPGA fabric extracts line-rate packet metrics from Ethernet stream" },
      { step: "02", label: "Statistical Telemetry", desc: "Hardware monitors bandwidth, latency, jitter, loss, and queue occupancy" },
      { step: "03", label: "QoS Prediction", desc: "Random Forest model predicts network congestion and QoS anomalies" },
      { step: "04", label: "Linux Dashboard", desc: "Host RISC-V cores run embedded Linux displaying diagnostics and alerts" }
    ],
    technologies: [
      "PolarFire SoC",
      "RISC-V",
      "Verilog",
      "Random Forest",
      "Industrial Ethernet",
      "QoS Monitoring",
      "Linux"
    ],
    highlights: [
      "Targeted for Microchip PolarFire SoC Icicle Kit (Multi-core 64-bit RISC-V + FPGA)",
      "Line-rate hardware extraction of jitter, packet rate, loss, and buffer occupancy",
      "Machine learning-assisted QoS prediction for mission-critical industrial networks"
    ],
    overview:
      "In modern Industrial Ethernet and Time-Sensitive Networking (TSN) environments, deterministic QoS is vital. Traditional software monitoring tools introduce latency overhead and struggle at wire-speed packet rates. This proposed system leverages the low-power PolarFire SoC architecture to offload statistical telemetry to the FPGA fabric while executing edge predictive analytics on RISC-V application cores.",
    problemStatement:
      "Monitoring high-speed industrial network frames for transient jitter, micro-bursts, and impending buffer overflow is unfeasible purely in software without packet dropping. A dedicated hardware extraction engine is needed to capture non-intrusive line-rate statistics.",
    proposedSolution:
      "A hybrid hardware-software architecture on the PolarFire SoC Icicle Kit. The FPGA fabric continuously inspects Ethernet traffic headers, computing rolling bandwidth, inter-packet delay variation (jitter), and queue depth in real time. These features feed a trained Random Forest model running on RISC-V Linux to forecast congestion and dynamically trigger QoS priority adaptations.",
    systemArchitecture:
      "1. PolarFire FPGA Fabric: Implements Ethernet MAC interface, hardware timestamping, packet counters, and rolling statistical registers.\n2. Microchip MSS (Microprocessor Subsystem): Quad-core 64-bit SiFive RV64GC RISC-V cluster running embedded Linux.\n3. Analytics & Decision Engine: Lightweight inference pipeline calculating QoS risk scores and hosting a web/CLI dashboard.",
    hardwareSoftwareTools: [
      { name: "Development Kit", detail: "Microchip PolarFire SoC Icicle Kit (MPFS250T-FCVG484E)" },
      { name: "FPGA Toolchain", detail: "Microchip Libero SoC Design Suite" },
      { name: "Processor Arch", detail: "Quad-Core SiFive RV64GC + 1x RV64IMAC monitor core" },
      { name: "Operating System", detail: "Embedded Yocto/Buildroot Linux for PolarFire SoC" },
      { name: "Modeling / ML", detail: "Python Scikit-Learn for Random Forest training and weight export" }
    ],
    implementationMethodology:
      "1. Architectural Specification: Formalize telemetry register map and sliding-window statistical definitions.\n2. Verilog Packet Sniffer: Design RTL modules for header parsing, byte counting, and timestamp difference calculation without altering packet payload.\n3. Model Training: Train Random Forest classifier offline on synthetic and recorded network telemetry datasets.\n4. SoC Co-Design: Expose FPGA telemetry registers to Linux user-space via AXI-lite and memory-mapped drivers.\n5. Dashboard Integration: Build a lightweight telemetry dashboard displaying live metrics, latency distributions, and proactive congestion warnings.",
    myContribution:
      "Formulated the system proposal and architecture block diagrams; defining RTL specifications for the hardware packet telemetry unit; researching low-overhead feature extraction techniques; and configuring the PolarFire SoC Icicle Kit development environment.",
    resultsObservations:
      "Architecture specification and initial RTL modeling in progress. System designed to ensure zero packet drop during telemetry collection and minimal inference latency on the 64-bit RISC-V subsystem.",
    githubUrl: "https://github.com/placeholder-naveenraj/polarfire-network-qos-system"
  },



  {
    id: "vega-overhead-conductor-breakage",
    title: "Multi-Sensor Detection of Low-Voltage AC Overhead Conductor Breakage",
    shortTitle: "Overhead Conductor Breakage Detection",
    category: "Sensors & Embedded RISC-V",
    status: "Prototyped & Evaluated",
    statusType: "completed",
    timeline: "Applied Engineering",
    summary:
      "A VEGA Aries V2-based project exploring the detection of overhead power conductor breakage using multi-sensor fusion and LoRa wireless telemetry.",
    workflow: [
      { step: "01", label: "Multi-Sensor Acquisition", desc: "Sensors sample AC voltage, current fluctuations, and mechanical vibration" },
      { step: "02", label: "VEGA Aries V2 Processing", desc: "Indigenous 32-bit RISC-V microprocessor runs sensor fusion algorithm" },
      { step: "03", label: "Fault Condition Detection", desc: "Abrupt drop in current coupled with IMU tilt/vibration triggers fault event" },
      { step: "04", label: "LoRa Wireless Telemetry", desc: "Long-range low-power alert dispatched to sub-station control room" }
    ],
    technologies: ["Voltage Sensor", "Current Sensor", "IMU Sensor", "LoRa Communication", "VEGA Aries V2"],
    highlights: [
      "Built on India's indigenous VEGA Aries V2 32-bit RISC-V microprocessor",
      "Sensor fusion combining electrical parameters (V, I) with physical dynamics (IMU)",
      "Wireless long-range notification via LoRa transceiver module"
    ],
    overview:
      "Low-voltage AC overhead conductor snapping poses severe public safety risks and causes power distribution outages. Conventional overcurrent protection devices often fail to detect a high-impedance downed conductor fault immediately. This project utilizes the indigenous Indian VEGA Aries V2 RISC-V board coupled with multi-sensor monitoring to rapidly identify physical conductor severance and report fault locations wirelessly.",
    problemStatement:
      "When an overhead low-voltage electrical conductor breaks and hangs in mid-air or contacts high-resistance ground, current may remain below standard breaker trip thresholds, creating hazards. A proactive detection mechanism capturing physical fall motion and electrical interruption simultaneously is essential.",
    proposedSolution:
      "An edge-monitoring node deployed along utility distribution poles powered by the VEGA Aries V2 board. The node integrates non-invasive current transformers, AC voltage sensing, and an accelerometer/gyroscope (IMU). A sudden drop in phase voltage accompanied by mechanical shock or tilt signature confirms conductor breakage, broadcasting an immediate alert via LoRa.",
    systemArchitecture:
      "1. Sensing Layer: Non-invasive current sensor, AC step-down voltage detector, and 6-axis IMU.\n2. Processing Unit: VEGA Aries V2 (C-DAC THEJAS 32-bit RISC-V SoC) executing threshold analysis and debounce routines.\n3. Communication Layer: Semtech SX1278 LoRa transceiver providing multi-kilometer sub-GHz wireless reporting to the base receiver.",
    hardwareSoftwareTools: [
      { name: "Controller Board", detail: "VEGA Aries V2 (C-DAC THEJAS RV32IM RISC-V Microcontroller)" },
      { name: "Sensors", detail: "Current Transformer (CT), AC Voltage Sensor Module, MPU6050 6-Axis IMU" },
      { name: "Wireless Module", detail: "LoRa SX1278 433MHz Transceiver" },
      { name: "Development IDE", detail: "Aries Arduino IDE / GCC RISC-V Embedded Toolchain" },
      { name: "Power Management", detail: "Regulated DC supply with battery backup module" }
    ],
    implementationMethodology:
      "1. Sensor Interfacing: Calibrated ADC channels for AC voltage and current sensing alongside I2C bus readout from the IMU.\n2. Firmware Logic: Programmed event-detection thresholds distinguishing transient load fluctuations from physical conductor collapse.\n3. LoRa Protocol: Structured compact fault telemetry packets containing timestamp, node ID, voltage, current, and tilt vector.\n4. Experimental Testing: Simulated line breakage under controlled laboratory conditions, verifying wireless packet delivery and rapid fault identification.",
    myContribution:
      "Configured hardware interfacing between the VEGA Aries V2 microcontroller, sensors, and LoRa module; wrote embedded C firmware for sensor sampling and fault logic; tested wireless range and packet transmission reliability.",
    resultsObservations:
      "Successfully demonstrated real-time detection of simulated conductor detachment with instantaneous LoRa alert transmission within milliseconds of the fault occurrence, confirming the viability of indigenous RISC-V hardware for electrical grid telemetry.",
    githubUrl: "https://github.com/placeholder-naveenraj/conductor-breakage-detection"
  }
    */
];
