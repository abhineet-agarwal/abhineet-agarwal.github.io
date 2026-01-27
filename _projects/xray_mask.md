---
layout: page
title: X-ray Mask Fabrication and XRL
description: High-precision tantalum masks for satellite imaging applications
img: assets/img/me6110_collage.png
importance: 1
category: Academic Projects
---

**Course:** ME6110 - Nanomanufacturing Processes (Autumn 2025)<br>
**Instructor:** Prof. Rakesh Mote

This project had two parts. In the first, we fabricated a high-precision tantalum coded aperture mask (CAM) prototype for the SITARE-1 CubeSat X-ray payload being developed at IIT Bombay in collaboration with ISRO. The CAM is a 2D array of opaque and transparent cells placed above dual CZT detectors for X-ray source localisation. We laser-micromachined a 20x20 mm prototype from 0.5 mm thick tantalum using a Yb-doped pulsed fiber laser (6.5 W, 50 mm/s, 50 kHz) with argon gas assist and multi-pass removal. Post-fabrication metrology confirmed feature edge lengths within +/-10 um, consistent kerf width, and no warping — validating the process for the full-scale CAM.

In the second part, we studied the feasibility of X-ray lithography (XRL) as a beyond-EUV patterning technology. We reviewed XRL's history from its 1972 origins through the IBM HELIOS era to its recent resurgence driven by compact accelerator sources like Inverse Compton Scattering and Laser Wakefield Acceleration. We then built a Python simulation suite covering three domains: aerial image formation (Beer-Lambert absorption + Fresnel diffraction through a Ta/Si3N4 mask stack), resist response modelling (dose calculation, photon shot noise, resist blur, and development for PMMA, ZEP520A, SU-8, and HSQ), and thermal-mechanical analysis of mask membranes (Si3N4, SiC, Diamond) under beam loading. The simulations identified 0.5 keV as the optimal photon energy for a 0.5 um Ta absorber, showed ZEP520A offers the best sensitivity-resolution balance (80 mJ/cm2, LER 2-3 nm), and confirmed diamond membranes are needed for high-flux compact sources (>5 W). We also examined Substrate's claim of a ~$40M accelerator-based XRL tool capable of 2 nm-class single-patterning, an order of magnitude cheaper than ASML's High-NA EUV systems.

<object data="{{ '/assets/pdf/ME6110_report.pdf' | relative_url }}" type="application/pdf" width="100%" height="600px">
  <p>PDF cannot be displayed. <a href="{{ '/assets/pdf/ME6110_report.pdf' | relative_url }}">Download PDF</a></p>
</object>

