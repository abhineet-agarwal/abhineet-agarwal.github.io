---
layout: page
title: BTBT in FDX 22nm SOI MOSFET
description: Band-to-band tunneling optimization in advanced SOI nodes for neuromorphic computing
img: assets/img/btbt_pdsoi_schematic.png
importance: 5
category: Academic Projects
---

**Course:** EE724 - Nanoelectronics | **Instructor:** Prof. Udayan Ganguly

**Duration:** Feb - Apr 2024 

**Team:** Harsh Pujare, Abhineet Agarwal

**Award:** Best Project Award

## The Challenge

Neuromorphic computing promises to revolutionize artificial intelligence by mimicking the brain's energy-efficient architecture. But building hardware neurons that can scale to millions of units demands devices operating at currents far below what conventional CMOS can achieve. Enter Band-to-Band Tunneling (BTBT) in Silicon-On-Insulator MOSFETs—a quantum mechanical phenomenon that could unlock ultra-low power operation for spiking neural networks.

<div class="row justify-content-center">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/btbt_pdsoi_schematic.png" title="PD-SOI MOSFET BTBT Mechanism" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-5 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/btbt_inverter_circuit.png" title="FD-SOI BTBT Inverter Circuit" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left: Energy band diagram showing BTBT mechanism in PD-SOI MOSFET—electrons tunnel from body to drain, accumulating holes. Right: BTBT inverter circuit schematic with subthreshold regime transistor for reset.
</div>

Our challenge was twofold: for neural integrators, we needed to *minimize* BTBT current to enable slow, energy-efficient spike generation. But for fast-switching inverters, we needed to *maximize* the same current for rapid response. Same physics, opposite goals.

## The Investigation

We began with 32nm Partially-Depleted SOI devices, systematically exploring a vast design space. Using Synopsys Sentaurus TCAD with the Nonlocal Path tunneling model—which accurately captures multiple tunneling paths through realistic geometries—we varied everything: channel height, buried oxide thickness, gate overlap, doping concentrations.

The first surprise: geometric parameters barely mattered. Whether we scaled the buried oxide from 100nm to 20nm or adjusted channel height, the tunneling current remained stubbornly constant. The physics was clear—BTBT occurs almost entirely in the narrow drain-gate overlap region, making bulk geometry irrelevant.

<div class="row justify-content-center">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/btbt_nch_variation.png" title="Channel Doping Variation" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/btbt_nsd_variation.png" title="S/D Doping Variation" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The breakthrough: doping dominates BTBT current. Left: I-V curves at different channel doping (N_CH). Right: I-V curves at different source/drain doping (N_SD). Lower doping dramatically reduces tunneling current.
</div>

The breakthrough came from doping. Reducing channel doping (N_CH) and source/drain doping (N_SD) dramatically suppressed tunneling current. Higher doping concentrations shrink the depletion width, steepening the energy band profile and shortening the quantum mechanical tunnel path—exponentially increasing current. For low-power integrators, the answer was simple: keep doping low.

## Scaling to 22nm

Moving to 22nm Fully-Depleted SOI for the inverter phase revealed a critical insight: geometric scaling alone is insufficient. The 32nm device used N_CH ~ 6.4×10¹⁷ cm⁻³ for partial depletion, but at 22nm, achieving full depletion required dropping to N_CH ~ 10¹² cm⁻³—a five orders of magnitude reduction.

<div class="row justify-content-center">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/btbt_optimal_design.png" title="Optimal Design Search" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/btbt_temperature.png" title="Temperature Dependence" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left: Finding the optimal design—maximum BTBT current achieved at L_OV = 1.4 nm and N_CH = 10¹⁷ cm⁻³. Right: Temperature dependence showing increased tunneling current at higher temperatures (300K → 398K).
</div>

Now we needed to maximize current. Pushing the drain-gate overlap (L_OV) and channel doping upward, we navigated a delicate balance—too aggressive, and the simulation failed to converge; too conservative, and performance suffered. The optimal design emerged at **L_OV = 1.4 nm** and **N_CH = 10¹⁷ cm⁻³**, representing the maximum achievable BTBT current before numerical instability.

## Temperature Effects

We also characterized thermal behavior across 300K to 398K. The tunneling current increased regularly and substantially with temperature—higher thermal energy reduces the effective bandgap, enhancing tunneling probability. This temperature sensitivity must be accounted for in practical neuromorphic systems operating in varying environments.

## Key Findings

The project revealed a clear hierarchy of influence on BTBT current:

1. **Doping concentrations (N_CH, N_SD):** Dominant factor—orders of magnitude impact
2. **Gate overlap length (L_OV):** Moderate effect—linear relationship
3. **Geometric parameters (H_CH, H_BOX):** Minimal impact—tunneling is localized

For neuromorphic applications: minimize N_CH and N_SD for low-power integrators; maximize within convergence limits for fast inverters. The physics is universal, but optimal design depends entirely on the target application.

**Repository:** [github.com/abhineet-agarwal/EE724---Nanoelectronics](https://github.com/abhineet-agarwal/EE724---Nanoelectronics)
