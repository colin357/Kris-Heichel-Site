/* The Heichel Team — site behavior: navigation, forms, quizzes, lazy embeds. */
(function () {
  'use strict';

  /* ---------- Navigation ---------- */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';
    });
  }
  document.querySelectorAll('.nav-top').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var li = btn.parentElement;
      var open = !li.classList.contains('open');
      document.querySelectorAll('.nav li.open').forEach(function (o) { o.classList.remove('open'); o.firstElementChild.setAttribute('aria-expanded', 'false'); });
      if (open) { li.classList.add('open'); btn.setAttribute('aria-expanded', 'true'); }
    });
  });
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.nav li')) document.querySelectorAll('.nav li.open').forEach(function (o) { o.classList.remove('open'); o.firstElementChild.setAttribute('aria-expanded', 'false'); });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') document.querySelectorAll('.nav li.open').forEach(function (o) { o.classList.remove('open'); o.firstElementChild.setAttribute('aria-expanded', 'false'); o.firstElementChild.focus(); });
  });

  /* ---------- Forms ---------- */
  // Posts to SITE_FORM_ENDPOINT when set (Formspree etc.), otherwise to "/" for Netlify Forms.
  function submitData(formName, data) {
    var endpoint = window.SITE_FORM_ENDPOINT;
    data.set('form-name', formName);
    if (endpoint) {
      return fetch(endpoint, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
    }
    return fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(data).toString(),
    });
  }

  function wireForm(f) {
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      var status = f.querySelector('.form-status');
      var btn = f.querySelector('[type=submit]');
      var data = new FormData(f);
      if (data.get('company')) return; // honeypot
      data.set('page', location.pathname);
      btn.disabled = true;
      status.textContent = 'Sending…';
      status.removeAttribute('data-state');
      submitData(f.getAttribute('name'), data)
        .then(function (r) {
          if (!r.ok) throw new Error(r.status);
          f.reset();
          status.dataset.state = 'ok';
          status.textContent = 'Thank you! Someone from The Heichel Team will be in touch shortly.';
          f.dispatchEvent(new CustomEvent('form:sent', { bubbles: true }));
        })
        .catch(function () {
          status.dataset.state = 'err';
          status.innerHTML = 'Sorry, that didn’t go through. Please call <a href="tel:+15074604500">507.460.4500</a> or email <a href="mailto:teamheichel@fairwaymc.com">teamheichel@fairwaymc.com</a>.';
        })
        .finally(function () { btn.disabled = false; });
    });
  }
  document.querySelectorAll('form[data-form]').forEach(wireForm);

  /* ---------- Long reviews scroll inside their card ---------- */
  function markScrollable() {
    document.querySelectorAll('.review blockquote').forEach(function (q) {
      var scrollable = q.scrollHeight > q.clientHeight + 2;
      q.classList.toggle('is-scrollable', scrollable);
      if (scrollable) { q.tabIndex = 0; q.setAttribute('aria-label', 'Review text, scroll to read more'); }
      else { q.removeAttribute('tabindex'); q.removeAttribute('aria-label'); }
    });
  }
  document.querySelectorAll('.review blockquote').forEach(function (q) {
    q.addEventListener('scroll', function () { q.classList.toggle('at-end', q.scrollTop + q.clientHeight >= q.scrollHeight - 2); }, { passive: true });
  });
  markScrollable();
  window.addEventListener('resize', markScrollable);

  /* ---------- Reviews slider ---------- */
  document.querySelectorAll('[data-slider]').forEach(function (slider) {
    var track = slider.querySelector('.slider-track');
    var prev = slider.querySelector('[data-dir="-1"]');
    var next = slider.querySelector('[data-dir="1"]');
    var dotsBox = slider.querySelector('.slider-dots');
    var cards = track.children;
    var pages = 1;

    function perView() { return Math.max(1, Math.round(track.clientWidth / cards[0].getBoundingClientRect().width)); }
    function current() { return Math.round(track.scrollLeft / track.clientWidth); }
    function go(page) {
      page = Math.max(0, Math.min(pages - 1, page));
      var card = cards[Math.min(cards.length - 1, page * perView())];
      track.scrollTo({ left: card.offsetLeft - track.firstElementChild.offsetLeft });
    }
    function update() {
      var atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
      var page = atEnd ? pages - 1 : current();
      prev.disabled = track.scrollLeft <= 4;
      next.disabled = atEnd;
      Array.prototype.forEach.call(dotsBox.children, function (d, i) { d.setAttribute('aria-current', String(i === page)); });
    }
    function build() {
      pages = Math.ceil(cards.length / perView());
      dotsBox.innerHTML = '';
      for (var i = 0; i < pages; i++) {
        var d = document.createElement('button');
        d.type = 'button';
        d.tabIndex = -1;
        d.addEventListener('click', go.bind(null, i));
        dotsBox.appendChild(d);
      }
      slider.classList.toggle('is-ready', pages > 1);
      update();
    }
    prev.addEventListener('click', function () { go(current() - 1); });
    next.addEventListener('click', function () { go(current() + 1); });
    track.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') { e.preventDefault(); go(current() + 1); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); go(current() - 1); }
    });
    var t;
    track.addEventListener('scroll', function () { clearTimeout(t); t = setTimeout(update, 60); }, { passive: true });
    window.addEventListener('resize', function () { clearTimeout(t); t = setTimeout(build, 150); });
    build();
  });

  /* ---------- Lazy Calendly embed ---------- */
  var boxes = document.querySelectorAll('[data-calendly]');
  if (boxes.length && 'IntersectionObserver' in window) {
    var loaded = false;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        io.unobserve(en.target);
        var box = en.target;
        var mount = function () {
          box.innerHTML = '';
          window.Calendly.initInlineWidget({ url: box.dataset.calendly, parentElement: box });
        };
        if (window.Calendly) return mount();
        if (!loaded) {
          loaded = true;
          var s = document.createElement('script');
          s.src = 'https://assets.calendly.com/assets/external/widget.js';
          s.async = true;
          document.head.appendChild(s);
        }
        var wait = setInterval(function () { if (window.Calendly) { clearInterval(wait); mount(); } }, 150);
        setTimeout(function () { clearInterval(wait); }, 15000);
      });
    }, { rootMargin: '200px' });
    boxes.forEach(function (b) { io.observe(b); });
  }
})();
