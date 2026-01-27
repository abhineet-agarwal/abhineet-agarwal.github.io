---
layout: page
title: Goertzel Algorithm ASIC
description: Full RTL-to-GDSII implementation of the Goertzel algorithm on TSMC 65nm
importance: 2
category: Academic Projects
---

**Course:** EE671: VLSI Design (Autumn 2025)<br>
**Instructor:** Prof. Laxmeesha Somappa

We took the Goertzel algorithm — which computes a single DFT frequency bin using a second-order IIR recurrence — from SystemVerilog RTL through synthesis and physical design to a clean GDSII layout on TSMC 65nm GP. The design uses 32-bit fixed-point Q8.23 arithmetic with N=205 samples, controlled by an FSM that sequences the recursive computation, magnitude calculation, and an integer square root module. Synthesis was done with Cadence Genus and physical design with Cadence Innovus. The final layout has 9,349 cells in 46,594 µm², runs at 100 MHz with 12.33 mW power, and passes all DRC, antenna, and connectivity checks with zero violations. I handled floorplanning, pin placement, power planning, and routing in Innovus, iterated through the PnR flow to close timing, and prepared the layout snapshots and report.

[Report](https://github.com/abhineet-agarwal/EE671-Goertzel-ASIC/blob/master/Group5_report.pdf)
