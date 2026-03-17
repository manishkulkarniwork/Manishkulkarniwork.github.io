/* ============================================================
   MANISH KULKARNI — script.js
   ============================================================ */

(function () {
  'use strict';

  /* ---------- Footer Year ---------- */
  const yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Mobile Nav Toggle ---------- */
  const toggle = document.querySelector('.nav-toggle');
  const nav    = document.querySelector('.site-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      const isOpen = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      toggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open menu');
      });
    });

    document.addEventListener('click', function (e) {
      if (!toggle.contains(e.target) && !nav.contains(e.target)) {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---------- Sticky Header Border ---------- */
  const header = document.getElementById('site-header');
  if (header) {
    window.addEventListener('scroll', function () {
      header.style.borderBottomColor = window.scrollY > 10
        ? 'rgba(255,255,255,0.12)'
        : 'rgba(255,255,255,0.08)';
    }, { passive: true });
  }

  /* ---------- Active Nav Link on Scroll ---------- */
  const sections = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.site-nav a[href^="#"]');

  if (sections.length && navLinks.length) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          navLinks.forEach(function (link) {
            link.classList.toggle(
              'active',
              link.getAttribute('href') === '#' + entry.target.id
            );
          });
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px' });

    sections.forEach(function (s) { observer.observe(s); });
  }

  /* ---------- Scroll Reveal ---------- */
  const revealEls = document.querySelectorAll(
    '.hero, .stats-strip, .card, .work-item, .step, .recognition-item, .about-copy, .contact-block .section-content'
  );

  revealEls.forEach(function (el) { el.classList.add('reveal'); });

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    revealEls.forEach(function (el) { revealObserver.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---------- Contact Form ---------- */
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function () {
      const btn = form.querySelector('button[type="submit"]');
      if (btn) {
        btn.textContent = 'Sending…';
        btn.disabled = true;
        setTimeout(function () {
          btn.textContent = 'Send Message';
          btn.disabled = false;
        }, 3000);
      }
    });
  }

  /* ---------- VIDEO MODAL ---------- */
  const modal       = document.getElementById('video-modal');
  const iframe      = document.getElementById('video-modal-iframe');
  const modalTitle  = document.getElementById('video-modal-title');
  const ytLink      = document.getElementById('video-modal-yt-link');
  const closeBtn    = modal ? modal.querySelector('.video-modal-close') : null;
  const backdrop    = modal ? modal.querySelector('.video-modal-backdrop') : null;

  function openModal(videoId, title, originalHref) {
    if (!modal || !iframe) return;
    var embedUrl = 'https://www.youtube.com/embed/' + videoId + '?autoplay=1&rel=0&modestbranding=1';
    iframe.src = embedUrl;
    if (modalTitle) modalTitle.textContent = title || '';
    if (ytLink) ytLink.href = originalHref || '#';
    modal.removeAttribute('hidden');
    document.body.classList.add('modal-open');
    if (closeBtn) closeBtn.focus();
  }

  function closeModal() {
    if (!modal || !iframe) return;
    iframe.src = '';
    modal.setAttribute('hidden', '');
    document.body.classList.remove('modal-open');
  }

  // Intercept clicks on work links that have data-video-id
  document.querySelectorAll('.work-link[data-video-id]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var videoId = link.getAttribute('data-video-id');
      var title   = link.getAttribute('data-video-title') || '';
      var href    = link.getAttribute('href');
      openModal(videoId, title, href);
    });
  });

  // Close on button click
  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  // Close on backdrop click
  if (backdrop) backdrop.addEventListener('click', closeModal);

  // Close on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal && !modal.hasAttribute('hidden')) {
      closeModal();
    }
  });

  // Trap focus inside modal (basic)
  if (modal) {
    modal.addEventListener('keydown', function (e) {
      if (e.key !== 'Tab') return;
      var focusable = modal.querySelectorAll('button, a, iframe, [tabindex]');
      var first = focusable[0];
      var last  = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault(); last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault(); first.focus();
      }
    });
  }

})();
