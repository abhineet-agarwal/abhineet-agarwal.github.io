---
layout: default
title: bookshelf
permalink: /bookshelf/
description:
nav: true
nav_order: 7
---
Used to read a lot as a kid. More on and off now.

**Currently Reading:**
- [Good Economics for Hard Times](https://www.goodreads.com/book/show/51014619-good-economics-for-hard-times) by Bannerjee and Duflo

Books that have shaped how I think and I would recommend to anyone:
- [The Emperor of All Maladies](https://www.goodreads.com/book/show/7170627-the-emperor-of-all-maladies) by Siddhartha Mukherjee
- [Einstein: His Life and Universe](https://www.goodreads.com/book/show/10884.Einstein) by Walter Isaacson
- [Chip War](https://www.goodreads.com/book/show/60321447-chip-war) by Chris Miller
- [Made in America](https://www.goodreads.com/book/show/10631.Sam_Walton_Made_in_America) by Sam Walton
- [A Shot at History](https://www.goodreads.com/book/show/12794137-a-shot-at-history) by Abhinav Bindra


Find me on [Goodreads](https://www.goodreads.com/user/show/52986688-abhineet-agarwal).

---

## Recommend a Book

<form id="rec-form" style="max-width:400px;">
  <input type="text" id="book-input" placeholder="Book title and author" required style="width:100%; padding:8px; margin-bottom:8px; border:1px solid #ccc; border-radius:4px;">
  <input type="email" id="email-input" placeholder="Your email (optional)" style="width:100%; padding:8px; margin-bottom:8px; border:1px solid #ccc; border-radius:4px;">
  <button type="submit" style="padding:8px 16px; border:1px solid #ccc; border-radius:4px; cursor:pointer;">Submit</button>
  <span id="form-msg" style="margin-left:8px;"></span>
</form>
<iframe name="hidden-iframe" id="hidden-iframe" style="display:none;"></iframe>

<script>
document.getElementById('rec-form').addEventListener('submit', function(e) {
  e.preventDefault();
  var book = document.getElementById('book-input').value;
  var email = document.getElementById('email-input').value;
  var url = 'https://docs.google.com/forms/d/e/1FAIpQLSfFIuJKg3rkBT7FqBdDYmpfT-5Q0Uicj7V92TngHtGBE_7V2A/formResponse?entry.561623511=' + encodeURIComponent(book) + '&entry.1343923177=' + encodeURIComponent(email) + '&submit=Submit';
  var iframe = document.getElementById('hidden-iframe');
  iframe.src = url;
  document.getElementById('book-input').value = '';
  document.getElementById('email-input').value = '';
  document.getElementById('form-msg').textContent = 'Thanks!';
  setTimeout(function() { document.getElementById('form-msg').textContent = ''; }, 3000);
});
</script>

---

<div id="rec-section" style="display:none;">
<h2>Recent Recommendations</h2>
<div id="recommendations"></div>
</div>

<script>
fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vSTkk3ZBDSXwXw7KC23PyHz3xRcvi1DkD8uUBRmctLOEVo-_DvYbgjaTBdyf7RL4DAey4lymPD4wEDS/pub?output=csv')
  .then(r => r.text())
  .then(csv => {
    const rows = csv.split('\n').slice(1).filter(r => r.trim());
    const container = document.getElementById('recommendations');
    if (rows.length === 0) {
      container.innerHTML = '';
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
    document.getElementById('rec-section').style.display = 'block';
  })
  .catch(() => {
    document.getElementById('recommendations').innerHTML = '';
  });
</script>
