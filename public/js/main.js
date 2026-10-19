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

  /* ---------- Quizzes ---------- */
  var RATES = ['2% - 3%', '3% - 4%', '4% - 5%', '5% - 6%', '6% - 7%', 'Over 7%'];
  var CREDIT = ['< 620', '620 - 640', '640 - 700', '700 - 740', '740 +'];
  var TIMELINE = ['0–3 months', '3–6 months', '6–12 months', 'Just exploring'];

  var QUIZZES = {
    purchase: {
      name: 'quiz-purchase',
      steps: [
        { key: 'buying', q: 'What are you buying?', hint: 'Let us know how you’re planning on using this new home.', options: [['Primary', '/img/icon-primary.webp'], ['Investment', '/img/icon-investment.webp'], ['Second Home', '/img/icon-second-home.webp']] },
        { key: 'first_time', q: 'Is this your first home purchase?', options: ['Yes', 'No'] },
        { key: 'timeline', q: 'When are you hoping to buy?', options: TIMELINE },
        { key: 'credit', q: 'Where do you think your credit score is?', hint: 'Your best guess is fine. No credit pull.', options: CREDIT },
        { key: 'down', q: 'How much are you planning to put down?', options: ['0–3%', '3–5%', '5–10%', '10–20%', '20%+'] },
        { key: 'military', q: 'Have you or your spouse served in the military?', options: ['Yes', 'No'] },
      ],
      result: function (a) {
        var ideas = [];
        if (a.military === 'Yes') ideas.push(['VA loan', '/va', 'No down payment and no PMI for eligible veterans and service members.']);
        if (a.buying !== 'Primary') ideas.push(a.buying === 'Investment' ? ['Investor & DSCR loans', '/investor-builder', 'Qualify using the property’s rental income.'] : ['Conventional second-home loan', '/conventional', 'Competitive terms for a vacation or second home.']);
        else {
          if (a.credit === '< 620' || a.credit === '620 - 640') ideas.push(['FHA loan', '/fha', '3.5% down with flexible credit guidelines.']);
          else ideas.push(['Conventional loan', '/conventional', 'As little as 3% down with removable PMI.']);
          if (a.down === '0–3%' || a.down === '3–5%') ideas.push(['Down payment assistance', '/dpa', 'Chenoa Fund, Minnesota Housing and local programs.']);
          if (a.first_time === 'Yes') ideas.push(['First-generation programs', '/first-generation', 'Up to $35,000 in forgivable assistance if your parents never owned a home.']);
          ideas.push(['USDA loan', '/usda', 'Zero down in eligible small towns and rural areas.']);
        }
        var ready = a.timeline === '0–3 months' || a.timeline === '3–6 months';
        return {
          title: ready ? 'You’re closer than you think!' : 'Great time to start planning.',
          text: ready ? 'Your next step is a pre-approval so you can shop with confidence.' : 'A quick conversation now can set you up with a plan and a stronger offer later.',
          ideas: ideas.slice(0, 3),
        };
      },
    },
    refi: {
      name: 'quiz-refinance',
      steps: [
        { key: 'current_rate', q: 'What is your current mortgage interest rate?', options: RATES },
        { key: 'goal', q: 'What’s your main goal?', options: ['Lower my monthly payment', 'Pay off my home faster', 'Cash out equity', 'Consolidate debt', 'Remove mortgage insurance'] },
        { key: 'credit', q: 'Where do you think your credit score is?', options: CREDIT },
        { key: 'stay', q: 'How long do you plan to stay in your home?', options: ['Less than 3 years', '3–7 years', '7+ years'] },
      ],
      result: function (a) {
        var high = RATES.indexOf(a.current_rate) >= 3;
        var ideas = [];
        if (a.goal === 'Cash out equity' || a.goal === 'Consolidate debt') ideas.push(['Home equity analysis', '/equity-analysis-plan', 'See how much equity you could access.']);
        if (a.goal === 'Remove mortgage insurance') ideas.push(['Drop PMI or MIP', '/conventional', 'If your home has gained value, you may be able to remove it.']);
        if (a.goal === 'Pay off my home faster') ideas.push(['Shorter fixed-rate term', '/fixed-rate', '10, 15 or 20-year terms build equity faster.']);
        ideas.push(['Refi Watchlist', '/refi1', 'We’ll alert you when rates make a refinance worth it.']);
        return {
          title: high ? 'A refinance could be worth a look.' : 'Let’s run the numbers.',
          text: high ? 'With your current rate, there may be real savings available. We’ll calculate your break-even point.' : 'Even with a lower rate, a refinance can help with equity, PMI or term goals. We’ll show you the trade-offs.',
          ideas: ideas.slice(0, 3),
        };
      },
    },
    iq: {
      name: 'quiz-financial-iq',
      steps: [
        { key: 'credit', q: 'Where do you think your current credit score is?', options: CREDIT },
        { key: 'dti', q: 'About how much of your monthly income goes to debt payments?', hint: 'Car, student loans, credit cards, rent or mortgage.', options: ['Under 20%', '20–36%', '36–45%', 'Over 45%'] },
        { key: 'savings', q: 'How many months of expenses do you have saved?', options: ['None yet', '1–2 months', '3–6 months', '6+ months'] },
        { key: 'prequal', q: 'Do you know the difference between pre-qualification and pre-approval?', options: ['Yes', 'Not sure'] },
        { key: 'pmi', q: 'True or false: you need 20% down to buy a home.', options: ['True', 'False'] },
      ],
      result: function (a) {
        var s = 0;
        s += CREDIT.indexOf(a.credit) * 6; // 0–24
        s += [24, 18, 10, 2][['Under 20%', '20–36%', '36–45%', 'Over 45%'].indexOf(a.dti)] || 0;
        s += [2, 10, 18, 24][['None yet', '1–2 months', '3–6 months', '6+ months'].indexOf(a.savings)] || 0;
        s += a.prequal === 'Yes' ? 14 : 4;
        s += a.pmi === 'False' ? 14 : 0;
        var score = Math.min(100, s);
        var tips = [];
        if (a.pmi === 'True') tips.push(['You don’t need 20% down', '/education', 'Programs start at 0–3.5% down. PMI can be a powerful tool.']);
        if (CREDIT.indexOf(a.credit) <= 1) tips.push(['Build a credit plan', '/schedule', 'We can show which steps raise your score fastest.']);
        if (a.prequal === 'Not sure') tips.push(['Pre-qual vs. pre-approval', '/loan-process', 'Pre-approval is backed by documents, and sellers trust it.']);
        tips.push(['See your loan options', '/loan-programs', 'Compare programs side by side.']);
        return {
          title: 'Your Financial IQ score: ' + score + '/100',
          text: score >= 75 ? 'Excellent! You’re in a strong position to buy or refinance.' : score >= 50 ? 'Solid foundation. A few moves could save you real money.' : 'Everyone starts somewhere. We’ll help you build a plan.',
          ideas: tips.slice(0, 3),
        };
      },
    },
    va: {
      name: 'quiz-va',
      steps: [
        { key: 'status', q: 'Are you a veteran, active duty service member, or an eligible surviving spouse?', options: ['Veteran', 'Active duty service member', 'Eligible surviving spouse', 'Other'] },
        { key: 'used_before', q: 'Have you used your VA home loan benefit before?', options: ['Never', 'Yes, and it’s paid off', 'Yes, I have one now'] },
        { key: 'goal', q: 'What are you looking to do?', options: ['Buy a home', 'Buy and renovate', 'Refinance'] },
        { key: 'timeline', q: 'When are you hoping to move forward?', options: TIMELINE },
      ],
      result: function (a) {
        var eligible = a.status !== 'Other';
        return {
          title: eligible ? 'You may be eligible for VA financing!' : 'Let’s find your best option.',
          text: eligible ? 'We can pull your Certificate of Eligibility and show you exactly what your benefit can do.' : 'VA loans are for veterans, service members and eligible spouses, but we have great low-down-payment options too.',
          ideas: eligible
            ? [a.goal === 'Buy and renovate' ? ['VA renovation loan', '/va-benefits', 'Buy it, fix it, one loan, zero down.'] : ['VA loan details', '/va', 'No down payment, no PMI, reusable benefit.'], ['Free strategy call', '/schedule', 'No obligation. No pressure. Just answers.']]
            : [['FHA loan', '/fha', '3.5% down with flexible credit.'], ['Down payment assistance', '/dpa', 'Programs to reduce upfront costs.']],
        };
      },
    },
  };

  function el(tag, attrs, html) {
    var n = document.createElement(tag);
    for (var k in attrs || {}) n.setAttribute(k, attrs[k]);
    if (html != null) n.innerHTML = html;
    return n;
  }
  function escHtml(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  function runQuiz(root) {
    var def = QUIZZES[root.dataset.quiz];
    if (!def) return;
    var body = root.querySelector('.quiz-body');
    var answers = {};
    var i = 0;
    var total = def.steps.length + 1;
    var headings = root.querySelectorAll(':scope > h2, :scope > .quiz-hint');

    function progress(n) { return '<div class="quiz-progress" aria-hidden="true"><span style="width:' + Math.round((n / total) * 100) + '%"></span></div>'; }

    function renderStep() {
      var s = def.steps[i];
      body.innerHTML = progress(i) + '<p class="quiz-q" tabindex="-1">' + escHtml(s.q) + '</p>' + (s.hint ? '<p class="quiz-hint">' + escHtml(s.hint) + '</p>' : '<p class="quiz-hint">Question ' + (i + 1) + ' of ' + def.steps.length + '</p>');
      var opts = el('div', { class: 'quiz-options', role: 'group', 'aria-label': s.q });
      s.options.forEach(function (o) {
        var label = Array.isArray(o) ? o[0] : o;
        var b = el('button', { type: 'button', class: 'quiz-opt' }, (Array.isArray(o) ? '<img src="' + o[1] + '" alt="" width="84" height="84">' : '') + '<span>' + escHtml(label) + '</span>');
        b.addEventListener('click', function () { answers[s.key] = label; i++; i < def.steps.length ? renderStep() : renderContact(); });
        opts.appendChild(b);
      });
      body.appendChild(opts);
      if (i > 0) {
        var back = el('button', { type: 'button', class: 'quiz-back' }, 'Back');
        back.addEventListener('click', function () { i--; renderStep(); });
        body.appendChild(back);
      }
      if (i > 0) body.querySelector('.quiz-q').focus();
    }

    function renderContact() {
      body.innerHTML = progress(def.steps.length) + '<p class="quiz-q" tabindex="-1">Your results are ready!</p><p class="quiz-hint">Where should we send them? We’ll never sell your information.</p>';
      var f = el('form', { class: 'form', name: def.name, novalidate: '' });
      f.innerHTML =
        '<div class="form-row"><div class="field"><label for="' + def.name + '-n">Name <span class="req">*</span></label><input id="' + def.name + '-n" name="name" autocomplete="name" required></div>' +
        '<div class="field"><label for="' + def.name + '-e">Email <span class="req">*</span></label><input id="' + def.name + '-e" name="email" type="email" autocomplete="email" required></div></div>' +
        '<div class="field"><label for="' + def.name + '-p">Phone</label><input id="' + def.name + '-p" name="phone" type="tel" autocomplete="tel"></div>' +
        '<div><button class="btn btn-gold" type="submit">See My Results</button></div><p class="form-status" role="status" aria-live="polite"></p>';
      body.appendChild(f);
      body.querySelector('.quiz-q').focus();
      f.addEventListener('submit', function (e) {
        e.preventDefault();
        if (!f.reportValidity()) return;
        var data = new FormData(f);
        Object.keys(answers).forEach(function (k) { data.set(k, answers[k]); });
        data.set('page', location.pathname);
        f.querySelector('button').disabled = true;
        submitData(def.name, data).catch(function () {}).finally(renderResult);
      });
    }

    function renderResult() {
      var r = def.result(answers);
      headings.forEach(function (h) { h.hidden = true; });
      body.innerHTML = progress(total) + '<p class="quiz-q" tabindex="-1">' + escHtml(r.title) + '</p><p>' + escHtml(r.text) + '</p>' +
        '<div class="quiz-result"><strong>Options worth exploring:</strong><ul>' + r.ideas.map(function (x) { return '<li><a href="' + x[1] + '">' + escHtml(x[0]) + '</a> — ' + escHtml(x[2]) + '</li>'; }).join('') + '</ul></div>' +
        '<div class="btn-row"><a class="btn btn-gold" href="https://fairway.tidalwave.ai/signup/kris.heichel/D8VEHC3DPERAQO6407KG" target="_blank" rel="noopener">Start Your Application</a><a class="btn ' + (root.classList.contains('quiz-light') ? 'btn-outline' : 'btn-ghost') + '" href="/schedule">Book a Free Call</a></div>' +
        '<p class="form-note" style="margin-top:1rem">This is an educational estimate, not a loan approval. A Heichel Team loan officer will follow up with personalized options.</p>';
      body.querySelector('.quiz-q').focus();
    }

    renderStep();
  }
  document.querySelectorAll('[data-quiz]').forEach(runQuiz);

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
