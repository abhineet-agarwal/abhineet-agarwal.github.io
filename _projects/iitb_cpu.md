---
layout: page
title: 16-bit Pipelined IITB-RISC Processor
description: A fully functional 6-stage pipelined RISC CPU with hazard detection, data forwarding, and branch prediction implemented in VHDL
img: risc-netlist-part.png
importance: 4
category: Academic Projects
---

**Course:** EE309 - Microprocessors | **Instructor:** Prof. Virendra Singh
**Duration:** Apr - May 2024 | **Team:** Anshu Arora, Sachi Deshmukh, Abhineet Agarwal, Garima Goplani

## Overview

Designed and implemented a complete 16-bit RISC processor from scratch featuring a 6-stage pipeline architecture (Instruction Fetch, Instruction Decode, Register Read, Execute, Memory Access, Write Back). The processor supports a comprehensive 26-instruction ISA covering arithmetic, logical, memory access, and control flow operations.

## Key Features & Implementation

**Architecture & Design:**
- Implemented 6-stage pipeline with dedicated pipeline registers (IR-ID, IR-RR, IR-EX, IR-MR, IR-WB) for instruction flow control
- Designed datapath with multiple ALUs, 8 general-purpose registers (R0-R7), and separate instruction/data memory modules
- Created modular VHDL components including ALU, register file, memory unit, multiplexers, and sign extension units

**Advanced Processor Features:**
- **Hazard Detection & Resolution:** Implemented data forwarding logic to handle RAW (Read After Write) dependencies for both consecutive and 2-step separated dependent instructions, minimizing pipeline stalls
- **Branch Prediction:** Developed history-based branch prediction with FSM to reduce control hazard penalties, including branch verification and pipeline flush mechanism on misprediction
- **Load/Store Multiple:** Designed specialized logic for LM/SM instructions to efficiently handle multiple register transfers with consecutive memory addresses

**Instruction Set Architecture:**
- Arithmetic: ADA, ADC, ADZ, AWC, ACA, ACC, ACZ, ACW, ADI (9 instructions)
- Logical: NDU, NDC, NDZ, NCU, NCC, NCZ (6 instructions)
- Memory: LLI, LW, SW, LM, SM (5 instructions)
- Control Flow: BEQ, BLT, BLE, JAL, JLR, JRI (6 instructions)

**Verification & Testing:**
- Wrote comprehensive testbenches covering all 26 instructions and edge cases
- Performed RTL simulation for functional verification using ModelSim/Vivado
- Conducted gate-level simulation post-synthesis to ensure timing correctness
- Verified synthesizability and analyzed critical path timing

## Technical Contributions

- **Pipeline Design:** Architected complete datapath with proper control signal generation and MUX/DEMUX placement for instruction execution
- **Control Unit:** Designed FSM-based control unit generating all control signals based on instruction opcode and current pipeline stage
- **Hazard Unit:** Implemented comparator-based hazard detection comparing instruction register fields across pipeline stages
- **Code Development:** Wrote over 2000 lines of synthesizable VHDL code following best practices for hardware description

## Results

Achieved near-optimal CPI (Cycles Per Instruction) approaching 1.0 for straight-line code execution. Branch misprediction penalty limited to 3 cycles through efficient pipeline flush mechanism. Successfully synthesized the design demonstrating practical feasibility of the implementation.

**Repository:** [github.com/abhineet-agarwal/IITB-RISC-22](https://github.com/abhineet-agarwal/IITB-RISC-22)
