export const skillCategories = [
  {
    id: "hdl-digital-design",
    category: "HDL & Digital Design",
    code: "RTL_CORE",
    description: "Core hardware description, synthesis-friendly RTL modeling, and logic verification.",
    skills: [
      { name: "Verilog", tag: "HDL", description: "RTL modeling, synthesizable constructs, and testbenches" },
      { name: "SystemVerilog", tag: "SV", description: "Verification constructs, assertions, and interfaces" },
      { name: "UVM", tag: "Verification", description: "SystemVerilog-based verification methodology using agents, sequences, scoreboards, and coverage" },
      { name: "RTL Design", tag: "ARCH", description: "FSM design, pipeline architectures, and datapath logic" },
      { name: "Digital Logic Design", tag: "LOGIC", description: "Combinational & sequential circuit design, timing analysis" },
      { name: "Functional Verification", tag: "SIM", description: "Simulation-driven verification, test vector generation" }
    ]
  },
  {
    id: "eda-tools",
    category: "EDA & Development Tools",
    code: "EDA_SUITE",
    description: "Industry-standard EDA suites for FPGA synthesis, simulation, and physical design exploration.",
    skills: [
      { name: "Xilinx Vivado", tag: "XILINX", description: "Synthesis, implementation, bitstream generation, and ILA debugging" },
      { name: "QuestaSim", tag: "SIM", description: "Advanced RTL simulation and waveform debugging" },
      { name: "ModelSim", tag: "SIM", description: "Digital simulation, testbench evaluation, and signal inspection" },
      { name: "Icarus Verilog", tag: "OPEN", description: "Lightweight open-source compiler for Verilog simulation" },
      { name: "GTKWave", tag: "WAVE", description: "Waveform analysis and signal timing diagnosis" },
      { name: "Cadence", tag: "ASIC Design", description: "Industry-standard tools for ASIC design and physical implementation" },  
      { name: "Synopsis", tag: "ASIC Design", description: "Industry-standard tools for ASIC design and physical implementationt" },
    ]
  },
  {
    id: "programming-software",
    category: "Programming & Software",
    code: "SW_STACK",
    description: "Low-level system programming, algorithmic validation, and simulation automation.",
    skills: [
      { name: "C", tag: "EMBEDDED", description: "Bare-metal firmware, device drivers, and processor communication" },
      { name: "Python", tag: "SCRIPT", description: "Test automation, data formatting, and hardware verification scripts" },
      { name: "MATLAB", tag: "DSP", description: "Filter design, fixed-point modeling, and signal synthesis" },
      { name: "Git", tag: "VCS", description: "Version control and collaborative RTL development" },
      { name: "Linux", tag: "OS", description: "CLI environments, toolchain integration, and embedded Linux workflows" }
    ]
  },
  {
    id: "hardware-platforms",
    category: "Hardware Platforms",
    code: "SILICON_HW",
    description: "FPGA boards and SoC development kits utilized for hardware prototyping and edge computing.",
    skills: [
      { name: "Zynq-7000 / ZedBoard", tag: "XILINX SoC", description: "ARM Cortex-A9 Dual Core (PS) + Artix-7 Equivalent FPGA (PL)" },
      { name: "Boolean board", tag: "XILINX SoC", description: "FPGA development platform for digital logic design, RTL implementation, and hardware prototyping" },
     // { name: "VEGA Aries V2", tag: "INDIGENOUS", description: "India's C-DAC 32-bit RISC-V microprocessor development board" }
    ]
  },
  {
    id: "engineering-domains",
    category: "Engineering Domains",
    code: "DOMAIN_SPEC",
    description: "Specialized engineering fields driving modern semiconductor and accelerator development.",
    skills: [
      { name: "VLSI Design", tag: "ASIC/FPGA", description: "Digital IC design principles, physical constraints, and cell logic" },
      { name: "FPGA Development", tag: "RTL", description: "Prototyping high-throughput DSP and custom compute units" },
      { name: "Digital Signal Processing", tag: "DSP", description: "Fixed-point FIR/IIR filters, MAC architectures, and pipeline optimization" },
      { name: "RISC-V Architecture", tag: "ISA", description: "Modular open ISA, custom instruction decoding, soft-core deployment" },
      { name: "Embedded Systems", tag: "SOC", description: "Hardware-software co-design, memory-mapped I/O, UART/SPI/I2C" },
      { name: "Hardware Acceleration", tag: "COMPUTE", description: "Offloading compute-heavy tasks from CPU to dedicated FPGA logic" }
    ]
  }
];

export const hardwareStats = [
  {
    label: "HARDWARE DESIGNS",
    value: "4+",
    sub: "RTL & FPGA PROTOTYPES",
    detail: "Synthesizable RTL verified in hardware"
  },
  {
    label: "CORE COMPETITION",
    value: "3RD",
    sub: "PLACE RISC-V HACKATHON",
    detail: "Bannari Amman Institute of Technology"
  },
  {
    label: "PRIMARY ARCHITECTURE",
    value: "RISC-V",
    sub: "& ZYNQ PS/PL",
    detail: "Hardware acceleration & SoC co-design"
  }
];

