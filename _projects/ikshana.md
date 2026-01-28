---
layout: page
title: iKshana
description: A complete navigational solution for the visually impaired
img: assets/img/ikshana_design_diagram.png
importance: 6
category: R&D
---

**Institute Technical Summer Project**, IIT Bombay

**Role:** Team Lead  

**Duration:** May - Aug 2023

**Achievement:** 2nd Place among 100+ teams

## The Beginning

It started with a simple question during my first summer at IIT Bombay: *How do visually impaired people navigate unfamiliar places?* White canes detect obstacles but can't tell you which way to turn. Guide dogs are expensive and unavailable to most. GPS apps speak directions, but audio can be drowned out by traffic noise or draw unwanted attention.

We had three months, zero hardware experience, and an idea that seemed almost naive: what if your shoes could guide you?

<div class="row justify-content-center">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/ikshana_initial_sketch.png" title="Initial Design Sketch" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Our first sketch: brainstorming where to place sensors and how the harness would attach to any shoe.
</div>

## The Design

iKshana—Sanskrit for "vision"—became a foot-worn harness with two complementary systems:

**Short-range navigation** using ultrasonic sensors detecting obstacles within 30cm. When you're about to walk into something, the corresponding foot vibrates. Left foot for obstacles on the left. Right foot for the right. Both feet for something directly ahead.

**Long-range navigation** using GPS and an Android app we built from scratch. We processed OpenStreetMap data to identify every intersection on the IIT Bombay campus. At each turn, the appropriate foot pulses three times—left for left turns, right for right. Both feet together means keep walking straight.

<div class="row justify-content-center">
    <div class="col-sm-10 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/ikshana_design_diagram.png" title="iKshana Device Design" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The complete iKshana module design: elastic straps secure the harness to any shoe, while 3D-printed enclosures house the ultrasonic sensors and ESP-32 microcontroller with vibration motors.
</div>

The hardware consisted of an ESP-32 microcontroller on each foot, communicating with the Android app via WiFi. Each module had two ultrasonic sensors (HC-SR04) pointing forward and to the side, plus coin vibration motors for haptic feedback. Everything was powered by compact Li-Po batteries and housed in custom 3D-printed enclosures.

<div class="row justify-content-center">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/ikshana_device_closeup.jpg" title="Device Close-up" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/ikshana_device_shoe.jpg" title="Device on Shoe" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Close-up views of the working prototype showing the ultrasonic sensors, wiring, power switch, and elastic strap attachment system.
</div>

## The Software

The Android app was the brain of the operation. It handled three critical tasks:

1. **Location tracking** using the phone's GPS and fused location provider
2. **Route calculation** using processed OpenStreetMap data with the Osmium library
3. **Communication** with the ESP-32 modules to trigger appropriate vibration patterns

<div class="row justify-content-center">
    <div class="col-sm-10 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/ikshana_software_flow.png" title="Software Architecture" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The software pipeline: from OpenStreetMap data extraction to real-time navigation feedback through vibrations.
</div>

We preprocessed the entire IIT Bombay campus map, extracting intersection coordinates and path data into JSON format that the app could quickly query. When the user approached an intersection, the app calculated the required turn direction and sent commands to the appropriate foot module.

<div class="row justify-content-center">
    <div class="col-sm-10 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/ikshana_software_results.png" title="Software Results" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The complete software architecture showing how location data, map processing, and ESP-32 communication work together.
</div>

## Building It

We learned everything on the fly. Soldering irons burned fingers. ESP32 WiFi connections dropped mysteriously at 3 AM. Our first 3D-printed enclosures cracked under the stress of walking. The Android app crashed more often than it worked.

<div class="row justify-content-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/ikshana_latenight.jpg" title="Late Night Work" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Catching sleep on a beanbag between debugging sessions in Tinkerer's Lab—the workspace littered with wires, tools, and half-finished prototypes.
</div>

But slowly, it came together. The vibration patterns became intuitive. The GPS accuracy improved. The enclosures got stronger. By August, we had two working modules that could genuinely guide someone across campus.

## The Result

We presented iKshana at the ITSP finale in front of faculty, industry judges, and hundreds of fellow students. Walking them through a blindfolded demo—watching their faces as they realized the vibrations actually worked—was unforgettable.

<div class="row justify-content-center">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/ikshana_presenting_demo.jpg" title="Demonstrating the Project" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/ikshana_exhibition_crowd.jpg" title="Crowd at Exhibition" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left: Explaining the project to visitors at our booth. Right: The crowd gathering to see the blindfolded demo in action.
</div>

<div class="row justify-content-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/ikshana_exhibition_booth.jpg" title="Exhibition Booth" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Presenting at the ITSP 2023 exhibition hall, with our poster summarizing the project's objectives, methods, and results.
</div>

**Second place among 100+ teams.** More importantly, we'd built something real. Something that worked. Something that could actually help people.

<div class="row justify-content-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/ikshana_team_poster.jpg" title="Team with Poster" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The team with our final poster at ITSP 2023. Three months of work condensed into one A0 sheet.
</div>

## What I Learned

This was my first hardware project. I learned to solder, design PCBs (badly, at first), write Android apps, process map data, and debug systems where the bug could be in the code, the wiring, the sensor, or the battery simultaneously.

But the real lessons were about teamwork. About pushing through when nothing works. About the feeling when it finally does. The friendships forged in Tinkerer's Lab at 4 AM, debugging code that should have been working, became some of the strongest I have.

## Presentation

<object data="{{ '/assets/pdf/ikshana_presentation.pdf' | relative_url }}" type="application/pdf" width="100%" height="600px">
    <p>Unable to display PDF. <a href="{{ '/assets/pdf/ikshana_presentation.pdf' | relative_url }}">Download</a> instead.</p>
</object>

**Repository:** [github.com/abhineet-agarwal/ikshana](https://github.com/abhineet-agarwal/ikshana)
