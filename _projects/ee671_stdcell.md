---
layout: page
title: Standard Cell Library
description: Designing and characterizing standard cells from scratch using the SkyWater 130nm open-source PDK
importance: 2
category: Academic Projects
---

**Course:** EE671: VLSI Design (Autumn 2025)<br>
**Instructor:** Prof. Laxmeesha Somappa

Our team designed three standard cells — a buffer (BUF), a positive-edge triggered D flip-flop (DF-XTP), and a 2-input AND gate with an inverted input (AND2B) — from transistor-level schematics all the way to verified layouts using the SkyWater 130nm open-source PDK. Each cell was laid out in Magic VLSI following the PDK's design rules, then extracted and simulated in NGSpice to generate full Liberty (.lib) characterization across a 7×7 matrix of input slew rates and output capacitances. The deliverables for each cell included a SPICE netlist, layout (.mag), Liberty timing/power tables, LEF abstract, and a Verilog behavioral model. I was responsible for generating the .lib characterization for the BUF and AND2B cells, the Verilog model for BUF, and writing the project report.

<object data="{{ '/assets/pdf/EE671_stdcell_report.pdf' | relative_url }}" type="application/pdf" width="100%" height="600px">
  <p>PDF cannot be displayed. <a href="{{ '/assets/pdf/EE671_stdcell_report.pdf' | relative_url }}">Download PDF</a></p>
</object>
