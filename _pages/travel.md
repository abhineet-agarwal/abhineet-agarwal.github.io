---
layout: default
title: travel
permalink: /travel/
description: Everywhere I've been.
nav: true
nav_order: 8
---

<div class="post">
  <header class="post-header">
    <h1 class="post-title">{{ page.title }}</h1>
    <p class="post-description">{{ page.description }} Click a filled country or Indian state to see photos and notes. Hover a dot for the place name.</p>
  </header>

  <article>
    <div class="travel-controls">
      <div class="travel-region-toggle" id="travel-region-toggle">
        <button data-view="world" class="active">World</button>
        <button data-view="india">India</button>
      </div>
      <button class="travel-reset-btn" id="travel-reset">Reset zoom</button>
    </div>

    <div class="travel-map-wrap">
      <svg id="travel-map-svg" data-base-url="{{ site.baseurl }}"></svg>
      <div class="travel-tooltip" id="travel-tooltip"></div>
    </div>

    <div class="travel-legend" style="margin-top: 0.75rem;">
      <span><span class="travel-legend-swatch"></span>Visited country / state</span>
      <span><span class="travel-legend-dot"></span>A place I've been</span>
    </div>

    <script type="application/json" id="travel-places-data">
      {{ site.data.travel_places | jsonify }}
    </script>
    <script type="application/json" id="travel-regions-data">
      {{ site.data.travel_regions | jsonify }}
    </script>

    <script
      defer
      src="{{ site.third_party_libraries.d3.url.js }}"
      integrity="{{ site.third_party_libraries.d3.integrity.js }}"
      crossorigin="anonymous"
    ></script>
    <script defer src="{{ '/assets/js/travel-map.js' | relative_url }}"></script>
  </article>
</div>
