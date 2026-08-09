---
layout: page
title: OpenTCAD
description: An open-source Python framework for semiconductor process and device simulation
img: assets/img/opentcad_nmos_idvg.png
importance: 1
category: Freelance Software
github: https://github.com/abhineet-agarwal/opentcad
---

Commercial TCAD is expensive, closed, and hard to script. OpenTCAD is my attempt at an open alternative: a modular Python framework where a single script defines a device structure, meshes it, solves the semiconductor equations on it, and produces IV/CV characteristics — with the data provenance carried along at every step.

Rather than write yet another solver, it stitches together mature open libraries — Gmsh for meshing, [DEVSIM](https://devsim.org) for the drift-diffusion/Poisson solve, PyVista for visualization, with ViennaPS and FiPy planned for the process side. The piece that doesn't exist anywhere in open source, and the reason the project is interesting, is the glue: a geometry DSL that speaks in semiconductor terms, and a process-to-device mesh translator.

## The design

Every layer communicates through one data object, the `MeshField` — a `pyvista.UnstructuredGrid` carrying per-cell material IDs, per-node doping, named electrical contacts, and a process-step history. There is no raw-array interface between modules, which is what guarantees geometry, doping, contacts, and provenance never drift apart. Units are enforced globally (µm, cm⁻³, K, eV); the µm→cm conversion the solver needs happens internally and never surfaces in the API.

Structures are built with a chained DSL — `add_substrate`, `add_layer`, `add_region`, `add_contact` — so a full four-terminal NMOS with n+ source/drain wells poked through the gate oxide is about ten lines. Material parameters live as validated YAML files, so adding a material means dropping in a new file rather than touching code.

The physics layer is pluggable: mobility, recombination, bandgap narrowing, carrier statistics, and contact boundary conditions are all swappable without going near the solver. Models compose — the full CMOS mobility stack (doping-dependent bulk, high-field velocity saturation, and surface degradation at the Si/SiO₂ interface) is a single nested expression:

```python
physics = PhysicsConfig(
    mobility=Lombardi(base=Canali(base=Klaassen())),
    recombination=[SRH(), Auger()],
    bgn=Slotboom())
```

Currently implemented: Klaassen unified bulk mobility, Canali velocity saturation, Lombardi surface mobility, SRH/Auger/radiative recombination, Slotboom bandgap narrowing, Fermi-Dirac statistics, and ohmic plus Schottky contacts.

## Validation

Phase 0 is complete and validated against analytics rather than vibes — a 1-D p-n junction IV within 5% of Shockley, a 2-D MOS capacitor reproducing all three regimes with surface potential saturating near 2·φ_F at strong inversion, and a 2-D NMOS Id–Vgs with clean turn-on and an on/off ratio above 10¹⁰ at Vds = 50 mV. The suite is 63 tests across geometry, materials, physics models, and full device integration.

<div class="row justify-content-center">
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/opentcad_pn_junction_iv.png" title="p-n junction IV" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/opentcad_mos_cv.png" title="MOS capacitor CV" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/opentcad_nmos_idvg.png" title="NMOS Id-Vgs" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    p-n junction forward IV with a semilog slope matching q/kT; quasi-static MOS-capacitor CV; and the 2-D NMOS transfer characteristic at Vds = 50 mV.
</div>

The roadmap runs through ViennaPS-backed topography (etch, deposition, Deal-Grove oxidation with a moving boundary), Pearson IV implant and FiPy diffusion, and quantitative calibration against the SKY130 and IHP SG13G2 open PDKs, with a NEGF backend as a longer-term extension.

Apache 2.0 licensed.

**Repository:** [github.com/abhineet-agarwal/opentcad](https://github.com/abhineet-agarwal/opentcad)
