/* ============================================================
   Adeyemi Okunowo · Campaign Site
   Minimal client-side interactivity: mobile nav toggle
   ============================================================ */

(function () {
  'use strict';

  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('primaryNav');

  if (!toggle || !nav) return;

  function setOpen(isOpen) {
    nav.classList.toggle('is-open', isOpen);
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  }

  toggle.addEventListener('click', function (e) {
    e.stopPropagation();
    var isOpen = nav.classList.contains('is-open');
    setOpen(!isOpen);
  });

  // Close when a nav link is tapped (smooth nav on mobile)
  nav.addEventListener('click', function (e) {
    if (e.target && e.target.tagName === 'A') {
      setOpen(false);
    }
  });

  // Close when tapping outside the nav
  document.addEventListener('click', function (e) {
    if (!nav.classList.contains('is-open')) return;
    if (nav.contains(e.target) || toggle.contains(e.target)) return;
    setOpen(false);
  });

  // Close on Escape for keyboard users
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) {
      setOpen(false);
      toggle.focus();
    }
  });

  // Reset on resize past the mobile breakpoint
  var mql = window.matchMedia('(min-width: 721px)');
  function handleResize(ev) {
    if (ev.matches) setOpen(false);
  }
  if (mql.addEventListener) {
    mql.addEventListener('change', handleResize);
  } else if (mql.addListener) {
    mql.addListener(handleResize); // older Safari
  }
})();
