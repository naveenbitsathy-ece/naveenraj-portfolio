export const initialArticles = [
  {
    id: "understanding-fir-digital-filters",
    title: "Understanding FIR Digital Filters",
    category: "DSP & RTL",
   // datePlaceholder: "[Publication Date - Forthcoming]",
    readTime: "5 min read",
    summary:
      "A technical walkthrough of Finite Impulse Response (FIR) filter fundamentals, focusing on linear phase properties, symmetric coefficients, and hardware multiplier-accumulator (MAC) architectures in Verilog.",
    fullNote:
      "FIR filters are inherently stable due to having only zeros and no feedback poles. In hardware implementations, the primary design tradeoff involves pipelined multiply-accumulate (MAC) units versus parallel systolic arrays. This article examines fixed-point quantization effects and Verilog RTL implementations."
  },
  {
    id: "introduction-to-iir-filters",
    title: "Introduction to IIR Filters",
    category: "DSP & Filters",
  //  datePlaceholder: "[Publication Date - Forthcoming]",
    readTime: "6 min read",
    summary:
      "Exploring Infinite Impulse Response (IIR) filter architectures, pole-zero stability considerations, and recursive feedback loops within FPGA hardware constraints.",
    fullNote:
      "Unlike FIR filters, IIR filters achieve sharper cutoff characteristics with fewer coefficients, but feedback introduces potential instability, limit cycles, and word-length growth in fixed-point FPGA math."
  },
  {
    id: "fpga-based-dsp",
    title: "FPGA-Based Digital Signal Processing",
    category: "FPGA Architecture",
   // datePlaceholder: "[Publication Date - Forthcoming]",
    readTime: "7 min read",
    summary:
      "Why FPGA fabric excels at DSP applications: exploring dedicated DSP48E slices, parallel systolic pipelines, and high-throughput real-time streaming architectures.",
    fullNote:
      "Modern FPGAs feature dedicated hard DSP blocks capable of pre-addition, multiply-accumulate, and SIMD operations in a single clock cycle, enabling gigasample-per-second DSP pipelines."
  },
  {
    id: "verilog-rtl-design-fundamentals",
    title: "Verilog RTL Design Fundamentals",
    category: "RTL Design",
   // datePlaceholder: "[Publication Date - Forthcoming]",
    readTime: "8 min read",
    summary:
      "Key principles of writing clean, synthesizable Verilog HDL: avoiding unintended latches, understanding blocking vs non-blocking assignments, and robust FSM design.",
    fullNote:
      "Synthesizable RTL requires designing with hardware silicon in mind rather than software sequence. Mastering two-process or three-process Moore and Mealy state machines ensures glitch-free control logic."
  },
  {
    id: "understanding-risc-v-architecture",
    title: "Understanding RISC-V Architecture",
    category: "Computer Architecture",
   // datePlaceholder: "[Publication Date - Forthcoming]",
    readTime: "6 min read",
    summary:
      "Deconstructing the open, modular RISC-V Instruction Set Architecture (ISA): standard base integer sets (RV32I/RV64I), extensions (M, A, F, D, C), and soft-core integration.",
    fullNote:
      "RISC-V's modularity has democratized custom computing. Soft processors like PicoRV32 allow hardware designers to pair custom accelerators with a standard software programming environment."
  },
  {
    id: "hardware-acceleration-using-fpga",
    title: "Hardware Acceleration Using FPGA",
    category: "Acceleration",
   // datePlaceholder: "[Publication Date - Forthcoming]",
    readTime: "7 min read",
    summary:
      "Architectural strategies for offloading computationally intensive algorithms from CPUs to custom FPGA coprocessors via AXI buses and memory-mapped DMA.",
    fullNote:
      "Hardware acceleration achieves orders of magnitude speedups by transforming sequential nested loops into deeply pipelined, spatial compute fabrics with direct memory bandwidth access."
  },
  {
    id: "zynq-processing-system-programmable-logic",
    title: "Zynq Processing System and Programmable Logic",
    category: "SoC Co-Design",
  //  datePlaceholder: "[Publication Date - Forthcoming]",
    readTime: "8 min read",
    summary:
      "Demystifying PS-PL co-design on the Xilinx Zynq-7000: configuring high-performance AXI interfaces, handling interrupts, and orchestrating bare-metal firmware with custom RTL.",
    fullNote:
      "The tight coupling between ARM dual-core processors (PS) and FPGA logic (PL) enables the best of both worlds: flexible OS/driver management alongside deterministic microsecond-latency hardware execution."
  }
];

