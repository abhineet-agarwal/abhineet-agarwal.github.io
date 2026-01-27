---
layout: page
title: Neuromorphic Engineering Projects
description: Exploring how the brain computes — from biologically plausible learning rules to hardware-aware spiking networks
img:
importance: 2
category: Academic Projects
---

**Course:** EE746: Neuromorphic Engineering (Autumn 2025)<br>
**Instructor:** Prof. Veeresh Deshpande

The brain doesn't learn the way our computers do. There are no backpropagation passes, no global loss functions, no gradient tapes — just billions of neurons adjusting their connections based on the precise timing of their spikes. This course was an opportunity to explore that difference hands-on, through two projects that sit at opposite ends of the neuromorphic spectrum.

**The first project** started with a simple question: can a network learn to recognize handwritten digits without ever being told what any digit looks like? Following the Diehl & Cook (2015) approach, I built a spiking neural network in Brian2 that learned entirely through Spike-Timing Dependent Plasticity (STDP) — a local, unsupervised rule where synapses strengthen when a pre-synaptic spike consistently precedes a post-synaptic one, and weaken otherwise. With 400 excitatory neurons and lateral inhibition forcing each neuron to specialize, the network carved out its own internal representations of the MNIST dataset, reaching 82.5% accuracy without seeing a single label during training. For comparison, I implemented the same task using supervised backpropagation through time (BPTT) with snnTorch, which reached ~95% accuracy but at the cost of biological plausibility. The trade-off was stark: STDP was slow (7 hours on CPU) and less accurate, but spike-efficient (16 spikes/sample) and faithful to how real neurons might learn. BPTT was fast, accurate, and completely unlike anything the brain does.

**The second project** shifted focus from learning to hardware. Using the SpikeSim framework, I evaluated how spiking networks perform when mapped onto actual neuromorphic hardware. I compared two emerging memory technologies — Ferroelectric Tunnel Junctions (FTJ) and Resistive RAM (RRAM) — as synaptic elements in a VGG9 SNN deployed on 64x64 crossbar arrays. FTJ devices showed a 4.8% energy advantage with nearly identical area and latency. I also trained VGG9 SNNs with 4-bit weight quantization on CIFAR-10 (80.3% accuracy) and CIFAR-100 (42.3% accuracy), and explored the NICE (Neuromorphic In-memory Computing Engine) module for hardware-aware inference.

Together, these projects traced a path from biological inspiration to silicon implementation — from understanding how timing-based plasticity can give rise to pattern recognition, to evaluating the memory devices that might one day make such computation practical at scale.
