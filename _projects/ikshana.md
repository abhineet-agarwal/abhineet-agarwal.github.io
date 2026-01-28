---
layout: page
title: iKshana
description: A complete navigational solution for the visually impaired
img: assets/img/ikshana_poster.jpg
importance: 6
category: R&D
---

**Institute Technical Summer Project** | IIT Bombay

**Role:** Team Lead | **Duration:** May - Aug 2023

**Achievement:** 2nd Place among 100+ teams

## The Beginning

It started with a simple question during my first summer at IIT Bombay: *How do visually impaired people navigate unfamiliar places?* White canes detect obstacles but can't tell you which way to turn. Guide dogs are expensive and unavailable to most. GPS apps speak directions, but audio can be drowned out by traffic noise or draw unwanted attention.

We had three months, zero hardware experience, and an idea that seemed almost naive: what if your shoes could guide you?

<div class="row justify-content-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/ikshana_device.png" title="iKshana Device Design" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The iKshana module design: elastic straps secure the harness to any shoe, while ultrasonic sensors and vibration motors provide obstacle detection and navigation feedback.
</div>

## The Design

iKshana—Sanskrit for "vision"—became a foot-worn harness with two complementary systems:

**Short-range navigation** using ultrasonic sensors detecting obstacles within 30cm. When you're about to walk into something, the corresponding foot vibrates. Left foot for obstacles on the left. Right foot for the right. Both feet for something directly ahead.

**Long-range navigation** using GPS and an Android app we built from scratch. We processed OpenStreetMap data to identify every intersection on the IIT Bombay campus. At each turn, the appropriate foot pulses three times—left for left turns, right for right. Both feet together means keep walking straight.

## Building It

We learned everything on the fly. Soldering irons burned fingers. ESP32 WiFi connections dropped mysteriously at 3 AM. Our first 3D-printed enclosures cracked under the stress of walking. The Android app crashed more often than it worked.

<div class="row justify-content-center">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/ikshana_working.jpg" title="Late Night Work" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/ikshana_demo.jpg" title="Demo at Exhibition" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left: Catching sleep between debugging sessions in Tinkerer's Lab. Right: Demonstrating the working prototype at the ITSP exhibition.
</div>

But slowly, it came together. The vibration patterns became intuitive. The GPS accuracy improved. The enclosures got stronger. By August, we had two working modules that could genuinely guide someone across campus.

## The Result

We presented iKshana at the ITSP finale in front of faculty, industry judges, and hundreds of fellow students. Walking them through a blindfolded demo—watching their faces as they realized the vibrations actually worked—was unforgettable.

<div class="row justify-content-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/ikshana_presenting.jpg" title="Presenting at ITSP" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Presenting iKshana at the ITSP 2023 exhibition. The poster behind us summarizes months of work into a single sheet.
</div>

**Second place among 100+ teams.** More importantly, we'd built something real. Something that worked. Something that could actually help people.

## What I Learned

This was my first hardware project. I learned to solder, design PCBs (badly, at first), write Android apps, process map data, and debug systems where the bug could be in the code, the wiring, the sensor, or the battery simultaneously.

But the real lessons were about teamwork. About pushing through when nothing works. About the feeling when it finally does. The friendships forged in Tinkerer's Lab at 4 AM, debugging code that should have been working, became some of the strongest I have.

## Presentation

<object data="{{ '/assets/pdf/ikshana_presentation.pdf' | relative_url }}" type="application/pdf" width="100%" height="600px">
    <p>Unable to display PDF. <a href="{{ '/assets/pdf/ikshana_presentation.pdf' | relative_url }}">Download</a> instead.</p>
</object>

**Repository:** [github.com/abhineet-agarwal/ikshana](https://github.com/abhineet-agarwal/ikshana)
