---
layout: page
title: Multi-Touch Force Platform
description: Input device for patients with neurodegenerative diseases
img:
importance: 4
category: Academic Projects
---

**Course:** EE344 - Electronic Design Lab | **Instructor:** Prof. Siddharth Tallur

**Supported by:** MakerBhavan Foundation

**Duration:** Jan - Apr 2025 | **Team:** Abhineet Agarwal, TKSS Ashok, G.V. Sreekar Reddy, Chinmay Moorjani

## The Problem

For patients with neurodegenerative diseases like Parkinson's or ALS, conventional input devices become unusable as motor control deteriorates. Touchscreens require precise finger placement. Mice demand steady hands. Keyboards need fine motor coordination. What if we could build an input device that works with *any* touch—detecting not just where you press, but *how hard*?

The challenge: create a 23cm × 23cm platform that can simultaneously detect up to three touch points and measure the individual force at each. No existing commercial solution does this affordably.

## The Approach

We fused two sensing modalities: **load cells** for total force measurement and **capacitive touchpads** for position detection. Four load cells at each corner measure the aggregate force applied to the platform. Meanwhile, a 3×4 grid of 12 capacitive touch-sensing ICs pinpoints where fingers make contact.

<div class="row justify-content-center">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/ee344_load_cell_stand.jpg" title="Load Cell Mount" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/ee344_capacitive_grid.jpg" title="Capacitive Touchpad Grid" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left: 3D-printed S-shaped stands supporting load cells at each corner—designed to handle stress reliably. Right: The capacitive touchpad grid with 12 ICs wired through slots in the laser-cut MDF base.
</div>

The real innovation lay in the algorithm. With load cells at the corners and known touch positions from the capacitive grid, we formulated a system of equations based on force and torque balance. Solving this system decomposes the total measured force into individual contributions from each touch point—something that seemed impossible with just four sensors.

## Building the Hardware

The project demanded expertise across domains. We designed two custom PCBs: an analog board for load cell signal conditioning using INA128P instrumentation amplifiers and ADS1115 high-resolution ADCs, and a digital board managing the 12 capacitive ICs via I2C multiplexers.

<div class="row justify-content-center">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/ee344_oscilloscope_test.jpg" title="Load Cell Testing" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/ee344_full_system.jpg" title="Complete System" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left: Testing the AC excitation circuit—the oscilloscope shows the variable-amplitude square wave whose amplitude decreases with applied force. Right: The complete system showing the load cell PCB, breadboard MUX (a PCB design lesson learned), and the touchpad grid with all 12 capacitive ICs wired.
</div>

The mechanical design evolved through multiple iterations. Initial prototype stands couldn't handle repeated stress, so we redesigned them as S-shaped structures that flex predictably under load. The capacitive ICs needed custom 3D-printed holders to maintain consistent spacing across the grid.

## Challenges and Lessons

Nothing went smoothly. Over 120 wire connections introduced noise and soldering fatigue. Late-arriving capacitive touchpads compressed our testing window. Two days before the final deadline, the prototype was accidentally dropped and had to be completely rebuilt. One capacitive IC failed from repeated soldering, reducing our multi-touch resolution.

But we learned: instrumentation amplifier design for microvolt signals, I2C multiplexing for devices with identical addresses, real-time data fusion across dual STM32 microcontrollers, and the humility that comes from watching weeks of work hit the floor.

## The Result

A working multi-touch force platform that detects up to three simultaneous touches with individual force estimation. The system streams data over UART to a Python visualization interface showing real-time force maps. For patients who struggle with conventional input devices, this could open new possibilities for interaction—pressing harder to confirm, lighter to scroll, using palm pressure instead of finger precision.

**Repository:** [github.com/abhineet-agarwal/EE344-Force-Sensing-Multitouch-Pad](https://github.com/abhineet-agarwal/EE344-Force-Sensing-Multitouch-Pad)
