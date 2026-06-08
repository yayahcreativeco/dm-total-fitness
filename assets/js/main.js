// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
  }

  // Contact form submits to Netlify Forms (handled server-side on deploy).
  // Redirects to /thank-you.html on success. No JS needed for submission.
});
