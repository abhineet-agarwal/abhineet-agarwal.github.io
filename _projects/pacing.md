---
layout: page
title: Pacing
description: An academic pacing companion that makes semester workload visible before it becomes a crisis
img:
importance: 2
category: Freelance Software
github: https://github.com/abhineet-agarwal/pacing
---

Students don't burn out because they can't do the work — they burn out because they can't see it coming. Pacing is a mobile app that makes academic load visible at three time scales at once, and surfaces opportunities only when there's genuine capacity for them.

The design came out of two user-research briefs rather than a hunch. The findings that shaped it: stress is a *perceived* gap between demands and resources, not an absolute workload; first-year students plan at a horizon of one to two days, not a semester; external accountability is the missing ingredient in every tool they'd tried; and setup friction kills adoption before any feature matters. Positioned against Notion, Todoist, Google Calendar, Flourish, and Woebot, the proactive-academic quadrant was empty.

## What it does

The app opens on a **Day** view — a 24-hour timeline showing real calendar events as solid blocks alongside dashed "ghost blocks" proposing work that fits the gaps: deadline prep, opportunities, or a walk based on recent check-ins. Tap a ghost block to accept it and it lands on your Google Calendar; tap empty space to block your own time. Pinch out to a **Week** strip, out again to a **Semester** heatmap of colour-coded load — three zoom levels onto the same calendar.

Around that sit an **Advisor** that scans Gmail and the web for opportunities and surfaces them as suggestions when they fit a real slot, a **commitment gate** that answers "should I take this on?" with a week-by-week load projection, and a low-friction **daily check-in** parsed by an LLM to extract friction signals.

## Engineering

React Native (Expo) on the front end, FastAPI and PostgreSQL on the back, Celery and Redis for the work that can't happen in a request cycle — iCal polling, Calendar sync, nightly load recomputation, Gmail history processing. Claude handles the language-shaped parts: check-in parsing, opportunity extraction, and the commitment-gate reasoning. There's a separate Vite/React web prototype deployed alongside the mobile app.

A few decisions worth calling out. Course deadlines come in over **iCal rather than the Moodle REST API**, because a student can export their own calendar URL without involving university IT — the REST path needs admin permission the user doesn't have. The Gmail scanner reads **only `subject`, `from`, and a 100-character snippet**; the message body is never fetched or stored. Weekly load lives in its own table rather than being aggregated per request, which keeps the heatmap a single read instead of a join across thousands of events.

The interaction design followed the research too. Suggestions are ghost blocks pinned to specific time slots rather than another to-do list, because a list is just one more thing to triage — tying each suggestion to a slot you actually have preserves agency while removing the planning burden that the interviews identified as the main reason people abandoned their previous tool. And navigation is a durable bottom tab bar with pinch-to-zoom layered on top, not pinch alone: users predicted they'd abandon the app, so discoverability had to beat delight.

**Repository:** [github.com/abhineet-agarwal/pacing](https://github.com/abhineet-agarwal/pacing)
