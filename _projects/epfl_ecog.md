---
layout: page
title: High-Density ECoG Arrays by Hybrid Integration
description: Flexible polyimide electrode arrays with a 512-channel recording ASIC flip-chip bonded on top
img: assets/img/epfl_nixel_bonded.png
importance: 2
category: R&D
---

**Lab:** Laboratory for Soft Bioelectronic Interfaces (LSBI), EPFL<br>
**Supervisor:** Horacio Londoño Ramírez<br>
**Duration:** Feb - June 2026 (semester project, exchange)

Recording the cortex at fine spatial scale runs into a contradiction. Flexible thin-film arrays conform to the brain and are well tolerated, but every electrode has to be routed out through a finite number of metal layers — so channel count saturates, and the connector grows with it. Rigid silicon arrays get the density through integrated electronics, but silicon doesn't conform to soft tissue, and the mechanical mismatch invites a foreign-body response.

Hybrid integration sidesteps both: bond the silicon directly onto the flexible array. The polymer provides the tissue interface; the chip amplifies and digitises all channels on-site and streams a handful of digital lines off the array instead of hundreds of analog ones. That also removes the noise penalty of long passive leads, which otherwise degrade cortical signals before they reach any amplifier.

I worked on the fabrication side of such a device: a flexible polyimide array of 256 platinum electrodes (150 µm sites over 6 × 6 mm, ~10 µm total thickness) with Science Corporation's **Nixel 512** recording ASIC flip-chip bonded onto it — a 4 × 4 mm wafer-level chip-scale package with 724 Cu/Sn bumps at 140 µm pitch, carrying an on-chip low-noise amplifier and 12-bit ADC per channel.

<div class="row justify-content-center">
    <div class="col-sm-9 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/epfl_nixel_bonded.png" title="Nixel 512 bonded onto the flexible array" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The Nixel 512 flip-chip bonded onto the fabricated polyimide array, with the fan-out routing visible around the die.
</div>

## The vias kept going open

I inherited a two-layer metallisation process whose architecture worked but whose Via 1 contacts — the links between Metal 1 and Metal 2 — had a habit of dying. A via measured a few tens of ohms when fresh, then drifted upward over hours to days until it was effectively an open circuit.

My first run added an oxygen-plasma clean of the via openings right before Metal 2 deposition, on the theory that organic residue was blocking the contact. It was a reasonable guess and the clean was worth keeping, but the failure came back unchanged: single-via test structures read 26–32 Ω as fabricated, ~1.9 kΩ after a night, and up to 65 kΩ after a bake. Four orders of magnitude. The diagnostic clue was what *didn't* move — Metal-2-only structures with no via in the path sat at 3.6–4.3 Ω and stayed there. The problem lived specifically at the via interface.

A FIB-SEM cross-section through a failing via showed why: a thin titanium-oxide layer had formed between Metal 1 and Metal 2. Titanium was the adhesion layer in the Metal 2 stack, so it was being sputtered everywhere the mask was open — the via bottoms included, landing directly on Metal 1. Even nominally sealed under the rest of the stack it oxidised over time, growing a dielectric in series with the contact. That explained both the localisation and why storage and heat made it worse.

## The fix: never put titanium in the via

The fix was to split the Metal 2 deposition into two independent sputter/lift-off cycles. The first uses a `Metal_2 − VIA_1` mask — Metal 2 geometry with the via openings subtracted — to lay down Ti/Pt adhesion everywhere *except* the vias. The second uses the standard mask to deposit the Pt/Au/Pt/Ti conductive stack across everything, landing platinum directly on Metal 1 at the via bottom. Titanium adhesion is preserved where it's needed, between the gold-cored stack and the polyimide, and absent where it was doing damage.

<div class="row justify-content-center">
    <div class="col-sm-9 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/epfl_nixel_viafix.png" title="The fix at the via bottom" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Before: Ti sputtered into the via oxidises to insulating TiOx. After: the first lift-off skips the vias, so the Pt/Au stack contacts Metal 1 directly.
</div>

It worked. Measuring vias individually is awkward when each one is around an ohm, so the wafers carry via chains that thread ~80 vias in series and amplify the total into something readable. Those chains came in at ≈101 Ω — **0.5 to 1 Ω per via** — consistent across every site on both production wafers, and stable after storage and baking. The open-circuit mode was gone.

Alongside that I ran a lift-off study, since the baseline AZ10XT resist left jagged, burred metal edges that threaten bond-pad definition and inter-pad shorts. nLOF 2020 improved the edges but behaved inconsistently run to run; an LOR 3A sacrificial underlayer, which dissolves isotropically to guarantee an undercut, gave reproducibly clean burr-free edges and became the adopted process.

## Bonding and proving the signal path

With wafers in hand, the Nixel was flip-chip bonded onto the flexible substrate. A four-wire Kelvin test structure isolates a single Cu/Sn bump from lead resistance, and measured **28.0 ± 12.7 mΩ** per bump across eight sites — a sound electrical bond on a polymer substrate.

Validating the recording chain was done in two stages with a 10 Hz, 1 mV peak-to-peak sinusoid. First on a reference board already bonded by Science Corporation, injecting directly into the chip inputs to confirm the read-out chain end to end, independent of anything I had made. Then on the real device: electrodes dipped in phosphate-buffered saline with the test signal passed through the solution, so the signal travelled the entire physical path — my electrodes, my routing, my vias, the flip-chip bond — and out through the headstage. A clean 10 Hz sinusoid came back on all 256 channels. Passive arrays measured 240 ± 104 kΩ at 1 kHz, in the expected range for 150 µm platinum sites.

I also built a shear-test setup to quantify chip-to-flex bond strength mechanically, and worked out a three-step stud-bumping process (ball bump, coining, compression) for an Intan chip on a parallel track.

Left for the next person: full electrical characterisation of the bonded 256-channel array, a quantitative shear number on a bonded chip, and bonding out the remaining wafer positions to get a yield map.
