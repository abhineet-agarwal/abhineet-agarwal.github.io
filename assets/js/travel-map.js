(() => {
  const svg = d3.select("#travel-map-svg");
  const wrap = document.querySelector(".travel-map-wrap");
  const tooltip = document.getElementById("travel-tooltip");
  if (!svg.node() || !wrap) return;

  const base = svg.attr("data-base-url") || "";
  const width = 960;
  const height = 520;
  svg.attr("viewBox", `0 0 ${width} ${height}`);

  const places = JSON.parse(document.getElementById("travel-places-data").textContent);
  const regions = JSON.parse(document.getElementById("travel-regions-data").textContent);

  const regionByMapName = {};
  regions.forEach((r) => {
    regionByMapName[r.type + "::" + r.map_name] = r;
  });

  const projection = d3.geoEquirectangular();
  const path = d3.geoPath(projection);

  const g = svg.append("g");
  const bgPath = g.append("path").attr("class", "travel-map-bg");
  const countriesLayer = g.append("g").attr("class", "travel-countries-layer");
  const statesLayer = g.append("g").attr("class", "travel-states-layer");
  const dotsLayer = g.append("g").attr("class", "travel-dots-layer");

  const baseDotRadius = 2.6;

  const zoom = d3
    .zoom()
    .scaleExtent([1, 60])
    .filter((event) => {
      // Require ctrl/cmd+wheel (or trackpad pinch, which Chrome reports as ctrlKey wheel
      // events) so a plain scroll over the map keeps scrolling the page instead of zooming it.
      if (event.type === "wheel") return event.ctrlKey || event.metaKey;
      return !event.button;
    })
    .on("zoom", (event) => {
      g.attr("transform", event.transform);
      dotsLayer.selectAll("circle").attr("r", baseDotRadius / event.transform.k);
    });
  svg.call(zoom);
  svg.on("dblclick.zoom", null);

  function navigate(slug) {
    if (!slug) return;
    window.location.href = base + "/travel/" + slug + "/";
  }

  function showTooltip(event, name) {
    tooltip.textContent = name;
    tooltip.style.opacity = 1;
    moveTooltip(event);
  }

  function moveTooltip(event) {
    const rect = wrap.getBoundingClientRect();
    tooltip.style.left = event.clientX - rect.left + 12 + "px";
    tooltip.style.top = event.clientY - rect.top + 12 + "px";
  }

  function hideTooltip() {
    tooltip.style.opacity = 0;
  }

  let worldFeatures = [];
  let indiaFeatures = [];

  function render() {
    bgPath.attr("d", path({ type: "Sphere" }));

    countriesLayer
      .selectAll("path")
      .data(worldFeatures, (d) => d.properties.name)
      .join("path")
      .attr("class", (d) => {
        const r = regionByMapName["country::" + d.properties.name];
        return "travel-country" + (r ? " visited" : "");
      })
      .attr("d", path)
      .on("click", (event, d) => {
        const r = regionByMapName["country::" + d.properties.name];
        if (r) navigate(r.slug);
      });

    statesLayer
      .selectAll("path")
      .data(indiaFeatures, (d) => d.properties.name)
      .join("path")
      .attr("class", (d) => {
        const r = regionByMapName["state::" + d.properties.name];
        return "travel-state" + (r ? " visited" : "");
      })
      .attr("d", path)
      .on("click", (event, d) => {
        const r = regionByMapName["state::" + d.properties.name];
        if (r) navigate(r.slug);
      });

    dotsLayer
      .selectAll("circle")
      .data(places)
      .join("circle")
      .attr("class", "travel-dot")
      .attr("r", baseDotRadius / d3.zoomTransform(svg.node()).k)
      .attr("cx", (d) => {
        const p = projection([d.lng, d.lat]);
        return p ? p[0] : -1000;
      })
      .attr("cy", (d) => {
        const p = projection([d.lng, d.lat]);
        return p ? p[1] : -1000;
      })
      .on("mouseenter", (event, d) => showTooltip(event, d.name))
      .on("mousemove", moveTooltip)
      .on("mouseleave", hideTooltip)
      .on("click", (event, d) => navigate(d.region_slug));
  }

  function resetZoom() {
    svg.transition().duration(300).call(zoom.transform, d3.zoomIdentity);
  }

  function fitWorld() {
    projection.fitSize([width, height], { type: "Sphere" });
    render();
    resetZoom();
  }

  function fitIndia() {
    const fc = { type: "FeatureCollection", features: indiaFeatures };
    projection.fitSize([width, height], fc);
    render();
    resetZoom();
  }

  document.getElementById("travel-reset").addEventListener("click", resetZoom);

  const toggleButtons = document.querySelectorAll("#travel-region-toggle button");
  toggleButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      toggleButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      if (btn.dataset.view === "india") {
        fitIndia();
      } else {
        fitWorld();
      }
    });
  });

  Promise.all([
    fetch(base + "/assets/json/travel/world-countries.geojson").then((r) => r.json()),
    fetch(base + "/assets/json/travel/india-states.geojson").then((r) => r.json()),
  ]).then(([worldGeo, indiaGeo]) => {
    worldFeatures = worldGeo.features.filter((f) => f.properties.name !== "India");
    indiaFeatures = indiaGeo.features;
    fitWorld();
  });
})();
