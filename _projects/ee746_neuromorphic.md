---
layout: page
title: Neuromorphic Engineering
description: Exploring how the brain computes — biologically plausible learning rules and SNNs on hardware
img: assets/img/ee746_collage.png
importance: 2
category: Academic Projects
---

**Course:** EE746: Neuromorphic Engineering (Autumn 2025)<br>
**Instructor:** Prof. Veeresh Deshpande

Project 1: Following the Diehl & Cook (2015) approach, I built a spiking neural network in Brian2 that learned entirely through Spike-Timing Dependent Plasticity (STDP) — a local, unsupervised rule where synapses strengthen when a pre-synaptic spike consistently precedes a post-synaptic one, and weaken otherwise. With 400 excitatory neurons and lateral inhibition forcing each neuron to specialize, I reached 82.5% accuracy without labeling. For comparison, I implemented the same task using supervised backpropagation through time (BPTT) with snnTorch, which reached ~95% accuracy but at the cost of biological plausibility. STDP was slow (7 hours on CPU) and less accurate, but spike-efficient (16 spikes/sample) and faithful to how real neurons.

[Presentation](https://github.com/abhineet-agarwal/EE746-Neuromorphic-Engineering/blob/master/EE746-Project1/EE746_1-2.pdf)

Project 2: Using the SpikeSim framework, I evaluated how spiking networks perform when mapped onto actual neuromorphic hardware. I compared two emerging memory technologies - Ferroelectric Tunnel Junctions (FTJ) and Resistive RAM (RRAM) - as synaptic elements in a VGG9 SNN deployed on 64x64 crossbar arrays. FTJ devices showed a 4.8% energy advantage with nearly identical area and latency. I also trained VGG9 SNNs with 4-bit weight quantization on CIFAR-10 (80.3% accuracy) and CIFAR-100 (42.3% accuracy), and explored the NICE module for hardware-aware inference.

[Presentation](https://github.com/abhineet-agarwal/EE746-Neuromorphic-Engineering/blob/master/EE746_Project2/EE746_proj2.pdf)


