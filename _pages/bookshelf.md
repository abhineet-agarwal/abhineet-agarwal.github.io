---
layout: default
title: bookshelf
permalink: /bookshelf/
description:
nav: true
nav_order: 7
---

Find me on [Goodreads](https://www.goodreads.com/user/show/52986688-abhineet-agarwal).

---

## Recent Recommendations

<div id="recommendations"><p>Loading recommendations...</p></div>

<script>
fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vSTkk3ZBDSXwXw7KC23PyHz3xRcvi1DkD8uUBRmctLOEVo-_DvYbgjaTBdyf7RL4DAey4lymPD4wEDS/pub?output=csv')
  .then(r => r.text())
  .then(csv => {
    const rows = csv.split('\n').slice(1).filter(r => r.trim());
    const container = document.getElementById('recommendations');
    if (rows.length === 0) {
      container.innerHTML = '<p>No recommendations yet. Be the first!</p>';
      return;
    }
    const latest = rows.slice(-5).reverse();
    let html = '<ul>';
    latest.forEach(row => {
      const cols = row.match(/(".*?"|[^,]+)/g) || [];
      const book = (cols[1] || '').replace(/^"|"$/g, '').trim();
      if (book) html += '<li>' + book + '</li>';
    });
    html += '</ul>';
    container.innerHTML = html;
  })
  .catch(() => {
    document.getElementById('recommendations').innerHTML = '<p>Could not load recommendations.</p>';
  });
</script>

---

## Recommend a Book

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfFIuJKg3rkBT7FqBdDYmpfT-5Q0Uicj7V92TngHtGBE_7V2A/viewform?embedded=true" width="100%" height="554" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
