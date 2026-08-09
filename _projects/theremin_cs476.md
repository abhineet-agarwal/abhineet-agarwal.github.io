---
layout: page
title: Camera-Controlled Theremin
description: An FPGA theremin you play with your hands in mid-air, built on a soft CPU with custom instructions
img: assets/img/theremin_blockdiagram.png
importance: 2
category: Academic Projects
github: https://github.com/abhineet-agarwal/theremin-cs476
---

**Course:** [CS-476: Embedded System Design](https://edu.epfl.ch/coursebook/en/embedded-system-design-CS-476), EPFL (Spring 2026)<br>
**With:** Tommaso Capone

A theremin is played without touching it — antennas sense where your hands are, one setting pitch and the other volume. We rebuilt that digitally: a camera watches two coloured markers, and moving your hands in front of it plays the instrument. Everything runs on a GECKO5 board's Lattice ECP5 FPGA, where the CPU, camera interface, and every peripheral are Verilog synthesised into fabric — the or1420 OpenRISC soft core at 74.25 MHz is deliberately weak, which is what makes the hardware-acceleration exercise real.

<div class="row justify-content-center">
    <div class="col-sm-10 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/theremin_blockdiagram.png" title="System block diagram" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The full signal path: camera to streaming feature extractor to CPU to autonomous audio custom instruction.
</div>

## Vision in the pixel stream

The interesting constraint is that the CPU can't afford to look at pixels. So it doesn't — segmentation happens inside the camera interface as data streams past, before anything reaches SDRAM. Two `colorMaskCi` custom instructions run per pixel, each a combinational RGB565 bounding-box test (six parallel comparisons — low and high bounds on R, G, B, packed into one 32-bit register). Behind them, per-marker accumulators keep three running sums — pixel count, Σx, Σy — which latch into shadow registers at the frame boundary. The CPU reads six numbers per frame and never sees a single pixel. Thresholds aren't hardcoded: at startup the system samples a small calibration patch of the live frame and learns the colour bounds for whatever markers you're actually holding.

This is structurally different from a stateless per-pixel transform like grayscale conversion — it's a feature extractor whose output is a property of the *whole frame*, computed on the fly.

## The pivot: audio belongs in hardware

The audio path was where the design changed shape. The first version had the CPU emitting one sample every 45 µs, paced by a cycle counter — and it died on real hardware, because the special-purpose register holding the CPU frequency reads back zero, so the pacing arithmetic collapsed. The fix wasn't to patch the timing; it was to recognise that emitting audio samples on a hard deadline is a streaming hardware problem, not a CPU problem.

So `audioUartCi` became autonomous. The CPU writes a target pitch and volume once per frame and walks away. Inside, a Bresenham-style 32-bit fractional accumulator divides 74.25 MHz down to exactly 22.05 kHz with zero long-term drift; a 256-entry signed sine LUT with linear interpolation generates the waveform; a Q8 multiplier applies volume; and a hardware UART transmitter ships signed 16-bit samples at 781250 baud. The 22.05 kHz deadline now lives entirely in hardware and cannot be missed. A host-side Python script reads the serial stream and plays it — which also removed the project's dependency on lab audio equipment, since the on-board DAC would have needed an oscilloscope or external speaker to demo.

One nice detail: an AND-mux lets a single board pin carry both the audio stream and the debug console UART.

## Results

We built a software-only baseline for comparison with segmentation logic bit-identical to the Verilog classifier, so both paths produce exactly the same centroids — only the execution differs. Measured with the on-chip profiler wrapping the per-frame loop body:

| Path | Cycles / frame | Time / frame | Effective rate |
|---|---:|---:|---:|
| Accelerated | 4,701 | 63 µs | camera-limited (15–30 fps) |
| Software-only | 53,278,252 | 718 ms | 1.4 fps |

That's a **~11,000× reduction in per-frame CPU work**, and the difference between an instrument and a slideshow. The whole design fits comfortably on the ECP5-85 — 7,912 LUT4s (9.4%), 4,301 flip-flops (5.1%), and about 10% of the DSP blocks and block RAMs — with an HDMI 720p output drawing the live camera feed with hand-tracking crosshairs on top.

<object data="{{ '/assets/pdf/cs476_theremin_presentation.pdf' | relative_url }}" type="application/pdf" width="100%" height="600px">
  <p>PDF cannot be displayed. <a href="{{ '/assets/pdf/cs476_theremin_presentation.pdf' | relative_url }}">Download PDF</a></p>
</object>

**Repository:** [github.com/abhineet-agarwal/theremin-cs476](https://github.com/abhineet-agarwal/theremin-cs476)
